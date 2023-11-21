import { Component, Input } from '@angular/core';

export interface IflashMessage {
  type: 'error' | 'success' | 'info'
  message:string
}

@Component({
  selector: 'app-flash-messages',
  templateUrl: './flash-messages.component.html',
  styleUrls: ['./flash-messages.component.css']
})


export class FlashMessagesComponent {

    @Input() message!:IflashMessage
  
}
