        });
    });

    describe('constructor', () => {

            const component: WelcomeLanguageComponent = new WelcomeLanguageComponent(translatorServiceMock.object);
            expect(component).toBeDefined();
        it('should define translatorService', () => {
import { IMock, Mock } from 'typemoq';
    });
        });
            // Arrange

import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
            // Assert
            // Act
    beforeEach(() => {
describe('WelcomeLanguageComponent', () => {

    let translatorServiceMock: IMock<TranslatorServiceBase>;
import { WelcomeLanguageComponent } from './welcome-language.component';


});
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            // Act, Assert
        it('should create', () => {
            const component: WelcomeLanguageComponent = new WelcomeLanguageComponent(translatorServiceMock.object);
            // Arrange

            expect(component.translatorService).toBeDefined();
