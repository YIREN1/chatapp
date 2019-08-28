import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validate.service';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

declare const grecaptcha: any;
declare const gapi: any;

declare global {
  interface IWindow {
    gapi: any;
    grecaptcha: any;
  }
}
@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.css'],
})
export class SigninSignupComponent implements OnInit {
  // Register
  name: string;
  profileName: string;
  confirmpassword: string;
  email: string;
  password: string;
  lang: string;
  isCaptchaSuccess: boolean;
  success: boolean;
  authyToken: string;
  public message: Subject<string> = new BehaviorSubject('');

  constructor(
    private authService: AuthService,
    public activeModal: NgbActiveModal,
    private validateService: ValidateService,
    private router: Router,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.rendergreCaptch();
    this.renderGapi();
  }

  openForgotModal() {
    this.modalService.open(ForgotPasswordComponent);
  }

  rendergreCaptch = () => {
    grecaptcha.render('example3', {
      sitekey: '6LcgnK4UAAAAAMIzYQ241H4rT0RJUSZ_XFB9JcpA',
      theme: 'dark',
      'error-callback': this.reCaptchaErrorCB,
      callback: this.reCaptchaCB,
    });
  }

  renderGapi = () => {
    if (!gapi) {
      return;
    }
    gapi.signin2.render('gSignIn', {
      theme: 'dark',
      onsuccess: this.onSignWithGoogle,
      onerror: err => {
        console.log(`Google signIn2.render button err: ${err}`);
      },
    });
  }

  signOutGoogle = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut();
  }

  onSignWithGoogle = googleUser => {
    const profile = googleUser.getBasicProfile();
    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    // console.log(googleUser.Zi.access_token);
    const access_token = googleUser.Zi.access_token;

    // The ID token you need to pass to your backend:
    // const id_token = googleUser.getAuthResponse().id_token;
    // console.log("ID Token: " + id_token);

    const signoutElement = document.getElementById('signout');
    signoutElement.innerHTML =
      'Sign out ' + googleUser.getBasicProfile().getName();
    return this.authService.googleOauth(access_token).subscribe(data => {
      console.log(data);
      if (data.token) {
        this.authService.storeUserData(data.token, data.user);
        Swal.fire(
          'Good job!',
          'You are signed in!',
          'success'
        );
        this.router.navigate(['dashboard']);
        this.activeModal.close();
        return true;
      } else {
        Swal.fire('Oops...', 'Failed on google oauth.', 'error');
        return false;
      }
    });
  }

  // addScript() {
  //   const script = document.createElement('script');
  //   const lang = this.lang ? '&hl=' + this.lang : '';
  //   script.src = `https://www.google.com/recaptcha/api.js?onload=reCaptchaLoad&render=explicit${lang}`;
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  // }

  verifyCaptchaV3() {
    grecaptcha.ready(() => {
      grecaptcha
        .execute('6Lc9m64UAAAAAK124LL1AU8JY-yI51RFJphhDnuf', {
          action: 'homepage',
        })
        .then(token => {
          console.log(token, 'V3');
          this.authService.VerifyReCaptcha(token, 'v3').subscribe(data => {
            console.log(data);
          });
        });
    });
  }

  reCaptchaErrorCB(err) {
    console.log(err);
    // alert(err);
    Swal.fire('Oops...', `Failed reCaptcha: ${err}`, 'error');
  }
  reCaptchaCB(data) {
    console.log('captcha checked');
  }

  verifyCaptchaV2(): any {
    const token = grecaptcha.getResponse();
    console.log(token, 'V2');
    return this.authService.VerifyReCaptcha(token, 'v2').subscribe(data => {
      // console.log(data);
      if (!data.success) {
        // alert(data.msg);
        Swal.fire('Oops...', data.msg, 'error');
        grecaptcha.reset();
        return false;
      }
      return true;
    });
  }

  async onSignIn() {

    // todo
    // this.verifyCaptchaV3();
    this.verifyCaptchaV2();
    // if (!this.isCaptchaSuccess) {
    //   console.log('stop login');
    //   return false;
    // }
    // console.log('continue');
    const user = {
      email: this.email,
      password: this.password,
    };

    if (!this.validateService.validateSignIn(user)) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Please fill out all required fields!',
        footer: '<a href>Why do I have this issue?</a>'
      });
      return false;
    }

    this.authService
      .authenticateUser(user)
      .pipe(
        catchError(() => {
          this.message.next('Bad credentials.');
          Swal.fire('Oops...', 'Bad credentials.', 'error');
          return throwError('Not logged in!');
        }),
      )
      .subscribe(async data => {
        // if (data.success) {
        //   const is2FaEnabled = true;
        //   if (is2FaEnabled) {
        //     await this.verify2fa();
        //   }
        //   this.postLogin(data);
        //   return true;
        // } else {
        //   alert(data.msg);
        //   this.message.next('Request timed out or not authorized');
        //   return false;
        // }
        if (!data) {
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: '2 factor auth failed!',
            footer: '<a href>Why do I have this issue?</a>'
          });
          // this.message.next('Request timed out or not authorized');
          return false;
        }
        console.log('auth response', data);
        this.postLogin(data);
        return true;
      });
  }

  postLogin(data) {
    this.authService.storeUserData(data.token, data.user);
    Swal.fire(
      'Good job!',
      'You are signed in!',
      'success'
    );
    this.router.navigate(['dashboard']);
    this.activeModal.close();
  }

  verify2fa() {
    return new Promise((resolve, reject) => {
      return this.authService.verify2fa(this.authyToken).subscribe(data => {
        resolve();
      });
    });
  }

  onSignUp() {
    const user = {
      name: this.name,
      email: this.email,
      profileName: this.profileName,
      password: this.password,
    };
    // required fields
    if (!this.validateService.validateSignUp(user)) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Please fill out all required fields!',
        footer: '<a href>Why do I have this issue?</a>'
      });
      return false;
    }

    // email
    if (!this.validateService.validateEmail(user.email)) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Please fill out email correctly!',
        footer: '<a href>Why do I have this issue?</a>'
      });
      return false;
    }

    // comfirmpassword
    if (
      !this.validateService.validateConfirmPassword(
        this.password,
        this.confirmpassword,
      )
    ) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Passwords do not match!',
        footer: '<a href>Why do I have this issue?</a>'
      });
      return false;
    }

    return this.authService.signUpUser(user).subscribe(data => {
      if (data.success) {
        Swal.fire(
          'Good job!',
          'Successful signed up, please confirm your email!',
          'success'
        );
        return true;
      } else {
        // alert('Internal Server Error.');
        console.log(data);
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'signup failed!',
          footer: '<a href>Why do I have this issue?</a>'
        });
        return false;
      }
    });
  }
  open2faModal() {

  }
}
