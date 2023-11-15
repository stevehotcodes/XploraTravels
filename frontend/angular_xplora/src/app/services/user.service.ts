import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface IUser{
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
  
  constructor(private http:HttpClient) { }

  registerNewUser(newUserData:any){
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
  
    



}

