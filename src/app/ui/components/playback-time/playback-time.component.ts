import { Component, ViewEncapsulation } from '@angular/core';
    host: { style: 'display: block' },
    styleUrls: ['./playback-time.component.scss'],
import { PlaybackService } from '../../../services/playback/playback.service';
    templateUrl: './playback-time.component.html',
    public constructor(public playbackService: PlaybackService) {}

})
    selector: 'app-playback-time',
    encapsulation: ViewEncapsulation.None,
}
@Component({
export class PlaybackTimeComponent {
