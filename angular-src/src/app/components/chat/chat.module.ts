import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

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

import { ChatDmModalComponent } from './chat-dm-modal/chat-dm-modal.component';
import { ChatsidebarComponent } from './chatsidebar/chatsidebar.component';
import { SocketService } from './shared/service/socket.service';
@NgModule({
  declarations: [
    ChatComponent,
    ChatsidebarComponent,
    ChatDmModalComponent,
  ],
  imports: [
    NbSidebarModule,
    NbChatModule,
    CommonModule,
    NbButtonModule,
    NbLayoutModule,
    NbListModule,
    NbUserModule,
    SweetAlert2Module,
    RouterModule,
  ],
  providers: [SocketService],
  entryComponents: [ChatDmModalComponent],
})
export class ChatModule { }
