import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { ISession, EventService } from '../events';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav .navbar-nav {font-size: 15px;}
    #searchForm { margin-right: 100px;}
    @media (max-width: 120px) { #searchForm display: none }
    li > a.active {color : #F97924; }
  `
  ]
})
export class NavBarComponent {
  searchTerm = '';
  foundSessions: ISession[];

  constructor(public _authService: AuthService, public _eventService: EventService) {}

  searchSessions(searchTerm) {
    this._eventService.searchSessions(searchTerm)
                  .subscribe(sessions => {
                    this.foundSessions = sessions;
                  });
  }
}
