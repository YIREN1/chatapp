import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import socketIo from 'socket.io-client';
import { environment } from '../../../../../environments/environment';
import { Event } from '../model/event';
import { Message } from '../model/message';
const apiURL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class SocketService {

  // socket = io('http://localhost:5000/');
  // socket = io(apiURL);
  private socket;

  public initSocket(): void {
    this.socket = socketIo();
    // default to host 'http://localhost:3050'
    // this.socket = socketIo('http://localhost:5000');
    // this.socket = socketIo('ws://localhost:3050');
  }

  public send(message: Message): void {
    this.socket.emit('message', message);
  }

  public onMessage(): Observable<Message> {
    return new Observable<Message>(observer => {
      this.socket.on('message', (data: Message) => observer.next(data));
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<Event>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
  constructor() { }
}
