import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(public fb:FormBuilder ,public router:Router){
    this.signUpForm=this.fb.group({
      fullname:  ['', [Validators.required,Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(7)]],
      confirmPassword:['',[Validators.required, Validators.minLength(7)]]

    })
  }

  
  createUser(){
    console.log(this.signUpForm.value)
    let newUserData=this.signUpForm.value
    delete newUserData.confirmPassword
    console.log(newUserData)
    this.router.navigate(["signin"])

  }

    
  get fullname(){
    return this.signUpForm.controls['fullname']
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
