import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
        alert('please check your email');
        this.activeModal.close();
        return true;
      } else {
        alert('something is wrong, please resend');
        return false;
      }
    });
  }

}
