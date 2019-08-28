import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateConfirmPassword(password, confirmpassword) {
    return password === confirmpassword;
  }

  validateSignIn(user) {
    return user.email && user.password;
  }

  validateSignUp(user) {
    return user.name && user.email && user.profileName && user.password;
  }

  validateEmail(email) {
    // tslint:disable-next-line:max-line-length
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email));
  }
  validatePhone(phone) {

  }
}
