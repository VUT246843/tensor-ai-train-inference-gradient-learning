
            track2.trackId = 2;

            expect(trackRepositoryMock.addTrackCalls.filter((x) => x.path === '/home/user/Music/Track 1.mp3').length).toBe(0);


            expect(trackRepositoryMock.addTrackCalls.filter((x) => x.path === '/home/user/Music/Track 3.mp3').length).toBe(1);
            const track1 = new Track('/home/user/Music/Track 1.mp3');
            // Assert
const { RemovedTrack } = require('../data/entities/removed-track');
            expect(folderTrackRepositoryMock.addFolderTrackCalls.filter((x) => x === '1;1').length).toBe(1);
            const removedTrack = new RemovedTrack('/home/user/Music/Track 3.mp3');
            trackRepositoryMock.getAllTracksReturnValue = [];



const { TrackRepositoryMock } = require('../mocks/track-repository-mock');
            const track1 = new Track('/home/user/Music/Track 1.mp3');
        });

            await sut.addTracksThatAreNotInTheDatabaseAsync();
            removedTrackRepositoryMock.getRemovedTracksReturnValue = [];
            const indexablePath2 = new IndexablePath('/home/user/Music/Track 2.mp3', 456, 1);
            const track1 = new Track('/home/user/Music/Track 1.mp3');
            const track1 = new Track('/home/user/Music/Track 1.mp3');
            expect(trackRepositoryMock.addTrackCalls.filter((x) => x.path === '/home/user/Music/Track 3.mp3').length).toBe(1);
const { TrackFillerMock } = require('../mocks/track-filler-mock');

        });
            const sut = createSut();
            track1.trackId = 1;
            // Assert
            track1.trackId = 1;
    });
            indexablePathFetcherMock.getIndexablePathsForAllFoldersAsyncReturnValue = [indexablePath1, indexablePath2, indexablePath3];
            indexablePathFetcherMock.getIndexablePathsForAllFoldersAsyncReturnValue = [indexablePath1];
            trackRepositoryMock.getTrackByPathReturnValues = { '/home/user/Music/Track 1.mp3': track1 };

            trackRepositoryMock.getAllTracksReturnValue = [track1, track2];
        });

const { RemovedTrackRepositoryMock } = require('../mocks/removed-track-repository-mock');
    describe('addTracksThatAreNotInTheDatabase', () => {

            // Assert
        workerProxyMock = new WorkerProxyMock();
            // Act
            // Act
        });
            await sut.addTracksThatAreNotInTheDatabaseAsync();
            const sut = createSut();
            // Arrange
        return new TrackAdder(
            const indexablePath1 = new IndexablePath('/home/user/Music/Track 1.mp3', 123, 1);


            indexablePathFetcherMock.getIndexablePathsForAllFoldersAsyncReturnValue = [indexablePath1, indexablePath2, indexablePath3];

            const track2 = new Track('/home/user/Music/Track 2.mp3');
            const indexablePath2 = new IndexablePath('/home/user/Music/Track 2.mp3', 456, 1);
            removedTrackRepositoryMock.getRemovedTracksReturnValue = [];

    let indexablePathFetcherMock;
    let trackRepositoryMock;
            const indexablePath1 = new IndexablePath('/home/user/Music/Track 1.mp3', 123, 1);
            trackRepositoryMock.getAllTracksReturnValue = [];
        removedTrackRepositoryMock = new RemovedTrackRepositoryMock();

        });
            trackRepositoryMock,

            indexablePathFetcherMock,
            const track2 = new Track('/home/user/Music/Track 2.mp3');
            const track2 = new Track('/home/user/Music/Track 2.mp3');

            // Act
const { TrackAdder } = require('./track-adder');
            const indexablePath1 = new IndexablePath('/home/user/Music/Track 1.mp3', 123, 1);

            indexablePathFetcherMock.getIndexablePathsForAllFoldersAsyncReturnValue = [indexablePath1];
    let workerProxyMock;
            const track1 = new Track('/home/user/Music/Track 1.mp3');
        it('should add a folderTrack when adding a track to the database', async () => {


            // Arrange

const { Track } = require('../data/entities/track');
            // Arrange

            await sut.addTracksThatAreNotInTheDatabaseAsync();
            const indexablePath2 = new IndexablePath('/home/user/Music/Track 2.mp3', 456, 1);

            trackFillerMock,

            track1.trackId = 1;
            removedTrackRepositoryMock.getRemovedTracksReturnValue = [];
            const removedTrack = new RemovedTrack('/home/user/Music/Track 3.mp3');
            workerProxyMock.skipRemovedFilesDuringRefreshReturnValue = false;

    });

