import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMenuItem } from '@nebular/theme';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
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
    public activeModal: NgbActiveModal,
    private router: Router,
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
    });
    this.currentUser = await this.authService.getUser();
  }

  async sendDirectMessage(toUserId, toUserName) {
    const incomingChannel = await this.channelService.createChannel(
      `${this.currentUser.name},${toUserName}`,
      [this.currentUser.id, toUserId],
      'directMessage'
    ).subscribe(channel => {
      if (channel._id) {
        this.socketService.sendEvent({
          userId: toUserId,
          channelId: channel._id,
        }, 'first-direct-message');
        this.router.navigate(['channel', channel._id]);
        this.activeModal.close();
      } else {
        console.log('create channel failed');
      }
    });
  }

}
