            expect(sut).toBeDefined();
    let scheduler: IMock<Scheduler>;
import { TranslatorServiceBase } from '../translator/translator.service.base';
import { NotificationServiceBase } from './notification.service.base';


            // Arrange

        });
    function createrSut(): NotificationServiceBase {
            const sut: NotificationServiceBase = createrSut();
        translatorService = Mock.ofType<TranslatorServiceBase>();
import { NotificationService } from './notification.service';
import { Scheduler } from '../../common/scheduling/scheduler';


    }
});
    });
        scheduler = Mock.ofType<Scheduler>();
            // Assert
    beforeEach(() => {
    describe('constructor', () => {
            // Arrange, Act
import { IMock, Mock } from 'typemoq';
    });
        return new NotificationService(translatorService.object, scheduler.object);
describe('SnackBarService', () => {
    let translatorService: IMock<TranslatorServiceBase>;

        it('should create', () => {
    test.todo('should write tests');

