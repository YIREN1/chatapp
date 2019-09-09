import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import socketIo from 'socket.io-client';
import { environment } from '../../../../../environments/environment';
import { Event } from '../model/event';
import { Message } from '../model/message';
const apiURL = `${environment.apiUrl}`;
const socketIoUrl = environment.socketIoUrl;
@Injectable({
  providedIn: 'root'
})
export class SocketService {

  // socket = io('http://localhost:5000/');
  // socket = io(apiURL);
  private socket;

  public initSocket(): void {
    // ! change back
    this.socket = socketIo(socketIoUrl);
    // this is used for docker env
    // default to host for example: 'http://localhost:3050'
    // this.socket = socketIo('http://localhost:5000');
  }

  public sendEvent(message, event): void {
    this.socket.emit(event, message);
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
      this.socket.on(event, (data) => observer.next(data));
    });
  }
  constructor() { }
}
