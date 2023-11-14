import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  login!:FormGroup
  loggedIn:boolean= false
  userCredentials!:any
  textColor:string="red"
  fontSize:number=0.7

  constructor(private fb :FormBuilder, private router:Router){
    this.login=this.fb.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required]]
    })
  }
 

 
  async userAuthentication(){
    
    this.userCredentials =this.login.value;
    this.router.navigate(["/admin"])
       
  }


  get email(){
    return this.login.controls['email']
  }

  get password(){
    return this.login.controls['password']
  }
  
}
