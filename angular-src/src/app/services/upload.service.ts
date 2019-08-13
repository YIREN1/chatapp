import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  uploadImage(data) {
    const headers = new HttpHeaders();
    this.authService.getToken();
    headers.append('Authorization', this.authService.authToken);
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.get('uploads/image', { headers });
  }
}
