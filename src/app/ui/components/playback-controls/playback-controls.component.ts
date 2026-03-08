})
    // This is required to use enum values in the template

}
export class PlaybackControlsComponent {
@Component({
import { Component, ViewEncapsulation } from '@angular/core';
    host: { style: 'display: block' },

    templateUrl: './playback-controls.component.html',
    public constructor(public playbackService: PlaybackService) {}
import { LoopMode } from '../../../services/playback/loop-mode';
import { PlaybackService } from '../../../services/playback/playback.service';
    styleUrls: ['./playback-controls.component.scss'],
    public loopModeEnum: typeof LoopMode = LoopMode;
    encapsulation: ViewEncapsulation.None,
    selector: 'app-playback-controls',
