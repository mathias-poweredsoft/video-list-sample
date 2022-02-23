import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  counter: number = 0;
  currentDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.counter++;
  }
}
