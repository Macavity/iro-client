import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'candidate-detail',
    directives: [
        ...ROUTER_DIRECTIVES
    ],

  template: `
    <router-outlet></router-outlet>
  `
})
export class DetailComponent implements OnInit {
  constructor() {

  }

  ngOnInit() {
    console.log('hello `DetailComponent` component');
  }
    
}
