import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email: String;
  constructor(
    private authService: AuthService,
    public activeModal: NgbActiveModal,

  ) { }

  ngOnInit() {
  }

  sendResetPasswordEmail() {
    const email = this.email;
    return this.authService.forgotPassword(email).subscribe(data => {
      if (data.success) {
        // alert('please check your email');
        Swal.fire(
          'Good job!',
          'please check your email',
          'success'
        )
        this.activeModal.close();
        return true;
      } else {
        // alert('something is wrong, please resend');
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        });
        return false;
      }
    });
  }

}
