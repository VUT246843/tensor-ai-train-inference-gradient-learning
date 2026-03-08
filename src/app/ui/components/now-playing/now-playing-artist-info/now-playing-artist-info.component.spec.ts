        it('should not change artist information when playback starts if artist remains the same and not empty', async () => {
            expect(artistNameBeforePlaybackStarted).toEqual('artist1');
            playbackServiceMock.setup((x) => x.currentTrack).returns(() => undefined);
            const component: NowPlayingArtistInfoComponent = createComponent();
            artistInformationServiceMock
    beforeEach(() => {

                .returns(() => Promise.resolve(artistInformation));
        });
            // Arrange
            expect(component.artist.url).toEqual('');
    let settingsMock: IMock<SettingsBase>;
            await flushPromises();
            playbackServicePlaybackStartedMock.next(playbackStarted);
    let playbackServiceMock: IMock<PlaybackService>;

            artistInformationServiceMock.verify((x) => x.getQuickArtistInformation(trackModel2), Times.once());
        it('should show empty artist information if current track is undefined', async () => {
            const trackModel1: TrackModel = MockCreator.createTrackModel('path1', 'title', ';artist1;');

            const artistNameBeforePlaybackStarted: string = component.artist.name;
            playbackServicePlaybackStartedMock.next(playbackStarted);
            artistInformationServiceMock.verify((x) => x.getQuickArtistInformation(trackModel2), Times.once());
    describe('ngOnInit', () => {
            // Assert
                .returns(() => Promise.resolve(artistInformation1));
            artistInformationServiceMock
            await component.ngOnInit();
            expect(component.artist.name).toEqual('artist1');
            // Arrange
            // Assert
            await flushPromises();
            expect(component.artist.url).toEqual('url1');
        return new NowPlayingArtistInfoComponent(playbackServiceMock.object, artistInformationServiceMock.object, settingsMock.object);
            // Assert


            const artistInformation2: ArtistInformation = MockCreator.createArtistInformation('artist1', '', '', '');

            // Act
            expect(component.artist.biography).toEqual('biography1');
            // Act
    }
        });

            const artistInformation1: ArtistInformation = MockCreator.createArtistInformation('artist1', '', '', '');

                .setup((x) => x.getArtistInformationAsync(trackModel1))
            // Act
            // Act
import { TrackModel } from '../../../../services/track/track-model';
            await component.ngOnInit();



        });
        playbackServicePlaybackStartedMock = new Subject();
            expect(component.artist.imageUrl).toEqual('');
    let playbackServicePlaybackStartedMock: Subject<PlaybackStarted>;


            expect(artistNameAfterPlaybackStarted).toEqual('');
        });
    });

            // Arrange

            expect(artistNameBeforePlaybackStarted).toEqual('artist1');

            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModel1);
            // Act

                .setup((x) => x.getArtistInformationAsync(trackModel))
            // Arrange

            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModel);

            // Arrange
import { ArtistInformation } from '../../../../services/artist-information/artist-information';
            // Assert
            playbackServicePlaybackStartedMock.next(playbackStarted);
                .returns(() => Promise.resolve(artistInformation1));
            expect(component.artist.name).toEqual('');
        });

import { MockCreator } from '../../../../testing/mock-creator';
import { SettingsBase } from '../../../../common/settings/settings.base';
            const trackModel2: TrackModel = MockCreator.createTrackModel('path2', 'title', ';artist1;');

            await flushPromises();

            artistInformationServiceMock
            // Assert

            await flushPromises();

            await flushPromises();

        playbackServiceMock = Mock.ofType<PlaybackService>();
                .returns(() => Promise.resolve(artistInformation2));
            const playbackStarted: PlaybackStarted = new PlaybackStarted(trackModel2, false);
        it('should create', () => {
            const component: NowPlayingArtistInfoComponent = createComponent();
                .setup((x) => x.getArtistInformationAsync(trackModel1))
            const playbackStarted: PlaybackStarted = new PlaybackStarted(trackModel2, false);
            await flushPromises();
            const artistInformation2: ArtistInformation = MockCreator.createArtistInformation('', '', '', '');
            // Act

            await component.ngOnInit();
            playbackServicePlaybackStartedMock.next(playbackStarted);
            artistInformationServiceMock
            await flushPromises();
});
            const artistInformation2: ArtistInformation = MockCreator.createArtistInformation('', '', '', '');

            artistInformationServiceMock.verify((x) => x.getArtistInformationAsync(trackModel2), Times.once());
            const artistInformation: ArtistInformation = MockCreator.createArtistInformation('artist1', 'url1', 'imageUrl1', 'biography1');

            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModel1);

            const artistInformation2: ArtistInformation = MockCreator.createArtistInformation('artist2', '', '', '');
            // Arrange
                .returns(() => Promise.resolve(artistInformation2));
            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModel1);
            expect(component.settings).toBeDefined();

            const component: NowPlayingArtistInfoComponent = createComponent();

            expect(component.artist.hasSimilarArtists).toBeFalsy();
            const artistNameBeforePlaybackStarted: string = component.artist.name;
            const playbackStarted: PlaybackStarted = new PlaybackStarted(trackModel2, false);

            const trackModel1: TrackModel = MockCreator.createTrackModel('path1', 'title', ';artist1;');
            const trackModel1: TrackModel = MockCreator.createTrackModel('path1', 'title', ';;');
            await component.ngOnInit();
