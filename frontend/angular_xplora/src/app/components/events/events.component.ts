import { Component, OnInit } from '@angular/core';
import { EventsService, IEvent } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events:IEvent[]=[]
  constructor(private eventSvc:EventsService){}

   ngOnInit(): void {
      this.eventSvc.fetchAllEvents().subscribe(
        res=>{
          console.log(res)
          this.events=res
          console.log(res)
        }
      )
   }

}
