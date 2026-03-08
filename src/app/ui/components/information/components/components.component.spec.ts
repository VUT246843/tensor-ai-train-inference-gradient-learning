            desktopMock.verify((desktop) => desktop.openLinkAsync('myUrl'), Times.once());

import { IMock, Mock, Times } from 'typemoq';
            // Arrange

    });
            const externalComponents: ExternalComponent[] = component.externalComponents;

    });

        });
        });
            // Arrange
    });
    describe('constructor', () => {
    let desktopMock: IMock<DesktopBase>;
            // Act
        component = new ComponentsComponent(desktopMock.object);
    let component: ComponentsComponent;
        it('should return a list of external components', () => {

        it('should create', () => {
            // Arrange
import { ExternalComponent } from '../../../../common/application/external-component';
import { ComponentsComponent } from './components.component';

import { DesktopBase } from '../../../../common/io/desktop.base';
            // Assert
            // Act
    });
    describe('browseToUrlAsync', () => {
        });


            // Act
    describe('externalComponents', () => {
            expect(component).toBeDefined();

});
            // Assert
            // Assert
    beforeEach(() => {

            expect(externalComponents.length).toBeGreaterThan(0);
describe('ComponentsComponent', () => {

        it('should browse to given url', async () => {
            await component.browseToUrlAsync('myUrl');
        desktopMock = Mock.ofType<DesktopBase>();
