import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';


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

  constructor(
    private authService:AuthService,
    public activeModal: NgbActiveModal,
    private validateService: ValidateService,
    private router:Router,
    ) { }

  ngOnInit() {
  }

  onSignIn() {
    const user = {
      email: this.email,
      password: this.password
    };
    this.authService.authenticateUser(user).subscribe(data => {
      if(data.success) {
        this.authService.storeUserData(data.token, data.user);
        // alert('successfully logged in');
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
