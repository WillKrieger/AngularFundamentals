import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-events-list',
    template: `
    <h2>Upcoming Angular Events</h2>
    <hr>
    <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
            <app-events-thumbnail (click)="handleThumbnailClick(event.name)" #thumbnail [event]="event" ></app-events-thumbnail>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {
    events: any;
    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
        // this.eventService.getEvents().subscribe(events => { this.events = events; });
    }

    handleThumbnailClick(eventName: string) {
        this.toastr.success(eventName);
    }
}
