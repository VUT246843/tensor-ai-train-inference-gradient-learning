
    }
                this.progressBarPosition = 0;
                this.progressBarPosition - this.progressMargin,
        } catch (e: unknown) {
            const progressTrackWidth: number = this.nativeElementProxy.getElementWidth(this.progressTrack);
        private nativeElementProxy: NativeElementProxy,
import { Logger } from '../../../common/logger';
    public progressThumbPosition: number = 0;
            }
            }
    host: { style: 'display: block' },


                }
    @HostListener('document:mouseup')


})
import { Subscription } from 'rxjs';

    @ViewChild('progressTrack')
        }

    public progressContainerMouseEnter(): void {
    }
    public ngAfterViewInit(): void {

        );
    styleUrls: ['./playback-progress.component.scss'],
    public progressBarPosition: number = 0;

        }
    public progressTrack: ElementRef;
        private mathExtensions: MathExtensions,
    public progressThumbMouseDown(): void {
    public showProgressThumb: boolean = false;
                progressTrackWidth - 2 * this.progressMargin,
import { MathExtensions } from '../../../common/math-extensions';
        }
            this.isProgressDragged = true;
        this.applyMouseProgress(e.pageX);
        if (!this.playbackService.isPlaying) {
    public onMouseMove(e: MouseEvent): void {
export class PlaybackProgressComponent implements OnInit, OnDestroy, AfterViewInit {

        if (this.isProgressThumbDown) {
            this.isProgressContainerDown = false;
import { PlaybackService } from '../../../services/playback/playback.service';
import { NativeElementProxy } from '../../../common/native-element-proxy';
            this.progressThumbPosition = this.mathExtensions.clamp(
            this.progressBarPosition = this.mathExtensions.clamp(mouseXPosition, 0, progressTrackWidth);
            try {
    public async onMouseUp(): Promise<void> {
            this.isProgressDragged = false;
        this.isProgressThumbDown = false;

    private applyPlaybackProgress(playbackProgress: PlaybackProgress): void {
    private subscription: Subscription = new Subscription();
                this.progressThumbPosition = 0;
        if (!this.playbackService.isPlaying) {
            );
    }
        }, 0);

    }
                0,
    private progressMargin: number = 6;
            this.applyPlaybackProgress(this.playbackService.progress);
@Component({
            } catch (e: unknown) {


            this.progressBarPosition = (playbackProgress.progressSeconds / playbackProgress.totalSeconds) * progressTrackWidth;
    @HostListener('document:mousemove', ['$event'])
                return;

    selector: 'app-playback-progress',
    }
            return;
            if (playbackProgress.totalSeconds <= 0) {
            this.playbackService.progressChanged$.subscribe((playbackProgress: PlaybackProgress) => {
                this.logger.error(e, 'Could not skip by fraction of total seconds', 'PlaybackProgressComponent', 'onMouseUp');
import { PlaybackProgress } from '../../../services/playback/playback-progress';
        this.subscription.add(
        if (!this.playbackService.isPlaying) {
    public progressContainerMouseLeave(): void {
        }
    }
    ) {}
        } catch (e: unknown) {

        setTimeout(() => {

        private logger: Logger,
    }
    }
        }
                this.progressBarPosition - this.progressMargin,
    public ngOnDestroy(): void {
            this.applyMouseProgress(e.pageX);
    public progressContainerMouseDown(e: MouseEvent): void {
            this.progressThumbPosition = this.mathExtensions.clamp(
    templateUrl: './playback-progress.component.html',
        this.showProgressThumb = true;
            return;
    public isProgressThumbDown: boolean = false;
        try {
    public isProgressContainerDown: boolean = false;
        if (!this.isProgressThumbDown) {
                0,
            );
        // HACK: avoids a ExpressionChangedAfterItHasBeenCheckedError in DEV mode.
                progressTrackWidth - 2 * this.progressMargin,
    public isProgressDragged: boolean = false;
            this.showProgressThumb = false;

        }


    }
    public constructor(
            this.logger.error(e, 'Could not apply mouse progress', 'PlaybackProgressComponent', 'applyMouseProgress');
        }
        if (this.isProgressDragged || this.isProgressContainerDown) {
        }

                    this.applyPlaybackProgress(playbackProgress);
                if (!this.isProgressThumbDown && !this.isProgressContainerDown) {
    public ngOnInit(): void {
    encapsulation: ViewEncapsulation.None,

    }
        this.subscription.unsubscribe();

                await this.playbackService.skipByFractionOfTotalSecondsAsync(this.progressBarPosition / progressTrackWidth);
    private applyMouseProgress(mouseXPosition: number): void {
        private playbackService: PlaybackService,

import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
            }),
            return;
        this.isProgressThumbDown = true;
        this.showProgressThumb = false;
}
        this.isProgressContainerDown = true;
            this.logger.error(e, 'Could not apply playback progress', 'PlaybackProgressComponent', 'applyPlaybackProgress');

    }
            const progressTrackWidth: number = this.nativeElementProxy.getElementWidth(this.progressTrack);
                const progressTrackWidth: number = this.nativeElementProxy.getElementWidth(this.progressTrack);
        try {

