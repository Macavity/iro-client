import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.service';

@Component({
    moduleId: module.id,
    selector: 'app-login',
    styles: [
        '.login-form { width: 320px; margin: 0 auto 20px auto; }'
    ],
    template: require('./login.component.html')
})
export class LoginComponent implements OnInit {

  constructor(public appState: AppState) {
      this.appState.set('hideSidebar', true);
  }

  ngOnInit() {
  }

}
