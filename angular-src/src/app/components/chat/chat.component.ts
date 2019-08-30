import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { AuthService } from '../../services/auth.service';
import { Action } from './shared/model/action';
import { Event } from './shared/model/event';
import { Message } from './shared/model/message';
import { User } from './shared/model/user';
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
  ) { }
  action = Action;
  user: User;
  messageContent: string;
  ioConnection: any;

  messages: any[] = [];

  selectedChannel: any = {
    name: 'general',
    id: '5d67c349f6f8f916672031f4',
  };

  ngOnInit(): void {
    this.initIoConnection();
    this.initModel();
    this.sendNotification(null, Action.JOINED);
    this.initHistory();
  }

  private async initHistory() {
    this.messageService.getMessages(this.selectedChannel.id).subscribe((data) => {
      this.messages = data;
    });
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  toggleCompact() {
    this.sidebarService.toggle(false, 'right');
  }

  private getRandomId(): number {
    return Math.floor(Math.random() * (1000000)) + 1;
  }

  private async initModel(): Promise<any> {
    const randomId = this.getRandomId();
    this.user = await this.authService.getUser();
    this.user.avatar = `${AVATAR_URL}/${this.user.id}.png`;
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onMessage()
      .subscribe((message: Message) => {
        console.log(message);
        console.log('--------------------------');
        if (message.action === Action.JOINED) {
          message.quote = `${this.user.name} joined room`;
          message.type = 'quote';
        } else if (message.action === Action.LEFT) {
          message.quote = `${this.user.name} left room`;
          message.type = 'quote';
        } else {
          message.reply = this.isReply(message);
        }
        this.messages.push(message);
      });

    this.socketService.onEvent(Event.CONNECT)
      .subscribe(() => {
        console.log('socket.io connected');
      });

    this.socketService.onEvent(Event.DISCONNECT)
      .subscribe(() => {
        this.sendNotification(null, Action.LEFT);
        console.log('socket.io disconnected');
      });

    this.socketService.onEvent(Event.START_TYPING)
      .subscribe(() => {
        console.log('started-typing');
      });

    this.socketService.onEvent(Event.STOP_TYPING)
      .subscribe(() => {
        console.log('stopped-typing');
      });
    this.socketService.onEvent(Event.JOINED)
      .subscribe((message) => {
        message.quote = `${this.user.name} joined room`;
        message.type = 'quote';
        // this.messages.push(message);
      });
  }

  isReply(message) {
    return message.user.name === this.user.name;
  }

  keyPress(event) {
    console.log(event);
    const message = {
      user: this.user.id,
      channelId: this.selectedChannel.id,
    };
    this.socketService.sendEvent(message, 'started-typing');
  }

  keyUp(event) {
    console.log(event);
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
