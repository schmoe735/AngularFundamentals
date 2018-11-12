import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private _eventService: EventService, private _route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this._route.snapshot.params['id']);
    this.event = this._eventService.getEvent(+this._route.snapshot.params['id']);
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
