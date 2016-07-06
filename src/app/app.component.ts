/*
 * Angular 2 decorators and services
 */
import {
    Component,
    ViewEncapsulation,
    ViewChild,
    OnInit,
    ElementRef,
    Type
} from '@angular/core';

import { AppState } from './app.service';

// General

// Layout
import { UserService } from './modules/user/user.service';
import { SidebarComponent } from './layout/page-sidebar/sidebar.component';
import { NavbarTopComponent } from './layout/navbar-top/navbar-top.component';
import { Auth } from './modules/auth/auth.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'iro-app',
    directives: [
        <Type> NavbarTopComponent,
        <Type> SidebarComponent
    ],
    encapsulation: ViewEncapsulation.None,
    template: require('./layout/layout-fixed.html')
})
export class AppComponent implements OnInit {
    public loading: boolean = false;

    public sidebarCollapsed: boolean = false;

    @ViewChild('sidebar') sidebar: ElementRef;

    public constructor(
        public appState: AppState,
        private userService: UserService,
        private auth: Auth
    ) {

    }

    public ngOnInit(): void {
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
