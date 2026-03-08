        );
        this.subscription.unsubscribe();
    public ngOnDestroy(): void {
    private _artist: ArtistInformation = ArtistInformation.empty();
        await this.showArtistInfoAsync(this.playbackService.currentTrack);
}
        this.subscription.add(
        this._artist = await this.artistInformationService.getArtistInformationAsync(track);
@Component({
    templateUrl: './now-playing-artist-info.component.html',
        return this._isBusy;
import { TrackModel } from '../../../../services/track/track-model';

import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
    private destroySubscriptions(): void {
    ) {}

    public get artist(): ArtistInformation {
import { PlaybackStarted } from '../../../../services/playback/playback-started';

    }
        this._artist = this.artistInformationService.getQuickArtistInformation(track);
            return;
export class NowPlayingArtistInfoComponent implements OnInit, OnDestroy {
    selector: 'app-now-playing-artist-info',
        }
    private async showArtistInfoAsync(track: TrackModel | undefined): Promise<void> {
        this.previousArtistName = track.rawFirstArtist;

        }
    private previousArtistName: string = '';

                PromiseUtils.noAwait(this.showArtistInfoAsync(playbackStarted.currentTrack)),
    styleUrls: ['./now-playing-artist-info.component.scss'],
            this._artist = ArtistInformation.empty();
    }

    private subscription: Subscription = new Subscription();
            this.playbackService.playbackStarted$.subscribe((playbackStarted: PlaybackStarted) =>
import { StringUtils } from '../../../../common/utils/string-utils';


        if (!StringUtils.isNullOrWhiteSpace(track.rawFirstArtist) && this.previousArtistName === track.rawFirstArtist) {
import { PromiseUtils } from '../../../../common/utils/promise-utils';

            return;
import { PlaybackService } from '../../../../services/playback/playback.service';
import { ArtistInformation } from '../../../../services/artist-information/artist-information';

    }
import { ArtistInformationServiceBase } from '../../../../services/artist-information/artist-information.service.base';
    }
        return this._artist;
        this._isBusy = false;
    }
        if (track == undefined) {
    private _isBusy: boolean = false;
    private initializeSubscriptions(): void {
        public settings: SettingsBase,
        private playbackService: PlaybackService,
    public constructor(



    }
    encapsulation: ViewEncapsulation.None,
    host: { style: 'display: block; width: 100%; height: 100%;' },
            ),
    }
import { Subscription } from 'rxjs';
        this.initializeSubscriptions();
        private artistInformationService: ArtistInformationServiceBase,
    public get isBusy(): boolean {
        this.destroySubscriptions();
        this._isBusy = true;
import { SettingsBase } from '../../../../common/settings/settings.base';
    public async ngOnInit(): Promise<void> {
})
