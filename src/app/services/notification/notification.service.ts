
        const message: string = await this.translatorService.getAsync('last-fm-login-failed');
        this.dismiss();
            numberOfAddedTracks: numberOfAddedTracks,
    public async singleTrackAddedToPlaybackQueueAsync(): Promise<void> {
    }
    public get hasNotificationData(): boolean {
        });
import { Injectable } from '@angular/core';
        const message: string = await this.translatorService.getAsync('added-tracks', {



    }
    }

    }
    }
    public async removingTracksAsync(): Promise<void> {

            percentageOfAddedTracks: percentageOfAddedTracks,
import { NotificationServiceBase } from './notification.service.base';


        });
        await this.scheduler.sleepAsync(this.calculateDuration(message));
            playlistName: playlistName,
        this._notificationData = undefined;
    private showNotification: Subject<NotificationData> = new Subject();
    public async updatingAlbumArtworkAsync(): Promise<void> {
        this.dismissNotification.next();
        return Math.min(Math.max(message.length * 100, 2000), 7000);
        await this.showSelfClosingNotificationAsync('las la-folder', message, false);
    public async addedTracksAsync(numberOfAddedTracks: number, percentageOfAddedTracks: number): Promise<void> {
        private scheduler: SchedulerBase,
    public async multipleTracksAddedToPlaylistAsync(playlistName: string, numberOfAddedTracks: number): Promise<void> {
        const message: string = await this.translatorService.getAsync('multiple-tracks-added-to-playback-queue', {

        return this._notificationData;
    ) {}
    public async refreshing(): Promise<void> {
    public async multipleTracksAddedToPlaybackQueueAsync(numberOfAddedTracks: number): Promise<void> {
        await this.showSelfClosingNotificationAsync('las la-check', message, false);
    public async singleTrackAddedToPlaylistAsync(playlistName: string): Promise<void> {
            numberOfAddedTracks: numberOfAddedTracks,
        // We assume a safe reading speed of 150 words per minute and an average of 5.8 characters per word in the English language.
        const message: string = await this.translatorService.getAsync('single-track-added-to-playlist', {
    }
        const message: string = await this.translatorService.getAsync('updating-tracks');
        await this.showSelfClosingNotificationAsync('las la-frown', message, false);
        private translatorService: TranslatorServiceBase,
import { Observable, Subject } from 'rxjs';
    }

    private _notificationData: NotificationData | undefined;
    }
        this.showNotification.next(this._notificationData);
    public async lastFmLoginFailedAsync(): Promise<void> {
    public get notificationData(): NotificationData | undefined {
        const message: string = await this.translatorService.getAsync('multiple-tracks-added-to-playlist', {
        return this._notificationData != undefined;


        const message: string = await this.translatorService.getAsync('updating-album-artwork');
    }
import { SchedulerBase } from '../../common/scheduling/scheduler.base';
    public async updatingTracksAsync(): Promise<void> {
            playlistName: playlistName,
    }

import { NotificationData } from './notification-data';
    }
        const message: string = await this.translatorService.getAsync('single-track-added-to-playback-queue');
        this.showNotification.next(this._notificationData);

    }
        });

        const message: string = await this.translatorService.getAsync('refreshing');


    }
        // See: https://ux.stackexchange.com/questions/11203/how-long-should-a-temporary-notification-toast-appear
        this._notificationData = new NotificationData(icon, message, animateIcon, false);
        this.showDismissibleNotification('las la-sync', message, true, false);


    private calculateDuration(message: string): number {

    public showNotification$: Observable<NotificationData> = this.showNotification.asObservable();
        // Then, approx. 1 character is read every 70 milliseconds. Adding a margin of 30 milliseconds, gives us 100 ms.
    public dismissNotification$: Observable<void> = this.dismissNotification.asObservable();
        await this.showSelfClosingNotificationAsync('las la-check', message, false);
        this.showDismissibleNotification('las la-sync', message, true, false);
    public constructor(
@Injectable()
        this.showDismissibleNotification('las la-sync', message, true, false);
    }
            numberOfAddedTracks: numberOfAddedTracks,
    private showDismissibleNotification(icon: string, message: string, animateIcon: boolean, showCloseButton: boolean): void {
    }

}
    private dismissNotification: Subject<void> = new Subject();
    private async showSelfClosingNotificationAsync(icon: string, message: string, animateIcon: boolean): Promise<void> {
    }
        this._notificationData = new NotificationData(icon, message, animateIcon, showCloseButton);

        await this.showSelfClosingNotificationAsync('las la-check', message, false);
        await this.showSelfClosingNotificationAsync('las la-check', message, false);
        const message: string = await this.translatorService.getAsync('removing-tracks');
    public async folderAlreadyAddedAsync(): Promise<void> {
        });
import { TranslatorServiceBase } from '../translator/translator.service.base';
        this.showDismissibleNotification('las la-sync', message, true, false);

        this.showDismissibleNotification('las la-sync', message, true, false);
    public dismiss(): void {

    }
export class NotificationService implements NotificationServiceBase {
        const message: string = await this.translatorService.getAsync('folder-already-added');
