    ],
@Component({
        private documentProxy: DocumentProxy,

    public ngOnInit(): void {
        const element: HTMLElement = this.documentProxy.getDocumentElement();
    public constructor(

        this.isExpanded = false;
            transition('collapsed => expanded', animate('150ms ease-in')),
    templateUrl: './notification-bar.component.html',

            this.showNotification(this.notificationService.notificationData!);
    }

        }
            this.notificationService.dismissNotification$.subscribe(() => {
    animations: [
        element.style.setProperty('--notification-bar-correction', '0px');
    private subscription: Subscription = new Subscription();
    ) {}
        );
import { NotificationServiceBase } from '../../../services/notification/notification.service.base';
        trigger('expandCollapse', [
                this.dismissNotification();
        private notificationService: NotificationServiceBase,
        if (this.notificationService.hasNotificationData) {
        );
import { NotificationData } from '../../../services/notification/notification-data';
            }),
            transition('expanded => collapsed', animate('150ms ease-out')),

        this.notificationData = notificationData;
import { DocumentProxy } from '../../../common/io/document-proxy';
                this.showNotification(notificationData);
            this.notificationService.showNotification$.subscribe((notificationData: NotificationData) => {
}
import { Subscription } from 'rxjs';
            state('collapsed', style({ height: '0', overflow: 'hidden' })),

    selector: 'app-notification-bar',

        this.isExpanded = true;
    public isExpanded = false;
    }
        const element: HTMLElement = this.documentProxy.getDocumentElement();
        this.subscription.add(
export class NotificationBarComponent implements OnInit {

        this.notificationService.dismiss();

            state('expanded', style({ height: '30px' })),
    private dismissNotification(): void {
            }),
    }
    public dismiss(): void {
        element.style.setProperty('--notification-bar-correction', '30px');
        ]),
    public notificationData: NotificationData | undefined = undefined;
    private showNotification(notificationData: NotificationData): void {
    styleUrls: ['./notification-bar.component.scss'],
})
    }
import { Component, OnInit } from '@angular/core';

        this.subscription.add(
import { animate, state, style, transition, trigger } from '@angular/animations';
