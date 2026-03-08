            // Arrange


});
        fileAccessMock
            .returns(() => '/home/.config/Dopamine/logs/Dopamine.log');
    });
import { DesktopBase } from './desktop.base';
import { FileAccess } from './file-access';
        it('should create', () => {

            // Arrange
    });
        });
    beforeEach(() => {
            // Assert

            // Assert
import { LogViewer } from './log-viewer';
        });
        desktopMock.setup((x) => x.getApplicationDataDirectory()).returns(() => '/home/.config/Dopamine');
    describe('viewLog', () => {
    let logViewer: LogViewer;


    let fileAccessMock: IMock<FileAccess>;
    describe('constructor', () => {
            // Act
            expect(logViewer).toBeDefined();
import { IMock, Mock, Times } from 'typemoq';
            const logFilePath: string = '/home/.config/Dopamine/logs/Dopamine.log';
            // Act
        desktopMock = Mock.ofType<Desktop>();
import { Desktop } from './desktop';
    let desktopMock: IMock<DesktopBase>;
    });

            .setup((x) => x.combinePath(['/home/.config/Dopamine', 'logs', 'Dopamine.log']))

            desktopMock.verify((x) => x.showFileInDirectory(logFilePath), Times.once());
            logViewer.viewLog();
        logViewer = new LogViewer(desktopMock.object, fileAccessMock.object);
        it('should open the log file', () => {
describe('LogViewer', () => {



        fileAccessMock = Mock.ofType<FileAccess>();
