            }),
    public contentAnimation: string = 'down';


                // Without this delay, the previous track’s image might remain visible
            }
                    transform: 'translateY(-100%)',
    host: { style: 'display: block' },
            ),
import { PlaybackInformationService } from '../../../services/playback-information/playback-information.service';



        this.subscription.add(
            }),
    private subscription: Subscription = new Subscription();
export class PlaybackCoverArtComponent implements OnInit, OnDestroy {
                }, 150);
            if (this.contentAnimation !== 'up') {
    }
                    transform: 'translateY(-100%)',

                'up',

        const currentPlaybackInformation: PlaybackInformation = await this.playbackInformationService.getCurrentPlaybackInformationAsync();
    private async switchToCurrentPlaybackInformation(): Promise<void> {
            return 'app-playback-cover-art__content-background';
                    transform: 'translateY(0px)',
        } else {
            state(
    }
            ),
            this.contentAnimation = 'down';
        const currentPlaybackInformation: PlaybackInformation = await this.playbackInformationService.getCurrentPlaybackInformationAsync();
        return '';
    @Input()
        this.currentImageUrl = newImage;

    ) {}
        if (performAnimation) {


@Component({
    public ngOnDestroy(): void {
import { animate, state, style, transition, trigger } from '@angular/animations';

    private currentImageUrl: string = '';
        );
}

                void this.switchDown(playbackInformation.imageUrl, true);
    public size: number = 0;
        }
                }),
            this.indexingService.indexingFinished$.subscribe(() => {
                this.bottomImageUrl = this.currentImageUrl;

            this.playbackInformationService.playingNoTrack$.subscribe((playbackInformation: PlaybackInformation) => {
                }),
    public bottomImageUrl: string = '';
        );
        private scheduler: SchedulerBase,
    encapsulation: ViewEncapsulation.None,
            ),
            }),
import { IndexingService } from '../../../services/indexing/indexing.service';
        this.subscription.add(
                style({
    public topImageUrl: string = '';
                this.contentAnimation = 'up';

        trigger('contentAnimation', [
    selector: 'app-playback-cover-art',
    }

            this.contentAnimation = 'down';
        }
        private playbackInformationService: PlaybackInformationService,
    public get topImageBackgroundClass(): string {
        this.subscription.unsubscribe();
    }
                void this.switchToCurrentPlaybackInformation();
        }
    private async switchUp(newImage: string): Promise<void> {
        this.subscription.add(
                'animated-down',
    public constructor(
            ),
        this.contentAnimation = 'animated-up';
                style({
                }),
import { PlaybackInformation } from '../../../services/playback-information/playback-information';
    templateUrl: './playback-cover-art.component.html',
        await this.switchDown(currentPlaybackInformation.imageUrl, false);
})
        if (performAnimation) {
import { Constants } from '../../../common/application/constants';
    private async switchDown(newImage: string, performAnimation: boolean): Promise<void> {
    }

    public borderRadius: number = 0;
            this.playbackInformationService.playingNextTrack$.subscribe((playbackInformation: PlaybackInformation) => {
        }

                'animated-up',
            this.playbackInformationService.playingPreviousTrack$.subscribe((playbackInformation: PlaybackInformation) => {
        if (this.bottomImageUrl !== Constants.emptyImage) {
        );
                setTimeout(() => {
            state(
    public get bottomImageBackgroundClass(): string {
        await this.switchDown(currentPlaybackInformation.imageUrl, false);
        );



            this.contentAnimation = 'animated-down';
import { SchedulerBase } from '../../../common/scheduling/scheduler.base';
    styleUrls: ['./playback-cover-art.component.scss'],
                'down',
            this.topImageUrl = this.currentImageUrl;
        if (this.contentAnimation !== 'down') {
            return 'app-playback-cover-art__content-background';
import { Subscription } from 'rxjs';
    }
                style({
        this.bottomImageUrl = newImage;
                    transform: 'translateY(0px)',
    @Input()
        private indexingService: IndexingService,
                }),
        return '';
        await this.scheduler.sleepAsync(Constants.playbackInfoSwitchAnimationMilliseconds);
    ],
    animations: [
        ]),
    }
import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
            state(
    public async ngOnInit(): Promise<void> {

                // if the next track fails to play before its animation completes.
        this.currentImageUrl = newImage;
        this.subscription.add(

        }

                style({
            transition('up => animated-down', animate(`${Constants.playbackInfoSwitchAnimationMilliseconds}ms ease-out`)),
                await this.scheduler.sleepAsync(100);
                void this.switchUp(playbackInformation.imageUrl);
            }),
            transition('down => animated-up', animate(`${Constants.playbackInfoSwitchAnimationMilliseconds}ms ease-out`)),
        if (this.topImageUrl !== Constants.emptyImage) {
                    void this.switchUp(playbackInformation.imageUrl);
        this.topImageUrl = newImage;
            await this.scheduler.sleepAsync(Constants.playbackInfoSwitchAnimationMilliseconds);
            state(
            await this.scheduler.sleepAsync(100);

