import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../services/auth.service';
import { ChatChannelModalComponent } from '../chat-channel-modal/chat-channel-modal.component';
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
    private channelService: ChannelService,
    private menuService: NbMenuService,
    private socketService: SocketService,
    private authService: AuthService,
    private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,

  ) { }

  user: any;
  channelsAndDirectMessages: any[] = [];
  channels: NbMenuItem[] = [];
  directMessages: NbMenuItem[] = [];

  users: Array<{ name: string, title: string }>;

  items: NbMenuItem[] = [
    {
      title: 'channels',
      expanded: true,
      children: this.channels,
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

  openWindow(name) {
    if (name === 'channels') {
      this.modalService.open(ChatChannelModalComponent);
    } else {
      this.modalService.open(ChatDmModalComponent);
    }
  }

  private initIoConnection(): void {
    // todo check if the channel is already there
    this.socketService.onEvent(Event.FIRST_DM)
      .subscribe((channelId) => {
        this.channelService.getChannel(channelId).subscribe((channel) => {
          this.addChannel(channel);
        });
        this.socketService.sendEvent(this.user.id, 'init');
      });
  }

  getChannlelName(name) {
    const nameArr = name.split(',');
    if (nameArr.length > 2) {
      return name;
    }
    const filteredArr = nameArr.filter(n => n !== this.user.name);
    if (filteredArr.length === 0) {
      return this.user.name;
    }
    return filteredArr[0];
  }

  private async initChannels() {
    this.channelService.getChannels().subscribe((channels) => {
      channels.forEach(channel => {
        this.addChannel(channel);
      });
    });
  }

  addChannel(incomingChannel) {
    const currentChannel = this.channelsAndDirectMessages.find(channel =>
      channel.id === incomingChannel.id
    );

    if (currentChannel) {
      console.log('exist');
      return;
    }

    if (incomingChannel.type === 'directMessage') {
      const newDirectMessage: NbMenuItem = {
        title: this.getChannlelName(incomingChannel.name),
        link: `/channel/${incomingChannel.id}`,
      };
      this.directMessages.push(newDirectMessage);
    } else if (incomingChannel.type === 'channel') {
      const newChannel: NbMenuItem = {
        title: incomingChannel.name,
        link: `/channel/${incomingChannel.id}`,
      };
      this.channels.push(newChannel);
    }
    this.channelsAndDirectMessages.push(incomingChannel);
  }
}
