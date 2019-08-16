import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of, Subject, Subscription, timer } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { environment } from './../../environments/environment';

export interface ServerResponse {
  success: boolean;
  msg: string;
  token: string;
  user: string;
  is2FaEnabled: string;
  authyToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(
    private http: HttpClient,
  ) { }

  forgotPassword(email) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<ServerResponse>(`${environment.apiPrefix}/users/forgot-password`, { email }, { headers });
  }

  signUpUser(user) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<ServerResponse>(`${environment.apiPrefix}/users/register`, user, { headers });
  }

  private closeSecondFactorObservables(subject: Subject<any>, result: boolean, timerSubscription: Subscription): void {
    subject.next(result);
    subject.complete();
    timerSubscription.unsubscribe();
  }

  private secondFactor(authyToken: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'authyToken': authyToken })
    };

    const tick: Observable<number> = timer(1000, 1000);
    return Observable.create(subject => {
      let tock = 0;
      const timerSubscription = tick.subscribe(() => {
        tock++;
        this.http.get<any>(`${environment.apiPrefix}/authy/status`, httpOptions).subscribe(response => {
          if (response.status === 'approved') {
            // this.redirectUrl = this.redirectUrl === undefined ? '/' : this.redirectUrl;
            // this.router.navigate([this.redirectUrl]);

            this.closeSecondFactorObservables(subject, true, timerSubscription);
          } else if (response.status === 'denied') {
            this.closeSecondFactorObservables(subject, false, timerSubscription);
          }
        });
        if (tock === 60) {
          this.closeSecondFactorObservables(subject, false, timerSubscription);
        }
      });
    });
  }

  verify2fa(authyToken) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('authyToken', authyToken);
    return this.http.get<ServerResponse>(`${environment.apiPrefix}/users/authenticate`, { headers });
  }

  authenticateUser(user) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<ServerResponse>(`${environment.apiPrefix}/users/authenticate`, user, { headers }).pipe(
      flatMap(response => this.secondFactor(response.authyToken))
    );
  }

  googleOauth(access_token) {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<ServerResponse>(`${environment.apiPrefix}/users/oauth/google`, { access_token }, { headers });
  }

  VerifyReCaptcha(token, route) {
    const headers = new HttpHeaders();
    this.authToken = token;
    headers.append('Content-Type', 'application/json');
    return this.http.post<ServerResponse>(`${environment.apiPrefix}/reCaptcha/${route}/subscribe`, { token }, { headers });
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
    const headers = new HttpHeaders();
    this.getToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get<ServerResponse>(`${environment.apiPrefix}/users/profile`, { headers });
  }

  getToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  loggedIn() {
    if (!localStorage.getItem('id_token')) {
      return false;
    } else {
      const helper = new JwtHelperService();
      return !helper.isTokenExpired(localStorage.id_token);
    }
  }
}
