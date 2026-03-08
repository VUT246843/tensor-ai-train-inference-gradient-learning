import { Logger } from '../../../../common/logger';
        });
            persister = new FolderTracksPersister(settingsStub, loggerMock.object);
            // Assert
});

    let loggerMock: IMock<Logger>;
            const selectedTrackOrderFromSettings: string = persister.getSelectedTrackOrderFromSettings();
describe('FolderTracksPersister', () => {
        loggerMock = Mock.ofType<Logger>();
            // Assert
            // Act
        it('should create', () => {
import { IMock, Mock } from 'typemoq';
            // Act
    });
        });

        });
        });

import { TrackOrder } from '../track-order';

    describe('getSelectedTrackOrder', () => {

            // Assert
            // Act


            expect(selectedTrackOrderFromSettings).toEqual('byTrackTitleDescending');
            persister.setSelectedTrackOrder(TrackOrder.byTrackTitleDescending);
            expect(persister.getSelectedTrackOrder()).toEqual(TrackOrder.byTrackTitleDescending);
            expect(settingsStub.foldersTabSelectedTrackOrder).toEqual('byTrackTitleDescending');
        it('should initialize from the settings', () => {



    });
            settingsStub.foldersTabSelectedTrackOrder = 'byTrackTitleDescending';
            // Act

            persister = new FolderTracksPersister(settingsStub, loggerMock.object);
            persister.setSelectedTrackOrder(TrackOrder.byTrackTitleDescending);
            settingsStub.foldersTabSelectedTrackOrder = 'byTrackTitleDescending';
            // Assert
        });
            expect(selectedTrackOrder).toEqual(TrackOrder.none);

        persister = new FolderTracksPersister(settingsStub, loggerMock.object);
            expect(persister.getSelectedTrackOrder()).toEqual(TrackOrder.byTrackTitleDescending);

            expect(selectedTrackOrder).toEqual(TrackOrder.byTrackTitleDescending);
            expect(persister).toBeDefined();
            // Arrange
            // Act
        it('should get the selected track order from the settings', () => {
    });
        it('should return the selected track order if there is a selected track order', () => {

            settingsStub.foldersTabSelectedTrackOrder = 'byTrackTitleDescending';
        });

    describe('constructor', () => {
        settingsStub = { foldersTabSelectedTrackOrder: '' };
            // Assert


            const selectedTrackOrder: TrackOrder = persister.getSelectedTrackOrder();
        it('should save the selected track order to the settings', () => {
            // Act
            // Arrange
        });
import { FolderTracksPersister } from './folder-tracks-persister';
            persister.saveSelectedTrackOrderToSettings('byTrackTitleDescending');

    describe('saveSelectedTrackOrderToSettings', () => {
            settingsStub.foldersTabSelectedTrackOrder = '';

            // Assert
            // Arrange
    });
            persister = new FolderTracksPersister(settingsStub, loggerMock.object);
            // Arrange
            // Arrange

    describe('getSelectedTrackOrderFromSettings', () => {
    let settingsStub: any;
    describe('setSelectedTrackOrder', () => {
            // Assert
        });

        it('should save the selected track order to the settings', () => {
            // Arrange
            persister = new FolderTracksPersister(settingsStub, loggerMock.object);

    });
            // Arrange
            const selectedTrackOrder: TrackOrder = persister.getSelectedTrackOrder();
        it('should set the selected track order', () => {
    let persister: FolderTracksPersister;



            // Assert
            // Act
    beforeEach(() => {
    });
            // Act
            // Arrange

            expect(settingsStub.foldersTabSelectedTrackOrder).toEqual('byTrackTitleDescending');

        it('should return none if there is no selected track order', () => {
