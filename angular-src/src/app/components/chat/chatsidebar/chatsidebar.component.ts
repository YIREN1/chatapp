import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ChatDmModalComponent } from '../chat-dm-modal/chat-dm-modal.component';
import { ChannelService } from '../shared/service/channel.service';

@Component({
  selector: 'app-chatsidebar',
  templateUrl: './chatsidebar.component.html',
  styleUrls: ['./chatsidebar.component.css']
})
export class ChatsidebarComponent implements OnInit {

  constructor(
    private dialogService: NbDialogService,
    private channelService: ChannelService,
    private location: Location,
  ) { }

  channels: any[];
  directMessages: any[];
  users: Array<{ name: string, title: string }>;


  ngOnInit() {
    this.initChannels();
  }
  openWindow() {
    this.dialogService.open(
      ChatDmModalComponent,
      { hasScroll: true },
    );
  }

  initDirectMessages() {

  }

  private async initChannels() {
    this.channelService.getChannels().subscribe((data) => {
      this.directMessages = data;
      this.directMessages.forEach(user => {
        user.title = 'CEO';
      });
    });
  }

}
