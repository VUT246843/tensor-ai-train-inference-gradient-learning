    describe('clearPlayingSubfolder', () => {

                new Track('/home/user/Music/track1.mp3'),
            expect(service).toBeDefined();
            const playingTrack: TrackModel = new TrackModel(
            // Arrange
                settingsMock,
                .returns(() => false);
            pathValidator
            expect(subfolders[3].isPlaying).toBeFalsy();
    describe('clearPlayingTrack', () => {
            // Arrange
                .setup((x) => x.isParentPath('/home/user/Music/Subfolder1', '/home/user/Music/Subfolder1/track1.mp3'))

                dateTimeMock.object,
            // Assert
                dateTimeMock.object,

                .setup((x) => x.isParentPath('/home/user/Music/Subfolder2', '/home/user/Music/Subfolder1/track1.mp3'))
            const tracks: TrackModel[] = [track1, track2, track3];
import { Track } from '../../data/entities/track';
            );
            const track3: TrackModel = new TrackModel(
            // Assert
                .setup((x) => x.isParentPath('/home/user/Music/Subfolder2', '/home/user/Music/Subfolder1/track1.mp3'))
import { SubfolderModel } from '../folder/subfolder-model';

            );

                settingsMock,
            // Arrange
            expect(tracks[0].isPlaying).toBeFalsy();
            // Arrange

                settingsMock,
            const track3: TrackModel = new TrackModel(

            const subfolder2: SubfolderModel = new SubfolderModel('/home/user/Music/Subfolder2', false);
describe('PlaybackIndicationService', () => {
            const track1: TrackModel = new TrackModel(
            // Arrange
    let service: PlaybackIndicationService;
        });
        dateTimeMock = Mock.ofType<DateTime>();
                new Track('/home/user/Music/track1.mp3'),
                translatorServiceMock.object,
                translatorServiceMock.object,


                settingsMock,
});
            const playingTrack: TrackModel = new TrackModel(
        });
        });
                translatorServiceMock.object,
            expect(subfolders[1].isPlaying).toBeFalsy();
            service.clearPlayingSubfolder(undefined);
                .returns(() => true);
        it('should create', () => {
            // Assert
            const subfolder2: SubfolderModel = new SubfolderModel('/home/user/Music/Subfolder2', false);
                dateTimeMock.object,

        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
                new Track('/home/user/Music/track1.mp3'),
                settingsMock,

            // Assert
            const track1: TrackModel = new TrackModel(

                settingsMock,
        it('should not throw an error when subfolders and playingTrack are undefined', () => {

        it('should not throw an error when subfolders is undefined', () => {
                new Track('/home/user/Music/track3.mp3'),
            const subfolder1: SubfolderModel = new SubfolderModel('/home/user/Music/Subfolder1', true);

            service.setPlayingSubfolder(subfolders, undefined);
                dateTimeMock.object,
            const tracks: TrackModel[] = [track1, track2, track3];
                dateTimeMock.object,
            expect(subfolders[0].isPlaying).toBeFalsy();

            const subfolder3: SubfolderModel = new SubfolderModel('/home/user/Music/Subfolder3', false);
                new Track('/home/user/Music/Subfolder1/track1.mp3'),

    });
import { TrackModel } from '../track/track-model';
                translatorServiceMock.object,
            );
                new Track('/home/user/Music/track3.mp3'),
            // Assert
import { PlaybackIndicationService } from './playback-indication.service';
    });
                new Track('/home/user/Music/track2.mp3'),
            const track1: TrackModel = new TrackModel(

        });
                dateTimeMock.object,
                dateTimeMock.object,
            const subfolder3: SubfolderModel = new SubfolderModel('/home/user/Music/Subfolder3', false);
    let pathValidator: IMock<PathValidator>;
import { SettingsMock } from '../../testing/settings-mock';
            );
        it('should set all subfolders as not playing', () => {
                settingsMock,
            const isGoToParentSubfolder: SubfolderModel = new SubfolderModel('/home/user/Music/Subfolder1', true);
                new Track('/home/user/Music/track1.mp3'),
        });
        it('should set the playing track when tracks and playingTrack are defined', () => {
            pathValidator
                translatorServiceMock.object,
                new Track('/home/user/Music/track2.mp3'),
                translatorServiceMock.object,
            );

            // Assert
            );
        it('should set a subfolder as playing if it is not a gotToParent subfolder and its path is a parent path of the playing track', () => {
        it('should not throw an error when playingTrack is undefined', () => {
            // Assert
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            service.clearPlayingTrack(tracks);

            expect(subfolders[2].isPlaying).toBeFalsy();
            const track2: TrackModel = new TrackModel(
    });
            const subfolders: SubfolderModel[] = [subfolder1, subfolder2, subfolder3];
            service.clearPlayingTrack(undefined);
                dateTimeMock.object,
            const subfolders: SubfolderModel[] = [isGoToParentSubfolder, subfolder1, subfolder2, subfolder3];
            // Act
        });
            // Act
        it('should not throw an error when playingTrack is undefined', () => {
            );
            // Arrange
            const playingTrack: TrackModel = new TrackModel(
            );
            service.setPlayingSubfolder(subfolders, playingTrack);
            const track2: TrackModel = new TrackModel(

            // Assert
            expect(subfolders[1].isPlaying).toBeTruthy();
                .returns(() => false);
                settingsMock,
            const subfolder2: SubfolderModel = new SubfolderModel('/home/user/Music/Subfolder2', false);
        });
                dateTimeMock.object,
            pathValidator
            // Act

            pathValidator
            // Arrange
                translatorServiceMock.object,

    describe('constructor', () => {
                new Track('/home/user/Music/track3.mp3'),
            // Assert
                .setup((x) => x.isParentPath('/home/user/Music/Subfolder1', '/home/user/Music/Subfolder1/track1.mp3'))

            // Act
            expect(subfolders[0].isPlaying).toBeFalsy();
                .returns(() => true);

            // Act
        it('should not throw an error when tracks is undefined', () => {
                dateTimeMock.object,

                .returns(() => false);

    });
                dateTimeMock.object,
                settingsMock,
    let settingsMock: any;

            );
import { DateTime } from '../../common/date-time';
                new Track('/home/user/Music/track1.mp3'),
    beforeEach(() => {
            );
        });
            );
            // Assert
            // Arrange
            pathValidator
        it('should not throw an error when tracks is undefined', () => {
                dateTimeMock.object,
                translatorServiceMock.object,
        it('should set all tracks as not playing', () => {
                translatorServiceMock.object,
        });
            expect(tracks[0].isPlaying).toBeFalsy();
import { TranslatorServiceBase } from '../translator/translator.service.base';

            expect(tracks[2].isPlaying).toBeFalsy();
            // Act
        it('should not throw an error when subfolders is undefined', () => {
        });
            );
                translatorServiceMock.object,
            // Act
                translatorServiceMock.object,
                settingsMock,
                new Track('/home/user/Music/track2.mp3'),
            // Act
import { IMock, Mock } from 'typemoq';
            // Arrange
                dateTimeMock.object,


        });
            expect(subfolders[3].isPlaying).toBeFalsy();
            const isGoToParentSubfolder: SubfolderModel = new SubfolderModel('/home/user/Music/Subfolder1', true);
            // Arrange

            pathValidator
            const subfolder3: SubfolderModel = new SubfolderModel('/home/user/Music/Subfolder3', false);
                translatorServiceMock.object,


                .setup((x) => x.isParentPath('/home/user/Music/Subfolder3', '/home/user/Music/Subfolder1/track1.mp3'))
            // Assert
            service.setPlayingTrack(tracks, playingTrack);
            // Arrange
    });
            expect(tracks[1].isPlaying).toBeFalsy();
            // Arrange
            const track3: TrackModel = new TrackModel(
            expect(tracks[1].isPlaying).toBeTruthy();

            // Act

                settingsMock,

        service = new PlaybackIndicationService(pathValidator.object);
                .setup((x) => x.isParentPath('/home/user/Music/Subfolder3', '/home/user/Music/Subfolder1/track1.mp3'))
            const subfolder1: SubfolderModel = new SubfolderModel('/home/user/Music/Subfolder1', false);
            service.setPlayingTrack(undefined, playingTrack);
            );
            // Arrange
            service.setPlayingSubfolder(undefined, playingTrack);


            service.setPlayingSubfolder(undefined, undefined);
        pathValidator = Mock.ofType<PathValidator>();

            const subfolder1: SubfolderModel = new SubfolderModel('/home/user/Music/Subfolder1', false);
        });
            service.setPlayingTrack(tracks, undefined);
            const track2: TrackModel = new TrackModel(
                settingsMock,
                settingsMock,
        settingsMock = new SettingsMock();
            expect(tracks[2].isPlaying).toBeFalsy();

    let dateTimeMock: IMock<DateTime>;
    });
            const subfolders: SubfolderModel[] = [isGoToParentSubfolder, subfolder1, subfolder2, subfolder3];
    describe('setPlayingTrack', () => {
            // Act

            service.setPlayingTrack(undefined, undefined);

        it('should not throw an error when tracks and playingTrack are undefined', () => {
                translatorServiceMock.object,
            subfolders[1].isPlaying = true;
            // Act
            // Act
            // Act
                .returns(() => false);
            // Assert
                new Track('/home/user/Music/track2.mp3'),
            // Assert
            expect(subfolders[2].isPlaying).toBeFalsy();
        });
            const playingTrack: TrackModel = new TrackModel(


            tracks[0].isPlaying = true;
            const tracks: TrackModel[] = [track1, track2, track3];
            service.clearPlayingSubfolder(subfolders);


import { PathValidator } from '../../common/validation/path-validator';

    describe('setPlayingSubfolder', () => {
