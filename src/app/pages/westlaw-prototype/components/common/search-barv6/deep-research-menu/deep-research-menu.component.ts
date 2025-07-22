import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deep-research-menu-v6',
  templateUrl: './deep-research-menu.component.html',
  styleUrls: ['./deep-research-menu.component.less']
})
export class DeepResearchMenuComponentv6 {
  @Input() deepSearch: number = 2;
  
  @Output() searchTypeChanged: EventEmitter<number> = new EventEmitter<number>();
  @Output() deepSearchChanged: EventEmitter<number> = new EventEmitter<number>();

  searchType: number = 1;

  toggleDeepResearchType(deepSearch:number){
    this.searchTypeChanged.emit(this.searchType);
    console.log(deepSearch);
    this.deepSearch = deepSearch;
    this.deepSearchChanged.emit(this.deepSearch);
  }
}
