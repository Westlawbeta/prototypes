// toggle.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-toggle',
  templateUrl: './customtoggle.component.html',
  styleUrls: ['./customtoggle.component.less']
})
export class CustomToggleComponent {
  @Input() isChecked: boolean = false;
  @Input() labelText: string = '';
  @Output() toggleChange = new EventEmitter<boolean>();

  constructor() { }

  onToggleChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.isChecked = inputElement.checked;
    this.toggleChange.emit(this.isChecked);
  }
}