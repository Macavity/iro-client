
import { Component, Input } from '@angular/core';

import { NavigationEntry } from '../../modules/navigation/navigation.model';
import { NavigationService } from '../../modules/navigation/navigation.service';

@Component({
    selector: 'page-sidebar',
    template: require('./sidebar.component.html')
})
export class SidebarComponent {

    public entries: NavigationEntry[];

    constructor(
        private navigationService: NavigationService
    ) {
        this.entries = this.navigationService.sidebar;
    }
}
