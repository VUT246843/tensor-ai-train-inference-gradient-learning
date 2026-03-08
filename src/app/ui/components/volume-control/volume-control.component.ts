@Component({

    }
    selector: 'app-volume-control',
    styleUrls: ['./volume-control.component.scss'],
    }
}
import { PlaybackService } from '../../../services/playback/playback.service';

import { Component, Input } from '@angular/core';
        this.playbackService.volume = v;
})
    templateUrl: './volume-control.component.html',
    public get volume(): number {
export class VolumeControlComponent {
        this.playbackService.toggleMute();
    public set volume(v: number) {
    public constructor(private playbackService: PlaybackService) {}

    }
        return this.playbackService.volume;

    public toggleMute(): void {
    host: { style: 'display: block' },
