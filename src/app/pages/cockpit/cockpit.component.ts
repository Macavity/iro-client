import { Component, OnInit } from '@angular/core';
import { Title } from '../../home/title/title.service';
import { XLarge } from '../../home/x-large/x-large.directive';
import { AppState } from '../../app.service';

@Component({
    selector: 'app-cockpit',
    moduleId: module.id,
    providers: [ Title ],
    directives: [
        <any> XLarge],
    pipes: [],
    styles: [],
    template: require('./cockpit.component.html')
})
export class CockpitComponent {

  constructor(public appState: AppState, public title: Title) {}

  ngOnInit() {
  }

}
