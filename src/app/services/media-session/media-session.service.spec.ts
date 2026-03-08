        });
            const playbackInformation: PlaybackInformation = new PlaybackInformation(trackModel, 'image1');
    }
import { MediaSessionService } from './media-session.service';
            // Arrange
            });
    describe('setMetadataAsync', () => {
        });
import { Track } from '../../data/entities/track';
            const dateTimeMock: IMock<DateTime> = Mock.ofType<DateTime>();
        describe('settings.enableMultimediaKeys is true', () => {
            // Act
                mediaSessionProxyMock.verify((x) => x.setActionHandler('pause', It.isAny()), Times.once());

            track.artists = 'artist1';
import { PlaybackInformationFactory } from '../playback-information/playback-information.factory';
describe('MediaSessionService', () => {

                // Act
            track.trackTitle = 'title1';
            await service.setMetadataAsync(trackModel);
import { PlaybackInformation } from '../playback-information/playback-information';
import { TranslatorServiceBase } from '../translator/translator.service.base';

            // Assert
            const trackModel: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
        it('should create', () => {
    function createService(): MediaSessionService {
            mediaSessionProxyMock.verify((x) => x.setMetadata('title1', 'artist1', 'album1', 'image1'), Times.once());
    });
                mediaSessionProxyMock.verify((x) => x.setActionHandler('nexttrack', It.isAny()), Times.once());
            const service: MediaSessionService = createService();

import { TrackModel } from '../track/track-model';
                const service: MediaSessionService = createService();
            playbackInformationFactoryMock.setup((x) => x.createAsync(trackModel)).returns(() => Promise.resolve(playbackInformation));
        });
            // Act

    beforeEach(() => {
    let playbackInformationFactoryMock: IMock<PlaybackInformationFactory>;
                mediaSessionProxyMock.verify((x) => x.setActionHandler('previoustrack', It.isAny()), Times.once());
                // Assert

                mediaSessionProxyMock.verify((x) => x.setActionHandler('play', It.isAny()), Times.once());
    });
    describe('initialize', () => {
    describe('constructor', () => {


        mediaSessionProxyMock = Mock.ofType<MediaSessionProxy>();

        it('should set metadata', async () => {
            track.albumTitle = 'album1';
    });
            // Arrange
    });
        return new MediaSessionService(playbackInformationFactoryMock.object, mediaSessionProxyMock.object);


            let settingsMock: any = {};
    let mediaSessionProxyMock: IMock<MediaSessionProxy>;
            const track: Track = new Track('path1');
import { DateTime } from '../../common/date-time';
        playbackInformationFactoryMock = Mock.ofType<PlaybackInformationFactory>();
import { IMock, It, Mock, Times } from 'typemoq';
import { MediaSessionProxy } from '../../common/io/media-session-proxy';

});


            // Assert
                // Arrange
            const service: MediaSessionService = createService();

            expect(service).toBeDefined();
            it('should set all multimedia keys handlers', () => {
            const translatorServiceMock: IMock<TranslatorServiceBase> = Mock.ofType<TranslatorServiceBase>();
                service.initialize();
