            // Act
import { ConfirmationDialogComponent } from './confirmation-dialog.component';
import { IMock, It, Mock } from 'typemoq';
        dialogRefMock = Mock.ofType<MatDialogRef<ConfirmationDialogComponent>>();
        });

    describe('constructor', () => {

    });

            // Assert
    beforeEach(() => {
    let dialogRefMock: IMock<MatDialogRef<ConfirmationDialogComponent>>;
            // Arrange

        it('should create', () => {
});

            expect(component).toBeDefined();
    let component: ConfirmationDialogComponent;
describe('ConfirmationDialogComponent', () => {
    });
import { MatDialogRef } from '@angular/material/dialog';
        component = new ConfirmationDialogComponent(It.isAny(), dialogRefMock.object);

