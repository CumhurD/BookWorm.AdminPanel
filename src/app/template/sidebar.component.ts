import {Component} from '@angular/core';

import {pages} from 'app/app.router';

@Component({
    selector: "sidebar",
    templateUrl: "sidebar.component.html"
})
export class SidebarComponent{
    private main = {
        toggle: {},
        page: {}
    };
    private pages = pages;
    private routerLinkOptions = {exact: true};
}