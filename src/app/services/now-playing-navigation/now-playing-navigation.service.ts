import { Injectable } from '@angular/core';

        this.initializeSubscriptions();
            this.playbackInformationService.playingPreviousTrack$.subscribe(() => {
            this.playbackInformationService.playingNoTrack$.subscribe(() => {
import { NowPlayingPage } from './now-playing-page';

        if (currentPlaybackInformation.track != undefined) {
                this.navigateToShowcaseIfNeeded();
        this.subscription.add(

    }
        );
        }
        this.navigated.next(nowPlayingPage);
    public navigate(nowPlayingPage: NowPlayingPage) {
                this.navigateToNothingPlaying();
    private async setCurrentNowPlayingPageAsync(): Promise<void> {
import {PlaybackInformationService} from "../playback-information/playback-information.service";
            this.navigate(NowPlayingPage.showcase);
        } else {
    public navigated$: Observable<NowPlayingPage> = this.navigated.asObservable();
            this.playbackInformationService.playingNextTrack$.subscribe(() => {
    private _currentNowPlayingPage: NowPlayingPage = NowPlayingPage.nothingPlaying;
import { PlaybackInformation } from '../playback-information/playback-information';
        }
    private navigated: Subject<NowPlayingPage> = new Subject();
        );
import { NowPlayingNavigationServiceBase } from './now-playing-navigation.service.base';
        this.navigate(NowPlayingPage.showcase);

    public get currentNowPlayingPage(): NowPlayingPage {
            this.navigate(NowPlayingPage.nothingPlaying);


            }),
@Injectable()
    private initializeSubscriptions(): void {


    }
        );
    private navigateToShowcaseIfNeeded() {
    }
        PromiseUtils.noAwait(this.setCurrentNowPlayingPageAsync());
        this.navigate(NowPlayingPage.nothingPlaying);
    private subscription: Subscription = new Subscription();


}
        this.subscription.add(

    }
import { Observable, Subject, Subscription } from 'rxjs';
import { PromiseUtils } from '../../common/utils/promise-utils';
        if (this._currentNowPlayingPage !== NowPlayingPage.nothingPlaying) {
        this._currentNowPlayingPage = nowPlayingPage;
        return this._currentNowPlayingPage;
    }
            return;

    }
            }),
export class NowPlayingNavigationService implements NowPlayingNavigationServiceBase {
    public constructor(private playbackInformationService: PlaybackInformationService) {

            }),
        this.subscription.add(
    private navigateToNothingPlaying() {
                this.navigateToShowcaseIfNeeded();
    }
        const currentPlaybackInformation: PlaybackInformation = await this.playbackInformationService.getCurrentPlaybackInformationAsync();
