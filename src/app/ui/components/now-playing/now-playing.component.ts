import { DocumentProxy } from '../../../common/io/document-proxy';
import { AudioVisualizer } from '../../../services/playback/audio-visualizer';
            ),
            this.resetTimer();

                    opacity: 0.05,

        trigger('controlsVisibility', [
        private metadataService: MetadataService,
    @HostListener('document:keyup', ['$event'])
    public async goBackToCollectionAsync(): Promise<void> {
                if (this.appearanceService.isUsingLightTheme) {
                'fade-in-light',
            transition('fade-in => fade-out', animate('1s')),
            }
    private setNowPlayingPage(nowPlayingPage: NowPlayingPage): void {
    }
            if (proposedBackground !== this.background1) {
                'fade-in-light',
        await this.scheduler.sleepAsync(500);
            this.playbackService.playbackStopped$.subscribe(() => {
import { PlaybackService } from '../../../services/playback/playback.service';
        this.subscription.add(
    selector: 'app-now-playing',
            this.pageSwitchAnimation = 'fade-in';
    host: { style: 'display: block' },
    public background1IsUsed: boolean = false;
    private subscription: Subscription = new Subscription();
    }
        public appearanceService: AppearanceServiceBase,
            ),
                this.background1IsUsed = false;
        this.setAudioVisualizer();
        enterLeftToRight,
        private playbackService: PlaybackService,
    }
            }
    public handleKeyboardEvent(event: KeyboardEvent): void {
    }
            ),
            transition('hidden => visible', animate('.25s')),
            state(
        if (event.key === ' ' && !(event.target instanceof HTMLInputElement)) {
        );
            this.resetTimer();
        });
                style({

        });
            state(
import { animate, state, style, transition, trigger } from '@angular/animations';
export class NowPlayingComponent extends AnimatedPage implements OnInit, AfterViewInit {
    }
        private audioVisualizer: AudioVisualizer,
                }),
        document.addEventListener('mousedown', () => {
        }, 0);
    }

        }
                'fade-in-dark',

        this.controlsVisibility = 'visible';


            transition('fade-out => fade-in-dark', animate('1s')),
        private scheduler: SchedulerBase,

                }
                }),
        trigger('background2Animation', [
        trigger('background1Animation', [
        ]),
import { AfterViewInit, Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
        private nowPlayingNavigationService: NowPlayingNavigationServiceBase,
                    opacity: 0.15,
                    this.background2Animation = 'fade-in-dark';
            }),

            state(
    encapsulation: ViewEncapsulation.None,
        document.addEventListener('mousemove', () => {
        ]),
                style({
            this.playbackService.playbackStarted$.subscribe(() => {
        );
                style({
                'fade-out',
    public pageSwitchAnimation: string = 'fade-out';
                    opacity: 0,



        this.resetTimer();
        setTimeout(() => {
                style({
        // HACK: avoids a ExpressionChangedAfterItHasBeenCheckedError in DEV mode.
                }),
                    opacity: 0,
            this.controlsVisibility = 'hidden';
        await this.navigationService.navigateToCollectionAsync();
    public background1Animation: string = 'fade-out';

    ],

    private resetTimer(): void {
                if (this.appearanceService.isUsingLightTheme) {
        }
        this.subscription.add(
                'visible',
        }
    styleUrls: ['./now-playing.component.scss'],
        this.page = nowPlayingPage;
        super();
            ),
        const proposedBackground: string = await this.metadataService.createAlbumImageUrlAsync(this.playbackService.currentTrack, 0);

                style({
            this.setNowPlayingPage(this.nowPlayingNavigationService.currentNowPlayingPage);
        this.subscription.add(
}
import { NowPlayingPage } from '../../../services/now-playing-navigation/now-playing-page';
import { NowPlayingNavigationServiceBase } from '../../../services/now-playing-navigation/now-playing-navigation.service.base';
    }
            }),
    private timerId: number = 0;
                style({
                style({
                    this.background2Animation = 'fade-in-light';
            ),
        private documentProxy: DocumentProxy,
            transition('fade-out => fade-in-light', animate('1s')),
import { SchedulerBase } from '../../../common/scheduling/scheduler.base';
                    opacity: 0.15,
                this.background1 = proposedBackground;
    public async ngAfterViewInit(): Promise<void> {
            transition('visible => hidden', animate('1s')),
    private setAudioVisualizer(): void {
        if (this.settings.keepPlaybackControlsVisibleOnNowPlayingPage) {
            state(
            ),
import { enterLeftToRight, enterRightToLeft } from '../../animations/animations';
        private settings: SettingsBase,
            state(
        ]),
    public background2Animation: string = this.appearanceService.isUsingLightTheme ? 'fade-in-light' : 'fade-in-dark';
                'fade-in-dark',
import { Subscription } from 'rxjs';
    public constructor(
            void this.playbackService.togglePlaybackAsync();
            transition('fade-out => fade-in-dark', animate('1s')),
    ) {
                }
        }, 5000);


                style({
    }
        this.audioVisualizer.connectCanvas(canvas);
        const canvas: HTMLCanvasElement = this.documentProxy.getCanvasById('nowPlayingAudioVisualizer');

                this.background1IsUsed = true;
import { PromiseUtils } from '../../../common/utils/promise-utils';
            state(
        } else {
            ),
                this.background2 = proposedBackground;
                } else {
    }
        if (this.background1IsUsed) {
            transition('fade-out => fade-in-light', animate('1s')),
            this.nowPlayingNavigationService.navigated$.subscribe((nowPlayingPage: NowPlayingPage) => {

import { SettingsBase } from '../../../common/settings/settings.base';

            }),
                PromiseUtils.noAwait(this.setBackgroundsAsync());
@Component({
    public background2: string = '';
import { NavigationServiceBase } from '../../../services/navigation/navigation.service.base';

                }),
    public controlsVisibility: string = 'visible';
                    opacity: 1,
    animations: [
                this.background1Animation = 'fade-out';
    private async setBackgroundsAsync(): Promise<void> {
import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
        this.timerId = window.setTimeout(() => {
    public ngOnInit(): void {
                    opacity: 0.05,
        private navigationService: NavigationServiceBase,
                }),
        await this.setBackgroundsAsync();
            state(
                this.background2Animation = 'fade-out';
                'fade-out',
            return;
                PromiseUtils.noAwait(this.setBackgroundsAsync());
import { MetadataService } from '../../../services/metadata/metadata.service';
            transition('fade-in => fade-out', animate('1s')),
                this.setNowPlayingPage(nowPlayingPage);
        clearTimeout(this.timerId);
import { AnimatedPage } from '../animated-page';
    public background1: string = '';

            if (proposedBackground !== this.background2) {

                    this.background1Animation = 'fade-in-light';
        );
})

                    opacity: 0,
            state(
    templateUrl: './now-playing.component.html',
                }),
                'hidden',
        enterRightToLeft,

                    this.background1Animation = 'fade-in-dark';
            ),
                }),
                }),
                } else {


