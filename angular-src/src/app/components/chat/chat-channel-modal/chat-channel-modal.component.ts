import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbMenuItem, NbMenuService } from '@nebular/theme';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { AuthService } from '../../../services/auth.service';
import { ChannelService } from '../shared/service/channel.service';
import { SocketService } from '../shared/service/socket.service';
import { UserService } from '../shared/service/user.service';
@Component({
  selector: 'app-chat-channel-modal',
  templateUrl: './chat-channel-modal.component.html',
  styleUrls: ['./chat-channel-modal.component.css']
})
export class ChatChannelModalComponent implements OnInit {

  constructor(
    private userService: UserService,
    private channelService: ChannelService,
    private socketService: SocketService,
    private authService: AuthService,
    public activeModal: NgbActiveModal,
    private router: Router,
  ) { }

  channels: any[];
  currentUser: any;
  items: NbMenuItem[];
  secret = 'you got it!';

  ngOnInit() {
    this.initChannels();
  }
  dosome() {
    console.log('dooooooo');
  }
  private async initChannels() {
    this.channelService.getAllChannels().subscribe((data) => {
      this.channels = data;
    });
    this.currentUser = await this.authService.getUser();
  }

  async createChannel() {
    const { value: channelName } = await Swal.fire({
      title: 'Please name your new channel',
      input: 'text',
      showCancelButton: true,
      background: '#789',
      inputValidator: (value) => {
        if (!value) {
          return 'You need to write something!';
        }
      }
    });

    if (channelName) {
      await this.channelService.createChannel(
        channelName,
        [this.currentUser.id],
        'channel'
      ).subscribe(channel => {
        Swal.fire({
          type: 'success',
          title: 'Your channel has been created',
          showConfirmButton: false,
          timer: 1500,
          background: '#789',
        }).then(() => {
          this.socketService.sendEvent(channel.id, 'join');
          this.router.navigate(['channel', channel.id]);
          this.activeModal.close();
        });
        this.channels.push(channel);

      });
    }
  }

  async openChannel(channelId) {
    await this.channelService.getChannel(channelId).subscribe(async channel => {
      const isInChannel = channel.usersInChannel.find(
        userId => this.currentUser.id === userId
      );

      if (!isInChannel) {
        await this.channelService.joinChannel(channelId).subscribe(channel => {
          Swal.fire({
            type: 'success',
            title: `Your have joined ${channel.name}`,
            showConfirmButton: false,
            timer: 1500,
            background: '#789',
          }).then(() => {
            this.socketService.sendEvent(channel.id, 'join');
            this.router.navigate(['channel', channel.id]);
            this.activeModal.close();
          });
        });
      }
    });
  }
}
