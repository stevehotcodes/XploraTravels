import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FlashMessagesComponent } from '../flash-messages/flash-messages.component';
import { FlashmessagesService } from 'src/app/services/flashmessages.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent  {
  login!:FormGroup
  loggedIn:boolean= false
  userCredentials!:any
  textColor:string="red"
  fontSize:number=1
  successMessage!:string
  role!:string
  link:string = 'https://cdn.pixabay.com/photo/2022/03/31/13/50/login-7103076_640.png'
  
  constructor(private fb :FormBuilder, private router:Router,private UserSvc:UserService,private flashMsgSvc:FlashmessagesService){
    this.login=this.fb.group({
      email:["",[Validators.required,Validators.email]],
      password:["",[Validators.required]]
    })
  }
  //  ngOnInit():void{
  //   localStorage.setItem('token',res.token)
  //  }

 
    userAuthentication(){
     this.userCredentials =this.login.value;
    this.UserSvc.signInUser(this.userCredentials).subscribe(
      res=>{
          this.role=res.role
          console.log("this is role",this.role,res.token);
         this.loggedIn=true
         this.successMessage="log in successfull"

        //  this.link='https://cdn.pixabay.com/photo/2022/03/31/13/50/login-7103076_640.png'
         
          
          if(this.role==='admin')
            {
              console.log("logged in as admin")
              this.router.navigate(["/admin"])
              
             }
          else if(this.role==='user'){
            console.log("logged in as user");
            this.router.navigate(["/user"]);
            localStorage.setItem('token' ,res.token)
            localStorage.setItem('userID',res.id)
            
          }

      }
    )
    
  
      // this.flashMsgSvc.pushMessage({
      //   type:'success',
      //   message:'login successfully'
      // })
    
    
    }       
  
       
  
  



  get email(){
    return this.login.controls['email']
  }

  get password(){
    return this.login.controls['password']
  }
  
}
