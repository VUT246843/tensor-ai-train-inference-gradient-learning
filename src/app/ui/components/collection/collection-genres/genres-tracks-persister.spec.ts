

        it('should return the selected track order if there is a selected track order', () => {
    describe('getSelectedTrackOrder', () => {

            // Arrange
            expect(selectedTrackOrderFromSettings).toEqual('byTrackTitleDescending');
            // Assert
            expect(selectedTrackOrder).toEqual(TrackOrder.byTrackTitleDescending);
            // Assert
    describe('constructor', () => {

            // Act
            expect(persister.getSelectedTrackOrder()).toEqual(TrackOrder.byTrackTitleDescending);
        it('should initialize from the settings', () => {

});
        });
            // Arrange

            expect(persister).toBeDefined();
    describe('saveSelectedTrackOrderToSettings', () => {
            persister = new GenresTracksPersister(settingsStub, loggerMock.object);
            // Assert
        it('should create', () => {
        });

            settingsStub.genresTabSelectedTrackOrder = '';
    let loggerMock: IMock<Logger>;
            expect(selectedTrackOrder).toEqual(TrackOrder.byAlbum);
            // Arrange
        });
            persister = new GenresTracksPersister(settingsStub, loggerMock.object);
        });
            // Assert
        });
    let settingsStub: any;
            // Act
            persister.saveSelectedTrackOrderToSettings('byTrackTitleDescending');
            // Act
    });
            // Arrange

            settingsStub.genresTabSelectedTrackOrder = 'byTrackTitleDescending';

    let persister: GenresTracksPersister;
            // Arrange

    });
describe('GenresTracksPersister', () => {
            settingsStub.genresTabSelectedTrackOrder = 'byTrackTitleDescending';
            persister.setSelectedTrackOrder(TrackOrder.byTrackTitleDescending);
            settingsStub.genresTabSelectedTrackOrder = 'byTrackTitleDescending';
            // Arrange
    describe('setSelectedTrackOrder', () => {
    });

            const selectedTrackOrder: TrackOrder = persister.getSelectedTrackOrder();
    });

    });
        });
        it('should save the selected track order to the settings', () => {
            persister = new GenresTracksPersister(settingsStub, loggerMock.object);
        it('should return byAlbum if there is no selected track order', () => {
            const selectedTrackOrderFromSettings: string = persister.getSelectedTrackOrderFromSettings();


        });
            // Act
    });
        it('should set the selected track order', () => {

        persister = new GenresTracksPersister(settingsStub, loggerMock.object);

            expect(settingsStub.genresTabSelectedTrackOrder).toEqual('byTrackTitleDescending');
        loggerMock = Mock.ofType<Logger>();
import { TrackOrder } from '../track-order';
            // Arrange

        });
            expect(settingsStub.genresTabSelectedTrackOrder).toEqual('byTrackTitleDescending');
import { Logger } from '../../../../common/logger';

        settingsStub = { genresTabSelectedTrackOrder: '' };
import { GenresTracksPersister } from './genres-tracks-persister';

            // Assert

            persister.setSelectedTrackOrder(TrackOrder.byTrackTitleDescending);
            // Arrange
    describe('getSelectedTrackOrderFromSettings', () => {
            const selectedTrackOrder: TrackOrder = persister.getSelectedTrackOrder();
            // Act


            expect(persister.getSelectedTrackOrder()).toEqual(TrackOrder.byTrackTitleDescending);
            // Assert
            // Act

    beforeEach(() => {

        it('should get the selected track order from the settings', () => {
            // Act

        it('should save the selected track order to the settings', () => {
            // Assert
import { IMock, Mock } from 'typemoq';

            // Assert
            persister = new GenresTracksPersister(settingsStub, loggerMock.object);
            // Act

