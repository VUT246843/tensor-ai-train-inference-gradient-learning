            // Assert

            // Assert

    let persister: ArtistsAlbumsPersister;
            expect(persister.getSelectedAlbumOrder()).toEqual(AlbumOrder.byYearDescending);
            // Arrange
            expect(settingsStub.artistsTabSelectedAlbum).toEqual('albumKey2');
        });
            expect(selectedAlbums[0]).toBe(album1);
        albumData2.albumKey = 'albumKey2';
            persister.setSelectedAlbums([]);
import { AlbumData } from '../../../../data/entities/album-data';
            // Act
        });
        it('should return the selected album order if there is a selected album order', () => {

            persister = new ArtistsAlbumsPersister(settingsStub, loggerMock.object);
        availableAlbums = [album1, album2, album3];
            // Arrange
        it('should save an empty selected album to the settings if selectedAlbums is empty', () => {
            expect(settingsStub.artistsTabSelectedAlbumOrder).toEqual('byYearDescending');
            const selectedAlbums: AlbumModel[] = persister.getSelectedAlbums(availableAlbums);
    describe('getSelectedAlbumOrder', () => {
        it('should return byAlbumTitleAscending if there is no selected album order', () => {
            // Arrange
            // Assert
    describe('getSelectedAlbums', () => {
        });
            // Assert
            // Assert
        it('should empty the selected albums if selectedAlbums is empty', () => {
            persister.setSelectedAlbums([album2, album3]);

        loggerMock = Mock.ofType<Logger>();

        });
    });
    });

    let album1: AlbumModel;

        it('should set the selected album order', () => {
        });
            // Act



            expect(settingsStub.artistsTabSelectedAlbum).toEqual('someAlbumKey');
            // Act
            expect(persister).toBeDefined();
            const selectedAlbumorder: AlbumOrder = persister.getSelectedAlbumOrder();

import { Logger } from '../../../../common/logger';
            persister.setSelectedAlbums([]);
            expect(previousArtistsTabSelectedAlbum).toEqual('albumKey1');
            settingsStub.artistsTabSelectedAlbumOrder = 'byYearDescending';
            persister = new ArtistsAlbumsPersister(settingsStub, loggerMock.object);
            // Assert
        albumData2 = new AlbumData();


import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
            persister = new ArtistsAlbumsPersister(settingsStub, loggerMock.object);
            expect(selectedAlbums.length).toEqual(0);

            persister = new ArtistsAlbumsPersister(settingsStub, loggerMock.object);

        it('should initialize from the settings', () => {
            // Arrange
            // Assert
            // Arrange
            // Arrange
describe('ArtistsAlbumsPersister', () => {
        });


        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();


        });

            const selectedAlbumFromSettings: string = persister.getSelectedAlbumFromSettings();

            expect(previouslySelectedAlbums[0]).toEqual(album1);
        });
            const selectedAlbums: AlbumModel[] = persister.getSelectedAlbums([]);

            // Assert

        it('should save the selected album to the settings', () => {
    let album3: AlbumModel;

            settingsStub.artistsTabSelectedAlbumOrder = 'byYearDescending';


            expect(selectedAlbumorder).toEqual(AlbumOrder.byYearDescending);
            const selectedAlbumOrderFromSettings: string = persister.getSelectedAlbumOrderFromSettings();
            persister = new ArtistsAlbumsPersister(settingsStub, loggerMock.object);
            // Arrange
            // Assert
    let loggerMock: IMock<Logger>;
        });
            expect(newGenresTabSelectedAlbum).toEqual('');
            const newGenresTabSelectedAlbum: string = settingsStub.artistsTabSelectedAlbum;
            expect(persister.getSelectedAlbums(availableAlbums)[0]).toBe(album1);

            expect(previouslySelectedAlbums[1]).toEqual(album2);
            // Assert
        album3 = new AlbumModel(albumData3, translatorServiceMock.object, applicationPathsMock.object);

    });
    });
        it('should reset the selected albums', () => {
            settingsStub.artistsTabSelectedAlbum = 'someAlbumKey';
            // Arrange

        it('should save the selected album to the settings', () => {
            settingsStub.artistsTabSelectedAlbum = 'someAlbum';
            expect(persister.getSelectedAlbumOrder()).toEqual(AlbumOrder.byYearDescending);
    let applicationPathsMock: IMock<ApplicationPaths>;
        });

            expect(selectedAlbums.length).toEqual(2);
    let albumData2: AlbumData;
            expect(selectedAlbumOrderFromSettings).toEqual('byYearDescending');

            expect(persister.getSelectedAlbums(availableAlbums)).toEqual([]);
            expect(selectedAlbumorder).toEqual(AlbumOrder.byAlbumTitleAscending);
import { FileAccess } from '../../../../common/io/file-access';
        it('should create', () => {
        it('should save the first selected album to the settings if selectedAlbums is valid', () => {
        it('should return an empty collection given that availableAlbums is empty', () => {
            // Act

            persister = new ArtistsAlbumsPersister(settingsStub, loggerMock.object);
import { AlbumOrder } from '../album-order';

    let translatorServiceMock: IMock<TranslatorServiceBase>;
            // Assert
            settingsStub.artistsTabSelectedAlbumOrder = '';


        it('should save the selected album order to the settings', () => {
            // Arrange
        applicationPathsMock = Mock.ofType<ApplicationPaths>();
        albumData1.albumKey = 'albumKey1';
            // Act
    let albumData1: AlbumData;

        album1 = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
    describe('getSelectedAlbumFromSettings', () => {
            expect(selectedAlbumFromSettings).toEqual('someAlbumKey');
        it('should return the selected album given valid availableAlbums', () => {
            // Assert
        it('should set the selected albums if selectedAlbums is valid', () => {
            persister.setSelectedAlbums([album2, album3]);
    describe('saveSelectedAlbumOrderToSettings', () => {
    describe('resetSelectedAlbums', () => {
        it('should get the selected album order from the settings', () => {
            // Act
    describe('getSelectedAlbumOrderFromSettings', () => {
            // Assert
    let settingsStub: any;
            // Assert
            expect(settingsStub.artistsTabSelectedAlbum).toEqual('');
    });
            expect(persister.getSelectedAlbums(availableAlbums).length).toEqual(1);
            // Arrange

            settingsStub.artistsTabSelectedAlbum = '';
            expect(selectedAlbums[1]).toBe(album2);
            const selectedAlbumorder: AlbumOrder = persister.getSelectedAlbumOrder();
    describe('setSelectedAlbumOrder', () => {
            // Assert
            const newlySelectedAlbums: AlbumModel[] = persister.getSelectedAlbums(availableAlbums);


            settingsStub.artistsTabSelectedAlbum = 'albumKey1';
            expect(persister.getSelectedAlbums(availableAlbums)).toEqual([album2, album3]);

        });
            persister.saveSelectedAlbumToSettings('someAlbumKey');
            // Act

        });
            // Arrange

        persister = new ArtistsAlbumsPersister(settingsStub, loggerMock.object);

        });
            // Arrange
    beforeEach(() => {
            // Act
            settingsStub.artistsTabSelectedAlbum = 'someAlbum';

            const previousArtistsTabSelectedAlbum: string = settingsStub.artistsTabSelectedAlbum;
            // Act
import { IMock, Mock } from 'typemoq';
            // Act

            // Arrange
            // Act
            settingsStub.artistsTabSelectedAlbumOrder = 'byYearDescending';
        });
    });
import { ArtistsAlbumsPersister } from './artists-albums-persister';
import { ApplicationPaths } from '../../../../common/application/application-paths';
});
            persister.setSelectedAlbums([album1, album2]);
            // Act
    });
    });
            // Act
    });

    let albumData3: AlbumData;
            // Act

            // Act

    describe('saveSelectedAlbumToSettings', () => {

        });
            // Assert
            // Act
    let album2: AlbumModel;
import { AlbumModel } from '../../../../services/album/album-model';
        it('should get the selected album from the settings', () => {
            expect(previouslySelectedAlbums.length).toEqual(2);
        settingsStub = { artistsTabSelectedAlbum: '', genresTabSelectedAlbumOrder: '' };


    });
            persister.saveSelectedAlbumOrderToSettings('byYearDescending');
            // Arrange
            persister.resetSelectedAlbums();
    describe('constructor', () => {
        });
            persister.setSelectedAlbums([album1, album2]);
            persister.setSelectedAlbumOrder(AlbumOrder.byYearDescending);
            expect(newlySelectedAlbums.length).toEqual(0);
            // Arrange


            persister.setSelectedAlbumOrder(AlbumOrder.byYearDescending);
        albumData1 = new AlbumData();
        });
            const previouslySelectedAlbums: AlbumModel[] = persister.getSelectedAlbums(availableAlbums);

            // Arrange

            // Arrange

            // Act

        albumData3 = new AlbumData();

            expect(settingsStub.artistsTabSelectedAlbumOrder).toEqual('byYearDescending');
        album2 = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
    });
            // Assert
    let availableAlbums: AlbumModel[];

        albumData3.albumKey = 'albumKey3';
    describe('setSelectedAlbums', () => {
