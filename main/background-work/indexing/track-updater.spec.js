            // Arrange
            expect(trackRepositoryMock.getAllTracksCalls).toBe(1);
            trackVerifierMock.isTrackOutOfDateReturnValues = {
                '/home/user/Music/Track 2.mp3': false,


            filledTrack2.trackTitle = 'Title 2';
                '/home/user/Music/Track 2.mp3': false,
            // Assert
            // Assert
            trackVerifierMock.doesTrackNeedIndexingReturnValues = {
                '/home/user/Music/Track 2.mp3': false,
                '/home/user/Music/Track 2.mp3': false,
            };
            const track1 = new Track('/home/user/Music/Track 1.mp3');
            const filledTrack1 = new Track('/home/user/Music/Track 1.mp3');

const { TrackUpdater } = require('./track-updater');
        });

            };
                '/home/user/Music/Track 2.mp3': false,
                '/home/user/Music/Track 2.mp3;false': filledTrack2,

        });
            };
                '/home/user/Music/Track 2.mp3': false,


            };
                '/home/user/Music/Track 2.mp3': true,
        it('should not notify that tracks are being updated, if tracks do not need indexing and are not out of date.', async () => {
            trackVerifierMock.isTrackOutOfDateReturnValues = {
            expect(trackRepositoryMock.updateTrackCalls).toHaveLength(0);


    });
            await sut.updateTracksThatAreOutOfDateAsync();
            const track1 = new Track('/home/user/Music/Track 1.mp3');
            const filledTrack2 = new Track('/home/user/Music/Track 2.mp3');
            const track2 = new Track('/home/user/Music/Track 2.mp3');
        loggerMock = new LoggerMock();
            // Assert



            trackFillerMock.addFileMetadataToTrackReturnValues = {
        });
const { TrackFillerMock } = require('../mocks/track-filler-mock');
            const track1 = new Track('/home/user/Music/Track 1.mp3');
            const track1 = new Track('/home/user/Music/Track 1.mp3');
