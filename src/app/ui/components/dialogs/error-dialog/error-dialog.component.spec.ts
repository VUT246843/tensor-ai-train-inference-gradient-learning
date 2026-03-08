    describe('viewLog', () => {
        it('should create', () => {

        return new ErrorDialogComponent(It.isAny(), dialogRefMock.object, logViewerMock.object);
            // Arrange
    let dialogRefMock: IMock<MatDialogRef<ErrorDialogComponent>>;
        });
});
            expect(component).toBeDefined();
            // Act
describe('ErrorDialogComponent', () => {

    let logViewerMock: IMock<LogViewer>;

import { ErrorDialogComponent } from './error-dialog.component';
            component.viewLog();
            // Arrange

import { IMock, It, Mock, Times } from 'typemoq';


import { MatDialogRef } from '@angular/material/dialog';
    });
    });
            const component: ErrorDialogComponent = createComponent();
import { LogViewer } from '../../../../common/io/log-viewer';
        logViewerMock = Mock.ofType<LogViewer>();
        });

            // Assert
    beforeEach(() => {
        dialogRefMock = Mock.ofType<MatDialogRef<ErrorDialogComponent>>();
    }

    describe('constructor', () => {
        it('should open the log file', () => {
    function createComponent(): ErrorDialogComponent {
    });
            logViewerMock.verify((x) => x.viewLog(), Times.once());
            // Act

            // Assert
            const component: ErrorDialogComponent = createComponent();
