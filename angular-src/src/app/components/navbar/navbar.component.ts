import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Router } from '@angular/router';

import { SigninSignupComponent } from '../signin-signup/signin-signup.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private modalService: NgbModal,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async onLogoutClick() {
    this.authService.signout().subscribe(data => {
      if (data.success) {
        alert('logged out');
        this.authService.loggedIn = false;
        this.router.navigate(['/']);
        return true;
      } else {
        alert(data.msg);
        return false;
      }
    });
  }

  openSignUpModal() {
    this.modalService.open(SigninSignupComponent);
  }
}