const { WorkerProxyMock } = require('../mocks/worker-proxy-mock');
    let trackVerifierMock;
            const track2 = new Track('/home/user/Music/Track 2.mp3');
            };


            trackRepositoryMock.getAllTracksReturnValue = [track1, track2];
            // Act

            await sut.updateTracksThatAreOutOfDateAsync();
        it('should not add metadata to a track if it does not needs indexing and is not out of date', async () => {
                '/home/user/Music/Track 2.mp3': true,
            trackVerifierMock.doesTrackNeedIndexingReturnValues = {
            };
            };
                '/home/user/Music/Track 2.mp3': true,
            trackVerifierMock.doesTrackNeedIndexingReturnValues = {
            trackVerifierMock.doesTrackNeedIndexingReturnValues = {
            await sut.updateTracksThatAreOutOfDateAsync();
            };
                '/home/user/Music/Track 1.mp3': true,
            // Act
const { TrackVerifierMock } = require('../mocks/track-verifier-mock');


            const track1 = new Track('/home/user/Music/Track 1.mp3');
        it('should not check if tracks need indexing if there are no tracks in the database', async () => {
            expect(trackRepositoryMock.updateTrackCalls.filter((x) => x === track2.path)).toHaveLength(0);


            };
            trackRepositoryMock.getAllTracksReturnValue = [track1, track2];

            filledTrack1.trackTitle = 'Title 1';
                '/home/user/Music/Track 2.mp3;false': filledTrack2,

            trackRepositoryMock.getAllTracksReturnValue = [track1, track2];
            };
            // Act
                '/home/user/Music/Track 1.mp3': false,
                '/home/user/Music/Track 1.mp3': false,

            // Arrange
            const track1 = new Track('/home/user/Music/Track 1.mp3');
            // Act
            // Arrange
            };
                '/home/user/Music/Track 1.mp3;false': filledTrack1,
            expect(trackVerifierMock.isTrackOutOfDateCalls.filter((x) => x === track1.path)).toHaveLength(1);
                '/home/user/Music/Track 2.mp3;false': filledTrack2,
            trackFillerMock.addFileMetadataToTrackReturnValues = {
    let trackFillerMock;

            const track1 = new Track('/home/user/Music/Track 1.mp3');
            trackVerifierMock.doesTrackNeedIndexingReturnValues = {
            const sut = createSut();
                '/home/user/Music/Track 1.mp3': true,
                '/home/user/Music/Track 1.mp3': true,
            };

            const track1 = new Track('/home/user/Music/Track 1.mp3');



        });
                '/home/user/Music/Track 2.mp3': true,
            await sut.updateTracksThatAreOutOfDateAsync();
            trackFillerMock.addFileMetadataToTrackReturnValues = {
        it('should update a track in the database using a track that has metadata filled in, if it needs indexing or is out of date.', async () => {
                '/home/user/Music/Track 2.mp3': false,
        workerProxyMock = new WorkerProxyMock();
            expect(trackRepositoryMock.updateTrackCalls.filter((x) => x === filledTrack1.path)).toHaveLength(1);
            // Act
            const sut = createSut();

            // Assert

            const track2 = new Track('/home/user/Music/Track 2.mp3');
            const track2 = new Track('/home/user/Music/Track 2.mp3');
            await sut.updateTracksThatAreOutOfDateAsync();

    let loggerMock;
            trackVerifierMock.doesTrackNeedIndexingReturnValues = {
                '/home/user/Music/Track 1.mp3': true,

            };
            expect(trackVerifierMock.doesTrackNeedIndexingCalls.filter((x) => x === track1.path)).toHaveLength(1);

        });
            trackRepositoryMock.getAllTracksReturnValue = [track1, track2];
                '/home/user/Music/Track 1.mp3;false': filledTrack1,

            const sut = createSut();
            const filledTrack1 = new Track('/home/user/Music/Track 1 filled.mp3');

                '/home/user/Music/Track 2.mp3': true,
            trackRepositoryMock.getAllTracksReturnValue = [track1, track2];
            expect(trackFillerMock.addFileMetadataToTrackCalls.filter((x) => x === '/home/user/Music/Track 1.mp3;false')).toHaveLength(1);
            trackVerifierMock.isTrackOutOfDateReturnValues = {
            };
            trackVerifierMock.isTrackOutOfDateReturnValues = {
            trackRepositoryMock.getAllTracksReturnValue = [track1, track2];
            expect(workerProxyMock.postMessageCalls.filter((x) => x.type === 'updatingTracks')).toHaveLength(0);
                '/home/user/Music/Track 1.mp3': true,
                '/home/user/Music/Track 1.mp3': false,
            };
            const sut = createSut();
        it('should check all tracks in the database if they need indexing', async () => {
            };
                '/home/user/Music/Track 2.mp3': false,
                '/home/user/Music/Track 2.mp3': false,
            };
        it('should get all tracks from the database', async () => {
            trackVerifierMock.doesTrackNeedIndexingReturnValues = {
                '/home/user/Music/Track 2.mp3': true,
            expect(trackVerifierMock.doesTrackNeedIndexingCalls.length).toBe(0);
                '/home/user/Music/Track 1.mp3': false,
                '/home/user/Music/Track 2.mp3': false,
            trackRepositoryMock.getAllTracksReturnValue = [];
            filledTrack1.trackTitle = 'Title 1';
            trackVerifierMock.isTrackOutOfDateReturnValues = {
        it('should notify only once that tracks are being updated, if tracks need indexing or out of date.', async () => {

            // Act

            // Act

        return new TrackUpdater(trackRepositoryMock, trackVerifierMock, trackFillerMock, workerProxyMock, loggerMock);
            const sut = createSut();
describe('TrackUpdater', () => {
                '/home/user/Music/Track 1.mp3': false,
    }
            // Arrange
            // Arrange
            // Assert
            trackVerifierMock.doesTrackNeedIndexingReturnValues = {
    let workerProxyMock;

const { Track } = require('../data/entities/track');
            // Assert
            const track2 = new Track('/home/user/Music/Track 2.mp3');

            // Assert



            const sut = createSut();
            // Act
            await sut.updateTracksThatAreOutOfDateAsync();
            trackVerifierMock.isTrackOutOfDateReturnValues = {

const { TrackRepositoryMock } = require('../mocks/track-repository-mock');
            // Arrange
            };
            const track2 = new Track('/home/user/Music/Track 2.mp3');
                '/home/user/Music/Track 1.mp3;false': filledTrack1,

        it('should not check any tracks in the database if they are out of date, when they need indexing.', async () => {

    function createSut() {
            const track2 = new Track('/home/user/Music/Track 2.mp3');
const { LoggerMock } = require('../mocks/logger-mock');
            trackRepositoryMock.getAllTracksReturnValue = [track1, track2];
                '/home/user/Music/Track 1.mp3': false,
        trackVerifierMock = new TrackVerifierMock();
                '/home/user/Music/Track 1.mp3': false,
            trackVerifierMock.isTrackOutOfDateReturnValues = {

            await sut.updateTracksThatAreOutOfDateAsync();
            // Assert
            trackVerifierMock.isTrackOutOfDateReturnValues = {
                '/home/user/Music/Track 1.mp3': true,
            // Assert
            };

        });

                '/home/user/Music/Track 1.mp3': true,
            // Arrange

            expect(trackFillerMock.addFileMetadataToTrackCalls.filter((x) => x === '/home/user/Music/Track 1.mp3;false')).toHaveLength(0);
            expect(workerProxyMock.postMessageCalls.filter((x) => x.type === 'updatingTracks')).toHaveLength(1);

            // Act
                '/home/user/Music/Track 2.mp3': true,
            const sut = createSut();
            trackVerifierMock.isTrackOutOfDateReturnValues = {

            // Assert
        trackRepositoryMock = new TrackRepositoryMock();
    let trackRepositoryMock;

                '/home/user/Music/Track 1.mp3': false,
            await sut.updateTracksThatAreOutOfDateAsync();
            const track2 = new Track('/home/user/Music/Track 2.mp3');
            trackVerifierMock.doesTrackNeedIndexingReturnValues = {
        });
    describe('updateTracksThatAreOutOfDateAsync', () => {


            expect(trackRepositoryMock.updateTrackCalls.filter((x) => x === filledTrack2.path)).toHaveLength(1);
            // Arrange

            trackRepositoryMock.getAllTracksReturnValue = [track1, track2];

                '/home/user/Music/Track 1.mp3': true,


        });

            expect(trackVerifierMock.doesTrackNeedIndexingCalls.filter((x) => x === track2.path)).toHaveLength(1);
            // Act
    });

            trackRepositoryMock.getAllTracksReturnValue = [track1, track2];
    beforeEach(() => {
        trackFillerMock = new TrackFillerMock();
                '/home/user/Music/Track 1.mp3': false,
            const track2 = new Track('/home/user/Music/Track 2.mp3');
            filledTrack1.trackTitle = 'Title 1';
            // Arrange
        it('should not update a track in the database if it does not need indexing and is not out of date.', async () => {
            expect(trackRepositoryMock.updateTrackCalls.filter((x) => x === track1.path)).toHaveLength(0);
            trackRepositoryMock.getAllTracksReturnValue = [];
            await sut.updateTracksThatAreOutOfDateAsync();
});
            // Assert

            expect(trackFillerMock.addFileMetadataToTrackCalls.filter((x) => x === '/home/user/Music/Track 2.mp3;false')).toHaveLength(1);
            const sut = createSut();
            // Act
                '/home/user/Music/Track 1.mp3': false,
            };
            };

            expect(trackVerifierMock.isTrackOutOfDateCalls.filter((x) => x === track1.path)).toHaveLength(0);
            const sut = createSut();

            // Arrange
            expect(trackVerifierMock.isTrackOutOfDateCalls.filter((x) => x === track2.path)).toHaveLength(1);
            filledTrack2.trackTitle = 'Title 2';
            filledTrack2.trackTitle = 'Title 2';
        it('should not check if tracks are out of date if there are no tracks in the database', async () => {
        });
            const sut = createSut();

        });
            await sut.updateTracksThatAreOutOfDateAsync();



            // Act
            expect(trackVerifierMock.isTrackOutOfDateCalls).toHaveLength(0);
        });
            const filledTrack1 = new Track('/home/user/Music/Track 1.mp3');
            const track1 = new Track('/home/user/Music/Track 1.mp3');
            expect(trackVerifierMock.isTrackOutOfDateCalls.filter((x) => x === track2.path)).toHaveLength(0);



            await sut.updateTracksThatAreOutOfDateAsync();

            // Arrange
        it('should check all tracks in the database if they are out of date, when they no not need indexing.', async () => {

        it('should add metadata to a track if it needs indexing or is out of date', async () => {
                '/home/user/Music/Track 2.mp3': true,
            // Arrange
            const sut = createSut();
            const filledTrack2 = new Track('/home/user/Music/Track 2 filled.mp3');
            const sut = createSut();
            // Assert
            expect(trackFillerMock.addFileMetadataToTrackCalls.filter((x) => x === '/home/user/Music/Track 2.mp3;false')).toHaveLength(0);
            await sut.updateTracksThatAreOutOfDateAsync();
            const filledTrack2 = new Track('/home/user/Music/Track 2.mp3');
        });
