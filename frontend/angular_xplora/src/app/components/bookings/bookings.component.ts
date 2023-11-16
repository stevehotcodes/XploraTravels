import { Component, OnInit } from '@angular/core';
import { EventsService, IEvent } from 'src/app/services/events.service';
import { IUser } from 'src/app/services/user.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit{

  events!:IEvent[]
  
  constructor(private eventSvc:EventsService){}
   
  ngOnInit(): void {
     this.eventSvc.fetchAllEvents().subscribe(
      res=>{
        console.log(res)
        this.events=res
      }
     )
  }
  
  

}
