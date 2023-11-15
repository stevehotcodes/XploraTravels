import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users:IUser[]=[]
  id!:string

  constructor(private userSvc:UserService ,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(
      params=>{
        this.id=params['id']
      }
    )
    this.userSvc.getAllUsers().subscribe(
     res=>{
       this.users=res
        console.log("this are users",this.users)
      },
      err=>{
         console.log(err)
      }
    )
  }
  deleteUser(user:IUser){
    if(!user.id){
       console.log("Invalid ID/id is null or undefined ")
    }
    console.log('delete clicked ',user.id);
    this.userSvc.deleteUser(user.id).subscribe(
      res=>{
        console.log(res)
      }
    )
  }

}
