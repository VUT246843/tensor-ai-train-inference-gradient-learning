            semanticZoomServiceMock.verify((x) => x.requestZoomOut(), Times.once());
            // Act
        semanticZoomServiceMock = Mock.ofType<SemanticZoomServiceBase>();
            // Arrange

            // Assert
            // Assert

        });
            expect(component.artist).toBeUndefined();
import { SemanticZoomServiceBase } from '../../../../../services/semantic-zoom/semantic-zoom.service.base';
    let semanticZoomServiceMock: IMock<SemanticZoomServiceBase>;

        });
            // Arrange

            expect(component.appearanceService).toBeDefined();

            // Assert
            // Act
    describe('constructor', () => {
        });


import { ArtistComponent } from './artist.component';

            // Arrange

            expect(component).toBeDefined();
            // Assert

    let component: ArtistComponent;
        it('should request zoom out', () => {
            component.requestZoomOut();
describe('GenreComponent', () => {

});
            // Act
        component = new ArtistComponent(appearanceServiceMock.object, semanticZoomServiceMock.object);
        it('should define appearanceService', () => {
    });
    });
            // Arrange
        it('should create', () => {
        it('should declare artist', () => {
        it('should define semanticZoomService', () => {
    let appearanceServiceMock: IMock<AppearanceServiceBase>;


    });
        });

import { AppearanceServiceBase } from '../../../../../services/appearance/appearance.service.base';
        });
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();
    describe('requestZoomOut', () => {
            // Act


            expect(component.semanticZoomService).toBeDefined();
    beforeEach(() => {
            // Act
            // Assert
            // Arrange

import { IMock, Mock, Times } from 'typemoq';
