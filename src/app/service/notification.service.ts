import { Injectable, Component } from '@angular/core';
import { Http, RequestOptions} from '@angular/http';

@Injectable()
export class NotificationService {
    constructor(private $http: Http) {

    }

    getNotifications() {
        return this.$http.get('notifications');
    }

    getNotificationDetail(notificationId: string) {
        return this.$http.get('notifications' + notificationId);
    }
}