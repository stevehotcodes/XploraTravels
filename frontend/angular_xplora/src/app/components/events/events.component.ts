import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService, IEvent } from 'src/app/services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events:IEvent[]=[]
  id!:string
  isEditOpened:boolean=false
  constructor(private eventSvc:EventsService,private route:ActivatedRoute){
    
  }

   ngOnInit(): void {
    // this.id=this.route.snapshot.params['events.id']
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    
      this.eventSvc.fetchAllEvents().subscribe(
        res=>{
          console.log(res)
          this.events=res
          console.log(res)
        }
      )
      
   }
   deleteEvent(event:IEvent){
    if (!event.id) {
      console.error('ID is undefined or null');
      return;
    }
    console.log('delete clicked ',event.id)
    this.eventSvc.deleteEvent(event.id).subscribe(
      res=>{
        console.log(res)
        window.location.reload()
      },
      err=>{
        console.log(err)
      }
    )
   }

}
