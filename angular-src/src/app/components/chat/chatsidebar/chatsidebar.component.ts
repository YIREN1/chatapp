import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbMenuItem, NbMenuService } from '@nebular/theme';
import { AuthService } from '../../../services/auth.service';
import { ChatDmModalComponent } from '../chat-dm-modal/chat-dm-modal.component';
import { Event } from '../shared/model/event';
import { ChannelService } from '../shared/service/channel.service';
import { SocketService } from '../shared/service/socket.service';

@Component({
  selector: 'app-chatsidebar',
  templateUrl: './chatsidebar.component.html',
  styleUrls: ['./chatsidebar.component.css']
})
export class ChatsidebarComponent implements OnInit {

  constructor(
    private dialogService: NbDialogService,
    private channelService: ChannelService,
    private menuService: NbMenuService,
    private socketService: SocketService,
    private authService: AuthService,
  ) { }

  ioConnection: any;
  user: any;
  channels: any[];
  directMessages: NbMenuItem[] = [];
  users: Array<{ name: string, title: string }>;

  items: NbMenuItem[] = [
    {
      title: 'channels',
      expanded: true,
      children: [],
    },
    {
      title: 'direct messages',
      expanded: true,
      children: this.directMessages,
    },
  ];

  ngOnInit() {
    this.initChannels();
    this.initIoConnection();
    this.initUser();
  }

  async initUser() {
    this.user = await this.authService.getUser();
  }

  openWindow() {
    this.dialogService.open(
      ChatDmModalComponent,
      { hasScroll: true },
    );
  }

  initDirectMessages() {

  }

  private initIoConnection(): void {

    this.socketService.onEvent(Event.FIRST_DM)
      .subscribe((channelId) => {
        this.channelService.getChannel(channelId).subscribe((data) => {
          const newDirectMessage: NbMenuItem = {
            title: this.getChannlelName(data.name),
            link: `/channel/${data.id}`, // ! fixthis!
          };
          this.directMessages.push(newDirectMessage);
        });
        this.socketService.sendEvent(this.user.id, 'init');
      });
  }

  getChannlelName(name) {
    const nameArr = name.split(',');

    const filteredArr = nameArr.filter(n => n !== this.user.name);
    if (filteredArr.length === 0) {
      return this.user.name;
    }
    return filteredArr[0];
  }

  private async initChannels() {
    this.channelService.getChannels().subscribe((data) => {
      data.forEach(dm => {
        const newDirectMessage: NbMenuItem = {
          title: this.getChannlelName(dm.name),
          link: `/channel/${dm._id}`, // ! fixthis!
        };
        this.directMessages.push(newDirectMessage);
      });
    });
  }

  addMenuItem(item) {
    this.menuService.addItems([item]);
  }

}
