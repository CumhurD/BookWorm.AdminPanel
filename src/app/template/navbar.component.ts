import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { NotificationService } from 'app/service/notification.service';

@Component({
    selector: "navbar",
    templateUrl: "./navbar.component.html"
})
export class NavbarComponent implements OnInit, OnDestroy {
    private notifications = [];
    private notificationInterval: any;
    private notificationRefreshInterval: number = 10000;

    constructor(private $notificationService: NotificationService) {
    }

    ngOnInit() {
        this.initializeNotifications();
        
        this.notificationInterval = setInterval(() => {
            this.initializeNotifications();
        }, this.notificationRefreshInterval);
    }

    ngOnDestroy() {
        clearInterval(this.notificationInterval);
    }

    initializeNotifications() {
        this.$notificationService.getNotifications().subscribe(response => {
            console.log('notifications refreshed');
            this.notifications = response.json();
        });
    }
}