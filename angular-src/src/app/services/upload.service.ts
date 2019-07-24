import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: Http,
    private authService: AuthService,
  ) { }

  uploadImage(data) {
    const headers = new Headers();
    this.authService.getToken();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.get('uploads/image', { headers })
      .pipe(map(res => res.json()));
  }
}
