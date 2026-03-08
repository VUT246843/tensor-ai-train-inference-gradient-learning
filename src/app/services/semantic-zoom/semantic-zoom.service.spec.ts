            expect(service.zoomOutRequested$).toBeDefined();
            // Arrange
            // Cleanup


            expect(zoomOutRequested).toBeTruthy();
        });
    describe('constructor', () => {

            // Act
            // Assert

            service.requestZoomIn('l');
            // Act

        });

            // Arrange

import { Subscription } from 'rxjs';

        });
import { SemanticZoomService } from './semantic-zoom.service';
            });
    });

            let receivedText: string = '';
    beforeEach(() => {

            // Cleanup
            expect(service).toBeDefined();
        service = new SemanticZoomService();
            let zoomOutRequested: boolean = false;
            // Assert


    describe('requestZoomIn', () => {
            // Act
});

        });
            });
        it('should request zoom in', () => {
            // Arrange
            // Assert
            // Arrange
                receivedText = text;
            const subscription: Subscription = service.zoomOutRequested$.subscribe(() => {
    let service: SemanticZoomService;

            const subscription: Subscription = service.zoomInRequested$.subscribe((text: string) => {
    });
            service.requestZoomOut();
            // Assert
    });
describe('SemanticZoomService', () => {

            expect(service.zoomInRequested$).toBeDefined();
            subscription.unsubscribe();
            expect(receivedText).toEqual('l');
        it('should request zoom out', () => {
            // Arrange
            // Act
            // Assert
    describe('requestZoomOut', () => {
                zoomOutRequested = true;
        it('should define zoomOutRequested$', () => {

        it('should define zoomInRequested$', () => {
            // Act
            subscription.unsubscribe();


    });

        it('should create', () => {
        });
