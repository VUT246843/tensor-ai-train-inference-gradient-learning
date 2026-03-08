
    function createSut() {
        });
            fileAccessMock.combinePathReturnValue = 'C:\\Users\\User\\AppData\\Roaming\\Dopamine\\Cache\\CoverArt';

            // Assert


        return new ApplicationPaths(fileAccessMock, workerProxyMock);
            expect(sut.getCoverArtCacheFullPath()).toEqual('C:\\Users\\User\\AppData\\Roaming\\Dopamine\\Cache\\CoverArt');
        workerProxyMock = new WorkerProxyMock();
            // Arrange
});
describe('ApplicationPaths', () => {

const { ApplicationPaths } = require('./application-paths');
const { WorkerProxyMock } = require('../../mocks/worker-proxy-mock');
    let fileAccessMock;
    beforeEach(() => {
        it('should return the full path to the cover art cache', () => {

    let workerProxyMock;
            sut.getCoverArtCacheFullPath();
    describe('getCoverArtCacheFullPath', () => {
    });
            workerProxyMock.applicationDataDirectoryReturnValue = 'C:\\Users\\User\\AppData\\Roaming\\Dopamine';
            const sut = createSut();
    }
            expect(fileAccessMock.combinePathCalls[0]).toEqual(['C:\\Users\\User\\AppData\\Roaming\\Dopamine', 'Cache', 'CoverArt']);
    });
const { FileAccessMock } = require('../../mocks/file-access-mock');
            expect(fileAccessMock.combinePathCalls.length).toEqual(1);
            // Act

        fileAccessMock = new FileAccessMock();
