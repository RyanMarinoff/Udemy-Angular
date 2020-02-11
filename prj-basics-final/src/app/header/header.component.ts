import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() selected: EventEmitter<string> = new EventEmitter();

  select(selected: string) {
    this.selected.emit(selected);
  }
}
