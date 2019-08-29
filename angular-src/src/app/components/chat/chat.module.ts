import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
  ],
  providers: [SocketService],
})
export class ChatModule { }
