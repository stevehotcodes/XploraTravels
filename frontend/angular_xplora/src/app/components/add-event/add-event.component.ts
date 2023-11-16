import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  addEventForm!:FormGroup

  constructor(private fb:FormBuilder, private eventSvc:EventsService, private router:Router){
    this.addEventForm=this.fb.group({
      title:['',[Validators.required]],
       tourType:['',[Validators.required]],
       destination:['',[Validators.required]],
       price:['',[Validators.required]],
       availableDate: ['',[Validators.required]],
      image:['',[Validators.required]],
      duration:['',[Validators.required]]
    })
  }
  onSubmit(){
    let data=this.addEventForm.value
    console.log(this.addEventForm.value)
    this.eventSvc.addEvent(data).subscribe(res=>{
      console.log("added successfully",res);
      this.router.navigate(["/admin"])
    })
    
    
  }

}
