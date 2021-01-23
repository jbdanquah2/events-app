import { Component, Input } from '@angular/core'
import { IEvent } from './shared/event.model';

@Component({
    selector: 'event-thumbnail',
    template: ` 
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div [ngClass]=getStartTimeClass() [ngSwitch]="event?.time">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div [ngStyle]="getStartPriceStyle()">Price \${{event?.price}}</div>
    <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span> &nbsp; </span>
        <span>{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
    <div [hidden]="!event?.onlineUrl">Online Url:{{event?.onlineUrl}}</div>  
</div>
    `,
    styles: [`
        .green {
            color: #003300 !important;
        }
        .bold {
            font-weight: 600;
        }
        .thumbnail {
            min-height: 210px;
        }
        .pad-left {
            margin-left: 10px;
        }
        .well div {
            color: #bbb;
        }`
    ]
})

export class EventThumbnailComponent {
    @Input() event:IEvent;

    getStartTimeClass() {
        if (this.event && this.event.time === '8:00 am')
        return ['green', 'bold'];
    return [];
    }
    getStartPriceStyle() {
        if (this.event && this.event.price >= 800)
        return {'color' : '#990000', 'font-weight' : 'bold'}
    return {'color' : '#000099', 'font-weight' : 'bold'}
    }

}