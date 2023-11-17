import { Component } from '@angular/core';
import { IEvent } from 'src/app/services/events.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent {
    searchData:string=''
    tours!:IEvent[]

    onSearch(query:string){
      this.searchData=query
    }
}
