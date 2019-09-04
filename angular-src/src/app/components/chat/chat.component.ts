import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbChatFormComponent, NbSidebarService } from '@nebular/theme';

import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { ChatsidebarComponent } from './chatsidebar/chatsidebar.component';
import { Action } from './shared/model/action';
import { Event } from './shared/model/event';
import { Message } from './shared/model/message';
import { User } from './shared/model/user';
import { ChannelService } from './shared/service/channel.service';
import { MessageService } from './shared/service/message.service';
import { SocketService } from './shared/service/socket.service';

const AVATAR_URL = 'https://api.adorable.io/avatars/285';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(
    private socketService: SocketService,
    private sidebarService: NbSidebarService,
    private authService: AuthService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private channelService: ChannelService,
    private router: Router,
  ) { }
  @ViewChild(ChatsidebarComponent, { static: false })
  private sidebarComp: ChatsidebarComponent;

  action = Action;
  user: User;
  messageContent: string;
  ioConnection: any;

  messages: any[] = [];

  generalChannel: any = {
    name: 'general',
    id: '5d67c349f6f8f916672031f4',
  };

  selectedChannel: any = {};
  isTyping = false;
  typingTimer;                // timer identifier
  doneTypingInterval = 5000;  // time in ms (5 seconds)
  @ViewChild('chatForm', { static: false }) chatFormRef: NbChatFormComponent;

  ngOnInit(): void {
    this.setChannel();
    this.initModel();
    this.initIoConnection();
  }

  getChannlelName(name) {
    if (!name) {
      return;
    }
    const nameArr = name.split(',');
    if (nameArr.length > 2) {
      return name;
    }
    const filteredArr = nameArr.filter(n => n !== this.user.name);
    if (filteredArr.length === 0) {
      return this.user.name;
    }
    return filteredArr[0];
    // return this.sidebarComp.getChannlelName(name);
  }

  private async setChannel() {
    this.route.params.subscribe(params => {

      const channelId = params['channelId'] ? params['channelId'] : this.selectedChannel.id;

      this.channelService.getChannel(channelId).subscribe((incomingChannel) => {
        this.selectedChannel = incomingChannel;
        this.setMessages(channelId);
        console.log(this.selectedChannel, 'chat');
        this.sidebarComp.addChannel(this.selectedChannel);
      });

    });
  }

  private async setMessages(channelId) {
    this.messageService.getMessages(channelId).subscribe((messages) => {
      messages.forEach(message => {
        message.reply = this.isReply(message);
      });
      this.messages = messages;
    });
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  private async initModel(): Promise<any> {
    this.user = await this.authService.getUser();
    this.user.avatar = `${AVATAR_URL}/${this.user.id}.png`;
    this.socketService.sendEvent(this.user.id, 'init');
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onMessage()
      .subscribe((message: Message) => {
        if (message.channelId === this.selectedChannel.id) {
          console.log(message);
          console.log('--------------------------');

          message.reply = this.isReply(message);

          this.messages.push(message);
        }

      });

    this.socketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('socket.io connected');
      });

    this.socketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        console.log('socket.io disconnected');
      });

    this.socketService.onEvent(Event.START_TYPING)
      .subscribe((message) => {
        if (message.channelId === this.selectedChannel.id) {
          console.log('started-typing');
          this.isTyping = true;
        }
      });

    this.socketService.onEvent(Event.STOP_TYPING)
      .subscribe((message) => {
        if (message.channelId === this.selectedChannel.id) {
          console.log('stopped-typing');
          this.isTyping = false;
        }
      });

    this.socketService.onEvent(Event.UPDATE_MESSAGE)
      .subscribe((incomingMessage) => {
        if (incomingMessage.channelId === this.selectedChannel.id) {
          this.incomingUpdateMessage(incomingMessage.id, incomingMessage.text);
        }
      });

    this.socketService.onEvent(Event.DELETE_MESSAGE)
      .subscribe((deletedMessageId) => {
        // if (incomingMessage.channelId === this.selectedChannel.id) {
        //   this.incomingUpdateMessage(incomingMessage.id, incomingMessage.text);
        // }
        this.incomingDeleteMessage(deletedMessageId);
      });

    // todo get rid of
    this.socketService.onEvent(Event.JOINED)
      .subscribe((message) => {
        message.quote = `${this.user.name} joined room`;
        message.type = 'quote';
        // this.messages.push(message);
      });
  }

  incomingUpdateMessage(messageId, text) {
    this.updateMessageView(messageId, text);
  }

  incomingDeleteMessage(messageId) {
    // this.updateMessageView(messageId, text);
  }

  async leaveChannel() {
    const channelId = this.selectedChannel.id;
    await this.channelService.leaveChannel(channelId).subscribe();
    const general = this.sidebarComp.channels.find(
      channel => channel.title === 'general'
    );
    this.socketService.sendEvent(channelId, 'leave');
    this.router.navigate(['channels', channelId]);
  }

  isGeneral() {
    return this.selectedChannel.name === 'general';
  }

  isReply(message) {
    return message.user.name === this.user.name;
  }

  keyPress() {
    const message = {
      user: this.user.id,
      channelId: this.selectedChannel.id,
    };
    this.socketService.sendEvent(message, 'started-typing');
  }

  keyUp() {
    clearTimeout(this.typingTimer);
    if (this.chatFormRef.message) {
      this.typingTimer = setTimeout(this.doneTyping.bind(this), this.doneTypingInterval);
    }
  }

  doneTyping() {
    const message = {
      user: this.user.id,
      channelId: this.selectedChannel.id,
    };
    this.socketService.sendEvent(message, 'stopped-typing');
  }

  async openEditMessageWindow(message) {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputAttributes: {
        'aria-label': 'Edit your message here'
      },
      inputValue: message.text,
      confirmButtonText: 'Save',
      showCancelButton: true
    });

    if (text) {
      // ! fix this
      this.messageService.updateMessage(message.id, text).subscribe((data) => {
        console.log(data);
        this.socketService.sendEvent(message.id, 'update-message');
      });
      this.updateMessageView(message.id, text);
    }
  }

  openDeleteMessageWindow(message) {

  }

  updateMessageView(selectedMessageId, text) {
    const targetMessage = this.messages.find(message => message.id === selectedMessageId);
    targetMessage.text = text;
  }

  sendMessage(event) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'file-text-outline',
      };
    });

    const message = {
      text: event.message,
      date: Date.now(),
      files,
      type: files.length ? 'file' : 'text',
      reply: true,
      user: this.user,
      channelId: this.selectedChannel.id,
    };

    this.socketService.send(message);
    this.messageContent = null;
  }

  public sendNotification(params: any, action: Action): void {
    if (action === Action.JOINED) {
      const message = {
        user: this.user,
        action,
      };
      this.socketService.sendEvent(message, 'joined');
    }
  }
}
