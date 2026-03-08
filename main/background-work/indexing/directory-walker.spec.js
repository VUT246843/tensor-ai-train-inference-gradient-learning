                    '/home/user/Music/Artist 1/Album 1/Track 2.mp3',
describe('DirectoryWalker', () => {
                    '/home/user/Music/Artist 1/Album 2/Track 3.mp3',

                    '/home/user/Music/Artist 1/Album 1/Album 1.jpg',
            const directoryWalkResult = await directoryWalker.getFilesInDirectoryAsync('/home/user/Music');


            // Arrange


            fileAccessMock.getFilesInDirectoryAsyncReturnValues = {
                    '/home/user/Music/Artist 1/Album 1/Album 1.jpg',
                '/home/user/Music/Artist 1': ['/home/user/Music/Artist 1/Album 1', '/home/user/Music/Artist 1/Album 2'],
                '/home/user/Music/Artist 1/Album 1': [
                '/home/user/Music/Images': ['/home/user/Music/Images/Artist image 1.png', '/home/user/Music/Images/Artist image 2.png'],
            const directoryWalker = new DirectoryWalker(fileAccessMock);
                '/home/user/Music': ['/home/user/Music/Track 1.mp3', '/home/user/Music/Track 2.mp3'],
            const directoryWalker = new DirectoryWalker(fileAccessMock);
const { FileAccessMock } = require('../mocks/file-access-mock');


                    '/home/user/Music/Artist 1/Album 1/Track 2.mp3',
            };
            // Act
                '/home/user/Music/Artist 1': ['/home/user/Music/Artist 1/Artist 1.png'],
                    '/home/user/Music/Artist 1/Album 1/Track 1.mp3',
            };
            expect(directoryWalkResult.filePaths.includes('/home/user/Music/Images/Artist image 2.png')).toBeTruthy();
                ],
                    '/home/user/Music/Artist 1/Album 1/Track 2.mp3',
                ],
            fileAccessMock.getDirectoriesInDirectoryAsyncReturnValues = {
            expect(directoryWalkResult.errors.length).toEqual(0);

            };
                '/home/user/Music/Artist 1/Album 2': 'throw',
            };
                    '/home/user/Music/Artist 1/Album 2/Track 1.mp3',
            expect(directoryWalkResult.filePaths.includes('/home/user/Music/Artist 1/Album 2/Track 2.mp3')).toBeTruthy();
            expect(directoryWalkResult.filePaths.includes('/home/user/Music/Images/Artist image 1.png')).toBeTruthy();
                '/home/user/Music/Artist 1/Album 2': [],
                '/home/user/Music/Images': ['/home/user/Music/Images/Artist image 1.png', '/home/user/Music/Images/Artist image 2.png'],
                    '/home/user/Music/Artist 1/Album 2/Track 2.mp3',

                '/home/user/Music': ['/home/user/Music/Track 1.mp3', '/home/user/Music/Track 2.mp3'],
                '/home/user/Music/Artist 1/Album 1': [],
            const directoryWalker = new DirectoryWalker(fileAccessMock);

            fileAccessMock.getDirectoriesInDirectoryAsyncReturnValues = {

            expect(directoryWalkResult.filePaths.includes('/home/user/Music/Artist 1/Album 1/Track 1.mp3')).toBeTruthy();
            expect(directoryWalkResult.filePaths.includes('/home/user/Music/Artist 1/Album 2/Track 1.mp3')).toBeTruthy();
            };
        it('should not collect errors if non occurred', async () => {
                '/home/user/Music/Artist 1/Album 2': [],
                '/home/user/Music/Artist 1': ['/home/user/Music/Artist 1/Artist 1.png'],
            fileAccessMock.getFilesInDirectoryAsyncReturnValues = {
            fileAccessMock.getDirectoriesInDirectoryAsyncReturnValues = {
                '/home/user/Music/Artist 1/Album 1': [
            // Arrange
            const directoryWalker = new DirectoryWalker(fileAccessMock);
                '/home/user/Music/Artist 1/Album 2': [
            // Act
            // Act


                '/home/user/Music/Images': ['/home/user/Music/Images/Artist image 1.png', '/home/user/Music/Images/Artist image 2.png'],

            fileAccessMock.getFilesInDirectoryAsyncReturnValues = {

                    '/home/user/Music/Artist 1/Album 2/Track 1.mp3',
    describe('getFilesInDirectoryAsync', () => {

                '/home/user/Music/Artist 1/Album 1': [],
                '/home/user/Music/Artist 1/Album 2': [],
        });
        it('should not collect any directories in the directory and subdirectories', async () => {
            const fileAccessMock = new FileAccessMock();


                    '/home/user/Music/Artist 1/Album 1/Album 1.jpg',
                ],
                    '/home/user/Music/Artist 1/Album 1/Album 1.jpg',
                '/home/user/Music/Artist 1': ['/home/user/Music/Artist 1/Artist 1.png'],
            // Assert
                '/home/user/Music': ['/home/user/Music/Artist 1', '/home/user/Music/Images'],
                '/home/user/Music/Artist 1/Album 1': [
    });
            expect(!directoryWalkResult.filePaths.includes('/home/user/Music/Artist 1/Album 2')).toBeTruthy();
            expect(!directoryWalkResult.filePaths.includes('/home/user/Music/Artist 1/Album 1')).toBeTruthy();
                '/home/user/Music': ['/home/user/Music/Track 1.mp3', '/home/user/Music/Track 2.mp3'],
        });
                    '/home/user/Music/Artist 1/Album 1/Track 1.mp3',
                '/home/user/Music': ['/home/user/Music/Artist 1', '/home/user/Music/Images'],
            expect(!directoryWalkResult.filePaths.includes('/home/user/Music/Images')).toBeTruthy();
                    '/home/user/Music/Artist 1/Album 2/Track 2.mp3',
                    '/home/user/Music/Artist 1/Album 1/Track 1.mp3',

            expect(directoryWalkResult.filePaths.includes('/home/user/Music/Artist 1/Album 2/Track 3.mp3')).toBeTruthy();
            fileAccessMock.getFilesInDirectoryAsyncReturnValues = {
                '/home/user/Music/Artist 1/Album 2': [
                '/home/user/Music/Artist 1': ['/home/user/Music/Artist 1/Artist 1.png'],
            const fileAccessMock = new FileAccessMock();
                '/home/user/Music/Artist 1': ['/home/user/Music/Artist 1/Album 1', '/home/user/Music/Artist 1/Album 2'],
            expect(directoryWalkResult.filePaths.includes('/home/user/Music/Track 2.mp3')).toBeTruthy();
                '/home/user/Music/Artist 1/Album 2': [
                '/home/user/Music/Images': [],
                    '/home/user/Music/Artist 1/Album 1/Track 2.mp3',
                '/home/user/Music/Images': [],
            const directoryWalkResult = await directoryWalker.getFilesInDirectoryAsync('/home/user/Music');
        });
            };
                '/home/user/Music': ['/home/user/Music/Track 1.mp3', '/home/user/Music/Track 2.mp3'],
                    '/home/user/Music/Artist 1/Album 2/Track 2.mp3',
                    '/home/user/Music/Artist 1/Album 2/Track 1.mp3',
                    '/home/user/Music/Artist 1/Album 1/Track 1.mp3',

                    '/home/user/Music/Artist 1/Album 2/Track 3.mp3',
                '/home/user/Music/Artist 1/Album 1': [],

            const directoryWalkResult = await directoryWalker.getFilesInDirectoryAsync('/home/user/Music');
                '/home/user/Music/Images': [],
                '/home/user/Music/Artist 1': ['/home/user/Music/Artist 1/Album 1', '/home/user/Music/Artist 1/Album 2'],
                '/home/user/Music/Images': ['/home/user/Music/Images/Artist image 1.png', '/home/user/Music/Images/Artist image 2.png'],
        });
            // Arrange
                ],

                    '/home/user/Music/Artist 1/Album 2/Track 3.mp3',
            const fileAccessMock = new FileAccessMock();
const { DirectoryWalker } = require('./directory-walker');
            expect(directoryWalkResult.filePaths.includes('/home/user/Music/Artist 1/Artist 1.png')).toBeTruthy();
                '/home/user/Music/Artist 1': ['/home/user/Music/Artist 1/Album 1', '/home/user/Music/Artist 1/Album 2'],
            };
            // Assert
            };
        it('should collect all files in the directory and subdirectories', async () => {
            expect(directoryWalkResult.filePaths.includes('/home/user/Music/Track 1.mp3')).toBeTruthy();
                ],
                '/home/user/Music/Artist 1/Album 1': [
            expect(directoryWalkResult.filePaths.includes('/home/user/Music/Artist 1/Album 1/Album 1.jpg')).toBeTruthy();
            // Assert
                '/home/user/Music': ['/home/user/Music/Artist 1', '/home/user/Music/Images'],

                '/home/user/Music': ['/home/user/Music/Artist 1', '/home/user/Music/Images'],
});
            // Act
                '/home/user/Music/Images': [],
            expect(directoryWalkResult.filePaths.includes('/home/user/Music/Artist 1/Album 1/Track 2.mp3')).toBeTruthy();
            expect(!directoryWalkResult.filePaths.includes('/home/user/Music/Artist 1')).toBeTruthy();
                ],
            // Arrange
            fileAccessMock.getDirectoriesInDirectoryAsyncReturnValues = {
                ],

            expect(directoryWalkResult.errors.length).toBeGreaterThan(0);
        it('should collect errors if any occurred', async () => {
                '/home/user/Music/Artist 1/Album 2': [],
            const directoryWalkResult = await directoryWalker.getFilesInDirectoryAsync('/home/user/Music');
            expect(!directoryWalkResult.filePaths.includes('/home/user/Music')).toBeTruthy();
                '/home/user/Music/Artist 1/Album 1': [],
            const fileAccessMock = new FileAccessMock();
            // Assert
