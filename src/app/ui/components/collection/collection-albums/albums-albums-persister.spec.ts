
            persister = new AlbumsAlbumsPersister(settingsStub, loggerMock.object);
            expect(settingsStub.albumsTabSelectedAlbumOrder).toEqual('byYearDescending');

        applicationPathsMock = Mock.ofType<ApplicationPaths>();
            );


    describe('setSelectedAlbumOrder', () => {
            expect(persister).toBeDefined();

import { IMock, Mock } from 'typemoq';


            const selectedAlbums: AlbumModel[] = persister.getSelectedAlbums([]);
            expect(previouslySelectedAlbums.length).toEqual(2);
            expect(selectedAlbumFromSettings).toEqual('someAlbumKey');



        });

            // Act

            expect(persister.getSelectedAlbums(availableAlbums)).toEqual([]);
            // Arrange
            persister = new AlbumsAlbumsPersister(settingsStub, loggerMock.object);
            // Arrange
            persister.setSelectedAlbumOrder(AlbumOrder.byYearDescending);
            expect(persister.getSelectedAlbums(availableAlbums)[0]).toBe(album1);
                    receivedAlbumKeys = albumKeys;
        });
    let subscription: Subscription;

            persister.saveSelectedAlbumOrderToSettings('byYearDescending');

import { FileAccess } from '../../../../common/io/file-access';

    describe('getSelectedAlbumOrder', () => {
            const selectedAlbumOrderFromSettings: string = persister.getSelectedAlbumOrderFromSettings();
    describe('getSelectedAlbumOrderFromSettings', () => {
        fileAccessMock = Mock.ofType<FileAccess>();
            expect(settingsStub.albumsTabSelectedAlbum).toEqual('someAlbumKey');

        it('should get the selected album order from the settings', () => {
        });
            // Assert
        album1 = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
        it('should return an empty collection given that availableAlbums is empty', () => {
        albumData1.albumKey = 'albumKey1';
            // Assert
        it('should save the selected album order to the settings', () => {

        persister = new AlbumsAlbumsPersister(settingsStub, loggerMock.object);
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();

    let albumData3: AlbumData;

            // Act
            persister.setSelectedAlbums([]);
        });
            // Assert
    let album1: AlbumModel;

        });
    });
    let albumData2: AlbumData;
        });
        it('should save the selected album to the settings', () => {

            // Assert
            // Arrange
        });
            // Arrange

            expect(selectedAlbumOrderFromSettings).toEqual('byYearDescending');

        });
            subscription.unsubscribe();
        it('should reset the selected albums', () => {
            expect(persister.getSelectedAlbumOrder()).toEqual(AlbumOrder.byYearDescending);
            settingsStub.albumsTabSelectedAlbumOrder = '';
        it('should return the selected album order if there is a selected album order', () => {
            expect(previousAlbumsTabSelectedAlbum).toEqual('albumKey1');
import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
        album2 = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
            // Arrange
            // Assert
        });
            persister = new AlbumsAlbumsPersister(settingsStub, loggerMock.object);
            expect(receivedAlbumKeys[1]).toEqual('albumKey3');
            // Arrange
        it('should return byAlbumTitleAscending if there is no selected album order', () => {
    let availableAlbums: AlbumModel[];

    });
            persister.saveSelectedAlbumToSettings('someAlbumKey');
        it('should create', () => {
    });
        subscription = new Subscription();
            expect(previouslySelectedAlbums[1]).toEqual(album2);
            persister.setSelectedAlbumOrder(AlbumOrder.byYearDescending);
        });
            // Act

            settingsStub.albumsTabSelectedAlbum = 'someAlbum';

            // Act
            persister.setSelectedAlbums([album2, album3]);


    let applicationPathsMock: IMock<ApplicationPaths>;
        settingsStub = { albumsTabSelectedAlbum: '', albumsTabSelectedAlbumOrder: '' };
                }),
        albumData2.albumKey = 'albumKey2';
            // Arrange


            let receivedAlbumKeys: string[] = [];
        it('should notify that the selected albums have changed', () => {

    describe('resetSelectedAlbums', () => {
            persister = new AlbumsAlbumsPersister(settingsStub, loggerMock.object);
            settingsStub.albumsTabSelectedAlbum = 'someAlbum';
    });
    describe('saveSelectedAlbumOrderToSettings', () => {
});
            // Act
            // Act
    });
            // Act
            expect(selectedAlbums.length).toEqual(0);
    let settingsStub: any;
            expect(selectedAlbums[1]).toBe(album2);
        albumData3.albumKey = 'albumKey3';

    describe('constructor', () => {
            expect(previouslySelectedAlbums[0]).toEqual(album1);
    describe('saveSelectedAlbumToSettings', () => {

            expect(persister.getSelectedAlbums(availableAlbums).length).toEqual(1);
            // Arrange
            // Assert

            expect(selectedAlbums[0]).toBe(album1);
        });

            const selectedAlbumOrder: AlbumOrder = persister.getSelectedAlbumOrder();
            // Assert
    let persister: AlbumsAlbumsPersister;
        loggerMock = Mock.ofType<Logger>();
    let albumData1: AlbumData;
            // Assert

            const selectedAlbumOrder: AlbumOrder = persister.getSelectedAlbumOrder();
import { AlbumModel } from '../../../../services/album/album-model';
            expect(newlySelectedAlbums.length).toEqual(0);
    });
        it('should save an empty selected album to the settings if selectedAlbums is empty', () => {
        it('should save the first selected album to the settings if selectedAlbums is valid', () => {
            // Act
    });

            // Act
        it('should save the selected album order to the settings', () => {
            // Act
import { AlbumOrder } from '../album-order';


            const newlySelectedAlbums: AlbumModel[] = persister.getSelectedAlbums(availableAlbums);
            // Arrange

import { ApplicationPaths } from '../../../../common/application/application-paths';
        it('should initialize from the settings', () => {
            const selectedAlbumFromSettings: string = persister.getSelectedAlbumFromSettings();
import { AlbumData } from '../../../../data/entities/album-data';
            const newGenresTabSelectedAlbum: string = settingsStub.albumsTabSelectedAlbum;


            persister = new AlbumsAlbumsPersister(settingsStub, loggerMock.object);
            // Assert
            // Assert
            settingsStub.albumsTabSelectedAlbum = 'albumKey1';


            // Assert
        });
    });
            // Arrange
            // Act
            persister.setSelectedAlbums([album2, album3]);
            // Assert

        });
            persister.resetSelectedAlbums();
