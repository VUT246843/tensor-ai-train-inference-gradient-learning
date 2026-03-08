            // Arrange

    });
            // Arrange


            // Assert
            const previouslySelectedAlbums: AlbumModel[] = persister.getSelectedAlbums(availableAlbums);
        it('should get the selected album order from the settings', () => {
        it('should return an empty collection given that availableAlbums is empty', () => {

        albumData2 = new AlbumData();
});
            // Assert

        });

            expect(previouslySelectedAlbums.length).toEqual(2);
            settingsStub.genresTabSelectedAlbumOrder = 'byYearDescending';
            // Act
        it('should empty the selected albums if selectedAlbums is empty', () => {
            settingsStub.genresTabSelectedAlbum = 'albumKey1';
import { GenresAlbumsPersister } from './genres-albums-persister';
            expect(selectedAlbums[1]).toBe(album2);
    let albumData2: AlbumData;



            // Arrange

    describe('constructor', () => {
            // Assert
            expect(persister).toBeDefined();
    let settingsStub: any;
            expect(previouslySelectedAlbums[1]).toEqual(album2);
import { ApplicationPaths } from '../../../../common/application/application-paths';
    let albumData3: AlbumData;
            expect(persister.getSelectedAlbums(availableAlbums)).toEqual([album2, album3]);

    let albumData1: AlbumData;
        albumData1.albumKey = 'albumKey1';
            const selectedAlbums: AlbumModel[] = persister.getSelectedAlbums(availableAlbums);



            // Assert
    describe('saveSelectedAlbumToSettings', () => {
        it('should return byAlbumTitleAscending if there is no selected album order', () => {


        persister = new GenresAlbumsPersister(settingsStub, loggerMock.object);
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            // Arrange
            expect(selectedAlbums.length).toEqual(2);

            expect(settingsStub.genresTabSelectedAlbum).toEqual('');

            // Act
        it('should save the first selected album to the settings if selectedAlbums is valid', () => {
    let album1: AlbumModel;
            // Act
    });
            expect(selectedAlbumorder).toEqual(AlbumOrder.byAlbumTitleAscending);
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            persister = new GenresAlbumsPersister(settingsStub, loggerMock.object);
        album1 = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
            persister.saveSelectedAlbumToSettings('someAlbumKey');
        });
            const selectedAlbums: AlbumModel[] = persister.getSelectedAlbums([]);
            // Arrange

        });

            const selectedAlbumorder: AlbumOrder = persister.getSelectedAlbumOrder();
        applicationPathsMock = Mock.ofType<ApplicationPaths>();
            const newlySelectedAlbums: AlbumModel[] = persister.getSelectedAlbums(availableAlbums);
            // Act
    });
            // Assert
        it('should save an empty selected album to the settings if selectedAlbums is empty', () => {
            settingsStub.genresTabSelectedAlbum = 'someAlbum';




            persister.setSelectedAlbums([album2, album3]);
    describe('getSelectedAlbums', () => {
            persister.saveSelectedAlbumOrderToSettings('byYearDescending');

            // Assert
            // Act
    let applicationPathsMock: IMock<ApplicationPaths>;
            expect(persister.getSelectedAlbumOrder()).toEqual(AlbumOrder.byYearDescending);
        it('should get the selected album from the settings', () => {

            persister = new GenresAlbumsPersister(settingsStub, loggerMock.object);
            // Arrange



    });
            expect(selectedAlbumOrderFromSettings).toEqual('byYearDescending');
            persister = new GenresAlbumsPersister(settingsStub, loggerMock.object);
describe('GenresPersister', () => {
        });
    });
            // Arrange

        it('should create', () => {

            // Arrange
            persister = new GenresAlbumsPersister(settingsStub, loggerMock.object);
        settingsStub = { genresTabSelectedAlbum: '', genresTabSelectedAlbumOrder: '' };
            // Act
        albumData1 = new AlbumData();
        it('should reset the selected albums', () => {

            // Assert
            // Act
            settingsStub.genresTabSelectedAlbum = 'someAlbum';
            settingsStub.genresTabSelectedAlbumOrder = 'byYearDescending';
            // Arrange
            // Assert
            // Arrange
            expect(selectedAlbums.length).toEqual(0);
        album2 = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);

            persister = new GenresAlbumsPersister(settingsStub, loggerMock.object);
        });
        });
        albumData3.albumKey = 'albumKey3';
            const selectedAlbumorder: AlbumOrder = persister.getSelectedAlbumOrder();
            const newGenresTabSelectedAlbum: string = settingsStub.genresTabSelectedAlbum;
            const selectedAlbumFromSettings: string = persister.getSelectedAlbumFromSettings();
        album3 = new AlbumModel(albumData3, translatorServiceMock.object, applicationPathsMock.object);

        });


            expect(settingsStub.genresTabSelectedAlbumOrder).toEqual('byYearDescending');
            // Arrange
        albumData3 = new AlbumData();
import { IMock, Mock } from 'typemoq';

            persister.setSelectedAlbums([album1, album2]);

            // Act
    describe('getSelectedAlbumOrder', () => {
    });
    let availableAlbums: AlbumModel[];
        });
    });

        it('should return the selected album given valid availableAlbums', () => {
import { AlbumModel } from '../../../../services/album/album-model';
    });
    beforeEach(() => {


    let album2: AlbumModel;
            expect(selectedAlbumorder).toEqual(AlbumOrder.byYearDescending);
            settingsStub.genresTabSelectedAlbumOrder = '';
        it('should save the selected album to the settings', () => {



        });
            settingsStub.genresTabSelectedAlbum = 'someAlbumKey';
        });
        });
            // Arrange
    describe('setSelectedAlbumOrder', () => {
            // Act
            expect(settingsStub.genresTabSelectedAlbum).toEqual('someAlbumKey');


    let persister: GenresAlbumsPersister;
        it('should initialize from the settings', () => {
            // Act
    });
        });
            expect(settingsStub.genresTabSelectedAlbumOrder).toEqual('byYearDescending');
            // Assert
    });


            // Assert
