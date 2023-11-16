import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventsService, IEvent } from 'src/app/services/events.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-events',
  templateUrl: './user-events.component.html',
  styleUrls: ['./user-events.component.css']
})
export class UserEventsComponent implements OnInit{
  isBooked:boolean=false
  userID!:string
  events!:IEvent[]
  constructor(private eventSvc:EventsService,private userSvc:UserService){
   
    
  }
  ngOnInit(){
    this.events=this.events
    this.userID=localStorage.getItem('userID') as string
    console.log(this.userID)
      this.eventSvc.fetchAllEvents().subscribe(
        res=>{
           this.events=res
           console.log(this.events)
        }
      )
      
    

  }
  
  bookEvent( id:string){
    this.userID=localStorage.getItem('userID') as string
    console.log(this.userID)
    console.log(id);
    this.eventSvc.updateEventToBooking(id, this.userID).subscribe(
      res=>{
        this.isBooked=true
        console.log(`user${this.userID} booked this event successfully`,res)
      }
    )

  }
   
  
  




}
