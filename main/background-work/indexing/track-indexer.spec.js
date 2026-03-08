    function createSut() {
            // Arrange
            const sut = createSut();
    let trackUpdaterMock;

            // Arrange
            // Act
            // Arrange



const { LoggerMock } = require('../mocks/logger-mock');
const { WorkerProxyMock } = require('../mocks/worker-proxy-mock');
            const sut = createSut();
            // Arrange
        });
            const sut = createSut();
            await sut.indexTracksAsync();
            expect(workerProxyMock.postMessageCalls[1]).toEqual(new DismissMessage());
const { RefreshingMessage } = require('./messages/refreshing-message');
            // Act
    describe('indexTracksAsync', () => {
            // Arrange
            await sut.indexTracksAsync();


const { TrackRemoverMock } = require('../mocks/track-remover-mock');
            await sut.indexTracksAsync();
        });
            const sut = createSut();
        });
            const sut = createSut();
const { TrackUpdaterMock } = require('../mocks/track-updater-mock');
const { DismissMessage } = require('./messages/dismiss-message');

            expect(workerProxyMock.postMessageCalls.length).toEqual(2);

        });
        it('should remove folder tracks for non-existing tracks', async () => {
        it('should update tracks that are out of date', async () => {
            const sut = createSut();
        it('should add tracks that are not in the database', async () => {
        });
        });
});
    let trackAdderMock;

        });
            // Assert


            // Assert

            expect(trackUpdaterMock.updateTracksThatAreOutOfDateAsyncCalls.length).toEqual(1);
    let loggerMock;
            await sut.indexTracksAsync();
const { TrackAdderMock } = require('../mocks/track-adder-mock');
            // Act
        loggerMock = new LoggerMock();
            expect(workerProxyMock.postMessageCalls.length).toEqual(2);
const { Times } = require('typemoq');
    let trackRemoverMock;
        return new TrackIndexer(trackAdderMock, trackUpdaterMock, trackRemoverMock, workerProxyMock, loggerMock);

            await sut.indexTracksAsync();
            // Act
            // Assert

describe('TrackIndexer', () => {


            await sut.indexTracksAsync();
            // Assert
        trackUpdaterMock = new TrackUpdaterMock();
        trackRemoverMock = new TrackRemoverMock();

            expect(workerProxyMock.postMessageCalls[0]).toEqual(new RefreshingMessage());


            // Act
    }
        workerProxyMock = new WorkerProxyMock();



    });
            expect(trackRemoverMock.removeTracksThatDoNoNotBelongToFoldersAsyncCalls.length).toEqual(1);
    beforeEach(() => {
            // Arrange
    let workerProxyMock;
            await sut.indexTracksAsync();
            // Act
            // Assert
        trackAdderMock = new TrackAdderMock();
            expect(trackRemoverMock.removeTracksThatAreNotFoundOnDiskAsyncCalls.length).toEqual(1);
        it('should remove tracks that do not belong to folders', async () => {
            // Act
    });

            // Assert
            expect(trackRemoverMock.removeFolderTracksForInexistingTracksAsyncCalls.length).toEqual(1);
const { TrackIndexer } = require('./track-indexer');
        it('should notify that indexing has started', async () => {
            // Assert
        it('should notify that indexing has finished', async () => {
        it('should remove tracks that are not found on disk', async () => {

            // Arrange
            expect(trackAdderMock.addTracksThatAreNotInTheDatabaseAsyncCalls.length).toEqual(1);
            const sut = createSut();
