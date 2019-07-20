import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';

declare const grecaptcha: any;

declare global {
  interface Window {
    grecaptcha: any;
    reCaptchaLoad: () => void
  }
}
@Component({
  selector: 'app-signin-signup',
  templateUrl: './signin-signup.component.html',
  styleUrls: ['./signin-signup.component.css']
})
export class SigninSignupComponent implements OnInit {
  // Register
  name: String;
  profileName: String;
  confirmpassword: String;
  email: String;
  password: String;
  lang: String;
  isCaptchaSuccess: boolean;

  constructor(
    private authService: AuthService,
    public activeModal: NgbActiveModal,
    private validateService: ValidateService,
    private router: Router,
  ) { }

  ngOnInit() {
    grecaptcha.render('example3', {
      'sitekey': '6LcgnK4UAAAAAMIzYQ241H4rT0RJUSZ_XFB9JcpA',
      'theme': 'dark',
      'error-callback': this.reCaptchaErrorCB,
      'callback': this.reCaptchaCB,
    });
  }

  addScript() {
    let script = document.createElement('script');
    const lang = this.lang ? '&hl=' + this.lang : '';
    script.src = `https://www.google.com/recaptcha/api.js?onload=reCaptchaLoad&render=explicit${lang}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  verifyCaptchaV3() {
    grecaptcha.ready(() => {
      grecaptcha.execute('6Lc9m64UAAAAAK124LL1AU8JY-yI51RFJphhDnuf', { action: 'homepage' })
        .then((token) => {
          console.log(token, 'V3');
          this.authService.VerifyReCaptcha(token, 'v3').subscribe(data => {
            console.log(data);
          });
        });
    });
  }

  reCaptchaErrorCB(err) {
    console.log(err);
    alert(err);
  }
  reCaptchaCB(data) {
    console.log('captcha checked');
    this.isCaptchaSuccess = true;
    console.log(this.isCaptchaSuccess, 'ssssss');
  }


  verifyCaptchaV2(): any {
    const token = grecaptcha.getResponse();
    console.log(token, 'V2');
    return this.authService.VerifyReCaptcha(token, 'v2').subscribe(data => {
      console.log(data);
      if (!data.success) {
        alert(data.msg);
        grecaptcha.reset();
        return false;
      }

      return true;
    });
  }

  async onSignIn() {
    // this.verifyCaptchaV3();
    this.verifyCaptchaV2();
    // if (!this.isCaptchaSuccess) {
    //   console.log('stop login');
    //   return false;
    // }
    console.log('continue');
    const user = {
      email: this.email,
      password: this.password
    };
    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        alert('successfully logged in');
        this.router.navigate(['dashboard']);
        this.activeModal.close();
        return true;
      } else {
        alert(data.msg);
        return false;
      }
    });
  }
  onSignUp() {
    const user = {
      name: this.name,
      email: this.email,
      profileName: this.profileName,
      password: this.password,

    }
    // required fields
    if (!this.validateService.validateSignUp(user)) {
      alert('Please fill out all required fields!');
      return false;
    }

    // email
    if (!this.validateService.validateEmail(user.email)) {
      alert('Please fill out email correctly!');
      return false;
    }

    // comfirmpassword
    if (!this.validateService.validateConfirmPassword(this.password, this.confirmpassword)) {
      alert('Passwords do not match!');
      return false;
    }



    this.authService.signUpUser(user).subscribe(data => {
      if (data.success) {
        alert('success');
        this.router.navigate(['dashboard']);
        this.activeModal.close();
        return true;
      } else {
        alert('Internal Server Error.');
        return false;
      }
    })



  }
}
