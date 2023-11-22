import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService, IEvent } from 'src/app/services/events.service';
import { FlashmessagesService } from 'src/app/services/flashmessages.service';
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
  
  constructor(private eventSvc:EventsService,private userSvc:UserService,private route:Router,private flashSvc:FlashmessagesService){
   
    
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
    this.flashSvc.pushMessage({
      type:'success',
      message:'event booked successfully'
    })
    
    // alert("event booked successfully")
    // window.location.reload()
    // this.route.navigate(["user"])

  }
   
  
  




}
