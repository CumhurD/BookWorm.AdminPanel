import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { NotificationService } from 'app/service/notification.service';

@Component({
    selector: "navbar",
    templateUrl: "./navbar.component.html"
})
export class NavbarComponent {
    private notifications = [];

    constructor(private notificationService: NotificationService) {
        this.initializeNotifications();
    }

    initializeNotifications() {
        this.notificationService.getNotifications().subscribe(response => {
            this.notifications = response.json();
        });
    }
}