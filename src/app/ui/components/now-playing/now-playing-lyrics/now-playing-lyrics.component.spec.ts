        it('should return true if there are lyrics and the lyrics text is not empty', async () => {
        it('should create', () => {
            // Act

            await flushPromises();
            const emptyCurrentPlaybackInformation: PlaybackInformation = new PlaybackInformation(undefined, '');
            playbackInformationServiceMock
            // Arrange
    });

            await component.ngOnInit();
import { PlaybackInformationService } from '../../../../services/playback-information/playback-information.service';
            const playbackInformation: PlaybackInformation = new PlaybackInformation(undefined, '');
        it('should return lyrics if playing next track', async () => {

import { NowPlayingLyricsComponent } from './now-playing-lyrics.component';
        });
                .setup((x) => x.getCurrentPlaybackInformationAsync())
            playbackInformationServiceMock
            .returns(() => playbackInformationService_playingPreviousTrack_Mock$);

        playbackInformationServiceMock.setup((x) => x.playingNoTrack$).returns(() => playbackInformationService_playingNoTrack_Mock$);
        });

                .setup((x) => x.getCurrentPlaybackInformationAsync())
            const component: NowPlayingLyricsComponent = createComponent();
            lyricsServiceMock.setup((x) => x.getLyricsAsync(trackModel)).returns(() => Promise.resolve(lyricsModelMock));
    });
                .returns(() => Promise.resolve(playbackInformation));
                .returns(() => Promise.resolve(emptyCurrentPlaybackInformation));
                .setup((x) => x.getCurrentPlaybackInformationAsync())
});
                .setup((x) => x.getCurrentPlaybackInformationAsync())
            expect(component.lyrics).toBeUndefined();
    describe('ngOnInit', () => {
        });
            playbackInformationServiceMock
        const playbackInformationService_playingNextTrack_Mock$: Observable<PlaybackInformation> =
    });

            const component: NowPlayingLyricsComponent = createComponent();
    describe('constructor', () => {

            const trackModel: TrackModel = MockCreator.createTrackModel('path1', 'title', ';artist1;');
            lyricsServiceMock.setup((x) => x.getLyricsAsync(trackModel)).returns(() => Promise.resolve(lyricsModelMock));

        return new NowPlayingLyricsComponent(
    let playbackInformationService_playingPreviousTrack_Mock: Subject<PlaybackInformation>;
            expect(lyrics!.sourceName).toEqual('online source');


            // Act

        });
            await flushPromises();
            const lyricsModelMock: LyricsModel = new LyricsModel(trackModel, 'online source', LyricsSourceType.online, 'online text');
            playbackInformationService_playingNextTrack_Mock.next(playbackInformation);

        playbackInformationServiceMock
            const component: NowPlayingLyricsComponent = createComponent();
            expect(lyrics!.sourceType).toEqual(LyricsSourceType.online);
            // Arrange, Act
        playbackInformationService_playingPreviousTrack_Mock = new Subject();
        const playbackInformationService_playingPreviousTrack_Mock$: Observable<PlaybackInformation> =
import { MockCreator } from '../../../../testing/mock-creator';
            // Act
            // Arrange
            const emptyCurrentPlaybackInformation: PlaybackInformation = new PlaybackInformation(undefined, '');
            const lyricsModelMock: LyricsModel = new LyricsModel(trackModel, 'online source', LyricsSourceType.online, 'online text');
            const playbackInformation: PlaybackInformation = new PlaybackInformation(trackModel, 'imageUrl');
            const component: NowPlayingLyricsComponent = createComponent();
            await component.ngOnInit();
import { Observable, Subject } from 'rxjs';
                .returns(() => Promise.resolve(playbackInformation));
            const lyrics: LyricsModel | undefined = component.lyrics;
            // Arrange
                .setup((x) => x.getCurrentPlaybackInformationAsync())
import { IMock, Mock } from 'typemoq';

        it('should return false if there are lyrics but the lyrics text is empty', async () => {
        it('should be selected font size times 1.7', () => {
            expect(component.lyrics).toBeUndefined();
            playbackInformationServiceMock.object,
            const playbackInformation: PlaybackInformation = new PlaybackInformation(trackModel, 'imageUrl');


import { LyricsModel } from '../../../../services/lyrics/lyrics-model';
            playbackInformationServiceMock
            // Act, Assert

        settingsMock = Mock.ofType<SettingsBase>();
                .returns(() => Promise.resolve(emptyCurrentPlaybackInformation));
        });

            playbackInformationService_playingPreviousTrack_Mock.asObservable();
            await flushPromises();

    let playbackInformationServiceMock: IMock<PlaybackInformationService>;
import { SettingsBase } from '../../../../common/settings/settings.base';
            playbackInformationServiceMock
        playbackInformationService_playingNextTrack_Mock = new Subject();
            const playbackInformation: PlaybackInformation = new PlaybackInformation(undefined, '');

        playbackInformationServiceMock.setup((x) => x.playingNextTrack$).returns(() => playbackInformationService_playingNextTrack_Mock$);

                .setup((x) => x.getCurrentPlaybackInformationAsync())
        });


            const lyrics: LyricsModel | undefined = component.lyrics;
import { LyricsServiceBase } from '../../../../services/lyrics/lyrics.service.base';
            // Assert

                .setup((x) => x.getCurrentPlaybackInformationAsync())
            expect(component.hasLyrics).toBeFalsy();
        it('should return false if there are no lyrics', async () => {
            playbackInformationServiceMock
            const emptyCurrentPlaybackInformation: PlaybackInformation = new PlaybackInformation(undefined, '');
                .returns(() => Promise.resolve(emptyCurrentPlaybackInformation));

    }
            const component: NowPlayingLyricsComponent = createComponent();
            expect(component.hasLyrics).toBeTruthy();
            lyricsServiceMock.setup((x) => x.getLyricsAsync(trackModel)).returns(() => Promise.resolve(lyricsModelMock));

    });
        it('should return lyrics if playing previous track', async () => {

    describe('hasLyrics', () => {
            // Assert
            expect(lyrics!.text).toEqual('online text');
            playbackInformationServiceMock
            await flushPromises();
                .setup((x) => x.getCurrentPlaybackInformationAsync())
            .setup((x) => x.playingPreviousTrack$)
    });
            // Assert
        it('should set defined lyrics if PlaybackService has a current track', async () => {
        });
        lyricsServiceMock = Mock.ofType<LyricsServiceBase>();
            // Assert
            appearanceServiceMock.setup((x) => x.selectedFontSize).returns(() => 13);

            const component: NowPlayingLyricsComponent = createComponent();
            const component: NowPlayingLyricsComponent = createComponent();
            playbackInformationServiceMock

            const component: NowPlayingLyricsComponent = createComponent();


            const lyricsModelMock: LyricsModel = new LyricsModel(trackModel, 'online source', LyricsSourceType.online, '');

        it('should return undefined lyrics if playing no track', async () => {

        });
            const playbackInformation: PlaybackInformation = new PlaybackInformation(trackModel, 'imageUrl');
            // Arrange
            // Assert
            playbackInformationService_playingNextTrack_Mock.next(playbackInformation);
            // Arrange
            await component.ngOnInit();
        it('should set undefined lyrics if PlaybackService has no current track', async () => {

            const component: NowPlayingLyricsComponent = createComponent();
            const playbackInformation: PlaybackInformation = new PlaybackInformation(trackModel, 'imageUrl');

                .returns(() => Promise.resolve(emptyCurrentPlaybackInformation));
            expect(component).toBeDefined();
                .returns(() => Promise.resolve(emptyCurrentPlaybackInformation));

    });
    let playbackInformationService_playingNextTrack_Mock: Subject<PlaybackInformation>;
            expect(component.lyrics!.sourceName).toEqual('online source');

            // Assert
        it('should be selected font size', () => {

describe('NowPlayingLyricsComponent', () => {
            // Assert
            const component: NowPlayingLyricsComponent = createComponent();
            const trackModel: TrackModel = MockCreator.createTrackModel('path1', 'title', ';artist1;');
            await component.ngOnInit();
            lyricsServiceMock.setup((x) => x.getLyricsAsync(trackModel)).returns(() => Promise.resolve(lyricsModelMock));
    describe('largeFontSize', () => {

        );
            settingsMock.object,
        });
    let appearanceServiceMock: IMock<AppearanceServiceBase>;
        playbackInformationService_playingNoTrack_Mock = new Subject();
            // Act, Assert
        });
            // Arrange
import { LyricsSourceType } from '../../../../common/api/lyrics/lyrics-source-type';

            // Arrange
        });
            playbackInformationService_playingNextTrack_Mock.asObservable();
            const trackModel: TrackModel = MockCreator.createTrackModel('path1', 'title', ';artist1;');
            appearanceServiceMock.setup((x) => x.selectedFontSize).returns(() => 13);
import { AppearanceServiceBase } from '../../../../services/appearance/appearance.service.base';
            expect(component.lyricsSourceTypeEnum).toBeDefined();
            lyricsServiceMock.object,
                .returns(() => Promise.resolve(emptyCurrentPlaybackInformation));

            const trackModel: TrackModel = MockCreator.createTrackModel('path1', 'title', ';artist1;');
            await component.ngOnInit();
        const playbackInformationService_playingNoTrack_Mock$: Observable<PlaybackInformation> =
            playbackInformationService_playingNoTrack_Mock.asObservable();
import { PlaybackInformation } from '../../../../services/playback-information/playback-information';
            appearanceServiceMock.object,
            playbackInformationService_playingNextTrack_Mock.next(playbackInformation);



            // Act
            expect(component.hasLyrics).toBeFalsy();
            const emptyCurrentPlaybackInformation: PlaybackInformation = new PlaybackInformation(undefined, '');
    });
            expect(component.smallFontSize).toEqual(13);
            const lyricsModelMock: LyricsModel = new LyricsModel(trackModel, 'online source', LyricsSourceType.online, 'online text');


            playbackInformationService_playingNoTrack_Mock.next(playbackInformation);
    describe('smallFontSize', () => {
            await flushPromises();


            lyricsServiceMock.setup((x) => x.getLyricsAsync(trackModel)).returns(() => Promise.resolve(lyricsModelMock));
    describe('lyrics', () => {
            playbackInformationService_playingPreviousTrack_Mock.next(playbackInformation);
            const emptyCurrentPlaybackInformation: PlaybackInformation = new PlaybackInformation(undefined, '');
            const playbackInformation: PlaybackInformation = new PlaybackInformation(trackModel, 'imageUrl');


            const lyrics: LyricsModel | undefined = component.lyrics;
            const emptyCurrentPlaybackInformation: PlaybackInformation = new PlaybackInformation(undefined, '');
    let lyricsServiceMock: IMock<LyricsServiceBase>;
        });

            expect(component.lyrics!.text).toEqual('online text');
    beforeEach(() => {
        playbackInformationServiceMock = Mock.ofType<PlaybackInformationService>();

            const trackModel: TrackModel = MockCreator.createTrackModel('path1', 'title', ';artist1;');

            const component: NowPlayingLyricsComponent = createComponent();
            expect(lyrics).toBeUndefined();
            expect(lyrics!.sourceName).toEqual('online source');

            expect(lyrics!.text).toEqual('online text');
            expect(component.lyrics!.sourceType).toEqual(LyricsSourceType.online);

            // Arrange
    function createComponent(): NowPlayingLyricsComponent {
            await component.ngOnInit();
        });
            await component.ngOnInit();
            // Act
            // Assert
            const component: NowPlayingLyricsComponent = createComponent();
            const lyricsModelMock: LyricsModel = new LyricsModel(trackModel, 'online source', LyricsSourceType.online, 'online text');
    let playbackInformationService_playingNoTrack_Mock: Subject<PlaybackInformation>;
            // Arrange, Act
            // Act, Assert
            // Arrange, Act

            expect(component.largeFontSize).toBeCloseTo(22.1, 1);
            await component.ngOnInit();
    const flushPromises = () => new Promise(process.nextTick);
            const trackModel: TrackModel = MockCreator.createTrackModel('path1', 'title', ';artist1;');
            const component: NowPlayingLyricsComponent = createComponent();
import { TrackModel } from '../../../../services/track/track-model';
    let settingsMock: IMock<SettingsBase>;
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();
            // Act
            // Assert
            // Arrange

        it('should return undefined if no playback is started', () => {
        it('should define lyricsSourceTypeEnum', () => {
            // Act, Assert
            // Arrange
            expect(lyrics!.sourceType).toEqual(LyricsSourceType.online);
