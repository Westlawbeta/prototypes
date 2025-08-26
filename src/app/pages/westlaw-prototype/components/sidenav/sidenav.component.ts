import { Location } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.less"],
})
export class SidenavComponent {
  @Output() collapseChanged: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  showSettings: boolean = false;

  collapsed = true;

  menuButtons = [
    { icon: "telescope", label: "AI Deep Research" },
    {
      icon: "magnifying-glass",
      label: "Search",
      action: () => this.navigateTo("westlaw-prototype/new-research"),
    },
    { icon: "screwdriver-wrench", label: "AI Deep Research" },
    { icon: "books", label: "History" },
    { icon: "clock-rotate-left", label: "Folders" },
    { icon: "folders", label: "Folders" },
    { icon: "link-simple", label: "My links" },
    { icon: "sparkles", label: "CoCounsel" },
    { icon: "users", label: "CoCounsel" },
    { icon: "bell", label: "Notification" },
  ];

  bottomButtons = [
    { icon: "briefcase", label: "Client: 345343" },
    { icon: "circle-question", label: "Help" },
    {
      icon: "circle-user",
      label: "Tools",
      action: () => this.toggleSettings(),
    },
    { icon: "arrow-right-from-bracket", label: "Profile" },
  ];

  selectedFontSize: number = 2;
  selectedMode: number = 1;
  activeMenu: string = "New chat";

  constructor(private router: Router, private location: Location) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        const urls = this.location.path().split("/").filter(Boolean);
        this.activeMenu =
          urls.includes("deep-research") ||
          urls.includes("keyword-search") ||
          urls.includes("case-details")
            ? "Current chat"
            : "New chat";
      });
  }

  toggleNav() {
    this.collapsed = !this.collapsed;
    this.collapseChanged.emit(this.collapsed);
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  toggleSettings() {
    this.showSettings = !this.showSettings;
    if (this.showSettings) {
      this.activeMenu = "Settings";
    } else {
      const urls = this.location.path().split("/").filter(Boolean);
      this.activeMenu =
        urls.includes("deep-research") ||
        urls.includes("keyword-search") ||
        urls.includes("case-details")
          ? "Current chat"
          : "New chat";
    }
  }
}
