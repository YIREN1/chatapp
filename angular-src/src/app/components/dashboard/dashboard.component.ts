import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
  ) { }

  // This is the default title property created by the angular cli. Its responsible for the app works
  dashBoardTitle = environment.dashBoardTitle;

  ngOnInit() {
  }

}
