
    });

            semanticZoomServiceMock.verify((x) => x.requestZoomIn('e'), Times.once());

        it('should declare isZoomable as false', () => {
import { SemanticZoomServiceBase } from '../../../../../services/semantic-zoom/semantic-zoom.service.base';
            component.requestZoomIn();
    beforeEach(() => {
    describe('constructor', () => {
});
        });

            // Arrange

            // Act
    let component: SemanticZoomButtonComponent;
            // Arrange
            // Assert
        it('should create', () => {
            // Arrange
            // Act

            expect(component).toBeDefined();
    let semanticZoomServiceMock: IMock<SemanticZoomServiceBase>;
import { SemanticZoomButtonComponent } from './semantic-zoom-button.component';

            // Assert
        it('should request zoom in', () => {


describe('SemanticZoomButtonComponent', () => {

            component.text = 'e';
        semanticZoomServiceMock = Mock.ofType<SemanticZoomServiceBase>();
        });
        component = new SemanticZoomButtonComponent(semanticZoomServiceMock.object);
            expect(component.isZoomable).toBeFalsy();
    });
import { IMock, Mock, Times } from 'typemoq';
        });
    });

            // Act
    describe('requestZoomIn', () => {
            // Assert

