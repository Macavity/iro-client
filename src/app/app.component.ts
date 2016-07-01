/*
 * Angular 2 decorators and services
 */
import {
    Component,
    ViewEncapsulation,
    ViewChild,
    OnInit,
    ElementRef
} from '@angular/core';

import { AppState } from './app.service';

// General

// Layout
import { UserService } from './modules/user/user.service';
import { SidebarComponent } from './modules/layout/sidebar/sidebar.component';
import { NavbarTopComponent } from './modules/layout/navbar-top/navbar-top.component';

/*
 * App Component
 * Top Level Component
 */
@Component(<any> {
    selector: 'app',
    directives: [
        NavbarTopComponent,
        SidebarComponent
    ],
    encapsulation: ViewEncapsulation.None,
    template: require('./modules/layout/layout-fixed.html')
})
export class App implements OnInit {
    loading = false;

    hideSidebar = false;

    @ViewChild('sidebar') sidebar: ElementRef;

    constructor(
        public appState: AppState,
        private userService: UserService
    ) {

    }

    ngOnInit() {
        console.log('Initial App State', this.appState.state);

    }

    toggleSidebar() {
        //let hideSidebar = this.appState.get('hideSidebar');
        console.log(this.hideSidebar);
        if (this.hideSidebar) {
            this.hideSidebar = false;
        } else {
            this.hideSidebar = true;
        }
    }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
