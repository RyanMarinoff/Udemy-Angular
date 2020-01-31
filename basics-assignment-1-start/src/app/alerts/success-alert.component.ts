import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
  <div class="alert alert-info alert-dismissible show" role="alert">
    Success
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  `,
  styles: [ '.alert-info { color: Green; }' ]
})
export class SuccessAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
