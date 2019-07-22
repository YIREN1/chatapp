import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(
    private http: Http,
  ) { }

  signUpUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/register', user, { headers: headers })
      .pipe(map(res => res.json()));
  }

  authenticateUser(user) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/authenticate', user, { headers })
<<<<<<< HEAD
      .pipe(map(res => res.json()));
  }

  googleOauth(access_token) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/oauth/google', { access_token }, { headers })
=======
>>>>>>> 7825383329690fd6ecc44ba7ac74c38dc22f49c0
      .pipe(map(res => res.json()));
  }

  googleOauth(access_token) {
    const headers = new Headers();
    console.log('oooooo');
    headers.append('Content-Type', 'application/json');
    return this.http.post('users/oauth/google', { access_token }, { headers })
      .pipe(map(res => {
        console.log(res);
        res.json();
      }));
  }

  VerifyReCaptcha(token, route) {
    const headers = new Headers();
<<<<<<< HEAD
    this.authToken = token;
=======
>>>>>>> 7825383329690fd6ecc44ba7ac74c38dc22f49c0
    headers.append('Content-Type', 'application/json');
    return this.http.post(`reCaptcha/${route}/subscribe`, { token }, { headers })
      .pipe(map(res => res.json()));
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  getProfile() {
    const headers = new Headers();
    this.getToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get('users/profile', { headers: headers })
      .pipe(map(res => res.json()));
  }

  getToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    if (!localStorage.id_token) {
      return false;
    } else {
      const helper = new JwtHelperService();
      return !helper.isTokenExpired(localStorage.id_token);
    }
  }
}
