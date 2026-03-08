    public get flexJustifyClass(): string {

        switch (this.position) {
                return `ellipsis-two-lines ${this.getSmallFontColorClass()} ${this.getSmallFontWeightClass()}`.trim();
            }),
            }
        if (performAnimation) {
                this.contentAnimation = 'up';

        if (this.contentAnimation !== 'down') {

                return `ellipsis ${this.getLargeFontWeightClass()}`.trim();
                'animated-down',
            }
        if (this.smallFontSize >= 20) {
            return 'thinner';
    public topContentTrack: TrackModel | undefined;
            this.playbackInformationService.playingNextTrack$.subscribe((playbackInformation: PlaybackInformation) => {
            }),

        return '';

            }),


            ),
        }
    }
    public contentAnimation: string = 'down';
                return 'justify-content-flex-end';
                return 'justify-content-center';
                style({
        }

            default: {
        } else {
            state(
import { PlaybackInformation } from '../../../services/playback-information/playback-information';
                    transform: 'translateY(0px)',
        }
        }
            this.contentAnimation = 'animated-down';
import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
                'down',
            this.currentTrack.love = track.love;
        if (track != undefined) {
        }
    @Input()
                    transform: 'translateY(-100%)',
    ],
            await this.scheduler.sleepAsync(Constants.playbackInfoSwitchAnimationMilliseconds);
                void this.switchToCurrentPlaybackInformation();
        switch (this.position) {
            this.metadataService.loveSaved$.subscribe((track: TrackModel) => {

            state(
        switch (this.position) {
        const currentPlaybackInformation: PlaybackInformation = await this.playbackInformationService.getCurrentPlaybackInformationAsync();
            }),
            default: {
        await this.switchDown(currentPlaybackInformation.track, false);

    public showLove: boolean = false;
                style({

            }
    public largeFontSize: number = 0;
            case 'center': {
            }
            }),
                return `ellipsis-two-lines ${this.getLargeFontWeightClass()}`.trim();


            newTrack = track;
                    void this.switchUp(playbackInformation.track);
                void this.switchDown(playbackInformation.track, true);
    public smallFontSize: number = 0;


        this.currentTrack = newTrack;
                }, 150);
    public ngOnDestroy(): void {
    }

        if (performAnimation) {
export class PlaybackInformationComponent implements OnInit, OnDestroy {
    }
            transition('up => animated-down', animate(`${Constants.playbackInfoSwitchAnimationMilliseconds}ms ease-out`)),
            case 'center': {
        await this.switchDown(currentPlaybackInformation.track, false);
})
        private metadataService: MetadataService,
            case 'top': {
        trigger('contentAnimation', [
    public bottomContentTrack: TrackModel | undefined;
    }
    @Input()
        this.subscription.add(
            case 'bottom': {
            default: {
                this.bottomContentTrack = this.currentTrack;
}

                    transform: 'translateY(0px)',
        }

import { Constants } from '../../../common/application/constants';
    private async switchDown(track: TrackModel | undefined, performAnimation: boolean): Promise<void> {
    public constructor(
        this.contentAnimation = 'animated-up';

import { animate, state, style, transition, trigger } from '@angular/animations';
    public async ngOnInit(): Promise<void> {
        const currentPlaybackInformation: PlaybackInformation = await this.playbackInformationService.getCurrentPlaybackInformationAsync();

        ]),
            }
    }

        private scheduler: SchedulerBase,
                style({
        }
        );
    @Input()
            transition('down => animated-up', animate(`${Constants.playbackInfoSwitchAnimationMilliseconds}ms ease-out`)),
    }
        this.subscription.add(
        this.subscription.unsubscribe();
        );
                return 'justify-content-flex-start';
                }),



                void this.switchUp(playbackInformation.track);
            this.playbackInformationService.playingPreviousTrack$.subscribe((playbackInformation: PlaybackInformation) => {
        this.subscription.add(
                }),
                style({
    }

        }
import { PlaybackInformationService } from '../../../services/playback-information/playback-information.service';
        if (this.currentTrack != undefined && this.currentTrack.path === track.path) {
            this.topContentTrack = this.currentTrack;
        }
        let newTrack: TrackModel | undefined;
            return '';
                'up',



        );
            }
