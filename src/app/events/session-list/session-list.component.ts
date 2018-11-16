import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared';
import { AuthService } from 'src/app/user/auth.service';
import { VotersService } from '../voters.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styles: []
})
export class SessionListComponent implements OnChanges {
  @Input() eventId: number;
  @Input() sessions: ISession[];
  filteredSessions: ISession[];
  @Input() filterBy: string;
  @Input() sortBy: string;

  constructor(public auth: AuthService, private voterService: VotersService) { }

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name'
      ? this.filteredSessions.sort(sortByNameAsc)
      : this.filteredSessions.sort(sortByVotesDesc);
    }
  }

  filterSessions(filterBy: string) {
    if (filterBy === 'all') {
      this.filteredSessions = this.sessions.slice(0);
    } else {
      this.filteredSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filterBy;
      });
    }
  }

  toggleVote(session: ISession) {
    if (this.userHasVoted(session)) {
      this.voterService.deleteVoter(this.eventId, session, this.auth.currentUser.userName);
    } else {
      this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
    }

    if (this.sortBy === 'votes') {
      this.filteredSessions.sort(sortByVotesDesc);
    }
  }

  userHasVoted(session: ISession): boolean {
    return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
  }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  }
  return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return s2.voters.length - s1.voters.length;
}
