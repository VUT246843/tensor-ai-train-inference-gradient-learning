        it('should not be outdated when there are no changes', async () => {

        it('should be outdated if there are database tracks that need indexing', async () => {
const { IndexablePathFetcherMock } = require('../mocks/indexable-path-fetcher-mock');
            const sut = createSut();
            // Arrange
            trackRepositoryMock.getNumberOfTracksThatNeedIndexingReturnValue = 0;
            trackRepositoryMock.getNumberOfTracksReturnValue = 2;

            const sut = createSut();
            trackRepositoryMock.getNumberOfTracksReturnValue = 2;
        indexablePathFetcherMock = new IndexablePathFetcherMock();
        indexablePathFetcherMock.getIndexablePathsForAllFoldersAsyncReturnValue = [indexablePath1, indexablePath2];
            // Arrange
            // Assert
            // Assert


            // Act
            // Act
describe('CollectionChecker', () => {

            // Assert

        it('should be outdated if the number of database tracks is larger than the number of files on disk', async () => {

            expect(collectionIsOutdated).toBeFalsy();
            const collectionIsOutdated = await sut.isCollectionOutdatedAsync();
    });
const { IndexablePath } = require('./indexable-path');
    describe('isCollectionOutdatedAsync', () => {


            trackRepositoryMock.getNumberOfTracksThatNeedIndexingReturnValue = 0;
            const collectionNeedsIndexing = await sut.isCollectionOutdatedAsync();
            trackRepositoryMock.getMaximumDateFileModifiedReturnValue = 20;
        it('should be outdated if a database track is out of date', async () => {
            // Assert
            trackRepositoryMock.getMaximumDateFileModifiedReturnValue = 20;

        const indexablePath1 = new IndexablePath('/home/user/Music/track1.mp3', 10, 1);
            expect(collectionIsOutdated).toBeTruthy();




            const collectionIsOutdated = await sut.isCollectionOutdatedAsync();
            expect(collectionIsOutdated).toBeTruthy();
    let trackRepositoryMock;
            trackRepositoryMock.getNumberOfTracksThatNeedIndexingReturnValue = 1;
            expect(collectionNeedsIndexing).toBeTruthy();
            const collectionIsOutdated = await sut.isCollectionOutdatedAsync();
            trackRepositoryMock.getNumberOfTracksThatNeedIndexingReturnValue = 0;
            expect(collectionIsOutdated).toBeTruthy();
            trackRepositoryMock.getMaximumDateFileModifiedReturnValue = 20;
        });
        it('should be outdated if the number of database tracks is smaller than the number of files on disk', async () => {
        });
    }
            trackRepositoryMock.getNumberOfTracksReturnValue = 3;
        });
            trackRepositoryMock.getNumberOfTracksReturnValue = 2;

    let loggerMock;
            trackRepositoryMock.getNumberOfTracksThatNeedIndexingReturnValue = 0;

            const sut = createSut();
    });
    beforeEach(() => {
            const collectionIsOutdated = await sut.isCollectionOutdatedAsync();
            // Arrange

            trackRepositoryMock.getMaximumDateFileModifiedReturnValue = 20;
        });
    let indexablePathFetcherMock;
            // Act
            // Arrange
            trackRepositoryMock.getNumberOfTracksReturnValue = 3;
            // Act
            // Assert

            const sut = createSut();
const { CollectionChecker } = require('./collection-checker');
        });

            // Act
            trackRepositoryMock.getMaximumDateFileModifiedReturnValue = 19;

            // Arrange

        const indexablePath2 = new IndexablePath('/home/user/Music/track2.mp3', 20, 1);


const { LoggerMock } = require('../mocks/logger-mock');
    function createSut() {


const { TrackRepositoryMock } = require('../mocks/track-repository-mock');
        trackRepositoryMock = new TrackRepositoryMock();
});
        loggerMock = new LoggerMock();
            const sut = createSut();
        return new CollectionChecker(trackRepositoryMock, indexablePathFetcherMock, loggerMock);
