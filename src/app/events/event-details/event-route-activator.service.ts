import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
import { EventService } from '../shared/event.service';

@Injectable() 
export class EventRouteActivatorService implements CanActivate {
    constructor(private eventService: EventService, private router:Router) {

    }
    canActivate(route:ActivatedRouteSnapshot) {
      const eventExist = !!this.eventService.getEvent(+route.params['id'])
      if (!eventExist)
        this.router.navigate(['/404'])
      return eventExist
    }
}