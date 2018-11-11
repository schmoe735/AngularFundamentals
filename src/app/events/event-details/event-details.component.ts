import { Component, OnInit } from '@angular/core';
import { EventService } from '../../events/shared/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  event: any;
  constructor(private _eventService: EventService, private _route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this._route.snapshot.params['id']);
    this.event = this._eventService.getEvent(+this._route.snapshot.params['id']);
  }

}