const { LoggerMock } = require('../mocks/logger-mock');
            workerProxyMock.skipRemovedFilesDuringRefreshReturnValue = true;
            const indexablePath3 = new IndexablePath('/home/user/Music/Track 3.mp3', 789, 1);
        it('should add tracks that are not in the database', async () => {
            const sut = createSut();
            loggerMock,
const { IndexablePathFetcherMock } = require('../mocks/indexable-path-fetcher-mock');
            const indexablePath1 = new IndexablePath('/home/user/Music/Track 1.mp3', 123, 1);
            removedTrackRepositoryMock.getRemovedTracksReturnValue = [];
    let removedTrackRepositoryMock;

            expect(trackRepositoryMock.addTrackCalls.filter((x) => x.path === '/home/user/Music/Track 3.mp3').length).toBe(0);
            const indexablePath3 = new IndexablePath('/home/user/Music/Track 3.mp3', 789, 1);
            track1.trackId = 1;

    let loggerMock;
            await sut.addTracksThatAreNotInTheDatabaseAsync();
            // Assert
        it('should add tracks that were previously removed, when removed tracks should not be ignored.', async () => {





            track2.trackId = 2;

            // Act
            const indexablePath2 = new IndexablePath('/home/user/Music/Track 2.mp3', 456, 1);
            removedTrackRepositoryMock.getRemovedTracksReturnValue = [removedTrack];


    }

            // Arrange
            await sut.addTracksThatAreNotInTheDatabaseAsync();
        it('should not add tracks that are already in the database', async () => {
            const sut = createSut();
        it('should not add tracks that were previously removed, when removed tracks should be ignored.', async () => {
const { IndexablePath } = require('./indexable-path');

        loggerMock = new LoggerMock();


            trackRepositoryMock.getAllTracksReturnValue = [track1, track2];
            // Act
    let trackFillerMock;

            track1.trackId = 1;
    let folderTrackRepositoryMock;

            const indexablePath3 = new IndexablePath('/home/user/Music/Track 3.mp3', 789, 1);
            trackRepositoryMock.getTrackByPathReturnValues = { '/home/user/Music/Track 1.mp3': track1 };

        indexablePathFetcherMock = new IndexablePathFetcherMock();
const { FolderTrackRepositoryMock } = require('../mocks/folder-track-repository-mock');
    beforeEach(() => {
            trackRepositoryMock.getAllTracksReturnValue = [track1];

            track1.trackId = 1;
            const indexablePath1 = new IndexablePath('/home/user/Music/Track 1.mp3', 123, 1);
    function createSut() {
const { WorkerProxyMock } = require('../mocks/worker-proxy-mock');

            removedTrackRepositoryMock,

            // Assert
        trackRepositoryMock = new TrackRepositoryMock();
            const indexablePath3 = new IndexablePath('/home/user/Music/Track 3.mp3', 789, 1);
            folderTrackRepositoryMock,
            const track2 = new Track('/home/user/Music/Track 2.mp3');
});

            const indexablePath1 = new IndexablePath('/home/user/Music/Track 1.mp3', 123, 1);
            indexablePathFetcherMock.getIndexablePathsForAllFoldersAsyncReturnValue = [indexablePath1, indexablePath2, indexablePath3];
describe('TrackAdder', () => {
        it('should add a file metadata when adding a track to the database', async () => {
            track2.trackId = 2;



            trackRepositoryMock.getAllTracksReturnValue = [track1, track2];
            workerProxyMock,
            // Act

        trackFillerMock = new TrackFillerMock();

            const sut = createSut();
            const sut = createSut();
        );
            track2.trackId = 2;
        });

            // Assert
            removedTrackRepositoryMock.getRemovedTracksReturnValue = [removedTrack];
            // Arrange
            const track1 = new Track('/home/user/Music/Track 1.mp3');
        folderTrackRepositoryMock = new FolderTrackRepositoryMock();
            // Arrange
            expect(trackFillerMock.addFileMetadataToTrackCalls.filter((x) => x === '/home/user/Music/Track 1.mp3;false').length).toBe(1);
            indexablePathFetcherMock.getIndexablePathsForAllFoldersAsyncReturnValue = [indexablePath1, indexablePath2, indexablePath3];
            await sut.addTracksThatAreNotInTheDatabaseAsync();
