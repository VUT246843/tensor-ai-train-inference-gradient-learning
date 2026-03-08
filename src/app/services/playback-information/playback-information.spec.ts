import { DateTime } from '../../common/date-time';
import { SettingsMock } from '../../testing/settings-mock';
import { TrackModel } from '../track/track-model';

    let settingsMock: any;
            // Assert
            const trackModel: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
describe('PlaybackInformation', () => {
        dateTimeMock = Mock.ofType<DateTime>();
            // Act

            const trackModel: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            expect(playbackInformation).toBeDefined();
        it('should set imageUrl', () => {
            // Arrange

import { Track } from '../../data/entities/track';
            const track: Track = new Track('Path');

    });



            // Act
            // Assert
        it('should create', () => {
            // Assert
        });
        settingsMock = new SettingsMock();

            const track: Track = new Track('Path');
            const playbackInformation = new PlaybackInformation(trackModel, 'imageUrl');

            const trackModel: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
        });

    });
    let translatorServiceMock: IMock<TranslatorServiceBase>;
});
    beforeEach(() => {
            const playbackInformation = new PlaybackInformation(trackModel, 'imageUrl');
import { TranslatorServiceBase } from '../translator/translator.service.base';
import { PlaybackInformation } from './playback-information';
            // Act
            expect(playbackInformation.track).toEqual(trackModel);
import { IMock, Mock } from 'typemoq';
        it('should set track', () => {
            const track: Track = new Track('Path');
            expect(playbackInformation.imageUrl).toEqual('imageUrl');
        });
    describe('constructor', () => {
            const playbackInformation = new PlaybackInformation(trackModel, 'imageUrl');
    let dateTimeMock: IMock<DateTime>;

            // Arrange
            // Arrange
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
