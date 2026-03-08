        });
            expect(component.playbackInformationHeight).toEqual(0);
            // Arrange
            expect(component.playbackInformationLargeFontSize).toEqual(27.5);
    let settingsMock: IMock<SettingsBase>;
            // Act
    function createComponent(): NowPlayingShowcaseComponent {
            // Arrange

            // Act

            // Assert
            const component: NowPlayingShowcaseComponent = createComponent();
            // Act

        });
    });
            const component: NowPlayingShowcaseComponent = createComponent();

            component.onResize();
        });
            expect(component.playbackInformationSmallFontSize).toEqual(12.963624321753372);
            const component: NowPlayingShowcaseComponent = createComponent();

            const component: NowPlayingShowcaseComponent = createComponent();
            const component: NowPlayingShowcaseComponent = createComponent();
            // Assert
            expect(component.playbackInformationSmallFontSize).toEqual(18.333333333333332);
    describe('constructor', () => {
import { SettingsBase } from '../../../../common/settings/settings.base';
            // Act
            expect(component.playbackInformationHeight).toEqual(220);

import { WindowSize } from '../../../../common/io/window-size';
            expect(component.playbackInformationLargeFontSize).toEqual(27.5);
        return new NowPlayingShowcaseComponent(settingsMock.object, applicationMock.object);
describe('NowPlayingShowcaseComponent', () => {
            const component: NowPlayingShowcaseComponent = createComponent();

        });
        it('should create', () => {
            const event: any = {};
        it('should set the now playing sizes in relation to window width if width is too small', () => {
            const component: NowPlayingShowcaseComponent = createComponent();


            expect(component.coverArtSize).toEqual(220);
import { ApplicationBase } from '../../../../common/io/application.base';
});
            // Act

import { NowPlayingShowcaseComponent } from './now-playing-showcase.component';
        applicationMock = Mock.ofType<ApplicationBase>();
        });

            const component: NowPlayingShowcaseComponent = createComponent();
            expect(component.playbackInformationSmallFontSize).toEqual(0);
    const flushPromises = () => new Promise(process.nextTick);
    let applicationMock: IMock<ApplicationBase>;

            expect(component.playbackInformationLargeFontSize).toEqual(19.445436482630058);

        it('should initialize coverArtSize as 0', () => {
        it('should set the now playing sizes in relation to window width if width is too small', () => {
    describe('ngOnInit', () => {
            expect(component.playbackInformationLargeFontSize).toEqual(0);
        it('should initialize playbackInformationSmallFontSize as 0', () => {
            const component: NowPlayingShowcaseComponent = createComponent();

            // Act
            component.ngOnInit();
    });
            expect(component.playbackInformationSmallFontSize).toEqual(18.333333333333332);
    });


    }
            // Act
            expect(component.coverArtSize).toEqual(155.56349186104046);
            // Assert
        });
            // Assert

            // Arrange
            // Assert
    describe('onResize', () => {
            applicationMock.setup((x) => x.getWindowSize()).returns(() => new WindowSize(550, 600));

            // Assert
            component.ngOnInit();
            // Arrange


            // Assert
            expect(component.playbackInformationSmallFontSize).toEqual(12.963624321753372);
        it('should set the now playing sizes in relation to window height', () => {
        it('should set the now playing sizes', () => {
            applicationMock.reset();
            // Arrange
        it('should initialize playbackInformationLargeFontSize as 0', () => {
            expect(component.playbackInformationLargeFontSize).toEqual(19.445436482630058);

            // Act
        it('should initialize playbackInformationHeight as 0', () => {
        });
            // Arrange
            applicationMock.setup((x) => x.getWindowSize()).returns(() => new WindowSize(550, 600));
        applicationMock.setup((x) => x.getWindowSize()).returns(() => new WindowSize(1000, 600));
            // Assert
        settingsMock = Mock.ofType<SettingsBase>();

            expect(component).toBeDefined();

            expect(component.coverArtSize).toEqual(220);
    beforeEach(() => {
            expect(component.coverArtSize).toEqual(0);

    });
            // Act

            expect(component.playbackInformationHeight).toEqual(220);
import { IMock, Mock } from 'typemoq';
        });
            // Arrange
            // Arrange

            expect(component.playbackInformationHeight).toEqual(155.56349186104046);


            expect(component.coverArtSize).toEqual(155.56349186104046);

            component.onResize();

            // Arrange
            applicationMock.reset();
        });
            const event: any = {};
            // Assert

            expect(component.playbackInformationHeight).toEqual(155.56349186104046);

