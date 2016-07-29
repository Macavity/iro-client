
import { Component, Input, Type } from '@angular/core';

import { NavigationEntry } from '../../modules/navigation/navigation.model';
import { NavigationService } from '../../modules/navigation/navigation.service';

@Component({
    selector: 'page-sidebar',
    template: require('./page-sidebar.html')
})
export class PageSidebarComponent {

    public entries: NavigationEntry[];

    constructor(
        private navigationService: NavigationService
    ) {
        this.entries = this.navigationService.sidebar;
    }
}