import { Subscription } from 'rxjs';
        }
        }
            state(
@Component({
    }
        }
        }
    }
import { IndexingService } from '../../../services/indexing/indexing.service';

    selector: 'app-playback-information',
            }
        this.currentTrack = newTrack;
        await this.scheduler.sleepAsync(Constants.playbackInfoSwitchAnimationMilliseconds);
    ) {}
                return 'justify-content-flex-end';
        } else {
            this.contentAnimation = 'down';
    @Input()

    }
                }),
    public highContrast: boolean = false;
                return `ellipsis-two-lines ${this.getSmallFontColorClass()} ${this.getSmallFontWeightClass()}`.trim();
        if (this.highContrast) {
            this.indexingService.indexingFinished$.subscribe(() => {
        this.subscription.add(
            case 'bottom': {


            }
    }
                this.setLove(track);
        private playbackInformationService: PlaybackInformationService,
            ),
    private subscription: Subscription = new Subscription();
            await this.scheduler.sleepAsync(100);
                'animated-up',
                }),
    private getSmallFontWeightClass(): string {
        );
                // if the next track fails to play before its animation completes.
            case 'center': {
    public height: number = 0;
            ),
                await this.scheduler.sleepAsync(100);
        );
    private async switchUp(track: TrackModel | undefined): Promise<void> {
            if (this.contentAnimation !== 'up') {
            this.currentTrack.rating = track.rating;
import { TrackModel } from '../../../services/track/track-model';
import { SchedulerBase } from '../../../common/scheduling/scheduler.base';
            newTrack = track;
        if (track != undefined) {
                this.setRating(track);
        this.subscription.add(
            }
    private currentTrack: TrackModel | undefined;
    @Input()
            case 'top': {
    public get smallFontClasses(): string {
    encapsulation: ViewEncapsulation.None,
    animations: [
    public showRating: boolean = false;

    public get largeFontClasses(): string {
                return `ellipsis-two-lines ${this.getLargeFontWeightClass()}`.trim();
        this.topContentTrack = newTrack;
        this.bottomContentTrack = newTrack;
                return `ellipsis ${this.getLargeFontWeightClass()}`.trim();
        if (this.largeFontSize >= 20) {

    }
    public position: string = 'bottom';
    private async switchToCurrentPlaybackInformation(): Promise<void> {
    public getSmallFontColorClass(): string {
    @Input()
import { MetadataService } from '../../../services/metadata/metadata.service';

    private setLove(track: TrackModel): void {

        );
        this.subscription.add(

    host: { style: 'display: block' },
    private setRating(track: TrackModel): void {

            state(
        if (this.currentTrack != undefined && this.currentTrack.path === track.path) {
            this.playbackInformationService.playingNoTrack$.subscribe((playbackInformation: PlaybackInformation) => {

    styleUrls: ['./playback-information.component.scss'],
        let newTrack: TrackModel | undefined;


                return `ellipsis ${this.getSmallFontColorClass()} ${this.getSmallFontWeightClass()}`.trim();
                    transform: 'translateY(-100%)',
            return 'thinner';
            }
    templateUrl: './playback-information.component.html',
            }
            }
    private getLargeFontWeightClass(): string {
    @Input()
            this.contentAnimation = 'down';
        private indexingService: IndexingService,
            case 'top': {

            case 'bottom': {
                return `ellipsis ${this.getSmallFontColorClass()} ${this.getSmallFontWeightClass()}`.trim();
                // Without this delay, the previous track’s information might remain visible
            }
            }),
            this.metadataService.ratingSaved$.subscribe((track: TrackModel) => {

                setTimeout(() => {
    }
            ),
        return '';
            return 'secondary-text';
