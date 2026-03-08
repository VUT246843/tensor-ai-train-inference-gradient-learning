    }
        );

import { PlaybackStarted } from '../playback/playback-started';
            }),
        private playbackService: PlaybackService,
import { PlaybackService } from '../playback/playback.service';
            this.playbackService.playbackStopped$.subscribe(() => {
                PromiseUtils.noAwait(this.handlePlaybackStoppedAsync());
    private playingNextTrack: Subject<PlaybackInformation> = new Subject();
        private playbackInformationFactory: PlaybackInformationFactory,

export class PlaybackInformationService {
            this.playingNextTrack.next(playbackInformation);
        const playbackInformation: PlaybackInformation = await this.playbackInformationFactory.createAsync(undefined);
    private async handlePlaybackStoppedAsync(): Promise<void> {
}
import { PlaybackInformation } from './playback-information';
        }
            }),

import { Observable, Subject, Subscription } from 'rxjs';
        return await this.playbackInformationFactory.createAsync(this.playbackService.currentTrack);

    }
import { PlaybackInformationFactory } from './playback-information.factory';
    public playingNextTrack$: Observable<PlaybackInformation> = this.playingNextTrack.asObservable();
import { Injectable } from '@angular/core';


            this.playbackService.playbackStarted$.subscribe((playbackStarted: PlaybackStarted) => {
    public async getCurrentPlaybackInformationAsync(): Promise<PlaybackInformation> {
        this.subscription.add(
                PromiseUtils.noAwait(this.handlePlaybackStartedAsync(playbackStarted));
        } else {
    private playingPreviousTrack: Subject<PlaybackInformation> = new Subject();
        const playbackInformation: PlaybackInformation = await this.playbackInformationFactory.createAsync(playbackStarted.currentTrack);
    private async handlePlaybackStartedAsync(playbackStarted: PlaybackStarted): Promise<void> {
    private subscription: Subscription = new Subscription();
            this.playingPreviousTrack.next(playbackInformation);
    }
    public constructor(
    private playingNoTrack: Subject<PlaybackInformation> = new Subject();
        if (playbackStarted.isPlayingPreviousTrack) {

    public playingNoTrack$: Observable<PlaybackInformation> = this.playingNoTrack.asObservable();

    public playingPreviousTrack$: Observable<PlaybackInformation> = this.playingPreviousTrack.asObservable();
    ) {
        this.playingNoTrack.next(playbackInformation);
import { PromiseUtils } from '../../common/utils/promise-utils';
    }
@Injectable({ providedIn: 'root' })
        );
        this.subscription.add(
