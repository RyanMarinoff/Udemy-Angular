import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  select: string;

  constructor() { this.select = 'recipes'; }

  navigate(selected: string) {
    this.select = selected;
  }
}
