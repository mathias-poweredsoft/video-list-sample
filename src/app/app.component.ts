import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Video List', url: '/video-list', icon: 'film' },
    { title: 'Contact-Us', url: '/contact-us', icon: 'paper-plane' },
  ];
  public labels = [];
  constructor() {}
}
