import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarComponent } from '../../common/search-bar/search-bar.component';
import { BookmarksComponent } from '../../bookmarks/bookmarks.component';

@Component({
  selector: 'app-new-researchv6',
  templateUrl: './new-research.component.html',
  styleUrls: ['./new-research.component.less']
})

export class NewResearchComponentv6 {
  constructor(private router: Router) {}

  searchType: string = 'Standard'; // Default value
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
