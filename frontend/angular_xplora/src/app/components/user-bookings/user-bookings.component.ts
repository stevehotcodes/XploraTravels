import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddReviewsComponent } from '../add-reviews/add-reviews.component';
import { ModalService } from 'src/app/services/modal.service';
@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']
})
export class UserBookingsComponent implements OnInit{

  showModal:boolean=false;
  constructor(private modalSvc:ModalService) {}

  ngOnInit(){
    this.modalSvc.showModal$.subscribe(show=>{
      this.showModal=show
    })
  }

  openModal() {
   this.modalSvc.openModal()
   console.log("modal openned")
  }
  closeModal(){
    this.modalSvc.closeModal()
  }
}
