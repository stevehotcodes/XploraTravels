import { Pipe, PipeTransform } from '@angular/core';
import { IEvent } from '../services/events.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(events: IEvent[], searchString:string): any[] {
    if(!events || !searchString){
      return events;
    }
     return events.filter(
      item=>{
        item.tourType.toLowerCase().includes(searchString)
      }
     )
  }

}
