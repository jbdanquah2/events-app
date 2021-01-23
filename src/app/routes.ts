import { Routes } from '@angular/router';
import { CanDeactivate } from '@angular/router/src/utils/preactivation';
import { Error404Component } from './errors/404.component';

import { 
    CreateEventComponent,
    EventDetailsComponent,
    EventRouteActivatorService,
    EventsListComponent
 } from "./events/index";

export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['CanDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule' } 
]