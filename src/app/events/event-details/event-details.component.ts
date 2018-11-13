import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {
  IEvent,
  EventService,
  ISession
} from '../shared/index';
import { allSettled } from 'q';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  addMode: boolean;
  event: IEvent;
  filterBy = 'all';
  sortBy = 'name';
  constructor(private _eventService: EventService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      this.event = this._eventService.getEvent(+params['id']);
      this.addMode = false;
    });
    // this.event = this._eventService.getEvent(+this._route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }
  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this._eventService.updateEvent(this.event);
    this.addMode = false;
  }
  cancelAddSession() {
    this.addMode = false;
  }
}
