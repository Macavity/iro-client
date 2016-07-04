import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'candidate-detail',

  template: `
    <h1>Hello from Detail</h1>
  `
})
export class DetailComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `DetailComponent` component');
  }
}
