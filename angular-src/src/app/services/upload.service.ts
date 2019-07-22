import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: Http
  ) { }

  uploadImage(data) {
    const headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    // headers.append('Authorization', this.user_token);
    return this.http.post('http://localhost:3000/cms/upload/image', data, { headers: headers }).pipe(map(res => res.json()));
  }
}
