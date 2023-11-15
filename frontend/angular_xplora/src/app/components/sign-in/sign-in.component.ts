import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

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
  role!:string

  constructor(private fb :FormBuilder, private router:Router,private UserSvc:UserService){
    this.login=this.fb.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required]]
    })
  }
 

 
    userAuthentication(){
    
    this.userCredentials =this.login.value;
    this.UserSvc.signInUser(this.userCredentials).subscribe(
      res=>{
          this.role=res.role
          console.log("this is role",this.role,res.token);
          if(this.role==='admin')
            {
              console.log("logged in as admin")
              this.router.navigate(["/admin"])
              
             }
          else if(this.role==='user'){
            console.log("logged in as user");
            this.router.navigate(["/user"]);
            
          }

      }
    )
    
   
    // else if{
    //   console.log("check your credentials again")
    //   // this.router.navigate(['/login'])
    //   window.location.reload()
    // }
  
       
  }
  


  get email(){
    return this.login.controls['email']
  }

  get password(){
    return this.login.controls['password']
  }
  
}
