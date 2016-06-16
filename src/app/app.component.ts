/*
 * Angular 2 decorators and services
 */
import { Component, Type, ViewEncapsulation, OnInit } from '@angular/core';
import { RouteConfig, Router } from '@angular/router-deprecated';

import { AppState } from './app.service';
import { Home } from './home/home.component';
import { RouterActive } from './router-active/router-active.directive';
import { Language } from './modules/language/language.model';

import { SidebarComponent } from './modules/layout/sidebar/sidebar.component';
import { NavbarTopComponent } from './modules/layout/navbar-top/navbar-top.component';

import { ApiService } from './modules/api/api.service';
import { LanguageService } from './modules/language/language.service';
import { UserService } from './modules/user/user.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    pipes: [ ],
    providers: [
        ApiService,
        LanguageService,
        UserService
    ],
    directives: [
        <Type> RouterActive,
        <Type> NavbarTopComponent,
        <Type> SidebarComponent
    ],
    encapsulation: ViewEncapsulation.None,
    template: require('./modules/layout/layout-fixed.html')
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  { path: '/dashboard',
      name: 'Dashboard',
      component: Home },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') }
])
export class App implements OnInit {
    angularclassLogo = 'assets/img/angularclass-avatar.png';
    loading = false;
    name = 'Angular 2 Webpack Starter';
    url = 'https://twitter.com/AngularClass';

    languages: Language[];

    constructor(
        public appState: AppState) {

    }

    ngOnInit() {
        console.log('Initial App State', this.appState.state);
    }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
