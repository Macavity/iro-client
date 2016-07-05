import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.service';

@Component({
    selector: 'app-cockpit',
    moduleId: module.id,
    providers: [ ],
    directives: [ ],
    pipes: [],
    styles: [],
    template: require('./cockpit.component.html')
})
export class CockpitComponent implements OnInit {

  constructor(public appState: AppState) {}

  ngOnInit() {
      
  }

}
