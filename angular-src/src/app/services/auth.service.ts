import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: any;
  authToken: any;
  user: any;

  constructor(
    private http: Http,
  ) { }

  signUpUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/users/register', user, { headers: headers })
      .pipe(map(res => res.json()));
  }

  authenticateUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/users/authenticate', user, { headers, withCredentials: true })
      .pipe(map(res => res.json()));
  }

  googleOauth(access_token) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/users/oauth/google', { access_token }, { headers })
      .pipe(map(res => res.json()));
  }

  VerifyReCaptcha(token, route) {
    const headers = new Headers();
    this.authToken = token;
    headers.append('Content-Type', 'application/json');
    return this.http.post(`api/reCaptcha/${route}/subscribe`, { token }, { headers })
      .pipe(map(res => res.json()));
  }

  storeUserData(token, user) {
    // localStorage.setItem('id_token', token);
    // localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  }

  getProfile() {
    const headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('api/users/profile', { headers })
      .pipe(map(res => res.json()));
  }

  signout() {
    this.user = null;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('api/users/signout', { headers })
      .pipe(map(res => res.json()));
  }
}
