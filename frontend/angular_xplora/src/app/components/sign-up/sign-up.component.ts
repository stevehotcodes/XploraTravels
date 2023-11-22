import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FlashmessagesService } from 'src/app/services/flashmessages.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm!:FormGroup
  textColor:string="red"
  fontSize:number=0.7
  passwordMismatch:boolean=false
  isSignUp:boolean=false
  notification:string=''
  

  constructor(public fb:FormBuilder ,public router:Router,private userSvc:UserService, private flashMsgSvc:FlashmessagesService){
    this.signUpForm=this.fb.group({
      fullName:  ['', [Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(7)]],
      confirmPassword:['',[Validators.required, Validators.minLength(7)]]

    })
  }

  
  createUser(){
    if(this.signUpForm.invalid){
     
      let newUserData:any=this.signUpForm.value
      delete newUserData.confirmPassword
      console.log(newUserData)
      
      this.userSvc.registerNewUser(newUserData).subscribe(
        res=>{
            console.log(res.message);
            this.isSignUp=true;
            this.notification=res.message 
            console.log(this.notification)
           
            this.flashMsgSvc.pushMessage({
              type: 'success',
              message: res.message 
            })
            this.router.navigate(["signin"])
             
        },
        error=>{
          console.log(error)
        }
      )
      this.router.navigate(["signup"])

    }
    else{
      this.flashMsgSvc.pushMessage({
        type: 'error',
        message: 'Invalid form ' 
      })

      console.log("input required")
    }
   

  }

    
  get fullName(){
    return this.signUpForm.controls['fullName']
  }
  
  get email(){
    return this.signUpForm.controls['email']
  }
  get password(){
    return this.signUpForm.controls['password']
  }

  get confirmPassword(){
    return this.signUpForm.controls['confirmPassword']
  }

}
