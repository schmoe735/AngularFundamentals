import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './errors/notfound/notfound.component';
import { HttpClientModule } from '@angular/common/http';

import {
  TOASTR_TOKEN,
  JQ_TOKEN,
  Toastr,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common/index';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolverService,
  EventRouterActivator,
  DurationPipe,
  SessionListComponent,
  CreateSessionComponent,
  UpvoteComponent,
  VotersService,
  LocationValidatorDirective,
  EventResolverService
} from './events/index';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const jQuery = window['$'];
declare let toastr: Toastr;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  declarations: [
    EventAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NotFoundComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidatorDirective
  ],
  providers: [
    EventService,
    EventRouterActivator,
    EventListResolverService,
    AuthService,
    VotersService,
    EventResolverService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery},
    {provide: 'canDeactivateCreateEvent', useValue: checkDirtyState}
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
