import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { SigninSignupComponent } from '../signin-signup/signin-signup.component';

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

  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/']);
    return false;
  }

  openSignUpModal() {
    this.modalService.open(SigninSignupComponent);
  }
}
