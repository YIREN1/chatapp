import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { ChatDmModalComponent } from '../chat-dm-modal/chat-dm-modal.component';

@Component({
  selector: 'app-chatsidebar',
  templateUrl: './chatsidebar.component.html',
  styleUrls: ['./chatsidebar.component.css']
})
export class ChatsidebarComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  channels: any;
  directMessages: any;
  users: Array<{ name: string, title: string }>;


  ngOnInit() {
    // const windowRef = this.windowService.open(ChatDmModalComponent, {});
  }
  openWindow() {
    this.dialogService.open(
      ChatDmModalComponent,
      { hasScroll: true },
    );
  }

  initChannels() {

  }

  initDirectMessages() {

  }

}
