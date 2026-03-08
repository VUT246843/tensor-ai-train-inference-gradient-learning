    }
@Injectable({ providedIn: 'root' })
        private playbackInformationFactory: PlaybackInformationFactory,

    public initialize(): void {
        this.mediaSessionProxy.setActionHandler('play', () => this.playEvent.next());
import { PlaybackInformationFactory } from '../playback-information/playback-information.factory';
        private mediaSessionProxy: MediaSessionProxy,
import { TrackModel } from '../track/track-model';
    public pauseEvent$: Observable<void> = this.pauseEvent.asObservable();
        this.mediaSessionProxy.setActionHandler('previoustrack', () => this.previousTrackEvent.next());
    public nextTrackEvent$: Observable<void> = this.nextTrackEvent.asObservable();
import { Injectable } from '@angular/core';

    private pauseEvent = new Subject<void>();
}
        );
import { MediaSessionProxy } from '../../common/io/media-session-proxy';
            playbackInformation.track?.title ?? '',
            playbackInformation.imageUrl,
    }
            playbackInformation.track?.artists ?? '',
        this.mediaSessionProxy.setMetadata(
    public previousTrackEvent$: Observable<void> = this.previousTrackEvent.asObservable();
        const playbackInformation: PlaybackInformation = await this.playbackInformationFactory.createAsync(track);
export class MediaSessionService {
            playbackInformation.track?.albumTitle ?? '',
import { Observable, Subject } from 'rxjs';
    private nextTrackEvent = new Subject<void>();
    public playEvent$: Observable<void> = this.playEvent.asObservable();

    public async setMetadataAsync(track: TrackModel): Promise<void> {
        this.mediaSessionProxy.setActionHandler('nexttrack', () => this.nextTrackEvent.next());
import { PlaybackInformation } from '../playback-information/playback-information';
        this.mediaSessionProxy.setActionHandler('pause', () => this.pauseEvent.next());

    ) {}


    private playEvent = new Subject<void>();
    public constructor(
    private previousTrackEvent = new Subject<void>();
