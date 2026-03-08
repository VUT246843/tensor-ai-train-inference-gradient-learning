        it('should get tracksColumnsVisibility', () => {
    });

            expect(component).toBeDefined();
        it('should define tracksColumnsVisibility', () => {
            const tracksColumnsVisibility: TracksColumnsVisibility = new TracksColumnsVisibility();

import { IMock, Mock, Times } from 'typemoq';
            // Act

            // Assert
    let tracksColumnsServiceMock: IMock<TracksColumnsServiceBase>;


            // Act
            // Assert
    describe('constructor', () => {
    describe('ngOnInit', () => {
import { EditColumnsDialogComponent } from './edit-columns-dialog.component';
            // Arrange
    });
        tracksColumnsServiceMock = Mock.ofType<TracksColumnsServiceBase>();
        });
            expect(component.tracksColumnsVisibility.showDateLastPlayed).toBeTruthy();

        });
        });
        });

    let component: EditColumnsDialogComponent;

            // Act

});
            component.ngOnInit();
describe('EditColumnsDialogComponent', () => {

            // Arrange
            // Act
    beforeEach(() => {
        it('should create', () => {
        it('should set tracksColumnsVisibility', () => {
            tracksColumnsVisibility.showDateLastPlayed = true;
            tracksColumnsServiceMock.setup((x) => x.getTracksColumnsVisibility()).returns(() => tracksColumnsVisibility);

            // Assert
import { TracksColumnsServiceBase } from '../../../../services/track-columns/tracks-columns.service.base';
            tracksColumnsServiceMock.verify((x) => x.setTracksColumnsVisibility(component.tracksColumnsVisibility), Times.once());
            // Arrange

        component = new EditColumnsDialogComponent(tracksColumnsServiceMock.object);
            expect(component.tracksColumnsVisibility).toBe(tracksColumnsVisibility);


            // Arrange
    });
            tracksColumnsServiceMock.verify((x) => x.getTracksColumnsVisibility(), Times.once());
            // Assert
            expect(component.tracksColumnsVisibility).toBeDefined();
    describe('setTracksColumnsVisibility', () => {
import { TracksColumnsVisibility } from '../../../../services/track-columns/tracks-columns-visibility';
    });
            component.setTracksColumnsVisibility();

