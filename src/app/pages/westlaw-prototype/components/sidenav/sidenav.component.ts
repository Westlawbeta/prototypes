import { Location } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.less']
})
export class SidenavComponent {

  @Output() collapseChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  showSettings: boolean = false;

  collapsed = true;
  
  menuButtons = [
    { icon: 'magnifying-glass', label: 'Search', action: () => this.navigateTo('westlaw-prototype/new-research') },
    { icon: 'telescope', label: 'AI Deep Research' },
    { icon: 'clock-rotate-left', label: 'History' },
    { icon: 'folders', label: 'Folders' },
    { icon: 'link-simple', label: 'My links' },
    { icon: 'sparkles', label: 'CoCounsel' },
    { icon: 'bell', label: 'Notification' }
  ];

  bottomButtons = [
    { icon: 'id-card', label: 'Client: 345343' },
    { icon: 'circle-question', label: 'Help' },
    { icon: 'grid-2', label: 'Tools', action: () =>  this.toggleSettings() },
    { icon: 'circle-user', label: 'Profile' },
    { icon: 'door-open', label: 'Sign Out' }
  ];

  selectedFontSize: number = 2;
  selectedMode: number = 1;
  activeMenu: string = 'New chat';

  constructor(private router: Router, private location: Location) {
    this.router.events
          .pipe(
            filter(event => event instanceof NavigationEnd)
          ).subscribe(() => {
            const urls = this.location.path().split('/').filter(Boolean);
            this.activeMenu = (urls.includes('deep-research') || urls.includes('keyword-search') || urls.includes('case-details')) ? 'Current chat' : 'New chat';
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
    if(this.showSettings) {
      this.activeMenu = 'Settings';
    } else {
      const urls = this.location.path().split('/').filter(Boolean);
      this.activeMenu = (urls.includes('deep-research') || urls.includes('keyword-search') || urls.includes('case-details')) ? 'Current chat' : 'New chat';
    }
  }

}
