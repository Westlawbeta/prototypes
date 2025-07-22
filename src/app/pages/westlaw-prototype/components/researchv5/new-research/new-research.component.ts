import { Component } from '@angular/core';
import { SearchBarComponent } from '../../common/search-bar/search-bar.component';
import { BookmarksComponent } from '../../bookmarks/bookmarks.component';

@Component({
  selector: 'app-new-researchv5',
  templateUrl: './new-research.component.html',
  styleUrls: ['./new-research.component.less']
})

export class NewResearchComponentv5 {

  searchType: string = 'Search'; // Default value

  searchTypeChanged(event: any) {
    console.log(event);
    this.searchType = event;
  }

}
