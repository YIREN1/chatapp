import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  options = {
    strings: ['<i>First</i> sentence.', '&amp; A chat app like slack.'],
    typeSpeed: 40
  };

  ngOnInit() {
    const typed = new Typed('#typed', this.options);

  }

}
