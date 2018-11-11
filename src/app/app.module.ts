import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';
import { EventsListComponent } from './events/events.list.component';
import { EventThumbnailComponent } from './events/events-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/events.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { NotFoundComponent } from './errors/notfound/notfound.component';
import { EventRouterActivator } from './events/shared/event-router-activator.service';
import { EventListResolverService } from './events/shared/event-list-resolver.service'

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
