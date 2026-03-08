
        it('should reset the selected artist', () => {
            // Act
    });
            // Assert

        artist1 = new ArtistModel('artist 1', translatorServiceMock.object);
            // Arrange
            // Act
        artist2 = new ArtistModel('artist 2', translatorServiceMock.object);
import { ArtistOrder } from './artist-browser/artist-order';
        artist3 = new ArtistModel('artist 3', translatorServiceMock.object);

            // Arrange

            // Assert
    let artist3: ArtistModel;

            const selectedArtists: ArtistModel[] = persister.getSelectedArtists([artist1, artist2]);
            // Assert
            expect(settingsStub.artistsTabSelectedArtist).toEqual('');
            // Act

        });
            expect(persister.getSelectedArtists([artist3])).toEqual([]);
        });

            expect(settingsStub.artistsTabSelectedArtist).toEqual('artist 1');
            // Assert
            subscription.unsubscribe();
            // Assert
    let translatorServiceMock: IMock<TranslatorServiceBase>;
                    receivedArtistType = artistType;
    });
            subscription.unsubscribe();
            persister.setSelectedArtistType(ArtistType.albumArtists);
        });
        });
        persister = new ArtistsPersister(settingsStub, loggerMock.object);
    let artist2: ArtistModel;
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';

            // Arrange
            expect(selectedArtists).toEqual([]);
            settingsStub.artistsTabSelectedArtist = 'artist 1';
            subscription.add(
        it('should notify that the selected artists have changed', () => {

            // Arrange
            persister = new ArtistsPersister(settingsStub, loggerMock.object);
            expect(receivedArtistType).toEqual(ArtistType.albumArtists);

            persister.setSelectedArtistType(ArtistType.albumArtists);
import { Subscription } from 'rxjs';

        });

    let loggerMock: IMock<Logger>;
            );

            expect(persister.getSelectedArtists([artist3])).toEqual([artist3]);
            persister.setSelectedArtists([artist1, artist2]);
            // Act



        it('should set the selected artist type', () => {
            // Assert
                persister.selectedArtistTypeChanged$.subscribe((artistType: ArtistType) => {
            expect(persister).toBeDefined();
            // Assert
        });

            // Act
        it('should create', () => {
                    receivedArtistNames = artistNames;
            persister.setSelectedArtistType(ArtistType.albumArtists);
            // Assert
            expect(persister.getSelectedArtists([artist1, artist2])).toEqual([]);
    let subscription: Subscription;
        subscription = new Subscription();
            expect(receivedArtistNames[0]).toEqual('artist 1');
});
            // Arrange
        it('should clear the selected artists if selectedArtists is empty', () => {
            // Act

            persister = new ArtistsPersister(settingsStub, loggerMock.object);
        });
            expect(settingsStub.artistsTabSelectedArtistType).toEqual('albumArtists');

            // Act
                persister.selectedArtistsChanged$.subscribe((artistNames: string[]) => {
            subscription.add(


            // Act

import { ArtistType } from '../../../../services/artist/artist-type';
    });
        });
            persister.setSelectedArtists([artist1, artist3]);
    });
            // Arrange
            expect(persister.getSelectedArtists([artist1, artist2])).toEqual([artist1]);
import { ArtistModel } from '../../../../services/artist/artist-model';
describe('ArtistsPersister', () => {


    describe('constructor', () => {
            // Write tests

            );
                }),

        it('should notify that the selected artists type has changed', () => {
            persister = new ArtistsPersister(settingsStub, loggerMock.object);



            // Arrange

        settingsStub = { artistsTabSelectedArtist: '', artistsTabSelectedArtistOrder: '', artistsTabSelectedArtistType: '' };

        it('should initialize from the settings', () => {

    describe('setSelectedArtistType', () => {
            settingsStub.artistsTabSelectedArtistOrder = 'byArtistDescending';
            // Arrange

            persister.setSelectedArtists([artist3]);

            expect(selectedArtists).toEqual([artist1, artist2]);

        it('should set the selected artists if selectedArtists has elements', () => {
            // Assert
import { ArtistsPersister } from './artists-persister';
            expect(receivedArtistNames.length).toEqual(2);
            settingsStub.artistsTabSelectedArtistType = 'albumArtists';
            // Act
    describe('setSelectedArtists', () => {
        it('should return the selected artists if the selected artists are found in availableArtists', () => {

        it('should TODO', () => {
            // Act
    let settingsStub: any;

            settingsStub.artistsTabSelectedArtistOrder = 'byArtistDescending';
    });
        });
    let persister: ArtistsPersister;

    let artist1: ArtistModel;
    describe('getSelectedArtists', () => {
            // Act
            expect(persister.getSelectedArtistOrder()).toEqual(ArtistOrder.byArtistDescending);
            persister.setSelectedArtists([artist1, artist2]);
        it('should return an empty collection if availableArtists is empty', () => {
            // Arrange
            let receivedArtistNames: string[] = [];
            persister = new ArtistsPersister(settingsStub, loggerMock.object);
            persister.setSelectedArtists([]);
                }),
            // Arrange
            // Assert
            settingsStub.artistsTabSelectedArtistOrder = 'byArtistDescending';
            const selectedArtists: ArtistModel[] = persister.getSelectedArtists([artist1, artist2]);
            persister.setSelectedArtists([artist1, artist3]);
            expect(persister.getSelectedArtistType()).toEqual(ArtistType.albumArtists);
            // Arrange
            persister.setSelectedArtists([artist1, artist2]);
            settingsStub.artistsTabSelectedArtist = 'artist 2';


            expect(persister.getSelectedArtistType()).toEqual(ArtistType.albumArtists);
import { Logger } from '../../../../common/logger';
        loggerMock = Mock.ofType<Logger>();
        it('should return an empty collection if the selected artists are not found in availableArtists', () => {
            expect(persister.getSelectedArtistType()).toEqual(ArtistType.albumArtists);
import { IMock, Mock } from 'typemoq';


            settingsStub.artistsTabSelectedArtistOrder = 'byArtistDescending';
    describe('getSelectedArtistType', () => {

    beforeEach(() => {
            expect(selectedArtists).toEqual([]);
        });
        });
            const selectedArtists: ArtistModel[] = persister.getSelectedArtists([]);
            expect(receivedArtistNames[1]).toEqual('artist 3');
        });
    });
            persister.setSelectedArtists([artist3]);
            // Assert
            let receivedArtistType: ArtistType = ArtistType.allArtists;
