import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }
  canActivate() {
    if (this.authService.loggedIn) { return true; }

    // Store the attempted URL for redirecting later
    // this.authService.redirectUrl = state.url;

    this.router.navigate(['']);
    return false;
  }
}