import { AlbumData } from '../../../../data/entities/album-data';
            settingsStub.genresTabSelectedAlbumOrder = 'byYearDescending';

            expect(persister.getSelectedAlbumOrder()).toEqual(AlbumOrder.byYearDescending);
            // Assert
    describe('getSelectedAlbumFromSettings', () => {
            expect(persister.getSelectedAlbums(availableAlbums)).toEqual([]);
            // Act
            expect(previousGenresTabSelectedAlbum).toEqual('albumKey1');
            // Assert
    let loggerMock: IMock<Logger>;
            // Arrange
    describe('getSelectedAlbumOrderFromSettings', () => {
        it('should set the selected albums if selectedAlbums is valid', () => {
            const previousGenresTabSelectedAlbum: string = settingsStub.genresTabSelectedAlbum;
        availableAlbums = [album1, album2, album3];

            // Assert
            // Arrange
        it('should save the selected album to the settings', () => {
        });
            // Act
            expect(persister.getSelectedAlbums(availableAlbums)[0]).toBe(album1);
        });
            // Assert

            expect(selectedAlbumFromSettings).toEqual('someAlbumKey');
            expect(persister.getSelectedAlbums(availableAlbums).length).toEqual(1);
            // Act
            expect(selectedAlbums[0]).toBe(album1);
            // Act
            // Arrange
        loggerMock = Mock.ofType<Logger>();
            // Act
        });

            // Assert
            persister.setSelectedAlbumOrder(AlbumOrder.byYearDescending);
            // Assert
            expect(settingsStub.genresTabSelectedAlbum).toEqual('albumKey2');
            // Assert
            // Arrange
import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
    let album3: AlbumModel;




        });
    describe('resetSelectedAlbums', () => {
            persister.resetSelectedAlbums();
            expect(newlySelectedAlbums.length).toEqual(0);
    describe('setSelectedAlbums', () => {
import { Logger } from '../../../../common/logger';
        it('should return the selected album order if there is a selected album order', () => {
            persister.setSelectedAlbums([album1, album2]);
    });
        it('should set the selected album order', () => {
            expect(newGenresTabSelectedAlbum).toEqual('');
            persister.setSelectedAlbums([album2, album3]);

import { AlbumOrder } from '../album-order';
    describe('saveSelectedAlbumOrderToSettings', () => {

            persister.setSelectedAlbums([]);
            expect(previouslySelectedAlbums[0]).toEqual(album1);
            // Act
            persister.setSelectedAlbumOrder(AlbumOrder.byYearDescending);
            // Act
            persister = new GenresAlbumsPersister(settingsStub, loggerMock.object);
        albumData2.albumKey = 'albumKey2';
            settingsStub.genresTabSelectedAlbum = '';

            const selectedAlbumOrderFromSettings: string = persister.getSelectedAlbumOrderFromSettings();
        });
        it('should save the selected album order to the settings', () => {
            // Arrange
            persister.setSelectedAlbums([]);
