import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService, IEvent } from '../shared';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  // newEvent: IEvent;
  isDirty = true;
  constructor(private _router: Router, private _eventService: EventService) { }

  ngOnInit() {
    // this.newEvent = {
    //   id: undefined,
    //   name: 'NG Fundamentals',
    //   date: new Date('8/8/2018'),
    //   time: '10:00 am',
    //   price: 10000,
    //   location: {
    //     address: '25 smith st',
    //     city: 'Parramatta',
    //     country: 'Australia'
    //   },
    //   onlineUrl: 'http://www.google.com',
    //   imageUrl: 'https://www.google.com.au/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    //   sessions: []
    // };
  }
  cancel() {
    this._router.navigate(['/events']);
  }

  saveEvent(formValues: IEvent) {
    this._eventService.saveEvent(formValues);
    this.isDirty = false;
    this._router.navigate(['/events']);
  }
}
