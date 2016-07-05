import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'detail-index',
  template: `
    <h1>Hello from DetailIndex</h1>
  `
})
export class DetailIndexComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Index` component');
  }

}
