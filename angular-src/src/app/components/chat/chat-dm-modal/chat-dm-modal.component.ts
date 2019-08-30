import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/service/user.service';
@Component({
  selector: 'app-chat-dm-modal',
  templateUrl: './chat-dm-modal.component.html',
  styleUrls: ['./chat-dm-modal.component.css']
})
export class ChatDmModalComponent implements OnInit {

  constructor(private userService: UserService) { }
  users: any[];

  ngOnInit() {
    this.initUsers();
  }
  private async initUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.users.forEach(user => {
        user.title = 'CEO';
      })
    });
  }

}
