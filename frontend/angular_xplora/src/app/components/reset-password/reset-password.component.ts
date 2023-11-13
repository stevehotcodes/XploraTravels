import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetPasswordForm!:FormGroup
  loggedIn:boolean= false
  userCredentials!:any
  constructor(private fb :FormBuilder, private router:Router){
    this.resetPasswordForm=this.fb.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required]]
    })
  }
  async userAuthentication(){
    
    this.userCredentials =this.resetPasswordForm.value;
    //  let token = await this.logInSvc.login(this.userCredentials) 
    //  console.log( "this is my response", token)
     
    // let verificationUser=await this.logInSvc.verifyToken()
      //  if(verificationUser.info.role==="admin"){
      //    this.router.navigate(["/admin"])
      //  }
      //  else if(verificationUser.info.role==="employees"){
      //   this.router.navigate(["/user-dashboard"])
      // }
     
    
  }

}
