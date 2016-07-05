
import { Component, Input } from '@angular/core';

import { NavigationEntry } from '../navigation/navigation.model';
import { NavigationService } from '../navigation/navigation.service';

@Component({
    selector: 'iro-sidebar',
    template: require('./sidebar.component.html')
})
export class SidebarComponent {

    public entries: NavigationEntry[];

    constructor(
        private service: NavigationService
    ) {
        this.entries = this.service.sidebar.getChildren();
    }
}
