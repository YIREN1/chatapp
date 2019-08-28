import { Component, OnInit } from '@angular/core';
import { Action } from './shared/model/action';
import { Event } from './shared/model/event';
import { Message } from './shared/model/message';
import { User } from './shared/model/user';
import { SocketService } from './shared/service/socket.service';
const AVATAR_URL = 'https://api.adorable.io/avatars/285';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private socketService: SocketService) { }
  action = Action;
  user: User;
  messageContent: string;
  ioConnection: any;

  messages: any[] = [
    {
      text: 'Drag & drop a file or a group of files.',
      date: new Date(),
      reply: false,
      user: {
        name: 'Bot',
        avatar: 'https://api.adorable.io/avatars/285/hfghcgh.png',
      },
    },
  ];

  ngOnInit(): void {
    this.initIoConnection();
    this.initModel();
    this.sendNotification(null, Action.JOINED);
  }

  private getRandomId(): number {
    return Math.floor(Math.random() * (1000000)) + 1;
  }

  private initModel(): void {
    const randomId = this.getRandomId();
    this.user = {
      name: `Hi,${randomId}`,
      avatar: `${AVATAR_URL}/${randomId}.png`
    };
  }

  private initIoConnection(): void {
    this.socketService.initSocket();

    this.ioConnection = this.socketService.onMessage()
      .subscribe((message: Message) => {
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
  }

  isReply(message) {
    return message.user.name === this.user.name;
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
      date: new Date(),
      files,
      type: files.length ? 'file' : 'text',
      reply: true,
      user: this.user,
    };

    this.socketService.send(message);
    this.messageContent = null;
  }

  public sendNotification(params: any, action: Action): void {
    let message: Message;

    if (action === Action.JOINED) {
      message = {
        user: this.user,
        action,
      };
    } else if (action === Action.RENAME) {
      message = {
        action,
      };
    }

    this.socketService.send(message);
  }

}
