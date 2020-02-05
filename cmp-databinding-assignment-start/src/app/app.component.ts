import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  results: Array<string>;

  ngOnInit(): void {
    this.results = new Array<string>();
  }


  onTick(cycle: number) {
    if (cycle % 2 === 0) {
      this.results.push('even');
    } else {
      this.results.push('odd');
    }
  }
}
