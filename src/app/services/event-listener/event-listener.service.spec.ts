
describe('EventListenerService', () => {
    function createSut(): EventListenerServiceBase {

    describe('constructor', () => {

            // Assert
import { EventListenerService } from './event-listener.service';
            const sut: EventListenerServiceBase = createSut();
            // Arrange
import { EventListenerServiceBase } from './event-listener.service.base';
            expect(sut).toBeDefined();
        it('should create', () => {
        return new EventListenerService();
        });
});
            // Act

    });
    }
