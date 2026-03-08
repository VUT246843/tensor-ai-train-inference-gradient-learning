    });
        });
import { IMock, Mock, Times } from 'typemoq';
            // Act
            // Assert
    describe('constructor', () => {
    let appearanceServiceMock: IMock<AppearanceServiceBase>;

    let component: GenreComponent;
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();
            expect(component).toBeDefined();
            // Arrange
    });
        it('should create', () => {

        it('should define appearanceService', () => {
            // Arrange

        });
            // Assert
        it('should define semanticZoomService', () => {
        it('should declare genre', () => {

        it('should request zoom out', () => {
    let semanticZoomServiceMock: IMock<SemanticZoomServiceBase>;
            expect(component.semanticZoomService).toBeDefined();
            expect(component.genre).toBeUndefined();
            component.requestZoomOut();
            // Act
    beforeEach(() => {
        });

import { SemanticZoomServiceBase } from '../../../../../services/semantic-zoom/semantic-zoom.service.base';

            // Act



            // Act
        });

            // Arrange
    describe('requestZoomOut', () => {

    });
import { AppearanceServiceBase } from '../../../../../services/appearance/appearance.service.base';


            // Assert
            // Arrange

        });
            // Assert
        component = new GenreComponent(appearanceServiceMock.object, semanticZoomServiceMock.object);



describe('GenreComponent', () => {
        semanticZoomServiceMock = Mock.ofType<SemanticZoomServiceBase>();
            expect(component.appearanceService).toBeDefined();
            // Act
            // Assert
            // Arrange
import { GenreComponent } from './genre.component';
            semanticZoomServiceMock.verify((x) => x.requestZoomOut(), Times.once());
});
