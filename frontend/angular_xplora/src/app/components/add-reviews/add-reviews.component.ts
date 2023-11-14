import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EventEmitter,Output } from '@angular/core';
@Component({
  selector: 'app-add-reviews',
  templateUrl: './add-reviews.component.html',
  styleUrls: ['./add-reviews.component.css']
})
export class AddReviewsComponent {
  @Output () closeModalEvent=new EventEmitter()

 closeModal(){
  this.closeModalEvent.emit()
 }
 
}
