import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/notfound/notfound.component';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolverService,
  EventRouterActivator
} from './events/index';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFoundComponent
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouterActivator,
    EventListResolverService,
    {
      provide: 'canDeactivateCreateEvent', useValue: checkDirtyState
    }
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule {
}

export function checkDirtyState(component: CreateEventComponent) {
   if (component.isDirty) {
      return window.confirm('Navigating away will result in changes being lost.!');
   }
   return true;
}
