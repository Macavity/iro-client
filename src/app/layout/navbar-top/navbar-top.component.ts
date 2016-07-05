
import { Component, Input } from '@angular/core';

import { NavigationService } from '../../modules/navigation/navigation.service';
import { NavigationEntry } from '../../modules/navigation/navigation.model';
import { Language } from '../../modules/language/language.model';
import { User } from '../../modules/user/user';

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
    
    toggleSidebar() {
        
    }
}
