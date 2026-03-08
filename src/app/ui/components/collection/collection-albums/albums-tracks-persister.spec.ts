    let loggerMock: IMock<Logger>;

        it('should return byAlbum if there is no selected track order', () => {
            // Assert
            persister = new AlbumsTracksPersister(settingsStub, loggerMock.object);
            settingsStub.albumsTabSelectedTrackOrder = '';
        it('should create', () => {

            persister.saveSelectedTrackOrderToSettings('byTrackTitleDescending');

            expect(selectedTrackOrderFromSettings).toEqual('byTrackTitleDescending');
    describe('constructor', () => {
    });
            // Act
    });
            expect(persister.getSelectedTrackOrder()).toEqual(TrackOrder.byTrackTitleDescending);
            // Assert
        });
        });
    });


        });
        it('should set the selected track order', () => {

            // Assert


            // Assert
            // Act
        });
            // Act
            settingsStub.albumsTabSelectedTrackOrder = 'byTrackTitleDescending';
import { IMock, Mock } from 'typemoq';

        it('should save the selected track order to the settings', () => {


            expect(settingsStub.albumsTabSelectedTrackOrder).toEqual('byTrackTitleDescending');
            persister.setSelectedTrackOrder(TrackOrder.byTrackTitleDescending);
    describe('setSelectedTrackOrder', () => {
            const selectedTrackOrderFromSettings: string = persister.getSelectedTrackOrderFromSettings();
            // Act


            // Arrange
            // Assert
    let persister: AlbumsTracksPersister;
    beforeEach(() => {

            persister = new AlbumsTracksPersister(settingsStub, loggerMock.object);
import { Logger } from '../../../../common/logger';

            // Assert
    });
            // Arrange
        settingsStub = { albumsTabSelectedTrackOrder: '' };
            expect(selectedTrackOrder).toEqual(TrackOrder.byTrackTitleDescending);
describe('AlbumsTracksPersister', () => {
        });
import { AlbumsTracksPersister } from './albums-tracks-persister';
            const selectedTrackOrder: TrackOrder = persister.getSelectedTrackOrder();
        persister = new AlbumsTracksPersister(settingsStub, loggerMock.object);
            expect(settingsStub.albumsTabSelectedTrackOrder).toEqual('byTrackTitleDescending');
            const selectedTrackOrder: TrackOrder = persister.getSelectedTrackOrder();
            // Act
        });
            // Arrange
        });


            // Arrange
            expect(selectedTrackOrder).toEqual(TrackOrder.byAlbum);
        it('should get the selected track order from the settings', () => {

        loggerMock = Mock.ofType<Logger>();
            // Assert

    });


        it('should initialize from the settings', () => {

            // Arrange
            // Arrange


            persister.setSelectedTrackOrder(TrackOrder.byTrackTitleDescending);
            // Act
            // Act

            // Arrange
            // Act
        });
            expect(persister).toBeDefined();
            // Assert

        it('should return the selected track order if there is a selected track order', () => {
            persister = new AlbumsTracksPersister(settingsStub, loggerMock.object);
            settingsStub.albumsTabSelectedTrackOrder = 'byTrackTitleDescending';
            // Arrange
            expect(persister.getSelectedTrackOrder()).toEqual(TrackOrder.byTrackTitleDescending);
            persister = new AlbumsTracksPersister(settingsStub, loggerMock.object);
    describe('getSelectedTrackOrder', () => {
    describe('getSelectedTrackOrderFromSettings', () => {
    });
            settingsStub.albumsTabSelectedTrackOrder = 'byTrackTitleDescending';
    let settingsStub: any;
});
import { TrackOrder } from '../track-order';
        it('should save the selected track order to the settings', () => {

    describe('saveSelectedTrackOrderToSettings', () => {
