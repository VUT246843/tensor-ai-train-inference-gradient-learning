import { AudioVisualizer } from '../../../services/playback/audio-visualizer';
        this.page = this.collectionNavigationService.page;
    ) {
import { AppearanceServiceBase } from '../../../services/appearance/appearance.service.base';
        public appearanceService: AppearanceServiceBase,
    }
})
    animations: [enterLeftToRight, enterRightToLeft],
        private audioVisualizer: AudioVisualizer,

import { enterLeftToRight, enterRightToLeft } from '../../animations/animations';
import { SettingsBase } from '../../../common/settings/settings.base';
}
        private documentProxy: DocumentProxy,
export class CollectionComponent extends AnimatedPage implements AfterViewInit {
    }
import { CollectionNavigationService } from '../../../services/collection-navigation/collection-navigation.service';
    }
    @HostListener('document:keyup', ['$event'])
    styleUrls: ['./collection.component.scss'],
    public override setPage(page: number): void {
    }
        }
import { AnimatedPage } from '../animated-page';
        this.audioVisualizer.connectCanvas(canvas);
        private playbackService: PlaybackService,
    private setAudioVisualizer(): void {
    public constructor(
    public ngAfterViewInit(): void {
import { DocumentProxy } from '../../../common/io/document-proxy';

import { PlaybackService } from '../../../services/playback/playback.service';

    encapsulation: ViewEncapsulation.None,
        this.previousPage = this.page;
        if (event.key === ' ' && !(event.target instanceof HTMLInputElement)) {
        public settings: SettingsBase,

    public handleKeyboardEvent(event: KeyboardEvent): void {
    }


    templateUrl: './collection.component.html',
        public collectionNavigationService: CollectionNavigationService,
        this.collectionNavigationService.page = page;
import { AfterViewInit, Component, HostListener, ViewEncapsulation } from '@angular/core';
            void this.playbackService.togglePlaybackAsync();
    selector: 'app-collection',
@Component({
        this.setAudioVisualizer();
        this.page = page;
        const canvas: HTMLCanvasElement = this.documentProxy.getCanvasById('collectionAudioVisualizer');
    host: { style: 'display: block' },
        super();
