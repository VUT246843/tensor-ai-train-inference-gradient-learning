            persister.setSelectedTrackOrder(TrackOrder.byTrackTitleDescending);
        it('should get the selected track order from the settings', () => {
            // Act
import { TrackOrder } from '../track-order';
            // Arrange
            settingsStub.artistsTabSelectedTrackOrder = 'byTrackTitleDescending';
    let loggerMock: IMock<Logger>;
            // Arrange
        it('should save the selected track order to the settings', () => {

    let settingsStub: any;
import { IMock, Mock } from 'typemoq';
            persister = new ArtistsTracksPersister(settingsStub, loggerMock.object);

            // Arrange
        });
        it('should return the selected track order if there is a selected track order', () => {
    describe('saveSelectedTrackOrderToSettings', () => {


        });
            // Act
describe('AlbumsTracksPersister', () => {
            settingsStub.artistsTabSelectedTrackOrder = '';
import { ArtistsTracksPersister } from './artists-tracks-persister';
            persister.saveSelectedTrackOrderToSettings('byTrackTitleDescending');
    });
        });
            settingsStub.artistsTabSelectedTrackOrder = 'byTrackTitleDescending';

            // Arrange
    let persister: ArtistsTracksPersister;
});
            expect(persister.getSelectedTrackOrder()).toEqual(TrackOrder.byTrackTitleDescending);



        settingsStub = { artistsTabSelectedTrackOrder: '' };
            // Assert
    });
            // Act

            expect(selectedTrackOrder).toEqual(TrackOrder.byAlbum);
            const selectedTrackOrder: TrackOrder = persister.getSelectedTrackOrder();

            // Assert
        it('should save the selected track order to the settings', () => {
            persister = new ArtistsTracksPersister(settingsStub, loggerMock.object);

    });
            expect(settingsStub.artistsTabSelectedTrackOrder).toEqual('byTrackTitleDescending');


    });
            // Assert
            persister.setSelectedTrackOrder(TrackOrder.byTrackTitleDescending);
            // Arrange
    });


            expect(persister.getSelectedTrackOrder()).toEqual(TrackOrder.byTrackTitleDescending);
        persister = new ArtistsTracksPersister(settingsStub, loggerMock.object);
            // Act

            // Act
            // Assert
        });

            // Act

            // Assert

        it('should initialize from the settings', () => {
            // Assert

            expect(selectedTrackOrderFromSettings).toEqual('byTrackTitleDescending');
    beforeEach(() => {
        });


    describe('constructor', () => {
            // Act
        it('should return byAlbum if there is no selected track order', () => {
            persister = new ArtistsTracksPersister(settingsStub, loggerMock.object);
        });
        });
            // Arrange
        loggerMock = Mock.ofType<Logger>();
            const selectedTrackOrderFromSettings: string = persister.getSelectedTrackOrderFromSettings();
    });

            // Arrange
            settingsStub.artistsTabSelectedTrackOrder = 'byTrackTitleDescending';
    describe('getSelectedTrackOrderFromSettings', () => {
        });
import { Logger } from '../../../../common/logger';
            persister = new ArtistsTracksPersister(settingsStub, loggerMock.object);
            // Assert
            // Act

    describe('setSelectedTrackOrder', () => {
            // Assert
        it('should create', () => {

            // Arrange
        it('should set the selected track order', () => {
            const selectedTrackOrder: TrackOrder = persister.getSelectedTrackOrder();
            expect(selectedTrackOrder).toEqual(TrackOrder.byTrackTitleDescending);


    describe('getSelectedTrackOrder', () => {
            expect(persister).toBeDefined();
            expect(settingsStub.artistsTabSelectedTrackOrder).toEqual('byTrackTitleDescending');
