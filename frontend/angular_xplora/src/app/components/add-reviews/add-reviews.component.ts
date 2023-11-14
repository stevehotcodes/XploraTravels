import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-reviews',
  templateUrl: './add-reviews.component.html',
  styleUrls: ['./add-reviews.component.css']
})
export class AddReviewsComponent {
  constructor(private dialogRef: MatDialogRef<AddReviewsComponent>) {}

  close() {
    this.dialogRef.close();
  }
}
