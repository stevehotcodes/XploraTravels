import { Injectable } from '@angular/core';
import { IflashMessage } from '../components/flash-messages/flash-messages.component';

@Injectable({
  providedIn: 'root'
})
export class FlashmessagesService {

  constructor() { }
  private messages:IflashMessage[] = []

  

  getMessages() {
    return this.messages
  }

  pushMessage (message:IflashMessage) {
    this.messages.push(message)
      setTimeout(() => {
        this.messages.shift()
      }, 7000);
  }
}
