import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { R3FactoryDelegateType } from '@angular/compiler/src/render3/r3_factory';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() tick: EventEmitter<number>;
  private intervalID: NodeJS.Timeout;
  private cycle: number;

  constructor() {
    this.tick = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.cycle = 0;
  }

  StartGame() {
    this.intervalID = setInterval(() => { this.tick.emit(this.cycle++); }, 1000);
    console.log('Started...');
  }

  StopGame() {
    clearInterval(this.intervalID);
    console.log('Stopped...');
  }
}
