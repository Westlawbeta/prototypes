import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarks-v2',
  templateUrl: './bookmarks.component.html',
  styleUrls: ["./bookmarks.component.less"]
})
export class BookmarksComponentv2 {
  showBookmark: boolean = false;

  toggleBookmark() {
    this.showBookmark = !this.showBookmark;
  }
}
