
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

    topnav: NavigationEntry[];
    sidebar: NavigationEntry[];

    constructor(
        private userService: UserService
    ) {

        console.log("NavigationService", "isLoggedIn", this.userService.isLoggedIn);

        // TODO: Check activated modules and load navigation for each module

        this.topnav = [];


        this.sidebar = [
            new NavigationEntry("Cockpit", "/Cockpit", "", []),

            new NavigationEntry("Companies", "/CompanyList", "", [
                new NavigationEntry("My Clients", "/Clients/my", "")
            ]),

            new NavigationEntry("Candidates", "/Candidates", "", [
                new NavigationEntry("Merkliste", "", "")
            ]),
        ];

    }
}
