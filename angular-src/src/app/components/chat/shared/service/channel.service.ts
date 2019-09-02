import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../services/auth.service';
export interface ServerResponse {
  success: boolean;
  msg: string;
  id: string;
  title;
  name;
  _id;
  type;
}
@Injectable({
  providedIn: 'root'
})

export class ChannelService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }
  selectedChannel: any;

  setSelectedChannel(channel) {
    this.selectedChannel = channel;
  }
  getChannels() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.authService.getToken());
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get<ServerResponse[]>(`${environment.apiPrefix}/v1/channels`, { headers });
  }

  getAllChannels() {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.authService.getToken());
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get<ServerResponse[]>(`${environment.apiPrefix}/v1/channels/all`, { headers });
  }

  getChannel(channelId) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.authService.getToken());
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get<ServerResponse>(`${environment.apiPrefix}/v1/channels/${channelId}`, { headers });
  }

  joinChannel(channelId) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.authService.getToken());
    headers = headers.set('Content-Type', 'application/json');
    return this.http.put<ServerResponse>(`${environment.apiPrefix}/v1/channels/${channelId}/join`, { headers });
  }

  createChannel(name, usersInChannel, type) {
    const channel = { name, usersInChannel, type };
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.authService.getToken());
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post<ServerResponse>(`${environment.apiPrefix}/v1/channels`, channel, { headers });
  }
}
