
import { Input, Injectable } from "@angular/core";
import { Navigation, NavigationCategory, NavigationEntry } from './navigation.model';
import { UserService } from '../user/user.service';

/**
 * NavigationService
 * - TODO Make Navigation configurable by client installation
 * - TODO Make Navigation entries configurable by user role
 */
@Injectable()
export class NavigationService {

    topnav: Navigation;
    sidebar: Navigation;

    constructor(
        private userService: UserService
    ) {

        console.log("NavigationService", "isLoggedIn", this.userService.isLoggedIn);

        if (this.userService.isLoggedIn.value) {
            this.topnav = new Navigation([
                new NavigationEntry("Account", "/Account", "icon-user"),
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
