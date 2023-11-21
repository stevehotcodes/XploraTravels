import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { EventsComponent } from './components/events/events.component';
import { AddEventComponent } from './components/add-event/add-event.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserEventsComponent } from './components/user-events/user-events.component';
import { UserBookingsComponent } from './components/user-bookings/user-bookings.component';
import { EventEditComponent } from './components/event-edit/event-edit.component';

const routes: Routes = [
  {path:"",component:LandingPageComponent},
  {path:"reservation",component:UserBookingsComponent},
  {path:"signin",component:SignInComponent},
  {path:"signup",component:SignUpComponent},
  {path:"admin",component:AdminDashboardComponent},
  {path:"users",component:UsersComponent},
  {path:"profile",component:UserProfileComponent},
  {path:"events",component:EventsComponent},
  {path:"addevent",component:AddEventComponent},
  {path:"bookings",component:BookingsComponent},
  {path:"user",component:UserDashboardComponent},
  {path:"uevents",component:UserEventsComponent},
  {path:"event/:id/edit"  ,component:EventEditComponent},

  {path:"**",component:NotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
