import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbChatModule, NbLayoutModule, NbSpinnerModule, NbThemeModule } from '@nebular/theme';
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

import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { TwoFaComponent } from './components/two-fa/two-fa.component';
import { AuthGuard } from './guards/auth.guard';
import { Page404Component } from './page404/page404.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent }, // canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'profile/:profilename', component: ProfileComponent },
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
    TwoFaComponent,
    ForgotPasswordComponent,
    ChatbotComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbChatModule,
    NbSpinnerModule,
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
  entryComponents: [SigninSignupComponent, TwoFaComponent, ForgotPasswordComponent],
})
export class AppModule { }
