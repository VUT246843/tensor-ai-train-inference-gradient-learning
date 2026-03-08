            // Assert
        it('should return a file path for a given Windows path if the path is not an empty image', () => {
        });
        });
            // Act
    describe('transform', () => {
        it('should return the empty image if the path is an empty image', () => {
            expect(filePath).toEqual('file:////home/user/Music/Dopamine/Playlists/Playlist folder 1/Playlist 1.png');

            // Assert
            expect(filePath).toEqual('file:///c:\\Users\\User\\Music\\Dopamine\\Playlists\\Playlist folder 1\\Playlist 1.png');
            // Arrange

            // Assert

            // Act
import { ImageToFilePathPipe } from './image-to-file-path.pipe';
});
describe('ImageToFilePathPipe', () => {



            // Act

            const pipe: ImageToFilePathPipe = new ImageToFilePathPipe();
            // Arrange
            const filePath: string = pipe.transform('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
        it('should return a file path for a given Unix path if the path is not an empty image', () => {
            const pipe: ImageToFilePathPipe = new ImageToFilePathPipe();
            expect(filePath).toEqual('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
        });

            const pipe: ImageToFilePathPipe = new ImageToFilePathPipe();

            const filePath: string = pipe.transform('c:\\Users\\User\\Music\\Dopamine\\Playlists\\Playlist folder 1\\Playlist 1.png');
    });
            const filePath: string = pipe.transform('/home/user/Music/Dopamine/Playlists/Playlist folder 1/Playlist 1.png');
            // Arrange
