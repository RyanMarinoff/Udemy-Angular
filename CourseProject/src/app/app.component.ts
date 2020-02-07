import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CourseProject';
  selected: string = 'recipe-book';

  onNavigate(select: string) {
    this.selected = select;
  }
}
