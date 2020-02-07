import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() navigate: EventEmitter<string>;
  selected: string;

  constructor() {
    this.navigate = new EventEmitter<string>();
    this.selected = 'recipe-book';
  }

  ngOnInit() { }

  onSelect(selected: string) {
    this.selected = selected;
    this.navigate.emit(selected);
  }
}
