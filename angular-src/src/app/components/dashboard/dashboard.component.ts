import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { AuthService } from '../../services/auth.service';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { Alert } from 'selenium-webdriver';
const URL = 'http://localhost:4200/uploads/image';
// !

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
    authToken: this.authService.authToken,
  });
  // This is the default title property created by the angular cli. Its responsible for the app works
  title = 'app works!';

  ngOnInit() {
    // override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };
    // overide the onCompleteItem property of the uploader so we are
    // able to deal with the server response.
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
      console.log(response);
    };
  }

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
          console.log(success._body);
        },
        (error) => console.log(error)
      );
    }
    alert('All upload success!');
  }
}
