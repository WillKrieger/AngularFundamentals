import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator { // implements CanActivate {
    constructor(private eventService: EventService) {

    }

    // canActivate(route: ActivatedRouteSnapshot) {    }
}
