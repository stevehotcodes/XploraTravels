import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService, IEvent } from 'src/app/services/events.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  updateEventForm!:FormGroup
  eventId!:string
  event!:IEvent[]
  constructor(private route :ActivatedRoute,private eventSvc:EventsService,private fb:FormBuilder, private rt:Router){}

  ngOnInit(){
    this.eventId=this.route.snapshot.paramMap.get('id') as string
    // alert(this.eventId)

    this.eventSvc.getEventById(this.eventId).subscribe((res:any)=>{
       this.event=res
       console.log(this.event)
    })
    this.updateEventForm=this.fb.group({
      title:['',[Validators.required]],
       tourType:['',[Validators.required]],
       destination:['',[Validators.required]],
       price:['',[Validators.required]],
       availableDate: ['',[Validators.required]],
      image:['',[Validators.required]],
      slots:['',[Validators.required]],
      duration:['',[Validators.required]]
    })

  }

  onSubmit(){
    console.log("updated ")
    let eventDetails=this.updateEventForm.value;
    console.log(eventDetails)
    this.eventSvc.updateEventDetails(this.eventId,eventDetails).subscribe(
      res=>{
        console.log(res)
        this.rt.navigate(["/events"])
      }
    )
  }
}
