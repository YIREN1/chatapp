import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../services/auth.service';
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

export class ChannelService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  getChannels() {
    const headers = new HttpHeaders();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.get<ServerResponse>(`${environment.apiPrefix}/v1/channels`, { headers });
  }

  createChannels() {
    const channel = {
      name,
    };
    const headers = new HttpHeaders();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post<ServerResponse>(`${environment.apiPrefix}/v1/channels`, channel, { headers });
  }
}
