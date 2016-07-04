import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'detail-index',
  directives: [
    ...ROUTER_DIRECTIVES
  ],
  template: `
    <router-outlet></router-outlet>
  `
})
export class DetailIndexComponent implements OnInit{
  constructor() {

  }

  ngOnInit() {
    console.log('hello `Index` component');
  }

}
