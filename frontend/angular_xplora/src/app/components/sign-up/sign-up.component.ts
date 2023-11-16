import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  

  constructor(public fb:FormBuilder ,public router:Router,private userSvc:UserService){
    this.signUpForm=this.fb.group({
      fullName:  ['', [Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(7)]],
      confirmPassword:['',[Validators.required, Validators.minLength(7)]]

    })
  }

  
  createUser(){
    if(this.signUpForm.value!==""){
     
      let newUserData:any=this.signUpForm.value
      delete newUserData.confirmPassword
      console.log(newUserData)
      
      this.userSvc.registerNewUser(newUserData).subscribe(
        res=>{
            console.log(res.message);
            this.isSignUp=true;
            this.notification=res.message 
           
        
            this.router.navigate(["signin"])
             
        },
        error=>{
          console.log(error)
        }
      )
      this.router.navigate(["signup"])

    }
    else{
      
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
