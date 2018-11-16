import { Injectable } from '@angular/core';
import { EventService } from './events.service';
import { ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EventResolverService {

  constructor(private eventService: EventService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.eventService.getEvent(route.params['id']);
  }
}
