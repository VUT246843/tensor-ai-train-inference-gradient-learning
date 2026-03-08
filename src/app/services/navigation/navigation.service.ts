




        public router: Router,
        await this.router.navigate(['/settings']);
@Injectable()
    public refreshPlaybackQueueList(): void {
    }
    private refreshPlaybackQueueListRequested: Subject<void> = new Subject();
        await this.router.navigate(['/loading']);
    }
import { Router } from '@angular/router';
    public async navigateToInformationAsync(): Promise<void> {
    public constructor(

import { Observable, Subject } from 'rxjs';
    }
    public async navigateToSettingsAsync(): Promise<void> {


        this.appearanceService.applyMargins(true);
    ) {}

    }
        private appearanceService: AppearanceServiceBase,
        await this.router.navigate(['/coverplayer']);
        this.refreshPlaybackQueueListRequested.next();
        this.showPlaybackQueueRequested.next();
        await this.router.navigate(['/managecollection']);


    }
        this.appearanceService.applyMargins(false);

        await this.router.navigate(['/welcome']);
    }
    }
    public async navigateToHighlightsAsync(): Promise<void> {
import { NavigationServiceBase } from './navigation.service.base';
        this.refreshPlaybackQueueListRequested.next();
    }
export class NavigationService implements NavigationServiceBase {
    public showPlaybackQueueRequested$: Observable<void> = this.showPlaybackQueueRequested.asObservable();

    public async navigateToWelcomeAsync(): Promise<void> {
    public async navigateToCoverPlayerAsync(): Promise<void> {

    public async navigateToLoadingAsync(): Promise<void> {
}
    }
    public async navigateToManageCollectionAsync(): Promise<void> {
    }
    public async navigateToCollectionAsync(): Promise<void> {
    public showPlaybackQueue(): void {
    private showPlaybackQueueRequested: Subject<void> = new Subject();
    public refreshPlaybackQueueListRequested$: Observable<void> = this.refreshPlaybackQueueListRequested.asObservable();
        await this.router.navigate(['/nowplaying']);
        this.appearanceService.applyMargins(false);
    }
        await this.router.navigate(['/collection']);
        await this.router.navigate(['/information']);
import { Injectable } from '@angular/core';
    public async navigateToNowPlayingAsync(): Promise<void> {
import { AppearanceServiceBase } from '../appearance/appearance.service.base';
        await this.router.navigate(['/highlights']);
