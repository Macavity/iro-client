
import { Component, Input } from '@angular/core';
import { Language } from '../../language/language.model';

import { NavigationService } from '../navigation/navigation.service';
import { NavigationEntry } from '../navigation/navigation.model';

@Component({
    selector: 'navbar-top',
    template: require('./navbar-top.component.html')
})
export class NavbarTopComponent {

    @Input() languages: Language[];

    public entries: NavigationEntry[];

    constructor(
        private service: NavigationService
    ) {
        this.entries = this.service.topnav.getChildren();
    }

}
