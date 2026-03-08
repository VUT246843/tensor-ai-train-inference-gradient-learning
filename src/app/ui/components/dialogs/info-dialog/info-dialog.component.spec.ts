import { MatDialogRef } from '@angular/material/dialog';
    });

    beforeEach(() => {
import { InfoDialogComponent } from './info-dialog.component';


        it('should create', () => {

    });
import { IMock, Mock } from 'typemoq';

            expect(component).toBeDefined();

        dialogRefMock = Mock.ofType<MatDialogRef<InfoDialogComponent>>();
            // Act
            // Assert
    const dataMock: any = { inputText: '' };
describe('InfoDialogComponent', () => {
            // Arrange
    let dialogRefMock: IMock<MatDialogRef<InfoDialogComponent>>;
});
    let component: InfoDialogComponent;
    describe('constructor', () => {
        });
        component = new InfoDialogComponent(dataMock, dialogRefMock.object);
