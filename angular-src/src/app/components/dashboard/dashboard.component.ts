import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
    private uploadService: UploadService
  ) { }
  selectedFile: File = null;
  imageChange(e) {
    this.selectedFile = e.target.files[0];
  }
  ngOnInit() { }

  imageUploadSubmitted() {
    const formData = new FormData();
    // const input = this.selectedFile.controls.imageInput as any;
    // input.value = this.selectedFile;
    console.log(this.selectedFile);
    this.uploadService.uploadImage(this.selectedFile).subscribe((data) => {
      if (data.success) {
        alert('all good');
      } else {
        alert('nope');
      }
    });
  }
}
