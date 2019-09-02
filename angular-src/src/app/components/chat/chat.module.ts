import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  NbButtonModule,
  NbChatModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbSpinnerModule,
  NbTabsetModule,
  NbThemeModule,
  NbUserModule,
} from '@nebular/theme';
import { ChatComponent } from './chat.component';

import { ChatChannelModalComponent } from './chat-channel-modal/chat-channel-modal.component';
import { ChatDmModalComponent } from './chat-dm-modal/chat-dm-modal.component';
import { ChatsidebarComponent } from './chatsidebar/chatsidebar.component';
import { SocketService } from './shared/service/socket.service';
@NgModule({
  declarations: [
    ChatComponent,
    ChatsidebarComponent,
    ChatDmModalComponent,
    ChatChannelModalComponent,
  ],
  imports: [
    NbSidebarModule,
    NbChatModule,
    CommonModule,
    NbButtonModule,
    NbLayoutModule,
    NbListModule,
    NbUserModule,
    RouterModule,
    NbMenuModule,
  ],
  providers: [SocketService],
  entryComponents: [ChatDmModalComponent, ChatChannelModalComponent],
})
export class ChatModule { }
