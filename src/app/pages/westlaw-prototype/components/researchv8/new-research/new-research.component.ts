import { Component } from '@angular/core';
import { SearchBarComponent } from '../../common/search-bar/search-bar.component';
import { BookmarksComponent } from '../../bookmarks/bookmarks.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-researchv8',
  templateUrl: './new-research.component.html',
  styleUrls: ['./new-research.component.less']
})

export class NewResearchComponentv8 {
  constructor(private router: Router) {}

  searchType: string = 'Search'; // Default value
  href: string ='';

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
}

  searchTypeChanged(event: any) {
    console.log(event);
    this.searchType = event;
  }

}
