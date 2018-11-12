import { Routes } from '@angular/router';
import { NotFoundComponent } from './errors/notfound/notfound.component';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouterActivator,
  EventListResolverService,
  CreateSessionComponent
} from './events/index';


export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouterActivator]},
  {path: 'events/session/new', component: CreateSessionComponent},
  {path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
  {path: '404', component: NotFoundComponent},
  {path: '', redirectTo: '/events', pathMatch: 'full'}
];
