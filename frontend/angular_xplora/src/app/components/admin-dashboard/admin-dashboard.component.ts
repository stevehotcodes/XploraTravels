import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
    constructor(private userSvc:UserService ,private router:Router){

    }
    logout(){
      this.router.navigate(['']);
      localStorage.removeItem('token')
      console.log(localStorage.getItem('token'));
  
  
    }
    
}
