import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import Swal from 'sweetalert2';

import { environment } from '../../../environments/environment';
import { AuthService } from '../../services/auth.service';
import { UploadService } from '../../services/upload.service';
const URL = `${environment.apiUrl}/uploads/image`;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(
    private uploadService: UploadService,
    private el: ElementRef,
    private authService: AuthService,
  ) { }
  // declare a property called fileuploader and assign it to an instance of a new fileUploader.
  // pass in the Url to be uploaded to, and pass the itemAlais, which would be the name of the //file input when sending the post request.
  public uploader: FileUploader = new FileUploader({
    url: URL,
    itemAlias: 'file',
    authToken: this.authService.getToken(),
  });

  // This is the default title property created by the angular cli. Its responsible for the app works
  dashBoardTitle = environment.dashBoardTitle;
  ocrText = '';
  ngOnInit() {
    // override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    // overide the onCompleteItem property of the uploader so we are
    // able to deal with the server response.
    this.uploader.onCompleteItem = async (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      const obj = await JSON.parse(response);
      console.log(obj);
      console.log(obj.fileName);
      this.ocrText = obj.text;
      Swal.fire(
        'Good job!',
        'OCR running...',
        'success'
      );
    };

    this.uploader.onErrorItem = (item: any, response: any, status: any, headers: any) => {
      console.log(response);
      Swal.fire('Oops...', 'Upload failed', 'error');
    };

    this.uploader.onSuccessItem = (item: any, response: any, status: any, headers: any) => {

      Swal.fire(
        'Good job!',
        'Successfully uploaded!',
        'success'
      );
    };
  }
  // todo
  upload() {
    const inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    console.log('iam+ ' + inputEl);
    const fileCount: number = inputEl.files.length;
    const formData = new FormData();
    if (fileCount > 0) { // a file was selected
      for (let i = 0; i < fileCount; i++) {
        formData.append('photo', inputEl.files.item(i));
      }
      this.uploadService.uploadImage(formData).subscribe(
        (success) => {
          console.log(success); // toDO success._body
        },
        (error) => console.log(error)
      );
    }
    alert('All upload success!');
  }

}
