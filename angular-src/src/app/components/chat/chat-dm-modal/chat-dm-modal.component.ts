import { Component, OnInit } from '@angular/core';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { AuthService } from '../../../services/auth.service';
import { ChannelService } from '../shared/service/channel.service';
import { SocketService } from '../shared/service/socket.service';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-chat-dm-modal',
  templateUrl: './chat-dm-modal.component.html',
  styleUrls: ['./chat-dm-modal.component.css']
})
export class ChatDmModalComponent implements OnInit {

  constructor(
    private userService: UserService,
    private channelService: ChannelService,
    private socketService: SocketService,
    private authService: AuthService,

  ) { }
  users: any[];
  currentUser: any;
  items: NbMenuItem[];

  ngOnInit() {
    this.initUsers();
  }
  private async initUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.users.forEach(user => {
        user.title = 'CEO';
      });
    });
    this.currentUser = await this.authService.getUser();
  }

  async sendDirectMessage(toUserId, toUserName) {
    const incomingChannel = await this.channelService.createChannel(
      `${this.currentUser.name},${toUserName}`,
      [this.currentUser.id, toUserId],
      'directMessage'
    ).subscribe(data => {
      const channel = data;
      // console.log(channel);
      this.socketService.sendEvent({
        userId: toUserId,
        channelId: channel._id,
      }, 'first-direct-message');
      // go to url
    });
  }

}
