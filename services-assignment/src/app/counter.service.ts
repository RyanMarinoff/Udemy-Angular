export class CounterService {
  toInactiveCounter = 0;
  toActiveCounter = 0;

  constructor() { }

  incrementInactiveCounter() {
    this.toInactiveCounter++;
    console.log(this.toInactiveCounter);
  }

  incrementActiveCounter() {
    this.toActiveCounter++;
    console.log(this.toActiveCounter);
  }
}
