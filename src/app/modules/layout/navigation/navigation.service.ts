
import { Input, Injectable } from "@angular/core";
import { Navigation, NavigationCategory, NavigationEntry } from './navigation.model';
import { User } from '../../user/user';

/**
 * NavigationService
 * - TODO Make Navigation configurable by client installation
 * - TODO Make Navigation entries configurable by user role
 */
@Injectable()
export class NavigationService {

    @Input isLoggedIn: boolean = false;
    @Input currentUser: User;

    topnav: Navigation;
    sidebar: Navigation;

    constructor() {

        if (this.isLoggedIn) {
            this.topnav = new Navigation([

            ]);
        } else {
            this.topnav = new Navigation([
                new NavigationEntry("Login", "/Login", "icon-user"),
            ]);
        }

        this.sidebar = new Navigation([
            new NavigationEntry("Cockpit", "/Cockpit", "", []),

            new NavigationEntry("Companies", "/CompanyList", "", [
                new NavigationEntry("My Clients", "/Clients/my", "")
            ]),

            new NavigationEntry("Candidates", "/Candidates", "", [
                new NavigationEntry("Merkliste", "", "")
            ]),
        ]);

    }
}
