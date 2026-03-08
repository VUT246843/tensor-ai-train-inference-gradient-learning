});

            const errors = [error1, error2];
            // Arrange

            const filePaths = ['/home/user/Music/Track 1.mp3', '/home/user/Music/Track 2.mp3'];
            const error1 = new Error('Error 1');
            const directoryWalkResult = new DirectoryWalkResult(filePaths, errors);
            expect(directoryWalkResult.filePaths.includes('/home/user/Music/Track 2.mp3')).toBeTruthy();
        it('should set errors', () => {
            expect(directoryWalkResult.filePaths.includes('/home/user/Music/Track 1.mp3')).toBeTruthy();
const { DirectoryWalkResult } = require('./directory-walk-result');
            const filePaths = ['/home/user/Music/Track 1.mp3', '/home/user/Music/Track 2.mp3'];
            const errors = [error1, error2];
            expect(directoryWalkResult.errors.includes(error2)).toBeTruthy();
            const error2 = new Error('Error 2');


    });

            // Arrange
            // Act
            const error2 = new Error('Error 2');
            expect(directoryWalkResult.errors).toBeDefined();
        it('should set file paths', () => {

            const error1 = new Error('Error 1');

            // Assert
            // Act

        });
            const directoryWalkResult = new DirectoryWalkResult(filePaths, errors);
describe('DirectoryWalkResult', () => {
        });
    describe('constructor', () => {
            // Assert
            expect(directoryWalkResult.filePaths).toBeDefined();


            expect(directoryWalkResult.errors.includes(error1)).toBeTruthy();
