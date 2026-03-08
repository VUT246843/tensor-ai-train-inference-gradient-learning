            // Act
            // Arrange
    describe('ngOnInit', () => {
            // Assert


            expect(component).toBeDefined();
    describe('isZoomable', () => {
        it('should sleep and set fadeIn to visible', async () => {
        });
        });

            // Act
        it('should declare SemanticZoomables as empty array', () => {
    });
        it('should create', () => {
            // Arrange
        super();
            expect(component.buttonTexts).toEqual([
            // Act
        });
            // Act
        public displayName: string,

            // Arrange
            component.SemanticZoomables = [
import { SemanticZoomable } from '../../../../common/semantic-zoomable';
import { Constants } from '../../../../common/application/constants';




    const flushPromises = () => new Promise(process.nextTick);
                ['#', 'a', 'b', 'c'],

            await flushPromises();

    beforeEach(() => {
        it('should declare buttontexts', () => {
                new SemanticZoomableImplementation('Lacuna Coil', 'Lacuna Coil'),
        component = new SemanticZoomComponent(schedulerMock.object);
    let schedulerMock: IMock<SchedulerBase>;

}
                new SemanticZoomableImplementation('Miss Monique', 'Miss Monique'),
import { IMock, Mock, Times } from 'typemoq';
                ['t', 'u', 'v', 'w'],
            // Act

        public name: string,
        });
            ];
    public constructor(
        it('should return false when text is not found as SemanticZoomable zoomHeader', () => {
            const isZoomable: boolean = component.isZoomable('e');
    });
                ['x', 'y', 'z'],
            // Act
            // Assert

                ['d', 'e', 'f', 'g'],
        it('should return true when text is found as SemanticZoomable zoomHeader', () => {

import { SchedulerBase } from '../../../../common/scheduling/scheduler.base';

            // Assert
            expect(component.SemanticZoomables).toEqual([]);
    ) {
            const isZoomable: boolean = component.isZoomable('l');
            schedulerMock.verify((x) => x.sleepAsync(Constants.semanticZoomOutDelayMilliseconds), Times.once());

                ['l', 'm', 'n', 'o'],
            ]);
            // Assert
            // Arrange
            expect(component.fadeIn).toEqual('visible');


    }
                ['h', 'i', 'j', 'k'],
            // Arrange
        schedulerMock = Mock.ofType<SchedulerBase>();
describe('SemanticZoomComponent', () => {
    let component: SemanticZoomComponent;
            await component.ngOnInit();
                new SemanticZoomableImplementation('Lacuna Coil', 'Lacuna Coil'),
            // Arrange
            expect(isZoomable).toBeFalsy();
            // Assert
        });
    describe('constructor', () => {
            component.SemanticZoomables = [



                ['p', 'q', 'r', 's'],
    });
        });
export class SemanticZoomableImplementation extends SemanticZoomable {
    });
});
            // Assert

            expect(isZoomable).toBeTruthy();
            ];
import { SemanticZoomComponent } from './semantic-zoom.component';
            component.fadeIn = 'hidden';
                new SemanticZoomableImplementation('Miss Monique', 'Miss Monique'),
