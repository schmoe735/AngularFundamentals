import { Component } from '@angular/core';

@Component({
  selector: 'event-app-root',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class EventAppComponent {
  title = 'ng-fundamentals';
}
