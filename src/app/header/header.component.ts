import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() onMenuChangeHandler = new EventEmitter<string>();

  onMenuClicked(selectedMenu: string) {
    this.onMenuChangeHandler.emit(selectedMenu);
  }

}
