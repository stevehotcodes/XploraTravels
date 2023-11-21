import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface IEvent{
  id: string
  title:string
  tourType:string
  destination:string
  price:string
  availableDate:string
  image :string
  eventStatus:string
  userID:string
  duration:string
  isDeleted:string
  fullName:string
  slots:string
}

@Injectable({
  providedIn: 'root'
})


export class EventsService {

  constructor(private http:HttpClient) { }


  addEvent(newEventData:any){
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
    return this.http.post<any>(`http://localhost:3400/tours/create`,newEventData,{headers})

  }
  fetchAllEvents(){
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
    return this.http.get<IEvent[]>('http://localhost:3400/tours/all',{headers})
  }
  deleteEvent(id:string):Observable<any>{
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
    const apiUrl=`http://localhost:3400/tours/tours/`
    return this.http.delete(apiUrl+id,{headers})
  }
  updateEventToBooking(id:string,userID:string):Observable<any>{
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
    const apiUrl=`http://localhost:3400/tours/book/`
    return this.http.post(apiUrl+id +'/'+userID,{headers})
  }
  getEventsByUser(userID:string):Observable<any>{
    const headers=new HttpHeaders({
      'Content-Type':'application/json'
    })
    const apiUrl=`http://localhost:3400/tours/user/`
    return this.http.get(apiUrl+userID,{headers})
  }
  getEventById(id:string):Observable<IEvent[]>{
    const apiUrl=`http://localhost:3400/tours/tour/`
    return this.http.get<IEvent[]>(apiUrl+id)
  }

  updateEventDetails(id:string,eventDetails:any){
    const apiUrl=`http://localhost:3400/tours/tour/`
    return this.http.post(apiUrl+id,eventDetails)

  }


  
}
