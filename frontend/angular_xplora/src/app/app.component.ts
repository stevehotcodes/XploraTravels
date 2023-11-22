import { Component } from '@angular/core';
import { FlashmessagesService } from './services/flashmessages.service';
import { IflashMessage } from './components/flash-messages/flash-messages.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_xplora';
  messages:IflashMessage[]

  constructor(public flashMessagesSvc:FlashmessagesService) {
    this.messages = flashMessagesSvc.getMessages()
  }
}
