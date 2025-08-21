import { Component, ElementRef, ViewChild, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-response-time-menu-v2',
  templateUrl: './response-time-menu.component.html',
  styleUrls: ['./response-time-menu.component.less']
})
export class ResponseTimeMenuComponentv2 {
  @Output() searchTypeChanged: EventEmitter<number> = new EventEmitter<number>();

  searchType: number = 1;

  toggleKeywordSearchType(){
    this.searchTypeChanged.emit(this.searchType);
  }

}
