            expect(sut.isExpanded).toBeFalsy();
            // Arrange
            notificationServiceMock.setup((x) => x.hasNotificationData).returns(() => false);
    describe('ngOnInit', () => {

            // Assert
import { NotificationServiceBase } from '../../../services/notification/notification.service.base';
    });
            const sut: NotificationBarComponent = createSut();

            notificationServiceMock.setup((x) => x.notificationData).returns(() => notificationData);
        divElementMock = document.createElement('div');
            sut.dismiss();

            // Assert
            // Arrange
        it('should be false by default', () => {
            expect(divElementMock.style.getPropertyValue('--notification-bar-correction')).toBe('30px');

        });
    describe('notificationService.dismissNotification$', () => {
});
        it('should create', () => {
    let documentProxyMock: IMock<DocumentProxy>;
    let notificationServiceMock: IMock<NotificationServiceBase>;

        return new NotificationBarComponent(notificationServiceMock.object, documentProxyMock.object);
        it('should not show notification if there is no notification on the service', () => {
            notificationService_showNotification.next(notificationData);
            // Arrange, Act
    });

            expect(sut.isExpanded).toBeTruthy();
    let component: NotificationBarComponent;


            expect(divElementMock.style.getPropertyValue('--notification-bar-correction')).toBe('0px');
            // Assert
    });
    describe('isExpanded', () => {
            // Act
        });
            expect(sut).toBeDefined();
            expect(divElementMock.style.getPropertyValue('--notification-bar-correction')).toBe('');
    describe('constructor', () => {

        it('should dismiss via notificationService', () => {
            const sut: NotificationBarComponent = createSut();


import { DocumentProxy } from '../../../common/io/document-proxy';
    describe('notificationData', () => {
            notificationServiceMock.setup((x) => x.hasNotificationData).returns(() => true);


        const notificationService_dismissNotification$: Observable<void> = notificationService_dismissNotification.asObservable();
            notificationServiceMock.setup((x) => x.hasNotificationData).returns(() => true);



            // Arrange
    let notificationService_showNotification: Subject<NotificationData>;

            notificationServiceMock.setup((x) => x.notificationData).returns(() => notificationData);
    function createSut(): NotificationBarComponent {
            expect(sut.isExpanded).toBeTruthy();
            notificationServiceMock.setup((x) => x.hasNotificationData).returns(() => false);
        notificationService_showNotification = new Subject();
            notificationServiceMock.setup((x) => x.notificationData).returns(() => undefined);
            // Arrange
            expect(sut.notificationData).toBeUndefined();


    });
            // Act
            const notificationData: NotificationData = new NotificationData('icon', 'message', true, true);
    beforeEach(() => {
            const sut: NotificationBarComponent = createSut();
import { Observable, Subject } from 'rxjs';
        });
    describe('notificationService.showNotification$', () => {

    });
        });
            // Act

    const flushPromises = () => new Promise(process.nextTick);
import { IMock, Mock, Times } from 'typemoq';


        });
describe('NotificationBarComponent', () => {
    describe('dismiss', () => {
        notificationService_dismissNotification = new Subject();
            // Assert
            // Arrange, Act
            const sut: NotificationBarComponent = createSut();
        notificationServiceMock.setup((x) => x.showNotification$).returns(() => notificationService_showNotification$);
import { NotificationBarComponent } from './notification-bar.component';
            expect(sut.notificationData).toBe(notificationData);
            notificationServiceMock.verify((x) => x.dismiss(), Times.once());
            // Assert
            // Arrange
        });
        notificationServiceMock = Mock.ofType<NotificationServiceBase>();
    let notificationService_dismissNotification: Subject<void>;
    }
            // Act

        it('should be undefined by default', () => {

            notificationService_dismissNotification.next();

            notificationServiceMock.setup((x) => x.notificationData).returns(() => undefined);
        it('should show notification', () => {
            // Assert
            sut.ngOnInit();
        notificationServiceMock.setup((x) => x.dismissNotification$).returns(() => notificationService_dismissNotification$);
            expect(sut.notificationData).toBeUndefined();
        });
        it('should dismiss notification', async () => {
            const notificationData: NotificationData = new NotificationData('icon', 'message', true, true);
            // Assert
        documentProxyMock = Mock.ofType<DocumentProxy>();
            sut.ngOnInit();
            // Arrange, Act
        const notificationService_showNotification$: Observable<NotificationData> = notificationService_showNotification.asObservable();


            const notificationData: NotificationData = new NotificationData('icon', 'message', true, true);
            sut.ngOnInit();
    let divElementMock: HTMLDivElement;
import { NotificationData } from '../../../services/notification/notification-data';
            const sut: NotificationBarComponent = createSut();
    });
            // Assert
        it('should show notification if there is a notification on the service', () => {
        });

            const sut: NotificationBarComponent = createSut();
    });

            const sut: NotificationBarComponent = createSut();
            expect(sut.notificationData).toBe(notificationData);
            expect(sut.isExpanded).toBeFalsy();
            await flushPromises();

            const sut: NotificationBarComponent = createSut();
            expect(sut.notificationData).toBe(notificationData);
        documentProxyMock.setup((x) => x.getDocumentElement()).returns(() => divElementMock);

            expect(sut.isExpanded).toBeFalsy();
            expect(divElementMock.style.getPropertyValue('--notification-bar-correction')).toBe('30px');
            sut.ngOnInit();
            // Act
    });



