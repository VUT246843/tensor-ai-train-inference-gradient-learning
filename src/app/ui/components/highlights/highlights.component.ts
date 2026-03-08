    public mostPlayedAlbums: AlbumModel[] = [];
    }
    }

                const animation = element.style.animation;
        }, 5000);
    private setAudioVisualizer(): void {
            this.resetTimer();
                style({
import { AlbumServiceBase } from '../../../services/album/album-service.base';
                }),
            transition('hidden => visible', animate('.25s')),
    }
import { SettingsBase } from '../../../common/settings/settings.base';



        ]),

        private playbackService: PlaybackService,
    public animationKey: number = 0;
    host: { style: 'display: block' },
        private settings: SettingsBase,
                    opacity: 0,
        const currentAlbums = this.mostPlayedAlbums.map((a) => `${a.albumKey}-${a.playCount}`);
    public async goBackToCollectionAsync(): Promise<void> {


    private loadMostPlayedAlbums(): void {
import { AudioVisualizer } from '../../../services/playback/audio-visualizer';
        this.loadMostPlayedAlbums();
        this.timerId = window.setTimeout(() => {
            const delay = Math.random() * 0.6;
        for (let i = 0; i < 12; i++) {
import { PlaybackService } from '../../../services/playback/playback.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
        this.subscription.add(
    public async onAlbumClickAsync(album: AlbumModel | undefined): Promise<void> {
            return;
    private generateRandomDelays(): void {
    }

        this.subscription.unsubscribe();
    animations: [
import { Subscription } from 'rxjs';
        this.audioVisualizer.connectCanvas(canvas);
import { AlbumModel } from '../../../services/album/album-model';

})
        private audioVisualizer: AudioVisualizer,
                const element = square as HTMLElement;



        setTimeout(() => {
    public controlsVisibility: string = 'visible';
            });
        this.generateRandomDelays();
export class HighlightsComponent extends AnimatedPage implements OnInit, AfterViewInit, OnDestroy {
        public appearanceService: AppearanceServiceBase,
            state(
        this.resetTimer();
}
                void element.offsetHeight;
        trigger('controlsVisibility', [

        const canvas: HTMLCanvasElement = this.documentProxy.getCanvasById('highlightsAudioVisualizer');

            this.restartAnimations();
    }
    }
            return;
            transition('visible => hidden', animate('1s')),

import { NavigationServiceBase } from '../../../services/navigation/navigation.service.base';
import { AnimatedPage } from '../animated-page';
                element.style.animation = 'none';
                element.style.animation = animation;
            this.resetTimer();
        clearTimeout(this.timerId);
        private albumService: AlbumServiceBase,
            this.playbackService.playbackStarted$.subscribe(() => {
                'visible',

    public constructor(
    }
    private timerId: number = 0;
    public ngOnDestroy(): void {
    private previousAlbumIds: string[] = [];
        private navigationService: NavigationServiceBase,
                }),
            squares.forEach((square) => {

    encapsulation: ViewEncapsulation.None,
    }
    }
        if (hasChanged) {
            this.animationDelays.push(delay);
    private onPlaybackStarted(): void {
            ),
        );
    ],
    styleUrls: ['./highlights.component.scss'],
            this.controlsVisibility = 'hidden';
    templateUrl: './highlights.component.html',

        });
        const hasChanged = previousAlbums.some((album, index) => album !== currentAlbums[index]);
        private documentProxy: DocumentProxy,
        }
        }
import { enterLeftToRight, enterRightToLeft } from '../../animations/animations';
        }
            }),
        }
            ),
        this.loadMostPlayedAlbums();
    }

                    opacity: 1,


    private subscription: Subscription = new Subscription();
        await this.navigationService.navigateToCollectionAsync();
    private resetTimer(): void {
        if (this.settings.keepPlaybackControlsVisibleOnNowPlayingPage) {
        const previousAlbums = this.mostPlayedAlbums.map((a) => `${a.albumKey}-${a.playCount}`);
            this.animationKey++;
    selector: 'app-highlights',
        this.controlsVisibility = 'visible';
    public animationDelays: number[] = [];
        await this.playbackService.enqueueAndPlayAlbumAsync(album);
    }
        this.setAudioVisualizer();
        document.addEventListener('mousedown', () => {
import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
    private restartAnimations(): void {
    ) {
import { DocumentProxy } from '../../../common/io/document-proxy';
@Component({
    public ngAfterViewInit(): void {
                'hidden',
        document.addEventListener('mousemove', () => {
                // Trigger reflow
            state(
        });

            const squares = document.querySelectorAll('.square');
            // Generate random delay between 0 and 0.6 seconds
        this.animationDelays = [];
        enterRightToLeft,

        enterLeftToRight,
        }, 0);
        this.mostPlayedAlbums = this.albumService.getMostPlayedAlbums(12);

            this.generateRandomDelays();
                this.onPlaybackStarted();
    }
        if (!album) {
                style({
    public ngOnInit(): void {
        super();
