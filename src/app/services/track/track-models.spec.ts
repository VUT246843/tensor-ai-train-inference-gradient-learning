


            // Act


            trackModels.addTrack(trackToAdd);
    describe('constructor', () => {


            // Act
            track.duration = 10;
            expect(trackModels.tracks.length).toEqual(2);
            trackModels.tracks = [];
        it('should increase numberOfTracks when adding a defined track', () => {
        it('should not change totalFileSizeInBytes for an undefined track', () => {

        });
            // Act
            expect(trackModels.tracks[0]).toBe(trackToAdd1);
        it('should define tracks', () => {

            // Act

            // Arrange
            // Arrange


        it('should define totalDurationInMilliseconds', () => {

            trackModels.tracks = [];
            // Arrange


            // Arrange
            const trackToAdd: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            // Arrange
            expect(trackModels.tracks).toBeDefined();
        it('should define tracks as empty', () => {
            // Assert
            expect(trackModels.totalDurationInMilliseconds).toEqual(10);
            expect(trackModels.totalFileSizeInBytes).toBeDefined();

});
        it('should define totalFileSizeInBytes', () => {
            // Act

            // Assert
            // Arrange
            expect(trackModels.totalFileSizeInBytes).toEqual(20);
            // Arrange

        it('should define totalDurationInMilliseconds as 0', () => {

        trackModels = new TrackModels();
        it('should not change numberOfTracks for an undefined track', () => {
    describe('addTrack', () => {
            // Arrange
            // Assert
        it('should add a defined track', () => {

            expect(trackModels.numberOfTracks).toEqual(0);
import { DateTime } from '../../common/date-time';
    });
            // Act
            // Act

            // Arrange
            // Act
            trackModels.addTrack(trackToAdd);
    beforeEach(() => {
            trackModels.addTrack(trackToAdd);
        });
            // Arrange
            const track: Track = new Track('/home/user/Music/track1.mp3');
            // Arrange
        it('should ensure that tracks are stored in the order in which they are added', () => {
            // Act
            // Act
            // Assert
            // Arrange
        });
    let translatorServiceMock: IMock<TranslatorServiceBase>;
        });
            const trackToAdd: TrackModel | undefined = undefined;

            const trackToAdd: TrackModel | undefined = undefined;


            // Arrange
            const track: Track = new Track('/home/user/Music/track1.mp3');
            // Assert
            trackModels.addTrack(trackToAdd1);
            expect(trackModels.tracks[1]).toBe(trackToAdd2);
        settingsMock = new SettingsMock();

        });
            trackModels.addTrack(trackToAdd2);

            // Act
            trackModels.addTrack(trackToAdd);
            trackModels.addTrack(trackToAdd);
        });

import { TranslatorServiceBase } from '../translator/translator.service.base';
            expect(trackModels.totalFileSizeInBytes).toEqual(0);
            // Arrange
            // Assert
            expect(trackModels.totalDurationInMilliseconds).toEqual(0);
import { TrackModels } from './track-models';
            // Assert
        it('should not add an undefined track', () => {
            expect(trackModels.tracks[0]).toBe(trackToAdd);

            // Assert
        });

            // Act
        });
        dateTimeMock = Mock.ofType<DateTime>();


        });
            track.fileSize = 20;

        it('should increase totalFileSizeInBytes with the fileSizeInBytes of the defined track', () => {
            const track2: Track = new Track('/home/user/Music/track1.mp3');
            // Act
        it('should increase totalDurationInMilliseconds with the durationInMilliseconds of the defined track', () => {
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            const trackToAdd: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
    });

    let settingsMock: any;
            // Assert
            const track: Track = new Track('/home/user/Music/track1.mp3');

            // Assert

            const trackToAdd: TrackModel | undefined = undefined;
            trackModels.addTrack(trackToAdd);
            expect(trackModels.numberOfTracks).toEqual(0);
            // Arrange
        });
            trackModels.tracks = [];
            expect(trackModels.numberOfTracks).toEqual(1);
        it('should define numberOfTracks', () => {

            // Assert

            // Assert
            expect(trackModels.totalFileSizeInBytes).toEqual(0);
    let trackModels: TrackModels;

        it('should define totalFileSizeInBytes as 0', () => {
describe('TrackModel', () => {

        });


            // Arrange
            // Act
            // Assert

import { SettingsMock } from '../../testing/settings-mock';
            trackModels.addTrack(trackToAdd);
            // Act
            // Assert
import { TrackModel } from './track-model';
            trackModels.addTrack(trackToAdd);
        });
            const trackToAdd: TrackModel | undefined = undefined;
import { Track } from '../../data/entities/track';
            const track: Track = new Track('/home/user/Music/track1.mp3');
            const trackToAdd: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);


            expect(trackModels.tracks.length).toEqual(1);


        });
    });
    let dateTimeMock: IMock<DateTime>;
            expect(trackModels.tracks.length).toEqual(0);
            // Assert

        });
import { IMock, Mock } from 'typemoq';
            const track1: Track = new Track('/home/user/Music/track1.mp3');
            expect(trackModels.totalDurationInMilliseconds).toEqual(0);
            // Assert
            expect(trackModels.totalDurationInMilliseconds).toBeDefined();
            // Act
            // Arrange

        });

        });
            const trackToAdd: TrackModel = new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
        });
            // Act
        it('should not change totalDurationInMilliseconds for an undefined track', () => {
            const trackToAdd1: TrackModel = new TrackModel(track1, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            expect(trackModels.numberOfTracks).toBeDefined();

            expect(trackModels.tracks.length).toEqual(0);

            const trackToAdd2: TrackModel = new TrackModel(track2, dateTimeMock.object, translatorServiceMock.object, settingsMock);

        it('should define numberOfTracks as 0', () => {
            // Assert
