/*
 * Angular 2 decorators and services
 */
import { Component, Type, ViewEncapsulation, OnInit } from '@angular/core';
import { RouteConfig, Router, RouteDefinition } from '@angular/router-deprecated';

import { AppState } from './app.service';
import { Home } from './home/home.component';
import { RouterActive } from './router-active/router-active.directive';

// General
import { ApiService } from './modules/api/api.service';
import { Language } from './modules/language/language.model';
import { LanguageService } from './modules/language/language.service';

// Layout
import { SidebarComponent } from './modules/layout/sidebar/sidebar.component';
import { NavbarTopComponent } from './modules/layout/navbar-top/navbar-top.component';
import { NavigationService } from './modules/layout/navigation/navigation.service';

// User
import { User } from './modules/user/user';
import { UserService } from './modules/user/user.service';
import { CockpitComponent } from './modules/cockpit/cockpit.component';
import {LoginComponent} from './modules/login/login.component';


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
        UserService,
        NavigationService
    ],
    directives: [
        RouterActive,
        NavbarTopComponent,
        SidebarComponent
    ],
    encapsulation: ViewEncapsulation.None,
    template: require('./modules/layout/layout-fixed.html')
})
@RouteConfig( <Array<RouteDefinition>> [
    {
        path: '/',
        name: 'Index',
        component: Home,
        useAsDefault: true
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: CockpitComponent
    },
    // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
    { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') }
])
export class App implements OnInit {
    angularclassLogo = 'assets/img/angularclass-avatar.png';
    loading = false;
    name = 'Angular 2 Webpack Starter';
    url = 'https://twitter.com/AngularClass';

    isLoggedIn: boolean;
    user: User;

    languages: Language[];


    constructor(
        public appState: AppState,
        private userService: UserService
    ) {

    }

    ngOnInit() {
        console.log('Initial App State', this.appState.state);

        this.isLoggedIn = this.userService.isLoggedIn.value;

        this.appState.state().hideSidebar.subscribe();

    }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
