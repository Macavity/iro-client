
import { Component, Input } from '@angular/core';

import { NavigationService } from '../../modules/navigation/navigation.service';
import { NavigationEntry } from '../../modules/navigation/navigation.model';
import { Language } from '../../modules/language/language.model';
import { User } from '../../modules/user/user';
import { Auth } from '../../modules/auth/auth.service';

@Component({
    selector: 'navbar-top',
    template: require('./navbar-top.html')
})
export class NavbarTopComponent {

    @Input() languages: Language[];
    @Input() isLoggedIn: boolean;
    @Input() user: User;

    public entries: NavigationEntry[];

    constructor(
        private navigationService: NavigationService,
        public auth: Auth
    ) {

        this.entries = this.navigationService.topnav;
    }

    toggleSidebar() {

    }
}
