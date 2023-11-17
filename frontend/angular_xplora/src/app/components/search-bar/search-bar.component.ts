import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output () search =new EventEmitter<string>();

  onSearchChange(query:string){
    this.search.emit(query)
  }

}
