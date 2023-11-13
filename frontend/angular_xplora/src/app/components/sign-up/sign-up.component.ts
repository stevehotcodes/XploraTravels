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

  constructor(public fb:FormBuilder ,public router:Router){
    this.signUpForm=this.fb.group({
      fullname:  ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],

    })
  }

  
  createUser(){
    console.log(this.signUpForm.value)
    // let details:InewUserDetails=this.signUpForm.value
    // this.signUpSvc.registerUser(details)
    // this.router.navigate(["/login"]);
  }
}
