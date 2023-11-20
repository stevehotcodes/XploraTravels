import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUser, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  
    updateDetails!:FormGroup
    userID!:string
    userDetails!:any
    userFetched!:IUser[]
    constructor(private fb:FormBuilder , private userSvc:UserService){}

    ngOnInit(): void {
        // this.userDetails=this.userSvc.getUserById
     
      this.userID=localStorage.getItem('userID') as string
      console.log(this.userID)
      this.updateDetails= this.fb.group({
        email: ['', [Validators.required, Validators.email]],
       password: ['', Validators.required]
     });
      this.userSvc.getUserById(this.userID).subscribe(
        res=>{
          console.log("resposne",res)
          this.userFetched=res
          console.log(res)
          console.log(this.userFetched)
    
          // this.userDetails.pathchValue({
          //   res
          // })
        }
      )
    
    

    }
    updateUser(): void {
      // if (this.updateDetails.invalid) {
      //   alert('Please fill in all required fields and provide a valid email.');
      //   return;
      // }
    let {userID,email, password } = this.updateDetails.value;
    const updateUserPayload = { email, password };

    this.userSvc.updateUser(this.userID,this.updateDetails.value).subscribe(
      res=>{
           console.log(res)
      },
      err=>{
        console.log(err)
      }
    )



}

}