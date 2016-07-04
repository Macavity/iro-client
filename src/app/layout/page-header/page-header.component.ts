
import { Component, Input } from "@angular/core";

@Component({
    selector: 'page-header',
    template: require('./page-header.html')
})
export class PageHeaderComponent {

    @Input() title: string;
    @Input() subtitle: string;

    @Input() buttons: IButton[];
    @Input() breadcrumb: IBreadcrumbItem[];

    constructor() {

    }
}

interface IButton {
    label: string;
    icon?: string;
    routeName?: string;
}

interface IBreadcrumbItem {
    label: string;
    routeName?: string;
    active?: boolean;
}
