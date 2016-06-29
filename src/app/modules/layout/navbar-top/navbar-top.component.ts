
import { Component, Input } from '@angular/core';
import { Language } from '../../language/language.model';

import { NavigationService } from '../navigation/navigation.service';
import { NavigationEntry } from '../navigation/navigation.model';
import { User } from '../../user/user';

@Component({
    selector: 'navbar-top',
    template: require('./navbar-top.component.html')
})
export class NavbarTopComponent {

    @Input() languages: Language[];
    @Input() isLoggedIn: boolean;
    @Input() user: User;

    public entries: NavigationEntry[];

    constructor(
        private service: NavigationService
    ) {

        this.entries = this.service.topnav.getChildren();
    }

}
