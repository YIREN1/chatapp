import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../services/auth.service';
export interface ServerResponse {
  id: string;
  name: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  getUsers() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.authService.getToken());
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get<ServerResponse[]>(`${environment.apiPrefix}/users/v1/all`, { headers });
  }
}
