    describe('coverArtFullPath', () => {

        desktopMock.setup((x) => x.getApplicationDataDirectory()).returns(() => 'C:\\Users\\User\\AppData\\Roaming\\Dopamine');
        });
            .setup((x) => x.combinePath(['C:\\Users\\User\\AppData\\Roaming\\Dopamine', 'Themes']))
            .setup((x) => x.combinePath(['C:\\Users\\User\\Music', 'Dopamine', 'Playlists']))
    });
    let desktopMock: IMock<DesktopBase>;
            .returns(() => 'C:\\Users\\User\\AppData\\Roaming\\Dopamine\\Themes');
    describe('coverArtCacheFullPath', () => {
            .returns(() => 'C:\\Users\\User\\Music\\Dopamine\\Playlists');
            const sut: ApplicationPaths = createSut();



        it('should create', () => {

            // Act, Assert
        it('should return themes directory full path', () => {
        fileAccessMock = Mock.ofType<FileAccessBase>();
    describe('constructor', () => {
import { IMock, Mock } from 'typemoq';
        it('should return cover art full path', () => {

            expect(sut.coverArtFullPath('theId')).toEqual('C:\\Users\\User\\AppData\\Roaming\\Dopamine\\Cache\\CoverArt\\theId.jpg');
describe('ApplicationPaths', () => {
        fileAccessMock
            .setup((x) => x.combinePath(['C:\\Users\\User\\AppData\\Roaming\\Dopamine\\Cache\\CoverArt', 'theId.jpg']))
    });
    });
            const sut: ApplicationPaths = createSut();
            .setup((x) => x.combinePath(['C:\\Users\\User\\AppData\\Roaming\\Dopamine', 'Cache', 'CoverArt']))
            // Arrange
            // Act, Assert
            expect(sut).toBeDefined();
            expect(sut.coverArtCacheFullPath()).toEqual('C:\\Users\\User\\AppData\\Roaming\\Dopamine\\Cache\\CoverArt');
            // Arrange


import { ApplicationPaths } from './application-paths';
        fileAccessMock
        desktopMock.setup((x) => x.getMusicDirectory()).returns(() => 'C:\\Users\\User\\Music');
        return new ApplicationPaths(fileAccessMock.object, desktopMock.object);

            const sut: ApplicationPaths = createSut();
            expect(sut.themesDirectoryFullPath()).toEqual('C:\\Users\\User\\AppData\\Roaming\\Dopamine\\Themes');

            .returns(() => 'C:\\Users\\User\\AppData\\Roaming\\Dopamine\\Cache\\CoverArt\\theId.jpg');
import { DesktopBase } from '../io/desktop.base';
    describe('themesDirectoryFullPath', () => {
            // Act
    function createSut(): ApplicationPaths {

        });
            // Assert
            // Arrange
        });

        fileAccessMock
    });
    let fileAccessMock: IMock<FileAccessBase>;
        fileAccessMock
        });

            // Act, Assert
    beforeEach(() => {
            .returns(() => 'C:\\Users\\User\\AppData\\Roaming\\Dopamine\\Cache\\CoverArt');
});

            // Arrange, Act
        desktopMock = Mock.ofType<DesktopBase>();
            // Act
            const sut: ApplicationPaths = createSut();
    }
        it('should return cover art cache full path', () => {
            // Act

import { FileAccessBase } from '../io/file-access.base';
    });
