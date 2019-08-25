import { Component, OnInit, ViewChild } from '@angular/core';
declare var Peer: any;
@Component({
  selector: 'app-videochat',
  templateUrl: './videochat.component.html',
  styleUrls: ['./videochat.component.css']
})
export class VideochatComponent implements OnInit {
  @ViewChild('othervideo', { static: true }) otherVideo: any;
  @ViewChild('myvideo', { static: true }) myVideo: any;
  myPeerId;
  peer;
  anotherid;
  constructor() { }

  ngOnInit() {
    this.initPeer();

  }

  private initPeer(): void {
    const video = this.otherVideo.nativeElement;
    this.peer = new Peer();
    this.peer.on('open', (id) => {
      this.myPeerId = this.peer.id;

      console.log('My peer ID is: ' + id);
    });

    this.peer.on('connection', (conn) => {
      conn.on('data', (data) => {
        // Will print 'hi!'
        console.log(data);
      });
    });

    const n = navigator as any;

    n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);

    this.peer.on('call', (call) => {

      n.getUserMedia({ video: true, audio: true }, (stream) => {
        call.answer(stream);
        call.on('stream', (remotestream) => {
          video.srcObject = remotestream;
          video.play();
        });
      }, (err) => {
        console.log('Failed to get stream', err);
      });
    });
  }

  connect() {
    const conn = this.peer.connect(this.anotherid);
    conn.on('open', () => {
      console.log('connect');
      conn.send(`message from ${this.myPeerId}`);
    });
  }

  videoconnect() {
    const otherVideo = this.otherVideo.nativeElement;
    const myVideo = this.myVideo.nativeElement;
    const localvar = this.peer;
    const fname = this.anotherid;

    // var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

    const n = navigator as any;

    n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);
    n.getUserMedia({ video: { width: 128, height: 72 }, audio: true }, (stream) => {
      myVideo.srcObject = stream;
      myVideo.play();
    }, (err) => {
      console.log('Failed to get stream', err);
    });

    n.getUserMedia({ video: true, audio: true }, (stream) => {
      const call = localvar.call(fname, stream);
      call.on('stream', (remotestream) => {
        // console.log(remotestream);
        otherVideo.srcObject = remotestream;
        otherVideo.play();
      });
    }, (err) => {
      console.log('Failed to get stream', err);
    });
  }
}
