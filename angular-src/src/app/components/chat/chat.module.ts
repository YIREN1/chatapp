import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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

import { ChatsidebarComponent } from './chatsidebar/chatsidebar.component';
import { SocketService } from './shared/service/socket.service';
@NgModule({
  declarations: [
    ChatComponent,
    ChatsidebarComponent,
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
  ],
  providers: [SocketService],
})
export class ChatModule { }
