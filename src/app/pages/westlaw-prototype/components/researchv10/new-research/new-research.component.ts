import { Component } from "@angular/core";
import { SearchBarComponent } from "../../common/search-bar/search-bar.component";
import { BookmarksComponent } from "../../bookmarks/bookmarks.component";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-researchv10",
  templateUrl: "./new-research.component.html",
  styleUrls: ["./new-research.component.less"],
})
export class NewResearchComponentv10 {
  constructor(private router: Router) {}

  searchType: string = "AI Deep Search"; // Default value
  href: string = "";
  tab1: boolean = true;
  tab2: boolean = false;

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
  }

  searchTypeChanged(event: any) {
    this.searchType = event;
  }

  //tab1 = ai deep
  //tab2 = search
  handleToggleTabState(tab: string) {
    if (tab === "tab1") {
      this.tab1 = true;
      this.tab2 = false;
      this.searchTypeChanged("AI Deep Search");
    } else if (tab === "tab2") {
      this.tab1 = false;
      this.tab2 = true;
      this.searchTypeChanged("Search");
    }
  }
}
