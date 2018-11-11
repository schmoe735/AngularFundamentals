import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EventService } from './events.service';

@Injectable()
export class EventRouterActivator implements CanActivate {

  constructor(private _eventService: EventService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(state);
    const exists = !!this._eventService.getEvent(+route.params['id']);

    if (!exists) {
        this._router.navigate(['/404']);
    }

    return exists;
  }
}