describe('AlbumsAlbumsPersister', () => {
            subscription.add(
            expect(persister.getSelectedAlbumOrder()).toEqual(AlbumOrder.byYearDescending);
            const previouslySelectedAlbums: AlbumModel[] = persister.getSelectedAlbums(availableAlbums);
        });
    beforeEach(() => {

            // Assert
            persister = new AlbumsAlbumsPersister(settingsStub, loggerMock.object);
        });

        it('should empty the selected albums if selectedAlbums is empty', () => {
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            // Arrange
        albumData2 = new AlbumData();
            // Arrange
            // Act



            settingsStub.albumsTabSelectedAlbum = '';
    describe('getSelectedAlbums', () => {

            const selectedAlbums: AlbumModel[] = persister.getSelectedAlbums(availableAlbums);
            persister.setSelectedAlbums([album1, album2]);

import { Subscription } from 'rxjs';
        albumData1 = new AlbumData();
    let album2: AlbumModel;
    });


        it('should set the selected album order', () => {
            // Arrange
    describe('getSelectedAlbumFromSettings', () => {
            // Arrange
            // Arrange
            expect(settingsStub.albumsTabSelectedAlbum).toEqual('');
    let fileAccessMock: IMock<FileAccess>;
    let album3: AlbumModel;
    });
            expect(newGenresTabSelectedAlbum).toEqual('');
    let loggerMock: IMock<Logger>;
            expect(receivedAlbumKeys.length).toEqual(2);


        });
        });
        album3 = new AlbumModel(albumData3, translatorServiceMock.object, applicationPathsMock.object);

            settingsStub.albumsTabSelectedAlbumOrder = 'byYearDescending';
            // Assert
import { Logger } from '../../../../common/logger';
            // Arrange
            settingsStub.albumsTabSelectedAlbumOrder = 'byYearDescending';

            // Arrange
        albumData3 = new AlbumData();
import { AlbumsAlbumsPersister } from './albums-albums-persister';
            expect(settingsStub.albumsTabSelectedAlbumOrder).toEqual('byYearDescending');
                persister.selectedAlbumsChanged$.subscribe((albumKeys: string[]) => {
            // Assert
            settingsStub.albumsTabSelectedAlbumOrder = 'byYearDescending';
            expect(selectedAlbums.length).toEqual(2);
            expect(selectedAlbumOrder).toEqual(AlbumOrder.byAlbumTitleAscending);
        it('should get the selected album from the settings', () => {


    });
        it('should return the selected album given valid availableAlbums', () => {
            // Act
            persister.setSelectedAlbums([]);
            // Assert
            // Act
            // Assert
    describe('setSelectedAlbums', () => {
            // Act
        });
            settingsStub.albumsTabSelectedAlbum = 'someAlbumKey';
            expect(persister.getSelectedAlbums(availableAlbums)).toEqual([album2, album3]);
            expect(receivedAlbumKeys[0]).toEqual('albumKey2');
            persister.setSelectedAlbums([album1, album2]);
        availableAlbums = [album1, album2, album3];

            // Act

            // Arrange
        it('should set the selected albums if selectedAlbums is valid', () => {

            expect(settingsStub.albumsTabSelectedAlbum).toEqual('albumKey2');
            persister.setSelectedAlbums([album2, album3]);
            // Act
            expect(selectedAlbumOrder).toEqual(AlbumOrder.byYearDescending);
            // Act
            // Assert

            const previousAlbumsTabSelectedAlbum: string = settingsStub.albumsTabSelectedAlbum;

