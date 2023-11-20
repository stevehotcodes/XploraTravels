import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


export interface IUser{
  [x: string]: any;
  id:string
  fullName:string
  email:string
  password:string
  dateJoined:string
  role:string
  isDeleted:number
}
@Injectable({
  providedIn: 'root'
})
export class UserService {

  // let apiUrl:string=`http://localhost:3400/users`;
  
  constructor(private http:HttpClient, private router:Router) { }

  registerNewUser(newUserData:any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
      
    });
    return this.http.post<any>(`http://localhost:3400/users/signup`,newUserData,{headers}
      
    )
  }

  signInUser(logInUserDetails:any){
    const headers=new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(`http://localhost:3400/users/signin`,logInUserDetails,{headers})

  }
  getAllUsers(){
    const headers=new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.get<IUser[]>(`http://localhost:3400/users/all`,{headers})
  }
  
  deleteUser(id:string):Observable<any>{
    const headers=new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const apiUrl=`http://localhost:3400/users/users/`
    return this.http.delete<any>(apiUrl+id,{headers})
  }
  updateUser(id:string,userDetails:any):Observable<any>{
    const headers=new HttpHeaders({
      'Content-Type':'application/json',
      //  'token':localStorage.getItem('token') as string
    })
    const apiUrl=`http://localhost:3400/users/update/`
    return this.http.put<any>(apiUrl+id,{headers},userDetails)
  }

  getUserById(id:string):Observable<any>{
    const headers=new HttpHeaders({
      'Content-Type':'application/json',
      
    })
    const apiUrl=`http://localhost:3400/users/one/`
    return this.http.get<any>(apiUrl+id ,{headers})

  }
  
  logout(){
    this.router.navigate(['']);
    localStorage.clear()
    console.log(localStorage.getItem('token'));


  }
  




}

