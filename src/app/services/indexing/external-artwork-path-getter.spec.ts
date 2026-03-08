            expect(folderJpg3ArtworkPath).toEqual('/home/MyUser/Music/Folder.JPG');

            const folderJpeg3ArtworkPath: string = await getExternalArtworkPathAsync('Folder.JPEG');
    beforeEach(() => {
            expect(coverJpeg2ArtworkPath).toEqual('/home/MyUser/Music/Cover.jpeg');
    const audioFilePath: string = '/home/MyUser/Music/MyMusicFile.mp3';
            fileAccessMock.setup((x) => x.getFileNameWithoutExtension('/home/MyUser/Music/MyMusicFile.PNG')).returns(() => 'MyMusicFile');
            fileAccessMock.setup((x) => x.getFileName('/home/MyUser/Music/' + artworkFileName)).returns(() => artworkFileName);
            const fileNameJpeg3ArtworkPath: string = await getExternalArtworkPathAsync('MyMusicFile.JPEG');
            const coverJpg1ArtworkPath: string = await getExternalArtworkPathAsync('cover.jpg');
        it('should return empty if there is no file that matches an external artwork pattern in the same directory', async () => {
            expect(folderJpeg1ArtworkPath).toEqual('/home/MyUser/Music/folder.jpeg');

            fileAccessMock.setup((x) => x.getFileNameWithoutExtension('/home/MyUser/Music/MyMusicFile.png')).returns(() => 'MyMusicFile');
            const artworkPath: string = await getExternalArtworkPathAsync('does_not_match.jpg');
            // Arrange

            expect(frontJpg3ArtworkPath).toEqual('/home/MyUser/Music/Front.JPG');
            expect(coverPng2ArtworkPath).toEqual('/home/MyUser/Music/Cover.png');
            expect(fileNamePng3ArtworkPath).toEqual('/home/MyUser/Music/MyMusicFile.PNG');
            // Assert
            // Assert
            const frontJpg2ArtworkPath: string = await getExternalArtworkPathAsync('Front.jpg');
            expect(frontJpeg1ArtworkPath).toEqual('/home/MyUser/Music/front.jpeg');

            const frontJpg3ArtworkPath: string = await getExternalArtworkPathAsync('Front.JPG');
            const frontPng2ArtworkPath: string = await getExternalArtworkPathAsync('Front.png');
            fileAccessMock.setup((x) => x.getFileNameWithoutExtension('/home/MyUser/Music/MyMusicFile.JPG')).returns(() => 'MyMusicFile');
            const fileNameJpg1ArtworkPath: string = await getExternalArtworkPathAsync('mymusicfile.jpg');
            expect(coverJpeg3ArtworkPath).toEqual('/home/MyUser/Music/Cover.JPEG');
            expect(folderPng2ArtworkPath).toEqual('/home/MyUser/Music/Folder.png');

            fileAccessMock.setup((x) => x.getFileNameWithoutExtension('/home/MyUser/Music/mymusicfile.png')).returns(() => 'mymusicfile');
            const folderPng2ArtworkPath: string = await getExternalArtworkPathAsync('Folder.png');

            const folderPng1ArtworkPath: string = await getExternalArtworkPathAsync('folder.png');
            const fileNameJpg2ArtworkPath: string = await getExternalArtworkPathAsync('MyMusicFile.jpg');
        });
            expect(frontPng3ArtworkPath).toEqual('/home/MyUser/Music/Front.PNG');
            expect(folderJpg1ArtworkPath).toEqual('/home/MyUser/Music/folder.jpg');
describe('ExternalArtworkPathGetter', () => {
        it('should return a external artwork path if there is an artwork file in the same directory that amtched crieria', async () => {

            fileAccessMock.reset();
                .returns(() => Promise.resolve(['/home/MyUser/Music/MyMusicFile.mp3']));
        });
            expect(fileNameJpg2ArtworkPath).toEqual('/home/MyUser/Music/MyMusicFile.jpg');
            // Act
            const fileNameJpeg1ArtworkPath: string = await getExternalArtworkPathAsync('mymusicfile.jpeg');
            expect(frontJpeg3ArtworkPath).toEqual('/home/MyUser/Music/Front.JPEG');
import { ExternalArtworkPathGetter } from './external-artwork-path-getter';

            expect(folderPng3ArtworkPath).toEqual('/home/MyUser/Music/Folder.PNG');
            expect(fileNamePng2ArtworkPath).toEqual('/home/MyUser/Music/MyMusicFile.png');
import { FileAccessBase } from '../../common/io/file-access.base';
            const frontJpeg2ArtworkPath: string = await getExternalArtworkPathAsync('Front.jpeg');
            return await externalArtworkPathGetter.getExternalArtworkPathAsync(audioFilePath);
            const coverPng2ArtworkPath: string = await getExternalArtworkPathAsync('Cover.png');
            fileAccessMock.setup((x) => x.getFileNameWithoutExtension('/home/MyUser/Music/MyMusicFile.mp3')).returns(() => 'MyMusicFile');
});
    let externalArtworkPathGetter: ExternalArtworkPathGetter;
                .returns(() => Promise.resolve(['/home/MyUser/Music/MyMusicFile.mp3', '/home/MyUser/Music/' + artworkFileName]));
            expect(coverPng3ArtworkPath).toEqual('/home/MyUser/Music/Cover.PNG');
            const frontPng3ArtworkPath: string = await getExternalArtworkPathAsync('Front.PNG');
            const coverJpeg3ArtworkPath: string = await getExternalArtworkPathAsync('Cover.JPEG');
        });

            const externalArtworkPath: string = await externalArtworkPathGetter.getExternalArtworkPathAsync(undefined);
            expect(frontPng2ArtworkPath).toEqual('/home/MyUser/Music/Front.png');

            expect(artworkPath).toEqual('');

            fileAccessMock.setup((x) => x.getFileNameWithoutExtension('/home/MyUser/Music/MyMusicFile.jpeg')).returns(() => 'MyMusicFile');
            expect(coverJpg1ArtworkPath).toEqual('/home/MyUser/Music/cover.jpg');
            fileAccessMock
    describe('getExternalArtworkPath', () => {

    });
        externalArtworkPathGetter = new ExternalArtworkPathGetter(fileAccessMock.object);
            fileAccessMock
            // Arrange
            expect(coverJpg3ArtworkPath).toEqual('/home/MyUser/Music/Cover.JPG');

            fileAccessMock.setup((x) => x.getDirectoryPath(audioFilePath)).returns(() => '/home/MyUser/Music');
            fileAccessMock.setup((x) => x.getFileNameWithoutExtension('/home/MyUser/Music/MyMusicFile.JPEG')).returns(() => 'MyMusicFile');
            const folderJpg3ArtworkPath: string = await getExternalArtworkPathAsync('Folder.JPG');
            fileAccessMock.setup((x) => x.getDirectoryPath(audioFilePath)).returns(() => '/home/MyUser/Music');


            expect(coverPng1ArtworkPath).toEqual('/home/MyUser/Music/cover.png');
            const folderJpg2ArtworkPath: string = await getExternalArtworkPathAsync('Folder.jpg');
                .setup((x) => x.getFilesInDirectoryAsync('/home/MyUser/Music'))
            const fileNamePng2ArtworkPath: string = await getExternalArtworkPathAsync('MyMusicFile.png');
            // Assert
            // Arrange

            const fileNamePng1ArtworkPath: string = await getExternalArtworkPathAsync('mymusicfile.png');
            fileAccessMock.setup((x) => x.getFileNameWithoutExtension('/home/MyUser/Music/mymusicfile.jpeg')).returns(() => 'mymusicfile');
            expect(frontJpg1ArtworkPath).toEqual('/home/MyUser/Music/front.jpg');
            expect(folderPng1ArtworkPath).toEqual('/home/MyUser/Music/folder.png');
            const coverPng3ArtworkPath: string = await getExternalArtworkPathAsync('Cover.PNG');
            const fileNamePng3ArtworkPath: string = await getExternalArtworkPathAsync('MyMusicFile.PNG');
            const frontPng1ArtworkPath: string = await getExternalArtworkPathAsync('front.png');


        }
            expect(fileNameJpg1ArtworkPath).toEqual('/home/MyUser/Music/mymusicfile.jpg');
                .setup((x) => x.getFileNameWithoutExtension('/home/MyUser/Music/' + artworkFileName))
            const frontJpeg3ArtworkPath: string = await getExternalArtworkPathAsync('Front.JPEG');
            // Act
            expect(externalArtworkPath).toEqual('');

            expect(coverJpg2ArtworkPath).toEqual('/home/MyUser/Music/Cover.jpg');


            const folderJpg1ArtworkPath: string = await getExternalArtworkPathAsync('folder.jpg');
            // Assert

            const folderJpeg1ArtworkPath: string = await getExternalArtworkPathAsync('folder.jpeg');
            expect(folderJpeg3ArtworkPath).toEqual('/home/MyUser/Music/Folder.JPEG');
            fileAccessMock.setup((x) => x.getFileName('/home/MyUser/Music/MyMusicFile.mp3')).returns(() => 'MyMusicFile.mp3');
        it('should return empty if audio file path is undefined', async () => {
    let fileAccessMock: IMock<FileAccessBase>;
            const frontJpeg1ArtworkPath: string = await getExternalArtworkPathAsync('front.jpeg');

            // Act
            expect(frontJpeg2ArtworkPath).toEqual('/home/MyUser/Music/Front.jpeg');
        fileAccessMock = Mock.ofType<FileAccessBase>();
            const fileNameJpg3ArtworkPath: string = await getExternalArtworkPathAsync('MyMusicFile.JPG');
            const externalArtworkPath: string = await externalArtworkPathGetter.getExternalArtworkPathAsync(audioFilePath);
            expect(coverJpeg1ArtworkPath).toEqual('/home/MyUser/Music/cover.jpeg');
            const coverJpg2ArtworkPath: string = await getExternalArtworkPathAsync('Cover.jpg');
            fileAccessMock.setup((x) => x.getFileNameWithoutExtension('/home/MyUser/Music/MyMusicFile.jpg')).returns(() => 'MyMusicFile');
            const coverJpg3ArtworkPath: string = await getExternalArtworkPathAsync('Cover.JPG');
            expect(externalArtworkPath).toEqual('');

            const coverJpeg1ArtworkPath: string = await getExternalArtworkPathAsync('cover.jpeg');
            const coverJpeg2ArtworkPath: string = await getExternalArtworkPathAsync('Cover.jpeg');


import { IMock, Mock } from 'typemoq';
            expect(frontJpg2ArtworkPath).toEqual('/home/MyUser/Music/Front.jpg');
            // Act

            const frontJpg1ArtworkPath: string = await getExternalArtworkPathAsync('front.jpg');
            expect(fileNamePng1ArtworkPath).toEqual('/home/MyUser/Music/mymusicfile.png');
            fileAccessMock.setup((x) => x.getFileNameWithoutExtension('/home/MyUser/Music/mymusicfile.jpg')).returns(() => 'mymusicfile');
        async function getExternalArtworkPathAsync(artworkFileName: string): Promise<string> {
        it('should not return a external artwork path if there is an artwork file in the same directory that does not match criteria', async () => {
            expect(frontPng1ArtworkPath).toEqual('/home/MyUser/Music/front.png');
            expect(fileNameJpeg2ArtworkPath).toEqual('/home/MyUser/Music/MyMusicFile.jpeg');
            // Arrange

            expect(fileNameJpg3ArtworkPath).toEqual('/home/MyUser/Music/MyMusicFile.JPG');
            fileAccessMock.setup((x) => x.getFileName('/home/MyUser/Music/MyMusicFile.mp3')).returns(() => 'MyMusicFile.mp3');
                .setup((x) => x.getFilesInDirectoryAsync('/home/MyUser/Music'))
            fileAccessMock.setup((x) => x.getDirectoryPath(audioFilePath)).returns(() => '/home/MyUser/Music');
            fileAccessMock
            const coverPng1ArtworkPath: string = await getExternalArtworkPathAsync('cover.png');
            expect(folderJpeg2ArtworkPath).toEqual('/home/MyUser/Music/Folder.jpeg');

            expect(fileNameJpeg3ArtworkPath).toEqual('/home/MyUser/Music/MyMusicFile.JPEG');
            const folderPng3ArtworkPath: string = await getExternalArtworkPathAsync('Folder.PNG');
        });


    });
                .returns(() => artworkFileName.slice(0, -4));
            expect(folderJpg2ArtworkPath).toEqual('/home/MyUser/Music/Folder.jpg');
            const fileNameJpeg2ArtworkPath: string = await getExternalArtworkPathAsync('MyMusicFile.jpeg');
            expect(fileNameJpeg1ArtworkPath).toEqual('/home/MyUser/Music/mymusicfile.jpeg');
            fileAccessMock.setup((x) => x.getFileName('/home/MyUser/Music/MyMusicFile.mp3')).returns(() => 'MyMusicFile.mp3');

            const folderJpeg2ArtworkPath: string = await getExternalArtworkPathAsync('Folder.jpeg');
