            expect(!indexablePaths.map((x) => x.path).includes('/home/user/Folder2/Image 1.png')).toBeTruthy();
            '/home/user/Folder2/Track 2.mp3': 100,
            '/home/user/Folder1/Track 2.mp3': 100,
            '/home/user/Folder2': directoryWalkResult2,
            '/home/user/Folder1/Image 2',
});
            '/home/user/Folder2': true,
    let folderRepositoryMock;
            '/home/user/Folder1/Image 2': 100,
            '/home/user/Folder1/Track 2.mp3': '.mp3',

        directoryWalkerMock.getFilesInDirectoryAsyncReturnValues = {
    let directoryWalkerMock;
        const folder2 = new Folder('/home/user/Folder2');
        it('should not collect unsupported audio files for all folders', async () => {
        });
        fileAccessMock = new FileAccessMock();

            const indexablePaths = await sut.getIndexablePathsForAllFoldersAsync();
            '/home/user/Folder2/Track 2.mp3',

            // Act

        const filePaths1 = [
            '/home/user/Folder2/Image 1.png',
            '/home/user/Folder1/Image 1.png',
const { FolderRepositoryMock } = require('../mocks/folder-repository-mock');

            '/home/user/Folder1/Image 2': '',


            // Arrange
const { FileAccessMock } = require('../mocks/file-access-mock');
            expect(!indexablePaths.map((x) => x.path).includes('/home/user/Folder2/Image 2')).toBeTruthy();
            // Assert
            '/home/user/Folder1/Track 1.mp3',

        const directoryWalkResult2 = new DirectoryWalkResult(filePaths2, errors2);
            '/home/user/Folder2/Image 2': 100,
    let fileAccessMock;
            '/home/user/Folder2/Track 1.mp3': '.mp3',
            '/home/user/Folder2/Image 1.png': '.png',
            const sut = createSut();
            '/home/user/Folder2/Image 1.png': 100,
const { LoggerMock } = require('../mocks/logger-mock');
            '/home/user/Folder1/Track 2.mp3',



            '/home/user/Folder2/Track 2.mp3': '.mp3',
        const errors2 = [];

const { IndexablePathFetcher } = require('./indexable-path-fetcher');
            expect(!indexablePaths.map((x) => x.path).includes('/home/user/Folder1/Image 2')).toBeTruthy();
        ];
        folder2.showInCollection = 1;

            '/home/user/Folder2/Track 1.mp3': 100,

const { DirectoryWalkerMock } = require('../mocks/directory-walker-mock');
    beforeEach(() => {

            '/home/user/Folder1/Track 1.mp3': 100,
            '/home/user/Folder2/Image 2': '',
            expect(indexablePaths.map((x) => x.path).includes('/home/user/Folder2/Track 1.mp3')).toBeTruthy();


        };
        return new IndexablePathFetcher(folderRepositoryMock, directoryWalkerMock, fileAccessMock, loggerMock);
            // Arrange
            // Assert
        folderRepositoryMock.getFoldersReturnValues = [folder1, folder2];
        fileAccessMock.pathExistsReturnValues = {
            '/home/user/Folder1': true,
const { DirectoryWalkResult } = require('./directory-walk-result');
            expect(!indexablePaths.map((x) => x.path).includes('/home/user/Folder1/Image 1.png')).toBeTruthy();
            '/home/user/Folder1/Image 1.png': 100,
        it('should collect supported audio files for all folders', async () => {
    });
        fileAccessMock.getDateModifiedInTicksReturnValues = {
        };
            '/home/user/Folder1': directoryWalkResult1,
            expect(indexablePaths.map((x) => x.path).includes('/home/user/Folder2/Track 2.mp3')).toBeTruthy();
    }
            // Act
    function createSut() {
            '/home/user/Folder1/Image 1.png': '.png',
            const sut = createSut();
        directoryWalkerMock = new DirectoryWalkerMock();
    let loggerMock;
            const indexablePaths = await sut.getIndexablePathsForAllFoldersAsync();
        const directoryWalkResult1 = new DirectoryWalkResult(filePaths1, errors1);
describe('IndexablePathFetcher', () => {
        folder2.folderId = 2;
            expect(indexablePaths.map((x) => x.path).includes('/home/user/Folder1/Track 1.mp3')).toBeTruthy();
            expect(indexablePaths.map((x) => x.path).includes('/home/user/Folder1/Track 2.mp3')).toBeTruthy();
        folderRepositoryMock = new FolderRepositoryMock();
        loggerMock = new LoggerMock();


        ];
        const filePaths2 = [
        fileAccessMock.getFileExtensionReturnValues = {
        folder1.showInCollection = 1;
        const folder1 = new Folder('/home/user/Folder1');
const { Folder } = require('../data/entities/folder');
        const errors1 = [];

            '/home/user/Folder2/Track 1.mp3',
        folder1.folderId = 1;
    });
        };
        };

    describe('getIndexablePathsForAllFoldersAsync', () => {

            '/home/user/Folder1/Track 1.mp3': '.mp3',
            '/home/user/Folder2/Image 2',
        });
