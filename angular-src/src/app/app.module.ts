import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbButtonModule, NbChatModule, NbLayoutModule, NbMenuModule, NbSearchModule, NbSpinnerModule, NbTabsetModule, NbThemeModule, NbUserModule } from '@nebular/theme';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileSelectDirective } from 'ng2-file-upload';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SigninSignupComponent } from './components/signin-signup/signin-signup.component';

import { AuthService } from './services/auth.service';
import { ValidateService } from './services/validate.service';

import { ChatComponent } from './components/chat/chat.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { UploadComponent } from './components/upload/upload.component';
import { AuthGuard } from './guards/auth.guard';
import { Page404Component } from './page404/page404.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent }, // , canActivate: [AuthGuard] },
  { path: 'profile/:profilename', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'chatbot', component: ChatbotComponent, canActivate: [AuthGuard] },
  { path: '**', component: Page404Component, pathMatch: 'full' } // All unmatched routes
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    SigninSignupComponent,
    Page404Component,
    FileSelectDirective,
    ForgotPasswordComponent,
    ChatbotComponent,
    UploadComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbChatModule,
    NbSpinnerModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbMenuModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbSearchModule,
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
  entryComponents: [SigninSignupComponent, ForgotPasswordComponent],
})
export class AppModule { }
