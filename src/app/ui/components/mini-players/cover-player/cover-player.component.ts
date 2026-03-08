                    opacity: 1,
        });
                }),


    private timerId: number = 0;
        document.addEventListener('mousedown', () => {
import { DocumentProxy } from '../../../../common/io/document-proxy';
        }, 5000);
        ref.backdropClick().subscribe(() => {
            transition('visible => hidden', animate('1s')),

            state(
        this.setAudioVisualizer();
    public ngOnInit(): void {

                style({
            ),

import { enterLeftToRight, enterRightToLeft } from '../../../animations/animations';
import { NavigationServiceBase } from '../../../../services/navigation/navigation.service.base';
    ) {}

    public ngAfterViewInit(): void {
    templateUrl: './cover-player.component.html',
import { AudioVisualizer } from '../../../../services/playback/audio-visualizer';
    }
@Component({
import { CoverPlayerPlaybackQueueComponent } from './cover-player-playback-queue/cover-player-playback-queue.component';
        clearTimeout(this.timerId);
                'hidden',
import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
        private audioVisualizer: AudioVisualizer,
    styleUrls: ['./cover-player.component.scss'],
        this.playbackQueueIsVisible = true;
    }
    host: { style: 'display: block' },
        public appearanceService: AppearanceServiceBase,
        });
        this.timerId = window.setTimeout(() => {
        const canvas: HTMLCanvasElement = this.documentProxy.getCanvasById('coverPlayerAudioVisualizer');

    public openVolumeControl(): void {
})
    public openPlaybackQueue(): void {
            this.controlsVisibility = 'hidden';

}
    encapsulation: ViewEncapsulation.None,
            this.playbackQueueIsVisible = false;
import { MatBottomSheet } from '@angular/material/bottom-sheet';
    public playbackQueueIsVisible: boolean = false;
        this.navigationService.refreshPlaybackQueueList();
import { animate, state, style, transition, trigger } from '@angular/animations';
            state(
        ]),
    }
        this._bottomSheet.open(CoverPlayerVolumeControlComponent);
                'visible',

            transition('hidden => visible', animate('.25s')),
        enterLeftToRight,
        private _bottomSheet: MatBottomSheet,

            this.resetTimer();
        private documentProxy: DocumentProxy,
    private resetTimer(): void {
        const ref = this._bottomSheet.open(CoverPlayerPlaybackQueueComponent);
    private setAudioVisualizer(): void {
        document.addEventListener('mousemove', () => {
    }
        });
        this.controlsVisibility = 'visible';
import { AppearanceServiceBase } from '../../../../services/appearance/appearance.service.base';
        enterRightToLeft,
    selector: 'app-cover-player',
                style({



    }
            this.resetTimer();
import { CoverPlayerVolumeControlComponent } from './cover-player-volume-control/cover-player-volume-control.component';
                }),
    public constructor(
    }
        private navigationService: NavigationServiceBase,
        trigger('controlsVisibility', [

    animations: [
        this.audioVisualizer.connectCanvas(canvas);
export class CoverPlayerComponent implements OnInit, AfterViewInit {
            ),
                    opacity: 0,
        this.resetTimer();
    ],
    public controlsVisibility: string = 'visible';
