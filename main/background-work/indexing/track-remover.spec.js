        });
            // Assert

            await sut.removeFolderTracksForInexistingTracksAsync();


            trackRepositoryMock.getAllTracksReturnValue = [track1];
    let loggerMock;
        });
        it('should notify only once that tracks that are not found on disk are being removed', async () => {
        });
            // Act
            expect(workerProxyMock.postMessageCalls.filter((x) => x.type === 'removingTracks').length).toBe(0);

describe('TrackRemover', () => {

            // Act
            const sut = createSut();
            expect(trackRepositoryMock.getAllTracksCalls).toBe(1);
        folderTrackRepositoryMock = new FolderTrackRepositoryMock();
            // Arrange
                '/home/user/Music/Track 1.mp3': true,
            // Arrange
            // Assert
            // Arrange
            expect(folderTrackRepositoryMock.deleteFolderTracksForInexistingTracksCalls).toBe(0);

            const sut = createSut();

        fileAccessMock = new FileAccessMock();
            await sut.removeTracksThatDoNoNotBelongToFoldersAsync();
});
            // Act
            // Assert
            // Assert



        });
            // Assert
                '/home/user/Music/Track 1.mp3': false,
            // Assert
            // Assert



            };

            const track1 = new Track('/home/user/Music/Track 1.mp3');
            await sut.removeFolderTracksForInexistingTracksAsync();
            // Act
            // Arrange
            // Assert
            trackRepositoryMock.getNumberOfTracksThatDoNotBelongFoldersReturnValue = 0;
            folderTrackRepositoryMock.getNumberOfFolderTracksForInexistingTracksReturnValue = 0;
            expect(trackRepositoryMock.deleteTrackCalls.length).toBe(0);

            const track2 = new Track('/home/user/Music/Track 2.mp3');

    }

            await sut.removeTracksThatAreNotFoundOnDiskAsync();
        it('should delete a track from the database if its file is not found on disk', async () => {
            // Act
            trackRepositoryMock.getAllTracksReturnValue = [track1, track2];

            fileAccessMock.pathExistsReturnValues = { '/home/user/Music/Track 1.mp3': false };
            const sut = createSut();
        return new TrackRemover(folderTrackRepositoryMock, trackRepositoryMock, fileAccessMock, workerProxyMock, loggerMock);
        it('should get the number of tracks that do not belong to folders', async () => {
            trackRepositoryMock.getNumberOfTracksThatDoNotBelongFoldersReturnValue = 2;
            const track1 = new Track('/home/user/Music/Track 1.mp3');
            // Act
            fileAccessMock.pathExistsReturnValues = {

        });
    });
            fileAccessMock.pathExistsReturnValues = { '/home/user/Music/Track 1.mp3': true };


    let fileAccessMock;
            // Arrange


            // Assert
            // Assert
        });
            await sut.removeTracksThatAreNotFoundOnDiskAsync();
            // Assert
        it('should not check if a path exists if there are no tracks in the in the database', async () => {

        it('should not notify that track are being removed, if there are no folder tracks for inexisting tracks.', async () => {
        });
            expect(workerProxyMock.postMessageCalls.filter((x) => x.type === 'removingTracks').length).toBe(0);


    function createSut() {
            // Act
    });
            await sut.removeFolderTracksForInexistingTracksAsync();
            expect(workerProxyMock.postMessageCalls.filter((x) => x.type === 'removingTracks').length).toBe(1);

            expect(fileAccessMock.pathExistsCalls.filter((x) => x === track1.path).length).toBe(1);
            // Arrange
            await sut.removeTracksThatAreNotFoundOnDiskAsync();

        });
            // Arrange
        it('should notify that track are being removed, if there are folder tracks for inexisting tracks.', async () => {
        workerProxyMock = new WorkerProxyMock();

            // Act
            expect(workerProxyMock.postMessageCalls.filter((x) => x.type === 'removingTracks').length).toBe(1);
    });
            // Arrange
            };
            // Act
            trackRepositoryMock.getAllTracksReturnValue = [track1];
            // Act
        it('should get all tracks from the database', async () => {
const { FileAccessMock } = require('../mocks/file-access-mock');

            const sut = createSut();
            // Arrange
    let workerProxyMock;
            track2.trackId = 2;
            const sut = createSut();
            fileAccessMock.pathExistsReturnValues = {
            expect(workerProxyMock.postMessageCalls.filter((x) => x.type === 'removingTracks').length).toBe(1);
            track2.trackId = 2;
        it('should not delete folder tracks from the database, if there are no folder tracks for indexisting tracks.', async () => {
            const sut = createSut();
const { WorkerProxyMock } = require('../mocks/worker-proxy-mock');
            await sut.removeTracksThatAreNotFoundOnDiskAsync();

        });

            const sut = createSut();
            const sut = createSut();
    describe('removeFolderTracksForInexistingTracks', () => {
    let folderTrackRepositoryMock;
            await sut.removeTracksThatDoNoNotBelongToFoldersAsync();
        it('should delete folder tracks from the database, if there are folder tracks for indexisting tracks.', async () => {
            const sut = createSut();
            expect(folderTrackRepositoryMock.deleteFolderTracksForInexistingTracksCalls).toBe(1);
                '/home/user/Music/Track 2.mp3': true,
const { Track } = require('../data/entities/track');

    describe('removeTracksThatDoNoNotBelongToFolders', () => {
        it('should check if a path exists for each track in the database', async () => {
            folderTrackRepositoryMock.getNumberOfFolderTracksForInexistingTracksReturnValue = 2;
        loggerMock = new LoggerMock();
        it('should notify that track are being removed, if there are tracks that do not belong to folders.', async () => {
            folderTrackRepositoryMock.getNumberOfFolderTracksForInexistingTracksReturnValue = 2;
            // Assert
            expect(trackRepositoryMock.deleteTracksThatDoNotBelongFoldersCalls).toBe(0);
    beforeEach(() => {
            expect(fileAccessMock.pathExistsCalls.filter((x) => x === track2.path).length).toBe(1);

        it('should not notify that track are being removed, if there are no tracks that do not belong to folders.', async () => {
            track1.trackId = 1;
            // Assert
            // Arrange

    describe('removeTracksThatAreNotFoundOnDiskAsync', () => {
            // Act
        it('should not notify that tracks are being removed as long as they are found on disk', async () => {

    let trackRepositoryMock;
            const sut = createSut();
            const track1 = new Track('/home/user/Music/Track 1.mp3');


            await sut.removeTracksThatAreNotFoundOnDiskAsync();

            // Arrange
            // Act
            await sut.removeTracksThatDoNoNotBelongToFoldersAsync();
            await sut.removeTracksThatDoNoNotBelongToFoldersAsync();
            // Arrange
            expect(trackRepositoryMock.deleteTrackCalls.filter((x) => x === track1.trackId).length).toBe(1);

            // Arrange
            // Arrange

            const sut = createSut();
            await sut.removeTracksThatAreNotFoundOnDiskAsync();
        });


        });
            await sut.removeTracksThatAreNotFoundOnDiskAsync();
            track1.trackId = 1;
        });

            // Act
const { TrackRepositoryMock } = require('../mocks/track-repository-mock');
            track1.trackId = 1;
            expect(trackRepositoryMock.getNumberOfTracksThatDoNotBelongFoldersCalls).toBe(1);
            const sut = createSut();
            const sut = createSut();
            // Arrange
            trackRepositoryMock.getAllTracksReturnValue = [track1, track2];
            const track1 = new Track('/home/user/Music/Track 1.mp3');

            folderTrackRepositoryMock.getNumberOfFolderTracksForInexistingTracksReturnValue = 0;
        });
const { TrackRemover } = require('./track-remover');
            trackRepositoryMock.getNumberOfTracksThatDoNotBelongFoldersReturnValue = 0;
        it('should delete tracks that do not belong to folders from the database, if there are tracks that do not belong to folders.', async () => {
            // Act
            // Arrange
            trackRepositoryMock.getAllTracksReturnValue = [track1, track2];
        });

            // Assert
            // Act
            const sut = createSut();
            expect(folderTrackRepositoryMock.getNumberOfFolderTracksForInexistingTracksCalls).toBe(1);

        it('should get the number of folder tracks for inexisting tracks', async () => {
            await sut.removeFolderTracksForInexistingTracksAsync();
            const track2 = new Track('/home/user/Music/Track 2.mp3');
            const track1 = new Track('/home/user/Music/Track 1.mp3');

        trackRepositoryMock = new TrackRepositoryMock();
        });


        it('should delete a track from the database if its file is found on disk', async () => {
            const sut = createSut();
            // Act
            trackRepositoryMock.getAllTracksReturnValue = [];
            const track2 = new Track('/home/user/Music/Track 2.mp3');
            await sut.removeTracksThatDoNoNotBelongToFoldersAsync();
            track1.trackId = 1;
    });
        });
            const sut = createSut();
            trackRepositoryMock.getNumberOfTracksThatDoNotBelongFoldersReturnValue = 2;
const { FolderTrackRepositoryMock } = require('../mocks/folder-track-repository-mock');
            await sut.removeFolderTracksForInexistingTracksAsync();
                '/home/user/Music/Track 2.mp3': false,

            expect(trackRepositoryMock.deleteTracksThatDoNotBelongFoldersCalls).toBe(1);
            // Act

            // Assert

        });

            // Assert

            expect(workerProxyMock.postMessageCalls.filter((x) => x.type === 'removingTracks').length).toBe(0);
const { LoggerMock } = require('../mocks/logger-mock');
            // Arrange
            expect(fileAccessMock.pathExistsCalls.length).toBe(0);
            const sut = createSut();
        it('should not delete tracks that do not belong to folders from the database, if there are no tracks that do not belong to folders.', async () => {
            // Assert

