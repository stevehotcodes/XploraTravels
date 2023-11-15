import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

    
}
