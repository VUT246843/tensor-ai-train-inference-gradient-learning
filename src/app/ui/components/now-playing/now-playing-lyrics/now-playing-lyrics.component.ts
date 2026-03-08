    private async showLyricsAsync(track: TrackModel | undefined): Promise<void> {
            return;
    }
        );
import { AppearanceServiceBase } from '../../../../services/appearance/appearance.service.base';

            this.playbackInformationService.playingNextTrack$.subscribe((playbackInformation: PlaybackInformation) => {
import { PlaybackInformationService } from '../../../../services/playback-information/playback-information.service';
    private subscription: Subscription = new Subscription();
        private lyricsService: LyricsServiceBase,
import { LyricsSourceType } from '../../../../common/api/lyrics/lyrics-source-type';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
        this.destroySubscriptions();
        return this._lyrics != undefined && !StringUtils.isNullOrWhiteSpace(this._lyrics.text);
    public largeFontSize: number = this.appearanceService.selectedFontSize * 1.7;
    }
        this.subscription.add(
    public lyricsSourceTypeEnum: typeof LyricsSourceType = LyricsSourceType;
            }),
import { StringUtils } from '../../../../common/utils/string-utils';
            this.playbackInformationService.playingNoTrack$.subscribe((playbackInformation: PlaybackInformation) => {
})
            }),
    ) {}
    }
import { LyricsModel } from '../../../../services/lyrics/lyrics-model';
    host: { style: 'display: block; width: 100%; height: 100%;' },
        this.subscription.unsubscribe();

        this.subscription.add(
        public settings: SettingsBase,

    public constructor(
    encapsulation: ViewEncapsulation.None,

        private playbackInformationService: PlaybackInformationService,
export class NowPlayingLyricsComponent implements OnInit, OnDestroy {

        );
    private _lyrics: LyricsModel | undefined;
                PromiseUtils.noAwait(this.showLyricsAsync(playbackInformation.track));
        return this._lyrics;

    }
    public ngOnDestroy(): void {
    styleUrls: ['./now-playing-lyrics.component.scss'],
        );
            this.playbackInformationService.playingPreviousTrack$.subscribe((playbackInformation: PlaybackInformation) => {
    private _isBusy: boolean = false;
    }
    public get hasLyrics(): boolean {
            return;
        }
        this._lyrics = await this.lyricsService.getLyricsAsync(track);

            this._lyrics = undefined;


        await this.showLyricsAsync(currentPlaybackInformation.track);
    }
import { TrackModel } from '../../../../services/track/track-model';
    private destroySubscriptions(): void {
    }

    private initializeSubscriptions(): void {
        if (this.previousTrackPath === track.path && this._lyrics != undefined) {

import { SettingsBase } from '../../../../common/settings/settings.base';

import { Subscription } from 'rxjs';
    public smallFontSize: number = this.appearanceService.selectedFontSize;
        return this._isBusy;
    selector: 'app-now-playing-lyrics',

        }

        this.initializeSubscriptions();
        private appearanceService: AppearanceServiceBase,
        this._isBusy = true;
        this.subscription.add(
        this.previousTrackPath = track.path;
    }
import { PromiseUtils } from '../../../../common/utils/promise-utils';
    public get isBusy(): boolean {
                PromiseUtils.noAwait(this.showLyricsAsync(playbackInformation.track));
    private previousTrackPath: string = '';
    public get lyrics(): LyricsModel | undefined {
            }),
@Component({
}
    public async ngOnInit(): Promise<void> {
        this._isBusy = false;
                PromiseUtils.noAwait(this.showLyricsAsync(playbackInformation.track));
        const currentPlaybackInformation: PlaybackInformation = await this.playbackInformationService.getCurrentPlaybackInformationAsync();
import { PlaybackInformation } from '../../../../services/playback-information/playback-information';
    templateUrl: './now-playing-lyrics.component.html',
        if (track == undefined) {

import { LyricsServiceBase } from '../../../../services/lyrics/lyrics.service.base';

