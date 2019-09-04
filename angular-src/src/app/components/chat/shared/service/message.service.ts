import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../services/auth.service';
export interface ServerResponse {
  success: boolean;
  msg: string;
  user: string;
  reply;
}

@Injectable({
  providedIn: 'root'
})

export class MessageService {
  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) {
    // ! hacky way to expose the function...
    this.updateMessage = this.updateMessage;
    this.deleteMessage = this.deleteMessage;
  }

  getMessages(channelId) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.authService.getToken());
    headers = headers.set('Content-Type', 'application/json');
    return this.http.get<ServerResponse[]>(`${environment.apiPrefix}/v1/messages/${channelId}`, { headers });
  }

  updateMessage(messageId, text: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.authService.getToken());
    headers = headers.set('Content-Type', 'application/json');
    return this.http.put<ServerResponse>(`${environment.apiPrefix}/v1/messages/${messageId}`, { text }, { headers });
  }

  deleteMessage(messageId) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', this.authService.getToken());
    headers = headers.set('Content-Type', 'application/json');
    return this.http.delete<ServerResponse>(`${environment.apiPrefix}/v1/messages/${messageId}`, { headers });
  }
}