import { ArtistInformationServiceBase } from '../../../../services/artist-information/artist-information.service.base';
            // Arrange
    });
            // Assert
                .setup((x) => x.getArtistInformationAsync(trackModel2))
            await flushPromises();
import { IMock, Mock, Times } from 'typemoq';

            // Assert
            expect(component.artist.imageUrl).toEqual('imageUrl1');
            const component: NowPlayingArtistInfoComponent = createComponent();
            const artistNameAfterPlaybackStarted: string = component.artist.name;
            const artistNameBeforePlaybackStarted: string = component.artist.name;

            artistInformationServiceMock.verify((x) => x.getQuickArtistInformation(trackModel2), Times.never());
                .setup((x) => x.getArtistInformationAsync(trackModel1))
            await component.ngOnInit();
            artistInformationServiceMock.verify((x) => x.getQuickArtistInformation(trackModel2), Times.once());
            const artistNameAfterPlaybackStarted: string = component.artist.name;
            const artistInformation1: ArtistInformation = MockCreator.createArtistInformation('artist1', '', '', '');
                .setup((x) => x.getArtistInformationAsync(trackModel2))
        });
import { PlaybackService } from '../../../../services/playback/playback.service';

            expect(artistNameAfterPlaybackStarted).toEqual('');

            artistInformationServiceMock
            const artistNameAfterPlaybackStarted: string = component.artist.name;
            // Assert
                .returns(() => Promise.resolve(artistInformation1));
            expect(component.artist.hasBiography).toBeTruthy();
            artistInformationServiceMock
describe('NowPlayingArtistInfoComponent', () => {
            const trackModel: TrackModel = MockCreator.createTrackModel('path1', 'title', ';artist1;');
    const flushPromises = () => new Promise(process.nextTick);
            const component: NowPlayingArtistInfoComponent = createComponent();
            const component: NowPlayingArtistInfoComponent = createComponent();

import { PlaybackStarted } from '../../../../services/playback/playback-started';
            artistInformationServiceMock
        playbackServiceMock.setup((x) => x.playbackStarted$).returns(() => playbackServicePlaybackStartedMock$);



            const component: NowPlayingArtistInfoComponent = createComponent();
        const playbackServicePlaybackStartedMock$: Observable<PlaybackStarted> = playbackServicePlaybackStartedMock.asObservable();
        it('should change artist information when playback starts if artist changes and is empty', async () => {
            artistInformationServiceMock.verify((x) => x.getArtistInformationAsync(trackModel2), Times.once());
                .returns(() => Promise.resolve(artistInformation2));


            artistInformationServiceMock
    let artistInformationServiceMock: IMock<ArtistInformationServiceBase>;
                .setup((x) => x.getArtistInformationAsync(trackModel2))
            const artistInformation1: ArtistInformation = MockCreator.createArtistInformation('', '', '', '');
                .returns(() => Promise.resolve(artistInformation2));
            expect(component).toBeDefined();
            await component.ngOnInit();
            expect(artistNameAfterPlaybackStarted).toEqual('artist2');
            expect(artistNameAfterPlaybackStarted).toEqual('artist1');
            const artistInformation1: ArtistInformation = MockCreator.createArtistInformation('artist1', '', '', '');
        });
            const component: NowPlayingArtistInfoComponent = createComponent();

            const trackModel1: TrackModel = MockCreator.createTrackModel('path1', 'title', ';artist1;');


        it('should define settings', () => {
            artistInformationServiceMock.verify((x) => x.getArtistInformationAsync(trackModel2), Times.never());
            const trackModel2: TrackModel = MockCreator.createTrackModel('path2', 'title', ';artist2;');
        });
            // Arrange
            expect(artistNameBeforePlaybackStarted).toEqual('');
        settingsMock = Mock.ofType<SettingsBase>();

            const trackModel2: TrackModel = MockCreator.createTrackModel('path2', 'title', ';;');
            const playbackStarted: PlaybackStarted = new PlaybackStarted(trackModel2, false);
            expect(component.artist.hasBiography).toBeFalsy();
                .setup((x) => x.getArtistInformationAsync(trackModel1))
            const artistNameAfterPlaybackStarted: string = component.artist.name;

    describe('constructor', () => {


            expect(artistNameBeforePlaybackStarted).toEqual('artist1');
            const trackModel2: TrackModel = MockCreator.createTrackModel('path2', 'title', ';;');
        it('should change artist information when playback starts if artist changes', async () => {
            const artistNameBeforePlaybackStarted: string = component.artist.name;
    });
import { Observable, Subject } from 'rxjs';
        artistInformationServiceMock = Mock.ofType<ArtistInformationServiceBase>();
        it('should change artist information when playback starts if artist changes and is empty and previous artist is also empty', async () => {
                .setup((x) => x.getArtistInformationAsync(trackModel2))
            playbackServiceMock.setup((x) => x.currentTrack).returns(() => trackModel1);
            // Act


            artistInformationServiceMock.verify((x) => x.getArtistInformationAsync(trackModel2), Times.once());
import { NowPlayingArtistInfoComponent } from './now-playing-artist-info.component';
                .returns(() => Promise.resolve(artistInformation1));

            expect(component.artist.hasSimilarArtists).toBeFalsy();

            expect(component.artist.biography).toEqual('');
        it('should show non-empty artist information if current track is not undefined', async () => {
    function createComponent(): NowPlayingArtistInfoComponent {
            // Act
            artistInformationServiceMock
            await flushPromises();

