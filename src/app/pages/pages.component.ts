import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { PageSidebarComponent } from "../components/page-sidebar/page-sidebar.component";

@Component({
    selector: 'pages-wrapper',
    encapsulation: ViewEncapsulation.None,
    styles: [],
    directives: [ PageSidebarComponent ],
    template: require('./pages.html')
})
export class PagesComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
