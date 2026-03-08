import { NowPlayingNavigationServiceBase } from '../../../../services/now-playing-navigation/now-playing-navigation.service.base';
            expect(component.currentNowPlayingPage).toEqual(NowPlayingPage.lyrics);
    describe('currentNowPlayingPage', () => {

});
            nowPlayingNavigationServiceMock.verify((x) => x.navigate(NowPlayingPage.lyrics), Times.once());
import { IMock, Mock, Times } from 'typemoq';
            navigationServiceMock.verify((x) => x.showPlaybackQueue(), Times.exactly(1));

    });
            // Arrange
    });

            // Assert
    let navigationServiceMock: IMock<NavigationServiceBase>;
    });
            const component: NowPlayingPlaybackPaneComponent = createComponent();
        it('should create', () => {
            // Assert
        return new NowPlayingPlaybackPaneComponent(navigationServiceMock.object, nowPlayingNavigationServiceMock.object);
describe('NowPlayingPlaybackPaneComponent', () => {
            // Arrange, Act
        });
        it('should request to show the playback queue', () => {
            // Assert
        });

            // Arrange
import { NavigationServiceBase } from '../../../../services/navigation/navigation.service.base';
        });
        nowPlayingNavigationServiceMock = Mock.ofType<NowPlayingNavigationServiceBase>();
    describe('navigateToArtistInformation', () => {
            component.navigateToShowcase();
            // Assert
    });

        it('should request to navigate to showcase', () => {

    let nowPlayingNavigationServiceMock: IMock<NowPlayingNavigationServiceBase>;

            nowPlayingNavigationServiceMock.verify((x) => x.navigate(NowPlayingPage.artistInformation), Times.once());
    describe('navigateToShowcase', () => {
            // Act, Assert
            // Act
            nowPlayingNavigationServiceMock.setup((x) => x.currentNowPlayingPage).returns(() => NowPlayingPage.lyrics);
    beforeEach(() => {

        });
            const component: NowPlayingPlaybackPaneComponent = createComponent();
    });
            const component: NowPlayingPlaybackPaneComponent = createComponent();
    });
            // Assert
            const component: NowPlayingPlaybackPaneComponent = createComponent();

        it('should request to navigate to lyrics', () => {



            component.showPlaybackQueue();
            // Arrange
        it('should request to navigate to artist information', () => {
            expect(component).toBeDefined();

            const component: NowPlayingPlaybackPaneComponent = createComponent();
        });
            nowPlayingNavigationServiceMock.verify((x) => x.navigate(NowPlayingPage.showcase), Times.once());
import { NowPlayingPage } from '../../../../services/now-playing-navigation/now-playing-page';
        navigationServiceMock = Mock.ofType<NavigationServiceBase>();

    });

            // Act
    }
    function createComponent(): NowPlayingPlaybackPaneComponent {
    describe('navigateToLyrics', () => {

    describe('showPlaybackQueue', () => {
            // Arrange

            const component: NowPlayingPlaybackPaneComponent = createComponent();
            // Act
            // Act
            // Arrange
        });
import { NowPlayingPlaybackPaneComponent } from './now-playing-playback-pane.component';
        it('should return the current now playing page', () => {
            component.navigateToLyrics();


            component.navigateToArtistInformation();
    describe('constructor', () => {
