        this.playbackService.volume = v;
        return this.playbackService.volume;
    host: { style: 'display: block' },

    selector: 'app-volume-icon',
    public constructor(private playbackService: PlaybackService) {}

})
export class VolumeIconComponent {
    }
}

import { PlaybackService } from '../../../services/playback/playback.service';
    styleUrls: ['./volume-icon.component.scss'],
    templateUrl: './volume-icon.component.html',
    public set volume(v: number) {
import { Component, Input } from '@angular/core';
    public get volume(): number {
@Component({
    }
