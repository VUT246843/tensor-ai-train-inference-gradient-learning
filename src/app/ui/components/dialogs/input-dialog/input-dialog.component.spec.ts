    describe('constructor', () => {
            expect(component.hasInputText).toBeTruthy();
        it('should not close the dialog if inputText is space', () => {
            // Arrange
        });


            // Assert
            // Assert
            // Arrange
            // Arrange
import { InputDialogComponent } from './input-dialog.component';
            // Assert
            // Assert
import { MatDialogRef } from '@angular/material/dialog';

        });
            component.closeDialog();
            // Arrange
    });
            component.data.inputText = '';
        dialogRefMock = Mock.ofType<MatDialogRef<InputDialogComponent>>();
        it('should create', () => {
            // Arrange

        });
            // Assert
describe('InputDialogComponent', () => {


            expect(component.hasInputText).toBeFalsy();
            component.data.inputText = '';

            expect(component).toBeDefined();
    let dialogRefMock: IMock<MatDialogRef<InputDialogComponent>>;
            // Arrange
            // Assert


});


            component.data.inputText = ' ';
import { IMock, Mock, Times } from 'typemoq';
            dialogRefMock.verify((x) => x.close(true), Times.once());
    const dataMock: any = { inputText: '' };

            // Act
            // Act
        it('should return false if inputText is empty', () => {
        component = new InputDialogComponent(dataMock, dialogRefMock.object);
            dialogRefMock.verify((x) => x.close(true), Times.never());
            // Act
            expect(component.hasInputText).toBeFalsy();
    });
            component.closeDialog();

            dialogRefMock.verify((x) => x.close(true), Times.never());
        });
    describe('closeDialog', () => {


        });
            // Assert
        it('should not close the dialog if inputText is empty', () => {

        });
    describe('hasInputText', () => {

            component.data.inputText = 'My input text';


            // Act


            // Act
            // Arrange
            component.closeDialog();
    });
            // Act
            // Act
        it('should close the dialog if inputText is not empty or space', () => {
        it('should return false if inputText is space', () => {


            component.data.inputText = 'My input text';

    let component: InputDialogComponent;
            component.data.inputText = ' ';
        it('should return true if inputText is not empty or space', () => {
        });
    });
    beforeEach(() => {
