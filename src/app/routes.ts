import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events.list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { NotFoundComponent } from './errors/notfound/notfound.component';
import { EventRouterActivator } from './events/shared/event-router-activator.service';
import { EventListResolverService } from './events/shared/event-list-resolver.service';

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator]},
  {path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
];
