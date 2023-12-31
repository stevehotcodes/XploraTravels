import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EventsComponent } from './components/events/events.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserEventsComponent } from './components/user-events/user-events.component';
import { UserBookingsComponent } from './components/user-bookings/user-bookings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ReviewsComponent } from './components/reviews/reviews.component';
import { AddReviewsComponent } from './components/add-reviews/add-reviews.component';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesComponent } from './components/flash-messages/flash-messages.component';
import { EventEditComponent } from './components/event-edit/event-edit.component';
// import { ReviewComponent } from './component/review/review.component';
// import { DisplayReviewComponent } from './compoents/display-review/display-review.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    LandingPageComponent,
    NotfoundComponent,
    ResetPasswordComponent,
    AdminDashboardComponent,
    UsersComponent,
    UserProfileComponent,
    EventsComponent,
    AddEventComponent,
    BookingsComponent,
    UserDashboardComponent,
    UserEventsComponent,
    UserBookingsComponent,
    AddReviewsComponent,
    FlashMessagesComponent,
    EventEditComponent,
  
    
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
