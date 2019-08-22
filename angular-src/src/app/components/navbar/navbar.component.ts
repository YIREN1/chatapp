import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../../services/auth.service';
import { SigninSignupComponent } from '../signin-signup/signin-signup.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];
  user = {
    name: 'Yi Ren',
    picture: 'assets/images/yiren.png',
  };
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
