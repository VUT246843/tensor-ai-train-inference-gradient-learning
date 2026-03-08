
    }
        private playbackService: PlaybackService,
    host: { style: 'display: block; width: 100%; height: 100%;' },
@Component({
export class NowPlayingNothingPlayingComponent {

    templateUrl: './now-playing-nothing-playing.component.html',
    }
    public async playAllAsync(): Promise<void> {
    encapsulation: ViewEncapsulation.None,
        private trackService: TrackServiceBase,
        await this.playbackService.enqueueAndPlayTracksAsync(tracks.tracks);
        this.playbackService.forceShuffled();
        await this.playbackService.enqueueAndPlayTracksAsync(tracks.tracks);
        const tracks: TrackModels = this.trackService.getVisibleTracks();
﻿import { Component, ViewEncapsulation } from '@angular/core';
    public constructor(
    public async shuffleAllAsync(): Promise<void> {
    ) {}
import { TrackServiceBase } from '../../../../services/track/track.service.base';
})
        const tracks: TrackModels = this.trackService.getVisibleTracks();

}
    selector: 'app-now-playing-nothing-playing',
    styleUrls: ['./now-playing-nothing-playing.component.scss'],
import { TrackModels } from '../../../../services/track/track-models';
import { PlaybackService } from '../../../../services/playback/playback.service';
