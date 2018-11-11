import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './events.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventListResolverService {

  constructor(private eventService: EventService) { }

  resolve() {
    return this.eventService.getEvents().pipe(map(events => events));
  }
}
