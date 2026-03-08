    }

        it('should create', () => {

import { NativeElementProxy } from '../../../common/native-element-proxy';

        });
describe('Slider', () => {


            // Assert
    function createSlider(): SliderComponent {
            // Act
import { Logger } from '../../../common/logger';
import { IMock, Mock } from 'typemoq';
            expect(slider).toBeDefined();
    });
import { MathExtensions } from '../../../common/math-extensions';

    beforeEach(() => {
        nativeElementProxyMock = Mock.ofType<NativeElementProxy>();
    });
        loggerMock = Mock.ofType<Logger>();
        mathExtensionsMock = Mock.ofType<MathExtensions>();
});

    let loggerMock: IMock<Logger>;
            // Arrange
    describe('constructor', () => {
import { SliderComponent } from './slider.component';
    let mathExtensionsMock: IMock<MathExtensions>;
    test.todo('should write tests');
        return new SliderComponent(nativeElementProxyMock.object, mathExtensionsMock.object, loggerMock.object);
            const slider: SliderComponent = createSlider();
    let nativeElementProxyMock: IMock<NativeElementProxy>;
