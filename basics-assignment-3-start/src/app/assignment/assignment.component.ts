import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
  displayIt: boolean;
  clicked: number;

  constructor() {
    this.displayIt = false;
    this.clicked = 0;
   }

  ngOnInit() {
  }

  btnClick() {
    this.displayIt = !this.displayIt;
    this.clicked++;
  }
}
