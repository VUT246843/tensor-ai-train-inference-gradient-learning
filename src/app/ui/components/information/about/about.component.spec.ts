        it('should set GitHub URL', () => {
    let dialogServiceMock: IMock<DialogServiceBase>;

        it('should set application Copyright', () => {

});
            expect(applicationVersion).toEqual(ProductInformation.applicationVersion);

        });
            // Assert
            const applicationCopyright: string = component.applicationCopyright;

            const githubUrl: string = component.githubUrl;

    let desktopMock: IMock<DesktopBase>;
        component = new AboutComponent(dialogServiceMock.object, desktopMock.object);
import { DesktopBase } from '../../../../common/io/desktop.base';
            // Arrange

            expect(component).toBeDefined();
        });
        it('should create', () => {

            expect(applicationCopyright).toEqual(ProductInformation.applicationCopyright);
        it('should set website URL', () => {
import { ContactInformation } from '../../../../common/application/contact-information';
        });

            // Act


            expect(blueskyUrl).toEqual(ContactInformation.blueskyUrl);
            // Arrange
    beforeEach(() => {
            // Arrange
        });
            // Assert
            // Assert

            // Arrange
            const blueskyUrl: string = component.blueskyUrl;
            // Act

            const applicationVersion: string = component.applicationVersion;
            // Assert
import { DialogServiceBase } from '../../../../services/dialog/dialog.service.base';

            // Act
        it('should open a license dialog', () => {
            // Arrange
            // Act

        });
    describe('constructor', () => {
        it('should set application version', () => {

    });
    describe('showLicenseDialog', () => {

            desktopMock.verify((x) => x.openLinkAsync(ContactInformation.donateUrl), Times.exactly(1));
            dialogServiceMock.verify((x) => x.showLicenseDialog(), Times.exactly(1));
            // Arrange
            // Assert



    describe('browseToDonateLink', () => {
            // Act
        it('should set Bluesky URL', () => {
        it('should open the donate link in the default browser', async () => {
        desktopMock = Mock.ofType<DesktopBase>();
    });
            // Arrange

            // Assert




        });
    });
            expect(githubUrl).toEqual(ContactInformation.githubUrl);


            // Act
            expect(websiteUrl).toEqual(ContactInformation.websiteUrl);
            // Act
        dialogServiceMock = Mock.ofType<DialogServiceBase>();
describe('AboutComponent', () => {
            // Assert
        });

            // Arrange
import { IMock, Mock, Times } from 'typemoq';
            // Act
            component.showLicenseDialog();
import { AboutComponent } from './about.component';
            await component.browseToDonateLinkAsync();
    let component: AboutComponent;
    });
            // Assert
            const websiteUrl: string = component.websiteUrl;
        });
import { ProductInformation } from '../../../../common/application/product-information';
