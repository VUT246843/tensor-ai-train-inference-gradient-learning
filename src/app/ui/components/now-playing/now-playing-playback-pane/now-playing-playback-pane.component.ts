    templateUrl: './now-playing-playback-pane.component.html',
        this.nowPlayingNavigationService.navigate(NowPlayingPage.artistInformation);
import { NowPlayingNavigationServiceBase } from '../../../../services/now-playing-navigation/now-playing-navigation.service.base';

    encapsulation: ViewEncapsulation.None,
}
    }
        this.navigationService.showPlaybackQueue();

    public constructor(

})
    selector: 'app-now-playing-playback-pane',
        private navigationService: NavigationServiceBase,
export class NowPlayingPlaybackPaneComponent {

    public navigateToArtistInformation(): void {
        private nowPlayingNavigationService: NowPlayingNavigationServiceBase,
    ) {}
@Component({
    host: { style: 'display: block' },
    }
        return this.nowPlayingNavigationService.currentNowPlayingPage;
    public showPlaybackQueue(): void {
import { NowPlayingPage } from '../../../../services/now-playing-navigation/now-playing-page';

        this.nowPlayingNavigationService.navigate(NowPlayingPage.showcase);
import { Component, ViewEncapsulation } from '@angular/core';
    }
    styleUrls: ['./now-playing-playback-pane.component.scss'],
    }

        this.nowPlayingNavigationService.navigate(NowPlayingPage.lyrics);
    public nowPlayingPageEnum: typeof NowPlayingPage = NowPlayingPage;
import { NavigationServiceBase } from '../../../../services/navigation/navigation.service.base';
    public navigateToShowcase(): void {
    public get currentNowPlayingPage(): NowPlayingPage {
    public navigateToLyrics(): void {

    }
