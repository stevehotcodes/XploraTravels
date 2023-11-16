import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddReviewsComponent } from '../add-reviews/add-reviews.component';
import { ModalService } from 'src/app/services/modal.service';
import { EventsService, IEvent } from 'src/app/services/events.service';
@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']
})
export class UserBookingsComponent implements OnInit{

  showModal:boolean=false;
  events:IEvent[]=[]
  // userID!:string
  constructor(private modalSvc:ModalService, private eventSvc:EventsService) {}

  ngOnInit(){
    this.modalSvc.showModal$.subscribe(show=>{
      this.showModal=show
    })
    
    const userID=localStorage.getItem('userID') as string
    console.log(userID)
    this.eventSvc.getEventsByUser(userID).subscribe(
      res=>{
          console.log(res)
          this.events=res
      }
    )
    
  }

  openModal() {
   this.modalSvc.openModal()
   console.log("modal openned")
  }
  closeModal(){
    this.modalSvc.closeModal()
  }

  


}
