import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService, IEvent } from 'src/app/services/events.service';
import { FlashmessagesService } from 'src/app/services/flashmessages.service';

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.css']
})
export class EventEditComponent implements OnInit {
  updateEventForm!:FormGroup
  eventId!:string
  event!:IEvent[]
  constructor(private route :ActivatedRoute,private eventSvc:EventsService,private fb:FormBuilder, private rt:Router,private flashSvc:FlashmessagesService){}

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
    if(this.updateEventForm.valid){
      console.log("updated ")
      let eventDetails=this.updateEventForm.value;
      console.log(eventDetails)
      this.eventSvc.updateEventDetails(this.eventId,eventDetails).subscribe(
        (res:any)=>{
          console.log(res.message)
          this.flashSvc.pushMessage({
            type:'success',
            message:res.message
          })
          this.rt.navigate(["/events"])
        }
      )
    }
    else{
      this.flashSvc.pushMessage({
        type:'error',
        message:"invalid update form"
      })
    }
   
  }

  close(){
     this.rt.navigate(["/events"])
  }
}
