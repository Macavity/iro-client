import { Component, OnInit } from '@angular/core';
import { Title } from '../home/title/title.service';
import { AppState } from '../../app.service';

@Component({
    selector: 'app-cockpit',
    moduleId: module.id,
    providers: [ Title ],
    directives: [ ],
    pipes: [],
    styles: [],
    template: require('./cockpit.component.html')
})
export class CockpitComponent implements OnInit {

  constructor(public appState: AppState, public title: Title) {}

  ngOnInit() {
  }

}
