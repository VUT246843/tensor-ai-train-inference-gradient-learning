        this.playbackInformationHeight = this.coverArtSize;
        const horizontalMargin: number = 100;

        this.playbackInformationSmallFontSize = this.playbackInformationLargeFontSize / 1.5;
        this.setSizes();
    @HostListener('window:resize')
    ) {}
    public playbackInformationLargeFontSize: number = 0;
    host: { style: 'display: block; width: 100%; height: 100%;' },
import { WindowSize } from '../../../../common/io/window-size';
import { SettingsBase } from '../../../../common/settings/settings.base';
    public playbackInformationHeight: number = 0;
        this.coverArtSize = meanSize / 3; // Tweak divisor to taste
@Component({
        const playbackControlsHeight: number = 70;
    }
    private setSizes(): void {
export class NowPlayingShowcaseComponent implements OnInit {
}
import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
        const applicationWindowSize: WindowSize = this.application.getWindowSize();
    selector: 'app-now-playing-showcase',
import { ApplicationBase } from '../../../../common/io/application.base';
    }
        this.setSizes();
    public onResize(): void {
    }

    public ngOnInit(): void {
    styleUrls: ['./now-playing-showcase.component.scss'],


        const availableWidth: number = applicationWindowSize.width - horizontalMargin;

    encapsulation: ViewEncapsulation.None,

        this.playbackInformationLargeFontSize = this.playbackInformationHeight / 8;


    public playbackInformationSmallFontSize: number = 0;
})
    templateUrl: './now-playing-showcase.component.html',
        public settings: SettingsBase,
        private application: ApplicationBase,
        const availableHeight: number = applicationWindowSize.height - (playbackControlsHeight + windowControlsHeight);
        const windowControlsHeight: number = 46;
    public constructor(
        const meanSize = Math.sqrt(availableWidth * availableHeight);
    public coverArtSize: number = 0;
