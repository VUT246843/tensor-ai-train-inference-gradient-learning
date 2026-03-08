
            await component.openDonateUrlAsync();

            // Act
            // Assert
import { WelcomeDonateComponent } from './welcome-donate.component';
        });
            // Arrange
    beforeEach(() => {
            // Assert
    });
            expect(component).toBeDefined();

    describe('openDonateUrlAsync', () => {
        it('should create', () => {
        it('should browse to donate url', async () => {

describe('WelcomeDonateComponent', () => {
    describe('constructor', () => {
import { IMock, Mock, Times } from 'typemoq';
            // Act

import { DesktopBase } from '../../../../common/io/desktop.base';

            const component: WelcomeDonateComponent = new WelcomeDonateComponent(desktopMock.object);
});
    let desktopMock: IMock<DesktopBase>;
    });
import { ContactInformation } from '../../../../common/application/contact-information';
        desktopMock = Mock.ofType<DesktopBase>();
        });

            desktopMock.verify((desktop) => desktop.openLinkAsync(ContactInformation.donateUrl), Times.once());
            // Arrange
            const component: WelcomeDonateComponent = new WelcomeDonateComponent(desktopMock.object);
    });

