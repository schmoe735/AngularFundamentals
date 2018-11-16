import { Component, OnInit } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'event-app-root',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class EventAppComponent implements OnInit{
  constructor(private _auth: AuthService) {

  }

  ngOnInit() {
    this._auth.checkAuthenticationStatus();
  }
}
