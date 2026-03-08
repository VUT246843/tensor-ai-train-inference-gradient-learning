            // Assert
    let loggerMock: IMock<Logger>;
    let trackModel3: TrackModel;
        loggerMock = Mock.ofType<Logger>();
        });


            // Act
        dateTimeMock = Mock.ofType<DateTime>();

    describe('deleteTracksAsync', () => {

        });

        it('should return true if all files could be moved to trash', async () => {
        trackModel3 = new TrackModel(track3, dateTimeMock.object, translatorServiceMock.object, settingsMock);
describe('CollectionService', () => {
            // Arrange
    let translatorServiceMock: IMock<TranslatorServiceBase>;

            );


    });
            // Act
            // Arrange
});

        it('should stop playback for all given tracks', async () => {
        settingsMock = new SettingsMock();

            // Arrange
            desktopMock.verify((x) => x.moveFileToTrashAsync('path1'), Times.once());


        });
            playbackServiceMock.verify((x) => x.stopIfPlayingAsync(trackModel3), Times.once());
            // Act
import { Track } from '../../data/entities/track';
    let settingsMock: any;

        });

        playbackServiceMock = Mock.ofType<PlaybackService>();

        it('should return false if not all files could be moved to trash', async () => {
    let track2: Track;
    let desktopMock: IMock<DesktopBase>;
        track2.trackId = 2;

                    collectionHasChanged = true;
    });
            // Arrange
        it('should notify that the collection has changed', async () => {

            // Act
            playbackServiceMock.verify((x) => x.stopIfPlayingAsync(trackModel1), Times.once());

        });
            desktopMock.verify((x) => x.moveFileToTrashAsync('path2'), Times.once());
import { PlaybackService } from '../playback/playback.service';

        it('should delete tracks from the database', async () => {
        });
        trackRepositoryMock = Mock.ofType<TrackRepositoryBase>();
            // Act
            expect(collectionHasChanged).toBeTruthy();
    let track3: Track;
import { TranslatorServiceBase } from '../translator/translator.service.base';
            const returnValue: boolean = await service.deleteTracksAsync([trackModel1, trackModel2, trackModel3]);
        trackModel1 = new TrackModel(track1, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            playbackServiceMock.verify((x) => x.stopIfPlayingAsync(trackModel2), Times.once());
        trackModel2 = new TrackModel(track2, dateTimeMock.object, translatorServiceMock.object, settingsMock);
    });
        it('should define collectionChanged$', () => {
import { TrackModel } from '../track/track-model';

        track1.trackId = 1;


            // Act
    let track1: Track;

            desktopMock.setup((x) => x.moveFileToTrashAsync(It.isAny())).throws(new Error('An error occurred'));

        });


        track2 = new Track('path2');
    let trackRepositoryMock: IMock<TrackRepositoryBase>;
            // Assert

            await service.deleteTracksAsync([trackModel1, trackModel2, trackModel3]);
            // Arrange
    let service: CollectionServiceBase;

            expect(returnValue).toBeFalsy();
            // Arrange
            // Assert
    let trackModel2: TrackModel;
            // Act
            // Assert
import { CollectionService } from './collection.service';
            const returnValue: boolean = await service.deleteTracksAsync([trackModel1, trackModel2, trackModel3]);
            subscription.add(
            // Arrange
            // Assert
            expect(service).toBeDefined();
        it('should move the files of the given track to trash', async () => {
import { CollectionServiceBase } from './collection.service.base';
import { IMock, It, Mock, Times } from 'typemoq';
                }),
    beforeEach(() => {

            const subscription: Subscription = new Subscription();
        track3.trackId = 3;
            // Assert
            // Assert
        service = new CollectionService(playbackServiceMock.object, trackRepositoryMock.object, desktopMock.object, loggerMock.object);
        track1 = new Track('path1');
import { Logger } from '../../common/logger';
    let dateTimeMock: IMock<DateTime>;
            expect(returnValue).toBeTruthy();
            // Arrange
            expect(service.collectionChanged$).toBeDefined();
import { DesktopBase } from '../../common/io/desktop.base';
            // Act
            // Assert

            await service.deleteTracksAsync([trackModel1, trackModel2, trackModel3]);
    let playbackServiceMock: IMock<PlaybackService>;
        desktopMock = Mock.ofType<DesktopBase>();
import { TrackRepositoryBase } from '../../data/repositories/track-repository.base';

            desktopMock.verify((x) => x.moveFileToTrashAsync('path3'), Times.once());
import { SettingsMock } from '../../testing/settings-mock';
import { DateTime } from '../../common/date-time';
            trackRepositoryMock.verify((x) => x.deleteTracks([1, 2, 3]), Times.once());
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            await service.deleteTracksAsync([trackModel1, trackModel2, trackModel3]);
            await service.deleteTracksAsync([trackModel1, trackModel2, trackModel3]);
                service.collectionChanged$.subscribe(() => {

        });
import { Subscription } from 'rxjs';
    let trackModel1: TrackModel;

    describe('constructor', () => {
        it('should create', () => {
            let collectionHasChanged: boolean = false;
        track3 = new Track('path3');
