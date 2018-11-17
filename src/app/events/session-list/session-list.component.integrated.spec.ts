import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { SessionListComponent } from './session-list.component';
import { AuthService } from '../../user/auth.service';
import { VotersService } from '../voters.service';
import { UpvoteComponent } from '../upvote/upvote.component';
import { DurationPipe } from '../shared';
import { CollapsibleWellComponent } from 'src/app/common';
import { By } from '@angular/platform-browser';

describe('SessionListComponent', () => {
  let fixture: ComponentFixture<SessionListComponent>,
    component: SessionListComponent,
    element: HTMLElement,
    debugElement: DebugElement;
    beforeEach(async(() => {
      const mockAuthService = {
        isAuthenticated: () => true,
        currentUser: {userName: 'joe'}
      };
      const mockVoterService = {
        userHasVoted: () => true
      };

      TestBed.configureTestingModule({
        imports: [],
        declarations: [
          SessionListComponent,
          // UpvoteComponent,
          DurationPipe,
          // CollapsibleWellComponent
        ],
        providers: [
          {provide: AuthService, useValue: mockAuthService},
          {provide: VotersService, useValue: mockVoterService},
        ],
        schemas: [
          NO_ERRORS_SCHEMA
        ]
      });
    }));
    beforeEach(() => {
      fixture = TestBed.createComponent(SessionListComponent);
      component = fixture.componentInstance;
      debugElement = fixture.debugElement;
      element = fixture.nativeElement;
    });

    describe('initial display', () => {
      it('should have the correct session title', () => {
        component.sessions = [
          {id: 3,
            name: 'Session 1',
            presenter: 'Joe',
            duration: 1,
            level: 'beginner',
            abstract: 'abstract',
            voters: ['joe', 'john']}
          ];
          component.filterBy = 'all';
          component.sortBy = 'name';
          component.eventId = 4;
          component.ngOnChanges();
          fixture.detectChanges();

          expect(element.querySelector('[well-title]').textContent)
            .toContain('Session 1');

          expect(debugElement.query(By.css('[well-title]'))
            .nativeElement.textContent).toContain('Session 1');
      });
    });
});
