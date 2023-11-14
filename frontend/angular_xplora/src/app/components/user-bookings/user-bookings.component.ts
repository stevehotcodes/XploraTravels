import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddReviewsComponent } from '../add-reviews/add-reviews.component';
@Component({
  selector: 'app-user-bookings',
  templateUrl: './user-bookings.component.html',
  styleUrls: ['./user-bookings.component.css']
})
export class UserBookingsComponent {
  constructor(private dialog: MatDialog) {}

  openModal() {
    const dialogRef = this.dialog.open(AddReviewsComponent);

    // Optionally, subscribe to events on the modal (e.g., after it's closed).
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
