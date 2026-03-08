
            settingsMock.setup((x) => x.theme).returns(() => 'Theme 2');
                    x.writeToFile('/home/user/.config/Dopamine/Themes/Theme 1.theme', JSON.stringify(theme1WithoutIsBroken, undefined, 2)),
            const service: AppearanceServiceBase = createService();

        expect(documentElementMock.style.getPropertyValue('--theme-window-button-icon')).toEqual('#100000');
            // Arrange

            settingsMock.setup((x) => x.useLightBackgroundTheme).returns(() => true);
            // Act
            expect(bodyMock.classList).toContain('default-theme-dark');
        it('should set the selected font size from the settings', () => {
        fileAccessMock
            // Arrange

            const fontSizes: number[] = service.fontSizes;
            expect(service.accentRgbColor.blue).toEqual(RgbColor.default().blue);
        expect(documentElementMock.style.getPropertyValue('--theme-album-cover-background')).toEqual('#1fffff');
        fileAccessMock


            '#0fffff',
            albumAccentColorServiceMock.object,
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-600')).toEqual('#bdbdbd');


            const service: AppearanceServiceBase = createService();
        });
            // Act

            settingsMock.setup((x) => x.useLightBackgroundTheme).returns(() => false);
            .setup((x) => x.combinePath(['/home/user/.config/Dopamine', 'Themes']))
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-50')).toEqual('#2c96ff');
            desktopMock.setup((x) => x.getAccentColor()).returns(() => '00ff00ff');
            .returns(() => '/home/user/.config/Dopamine/Themes/Theme 2.theme');
            settingsMock.setup((x) => x.theme).returns(() => 'Theme 2');
    });
            // Assert
    describe('applyMargins', () => {

        it('should set windowHasNativeTitleBar to false if the window has no frame', () => {

            const settingsStub: any = { followSystemTheme: false, useLightBackgroundTheme: true };
        expect(documentElementMock.style.getPropertyValue('--theme-tooltip-text')).toEqual('#0fffff');
            '#011111',


        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-300')).toEqual('#ebebeb');

            .setup((x) => x.getFileContentAsString('/home/user/.config/Dopamine/Themes/Theme 2.theme'))
            service.useLightBackgroundTheme = false;
            const settingsStub: any = { fontSize: 15 };
            settingsMock.setup((x) => x.useLightBackgroundTheme).returns(() => false);
            expect(windowHasNativeTitleBar).toBeTruthy();
            settingsMock.reset();
    let albumAccentColorServiceMock: IMock<AlbumAccentColorService>;
            desktopMock.setup((x) => x.shouldUseDarkColors()).returns(() => false);

            '#0fffff',
        it('should set themes', () => {
            settingsMock.setup((x) => x.followSystemTheme).returns(() => false);
            // Arrange
            // Assert
            service.refreshThemes();
        });
    let documentProxyMock: IMock<DocumentProxy>;
    beforeEach(() => {
            expect(followSystemTheme).toBeTruthy();
    let desktopNativeThemeUpdatedMock: Subject<void>;
            // Arrange
            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);
        it('should get themes from the themes directory', () => {
        it('should apply the light theme of the selected theme when follow the system theme and follow album cover color are disabled and use light background theme is enabled', async () => {
            // Assert
            expect(service.backgroundRgbColor.equals(new RgbColor(5, 85, 85))).toBeTruthy();
            // Arrange
            settingsMock.setup((x) => x.fontSize).returns(() => 13);
            service.followSystemColor = false;

            resetElements();
        });
    });
            settingsMock.setup((x) => x.useLightBackgroundTheme).returns(() => false);
                    x.writeToFile('/home/user/.config/Dopamine/Themes/Theme 2.theme', JSON.stringify(theme2WithoutIsBroken, undefined, 2)),
            const service: AppearanceServiceBase = createService();
    });
            expect(isUsingLightTheme).toBeFalsy();
            // Arrange
            // Assert


            // Arrange
            '#1fffff',
            '#0fffff',
            await service.applyAppearanceAsync();
        it('should return the font sizes', () => {
            '#1fffff',
            desktopMock.object,
            resetElements();
        it('should return false when not following the system theme and settings do not request to use a light theme', () => {
            service.selectedFontSize = 13;
            applicationMock.setup((x) => x.getGlobal('windowHasFrame')).returns(() => true);
            // Arrange


            expect(service).toBeDefined();
            .returns(() => '/home/user/.config/Dopamine/Themes');
            // Assert
            '#1fffff',

        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-800')).toEqual('#9e9e9e');
        });
import { MockCreator } from '../../testing/mock-creator';
        it('should return true if the settings contain true', () => {
            desktopMock.setup((x) => x.shouldUseDarkColors()).returns(() => false);
        bodyMock = document.createElement('div');
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-300')).toEqual('#00305f');
            assertDarkColorCssProperties('#001122');
        documentElementMock = document.createElement('div');
        const playbackServicePlaybackStartedMock$: Observable<PlaybackStarted> = playbackServicePlaybackStartedMock.asObservable();
            settingsMock.setup((x) => x.followSystemTheme).returns(() => true);

        documentElementMock = document.createElement('div');
        });
            '#155555',
            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);

            assertDarkColorCssProperties('#00ff00');

    let overlayContainerMock: IMock<OverlayContainer>;
        return new ThemeNeutralColors(
import { ThemeCoreColors } from './theme/theme-core-colors';
            '#1fffff',
        expect(documentElementMock.style.getPropertyValue('--theme-secondary-button-background')).toEqual('#1fffff');
describe('AppearanceService', () => {
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-200')).toEqual('#85ff85');
        const desktopAccentColorChangedMock$: Observable<void> = desktopAccentColorChangedMock.asObservable();
            service.selectedTheme = createTheme('My theme');
        defaultThemesCreatorMock = Mock.ofType<DefaultThemesCreator>();

            const theme: Theme = createTheme('My theme');

            '#199999',
    describe('themes', () => {
        expect(documentElementMock.style.getPropertyValue('--theme-selected-item-background')).toEqual('#122222');

            expect(isUsingLightTheme).toBeTruthy();
            // Assert

    let theme2: Theme;
            expect(service.themes.length).toEqual(2);
        expect(documentElementMock.style.getPropertyValue('--theme-selected-item-background')).toEqual('#022222');

            // Act
            expect(service.backgroundRgbColor.equals(new RgbColor(5, 85, 85))).toBeTruthy();
            '#099999',

            settingsMock.setup((x) => x.theme).returns(() => 'Theme 1');
            expect(isUsingLightTheme).toBeTruthy();
    function createLightColors(): ThemeNeutralColors {
            // Arrange
            // Arrange
        });

            service.selectedTheme = createTheme('My theme');
            settingsMock.setup((x) => x.useLightBackgroundTheme).returns(() => false);
            applicationMock.setup((x) => x.getGlobal('windowHasFrame')).returns(() => false);
            service.selectedTheme = createTheme('My theme');
    let defaultThemesCreatorMock: IMock<DefaultThemesCreator>;
        expect(documentElementMock.style.getPropertyValue('--theme-primary-color')).toEqual('#fff');
            resetElements();
            // Act


            const service: AppearanceServiceBase = createService();
            expect(service.accentRgbColor.equals(new RgbColor(0, 255, 0))).toBeTruthy();
            const service: AppearanceServiceBase = createService();
            '#1fffff',

            '#1fffff',

            const settingsStub: any = { fontSize: 15 };
            const service: AppearanceServiceBase = createService();

        bodyMock = document.createElement('div');
            '#133333',
        expect(documentElementMock.style.getPropertyValue('--theme-side-pane-background')).toEqual('#088888');
            expect(service.backgroundRgbColor.equals(new RgbColor(5, 85, 85))).toBeTruthy();

            settingsMock.setup((x) => x.followAlbumCoverColor).returns(() => false);

        it('should return the themes directory path', () => {
        expect(documentElementMock.style.getPropertyValue('--theme-tab-text')).toEqual('#033333');

            settingsMock.setup((x) => x.useSystemTitleBar).returns(() => true);
            // Assert
            createService();
            loggerMock.object,
            const followSystemTheme: boolean = service.followSystemTheme;
            .setup((x) => x.getFilesInDirectory('/home/user/.config/Dopamine/Themes'))
            const service: AppearanceServiceBase = createService();
    }

    }
            service.selectedTheme = theme;
            applicationMock.reset();
    describe('useLightBackgroundTheme', () => {
            // Assert
            applicationMock.setup((x) => x.fullScreenChanged$).returns(() => applicationFullScreenChangedMock$);
            applicationMock.reset();
            expect(useLightBackgroundTheme).toBeTruthy();
            // Act
            settingsMock.reset();
        });


    describe('followSystemColor', () => {
            settingsMock.setup((x) => x.followAlbumCoverColor).returns(() => false);
        return new AppearanceService(
            '#0ccccc',


            const service: AppearanceServiceBase = createService();
            assertDarkColorCssProperties('#0fffff');

            const windowHasNativeTitleBar: boolean = service.windowHasNativeTitleBar;
            // Act
            settingsMock.setup((x) => x.fontSize).returns(() => 13);
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color')).toEqual('#001122');

    }
        expect(documentElementMock.style.getPropertyValue('--theme-slider-thumb-background')).toEqual('#0ddddd');
            const theme: Theme = createTheme('My theme');

            .setup((x) => x.combinePath(['/home/user/.config/Dopamine/Themes', 'Theme 1.theme']))
            assertSelectedThemeAccentColorCssProperties();
            '#166666',
            .returns(() => '/home/user/.config/Dopamine/Themes/Theme 1.theme');
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-A700')).toEqual('#1aff1a');
            // Act
            // Assert
            // Assert
                Times.once(),
            // Arrange

        applicationMock.setup((x) => x.fullScreenChanged$).returns(() => applicationFullScreenChangedMock$);
            service.themes = [theme1, theme2];
            // Arrange
            settingsMock.object,
            // Act
            service.selectedTheme = theme1;
            // Arrange
            // Act
            desktopMock.object,
    let containerElementMock: HTMLElement;
            assertSystemThemeAccentColorCssProperties();
        it('should apply a correct margin when not using system title bar search is not visible', () => {
            expect(service.backgroundRgbColor.equals(new RgbColor(5, 85, 85))).toBeTruthy();
            // Act
            defaultThemesCreatorMock.verify((x) => x.createAllThemes(), Times.once());
        });
        applicationPathsMock = Mock.ofType<ApplicationPaths>();
    let desktopAccentColorChangedMock: Subject<void>;
            settingsMock.setup((x) => x.followSystemTheme).returns(() => true);

            expect(service.accentRgbColor.equals(new RgbColor(204, 204, 204))).toBeTruthy();



        it('should ensure that the themes directory exists', () => {
            // Act
            // Arrange
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-A700')).toEqual('#001e3b');
    });
            const isUsingLightTheme: boolean = service.isUsingLightTheme;
    });
        expect(documentElementMock.style.getPropertyValue('--theme-selected-tab-text')).toEqual('#144444');
            settingsMock.setup((x) => x.theme).returns(() => 'Theme 2');
            assertDarkColorCssProperties('#0fffff');
            '#066666',
        });
    let applicationFullScreenChangedMock: Subject<boolean>;
            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);
            );
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-200')).toEqual('#ffffff');
            '#100000',
            assertSelectedThemeAccentColorCssProperties();
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-A200')).toEqual('#005dbb');
            // Act

        it('should save useLightBackgroundTheme to settings', () => {
            expect(fontSizes).toEqual(Constants.fontSizes);

            // Act
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-100')).toEqual('#bdffbd');
            service.selectedTheme = createTheme('My theme');
            assertLightColorCssProperties('#1fffff');

            desktopNativeThemeUpdatedMock.next();
            const service: AppearanceServiceBase = createService();
            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);
import { Observable, Subject } from 'rxjs';
            // Arrange
            '#0fffff',


            assertAlbumCoverAccentColorCssProperties();
            const followSystemTheme: boolean = service.followSystemTheme;
        it('should return false if the settings contain false', () => {
            // Act
            // Arrange

            service.useLightBackgroundTheme = true;
            '#0fffff',
        it('should ensure that the default themes exist', () => {
            settingsMock.setup((x) => x.followSystemColor).returns(() => true);
            albumAccentColorServiceMock.object,
            // Arrange
            // Act
            const service: AppearanceServiceBase = createService();
            // Act

            overlayContainerMock.object,
            resetElements();
            const windowHasNativeTitleBar: boolean = service.windowHasNativeTitleBar;

        it('should return true if the window has no frame', () => {
            settingsMock.setup((x) => x.followSystemTheme).returns(() => false);

        expect(documentElementMock.style.getPropertyValue('--theme-secondary-text')).toEqual('#0aaaaa');
            service.applyMargins(false);
    let bodyMock: HTMLElement;
        fileAccessMock = Mock.ofType<FileAccessBase>();
            // Act
            desktopMock.setup((x) => x.getAccentColor()).returns(() => '00ff00ff');

        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-50')).toEqual('#ffffff');
        it('should return true when not following the system theme and settings request to use a light theme', () => {
    describe('selectedFontSize', () => {
            // Act
            settingsMock.setup((x) => x.followSystemTheme).returns(() => false);
            service.refreshThemes();
            fileAccessMock.verify(
                Times.once(),



        it('should apply the dark theme of the selected theme when follow the system theme is enabled and follow album cover color is disabled and the desktop is using a dark theme', async () => {
            // Act
            // Assert
        applicationMock = Mock.ofType<ApplicationBase>();
            // Assert


        expect(documentElementMock.style.getPropertyValue('--theme-scroll-bars')).toEqual(scrollBars);
        playbackServiceMock.setup((x) => x.playbackStarted$).returns(() => playbackServicePlaybackStartedMock$);
        it('should apply the dark theme if using the dark theme', () => {
            const fontSizes: number[] = service.fontSizes;
            resetElements();
import { Constants } from '../../common/application/constants';
        expect(documentElementMock.style.getPropertyValue('--theme-side-pane-background')).toEqual('#188888');
            // Assert
            const theme: Theme = createTheme('My theme');

            // Assert
            const service: AppearanceServiceBase = createService();

            settingsMock.reset();
            assertSelectedThemeAccentColorCssProperties();

        it('should apply the selected font size', async () => {
            // Arrange
            resetElements();
            await flushPromises();
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-600')).toEqual('#000203');
            '#1fffff',
        expect(documentElementMock.style.getPropertyValue('--theme-scroll-bars')).toEqual(scrollBars);
            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);
            expect(service.windowHasNativeTitleBar).toBeTruthy();
            const settingsStub: any = { theme: '' };
            const useLightBackgroundTheme: boolean = service.useLightBackgroundTheme;
            assertSelectedThemeAccentColorCssProperties();
        });
            // Arrange
            settingsMock.reset();
            // Assert
        });
        it('should apply the selected theme', () => {
        expect(documentElementMock.style.getPropertyValue('--theme-secondary-button-text')).toEqual('#1fffff');
            // Arrange, Act
        it('should apply the light theme of the selected theme when follow the system theme is enabled and follow album cover color is disabled and the desktop is using a light theme', async () => {
        });
            // Act
        expect(documentElementMock.style.getPropertyValue('--theme-header-background')).toEqual('#066666');
            expect(documentElementMock.style.getPropertyValue('--mat-tab-header-margin-right')).toEqual('354px');
            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);
        it('should save followSystemTheme to settings', () => {
            expect(service.backgroundRgbColor.red).toEqual(RgbColor.default().red);

            '#0fffff',


        );
        it('should apply the dark theme if using the dark theme', () => {


        expect(documentElementMock.style.getPropertyValue('--theme-album-cover-background')).toEqual('#0fffff');

        });


            service.refreshThemes();
        });

    }
        expect(documentElementMock.style.getPropertyValue('--theme-main-background')).toEqual('#155555');
        overlayContainerMock = Mock.ofType<OverlayContainer>();
            service.selectedTheme = theme;
        applicationFullScreenChangedMock = new Subject();

        });
        it('should apply the dark theme if using the dark theme', () => {

            settingsMock.reset();



            settingsMock.reset();
            settingsMock.setup((x) => x.theme).returns(() => 'Theme 2');
            await flushPromises();
        expect(documentElementMock.style.getPropertyValue('--theme-dialog-background')).toEqual('#0fffff');

            const theme1WithoutIsBroken = { ...theme1, isBroken: undefined };
            // Assert
            '#144444',
            assertSelectedThemeAccentColorCssProperties();
            resetElements();
            await flushPromises();
            .returns(() => ['/home/user/.config/Dopamine/Themes/Theme 1.theme', '/home/user/.config/Dopamine/Themes/Theme 2.theme']);
        it('should return true if the settings contain true', () => {
import { IMock, Mock, Times } from 'typemoq';
            // Assert
            const service: AppearanceServiceBase = createService();
    describe('followSystemTheme', () => {
import { PlaybackStarted } from '../playback/playback-started';
import { ThemeCreator } from './theme/theme-creator';
            settingsMock.setup((x) => x.fontSize).returns(() => 13);
        playbackServicePlaybackStartedMock = new Subject();
    function assertSelectedThemeAccentColorCssProperties(): void {
            service.selectedTheme = createTheme('My theme');

            defaultThemesCreatorMock.object,

        it('should save font size in the settings', () => {
        });
import { TrackModel } from '../track/track-model';
        desktopMock = Mock.ofType<DesktopBase>();
import { SettingsBase } from '../../common/settings/settings.base';
            settingsMock.setup((x) => x.followSystemColor).returns(() => false);
            const service: AppearanceServiceBase = createService();

            settingsMock.setup((x) => x.followSystemColor).returns(() => false);
            expect(service.accentRgbColor.equals(new RgbColor(204, 204, 204))).toBeTruthy();
            // Act

            resetElements();

        expect(documentElementMock.style.getPropertyValue('--theme-primary-text')).toEqual('#199999');
            expect(bodyMock.classList).toContain('default-theme-dark');
            const service: AppearanceServiceBase = createService();
        expect(documentElementMock.style.getPropertyValue('--theme-secondary-color')).toEqual('#00ff00');
            const service: AppearanceServiceBase = createService();
        expect(documentElementMock.style.getPropertyValue('--theme-search-box')).toEqual('#1fffff');

            expect(service.accentRgbColor.equals(new RgbColor(204, 204, 204))).toBeTruthy();
            await service.applyAppearanceAsync();
            expect(containerElementMock.classList).toContain('default-theme-light');


            await flushPromises();
            // Arrange
        it('should set windowHasNativeTitleBar to true if the window has a frame', () => {
            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-900')).toEqual('#008500');
import { ThemeNeutralColors } from './theme/theme-neutral-colors';
            // Arrange
            // Assert
            // Arrange
            // Act
            // Assert
        it('should apply a correct margin when not using system title bar search is visible', () => {

            // Assert

        it('should return the selected theme', () => {

            expect(service.accentRgbColor.equals(new RgbColor(204, 204, 204))).toBeTruthy();
        desktopAccentColorChangedMock = new Subject();
            // Arrange
            expect(themes[1].name).toBe('Theme 2');
    function createService(): AppearanceServiceBase {

            // Arrange
        it('should apply the colors of the selected theme when follow the system color and follow album cover color are disabled ', async () => {
            await flushPromises();
        theme1 = createTheme('Theme 1');
        expect(documentElementMock.style.getPropertyValue('--theme-settings-separators')).toEqual('#0fffff');
            // Act

            fileAccessMock.verify(
        });
        desktopMock.setup((x) => x.accentColorChanged$).returns(() => desktopAccentColorChangedMock$);
            const settingsStub: any = { theme: 'Theme 2' };
            '#177777',
            const service: AppearanceServiceBase = createService();
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-A100')).toEqual('#ffffff');

            // Act

    function resetElements(): void {


        });
            expect(settingsStub.followSystemTheme).toBeTruthy();
    function createTheme(name: string): Theme {
            // Act
            fileAccessMock.object,

        it('should apply the dark theme if using the dark theme', () => {
            assertLightColorCssProperties('#1fffff');
        expect(documentElementMock.style.getPropertyValue('--theme-button-border')).toEqual('#0fffff');
            applicationMock.object,
            service.refreshThemes();

            // Act
        });
            expect(service.themes[0]).toBe(theme1);
            // Arrange
            // Arrange
            expect(useLightBackgroundTheme).toBeFalsy();
        });
            // Assert
            resetElements();
            service.applyMargins(true);
            // Act
            expect(documentElementMock.style.getPropertyValue('--mat-tab-header-margin-right')).toEqual('219px');
            expect(documentElementMock.style.getPropertyValue('--mat-tab-header-margin-right')).toEqual('354px');
            // Arrange
    function assertLightColorCssProperties(scrollBars: string): void {
            // Assert
        expect(documentElementMock.style.getPropertyValue('--theme-secondary-button-text')).toEqual('#0fffff');

        });
        settingsMock = Mock.ofType<SettingsBase>();
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-A700')).toEqual('#dbd7d7');

            '#0fffff',
            documentProxyMock.object,
            fileAccessMock.verify((x) => x.getFileContentAsString('/home/user/.config/Dopamine/Themes/Theme 1.theme'), Times.once());


        expect(documentElementMock.style.getPropertyValue('--theme-slider-background')).toEqual('#1ccccc');
            expect(themesDirectoryPath).toEqual('/home/user/.config/Dopamine/Themes');
        it('should apply the light theme if using the light theme', () => {
        it('should apply a correct margin when using system title bar search is visible', async () => {
            expect(service.accentRgbColor.equals(new RgbColor(204, 204, 204))).toBeTruthy();
            fileAccessMock.verify((x) => x.getFileContentAsString('/home/user/.config/Dopamine/Themes/Theme 1.theme'), Times.once());
            // Assert
            expect(service.backgroundRgbColor.equals(new RgbColor(5, 85, 85))).toBeTruthy();
            );
            service.applyMargins(false);




            const followSystemColor: boolean = service.followSystemColor;
            expect(settingsStub.theme).toEqual('My theme');
            '#088888',

        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-900')).toEqual('#000000');
        expect(documentElementMock.style.getPropertyValue('--theme-hovered-item-background')).toEqual('#011111');
            settingsMock.setup((x) => x.useLightBackgroundTheme).returns(() => true);

            assertSelectedThemeAccentColorCssProperties();
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-400')).toEqual('#002041');
            settingsMock.setup((x) => x.fontSize).returns(() => 13);
            const service: AppearanceServiceBase = createService();

        applicationPathsMock.setup((x) => x.themesDirectoryFullPath()).returns(() => '/home/user/.config/Dopamine/Themes');
            '#022222',

    });
        resetDefaultThemesCreatorMock();



            expect(service.windowHasNativeTitleBar).toBeFalsy();
            const isUsingLightTheme: boolean = service.isUsingLightTheme;
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-500')).toEqual('#00ff00');


            settingsMock.setup((x) => x.fontSize).returns(() => 13);
            defaultThemesCreatorMock.object,
            settingsMock.setup((x) => x.theme).returns(() => 'Theme 2');
            settingsMock.setup((x) => x.fontSize).returns(() => 13);
            const settingsStub: any = { theme: '' };
            expect(followSystemTheme).toBeFalsy();
            assertLightColorCssProperties('#1fffff');
            documentProxyMock.object,
        expect(documentElementMock.style.getPropertyValue('--theme-highlight-foreground')).toEqual('#0fffff');
        });

            const service: AppearanceServiceBase = createService();
            await service.applyAppearanceAsync();
            // Act
            // Act
            // Assert
            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);
            '#0aaaaa',
                (x) =>
        expect(documentElementMock.style.getPropertyValue('--theme-pane-separators')).toEqual('#0fffff');

    function assertDarkColorCssProperties(scrollBars: string): void {
            await flushPromises();

            '#055555',
        it('should apply the light theme if using the light theme', () => {


            desktopMock.setup((x) => x.shouldUseDarkColors()).returns(() => false);

            const settingsStub: any = { followSystemTheme: false, useLightBackgroundTheme: false };
            const themes: Theme[] = service.themes;
            applicationMock.reset();
        });
            service.selectedTheme = createTheme('My theme');
import { Theme } from './theme/theme';
            await flushPromises();
            expect(followSystemColor).toBeTruthy();
                    x.writeToFile('/home/user/.config/Dopamine/Themes/Theme 2.theme', JSON.stringify(theme2WithoutIsBroken, undefined, 2)),

            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);
            // Act
            settingsMock.setup((x) => x.useLightBackgroundTheme).returns(() => false);
        return new Theme(name, creator, coreColors, darkColors, lightColors, options);
    describe('applyAppearanceAsync', () => {
            settingsMock.setup((x) => x.followSystemColor).returns(() => false);
            // Act
            const settingsStub: any = { followSystemTheme: false, useLightBackgroundTheme: true };


            // Act
        fileAccessMock.reset();
            // Act
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-500')).toEqual('#001122');

            resetFileAccessMock();





        it('should apply the light theme if using the light theme', () => {


        });
        expect(documentElementMock.style.getPropertyValue('--theme-search-box-text')).toEqual('#1fffff');
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-A400')).toEqual('#33ff33');
    }
            const settingsStub: any = { followSystemTheme: false, useLightBackgroundTheme: false };

        expect(documentElementMock.style.getPropertyValue('--theme-secondary-color')).toEqual('#001122');
        });

            '#0fffff',
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-400')).toEqual('#1fff1f');
            expect(containerElementMock.classList).toContain('default-theme-dark');
            const selectedTheme: Theme = service.selectedTheme;

            service.selectedTheme = theme;

            const settingsStub: any = { theme: 'Theme 2' };
            expect(service.backgroundRgbColor.equals(new RgbColor(21, 85, 85))).toBeTruthy();
            settingsMock.reset();
        });
        fileAccessMock
            // Arrange
            expect(service.backgroundRgbColor.equals(new RgbColor(21, 85, 85))).toBeTruthy();

        });

            '#0fffff',
            assertSelectedThemeAccentColorCssProperties();
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-100')).toEqual('#006fdf');
            expect(documentElementMock.style.getPropertyValue('--fontsize')).toEqual('13px');
        });
                (x) =>


            settingsMock.setup((x) => x.useLightBackgroundTheme).returns(() => false);
            settingsMock.setup((x) => x.followSystemTheme).returns(() => true);
            // Act
            // Arrange

        });
        expect(documentElementMock.style.getPropertyValue('--theme-primary-button-text')).toEqual('#1fffff');

        fileAccessMock
            const settingsStub: any = { theme: '' };
            await flushPromises();
            resetElements();
    let loggerMock: IMock<Logger>;
    describe('constructor', () => {
        it('should set the selected theme from the settings', () => {
            '#0fffff',

            expect(service.accentRgbColor.equals(new RgbColor(204, 204, 204))).toBeTruthy();
        expect(documentElementMock.style.getPropertyValue('--theme-primary-color')).toEqual('#001122');
            fileAccessMock.verify((x) => x.createFullDirectoryPathIfDoesNotExist('/home/user/.config/Dopamine/Themes'), Times.once());
    const flushPromises = () => new Promise(process.nextTick);
            // Assert
            overlayContainerMock.object,
            expect(service.selectedTheme).toEqual(theme2);
    function assertAlbumCoverAccentColorCssProperties(): void {
            service.selectedTheme = createTheme('My theme');
        });
            '#122222',

        it('should return the selected font size', () => {
            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);
        desktopMock.setup((x) => x.nativeThemeUpdated$).returns(() => desktopNativeThemeUpdatedMock$);
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-200')).toEqual('#0053a7');
            assertSelectedThemeAccentColorCssProperties();
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-300')).toEqual('#3dff3d');
            // Arrange
        const options: ThemeOptions = new ThemeOptions(false);
            // Assert
        });
        });
            const service: AppearanceServiceBase = createService();

        });
            const service: AppearanceServiceBase = createService();
            // Act
        it('should save the theme in the settings', () => {
            '#1fffff',
            '#0ddddd',
            const service: AppearanceServiceBase = createService();

import { FileAccessBase } from '../../common/io/file-access.base';
            settingsMock.setup((x) => x.followSystemTheme).returns(() => true);
            // Assert
            // Arrange

            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);

            const service: AppearanceServiceBase = createService();
            settingsMock.setup((x) => x.followAlbumCoverColor).returns(() => false);
            const themesDirectoryPath: string = service.themesDirectoryPath;
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-A400')).toEqual('#e9e2e2');
            // Arrange
        });
            // Assert
    let fileAccessMock: IMock<FileAccessBase>;
            const settingsStub: any = { followSystemTheme: false, useLightBackgroundTheme: true };
            service.selectedTheme = createTheme('My theme');
            const useLightBackgroundTheme: boolean = service.useLightBackgroundTheme;
    let playbackServicePlaybackStartedMock: Subject<PlaybackStarted>;

            assertDarkColorCssProperties('#0fffff');
            expect(containerElementMock.classList).toContain('default-theme-dark');
            expect(documentElementMock.style.getPropertyValue('--mat-tab-header-margin-right')).toEqual('49px');
            // Assert
        });
    }
        });
        return new ThemeNeutralColors(
    function resetFileAccessMock(): void {
            settingsStub,
            // Act
            expect(service.accentRgbColor.equals(new RgbColor(204, 204, 204))).toBeTruthy();
            applicationPathsMock.object,
        expect(documentElementMock.style.getPropertyValue('--theme-primary-color')).toEqual('#00ff00');
            service.followSystemTheme = true;

        expect(documentElementMock.style.getPropertyValue('--theme-settings-separators')).toEqual('#1fffff');
            // Arrange
            '#0fffff',
        desktopNativeThemeUpdatedMock = new Subject();



            expect(containerElementMock.classList).toContain('default-theme-light');
import { AppearanceServiceBase } from './appearance.service.base';

            service.selectedTheme = createTheme('My theme');
            '#111111',
            settingsMock.setup((x) => x.useLightBackgroundTheme).returns(() => false);
        it('should apply the colors of the album cover when follow the system color is disabled and follow album cover color is enabled', async () => {
    describe('selectedTheme', () => {

            '#0fffff',
            expect(themes.length).toEqual(2);
    });
            resetElements();
    }
        );
        });
            expect(settingsStub.fontSize).toEqual(13);
            applicationMock.reset();
            assertLightColorCssProperties('#1fffff');

            createService();
                Times.once(),
    }
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-100')).toEqual('#ffffff');
            settingsMock.setup((x) => x.followSystemTheme).returns(() => false);
            expect(settingsStub.useLightBackgroundTheme).toBeTruthy();
            settingsMock.setup((x) => x.followAlbumCoverColor).returns(() => false);
            settingsMock.setup((x) => x.followSystemColor).returns(() => false);



            const isUsingLightTheme: boolean = service.isUsingLightTheme;
            desktopMock.setup((x) => x.shouldUseDarkColors()).returns(() => false);
            // Arrange
            expect(followSystemColor).toBeFalsy();
            expect(settingsStub.followSystemColor).toBeTruthy();
        });
            // Assert
            '#000000',
        it('should save followSystemColor to settings', () => {


            service.applyMargins(true);

        expect(documentElementMock.style.getPropertyValue('--theme-pane-separators')).toEqual('#1fffff');
            service.selectedTheme = createTheme('My theme');
        expect(documentElementMock.style.getPropertyValue('--theme-search-box-text')).toEqual('#0fffff');
            // Arrange

        fileAccessMock
            // Act
            // Act
            expect(service.accentRgbColor.equals(new RgbColor(204, 204, 204))).toBeTruthy();
        expect(documentElementMock.style.getPropertyValue('--theme-footer-background')).toEqual('#177777');
            expect(bodyMock.classList).toContain('default-theme-light');
            // Arrange
            resetElements();
            // Arrange
            assertDarkColorCssProperties('#0fffff');
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-700')).toEqual('#adadad');
            // Arrange
            desktopMock.setup((x) => x.shouldUseDarkColors()).returns(() => true);
            resetFileAccessMock();
            // Act
            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);
            settingsMock.setup((x) => x.fontSize).returns(() => 13);

            expect(bodyMock.classList).toContain('default-theme-light');
            desktopMock.setup((x) => x.shouldUseDarkColors()).returns(() => false);
        expect(documentElementMock.style.getPropertyValue('--theme-button-border')).toEqual('#1fffff');
            loggerMock.object,
        expect(documentElementMock.style.getPropertyValue('--theme-search-box')).toEqual('#0fffff');
            const theme: Theme = createTheme('My theme');
            settingsMock.reset();
            // Assert
            const service: AppearanceServiceBase = createService();

    let applicationPathsMock: IMock<ApplicationPaths>;
            // Assert
            const service: AppearanceServiceBase = createService();
        fileAccessMock
            settingsMock.setup((x) => x.useSystemTitleBar).returns(() => false);

            settingsMock.setup((x) => x.followAlbumCoverColor).returns(() => false);
            expect(service.accentRgbColor.equals(new RgbColor(204, 204, 204))).toBeTruthy();
            const settingsStub: any = { followSystemColor: false };
                (x) =>
            applicationMock.object,
            // Assert
            settingsMock.reset();

            );
            settingsMock.setup((x) => x.theme).returns(() => 'Theme 2');
            // Act
        });
        });
    let desktopMock: IMock<DesktopBase>;
            resetElements();
            // Arrange, Act
    describe('isUsingLightTheme', () => {
            '#1aaaaa',
        });
            expect(service.backgroundRgbColor.blue).toEqual(RgbColor.default().blue);
            '#033333',

            // Assert
            settingsMock.setup((x) => x.followSystemColor).returns(() => false);
            await service.applyAppearanceAsync();
            const service: AppearanceServiceBase = createService();
        it('should apply the dark theme of the selected theme when follow the system theme and follow album cover color are disabled and use light background theme is disabled', async () => {
            resetElements();
            // Arrange
            const service: AppearanceServiceBase = createService();
            // Assert
        });
            // Assert
            // Assert
            expect(service.themes[1]).toBe(theme2);
        it('should set default backgroundRgbColor', () => {
            expect(service.backgroundRgbColor.equals(new RgbColor(5, 85, 85))).toBeTruthy();
            // Arrange
            settingsMock.setup((x) => x.theme).returns(() => 'Theme 2');
            // Act
            const settingsStub: any = { theme: '' };
            // Arrange

            expect(bodyMock.classList).toContain('default-theme-light');
            // Assert
        it('should apply a correct margin when using system title bar search is not visible', () => {
            expect(service.backgroundRgbColor.equals(new RgbColor(21, 85, 85))).toBeTruthy();
            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);
    }

            // Act
            service.followSystemColor = true;
        documentProxyMock.setup((x) => x.getDocumentElement()).returns(() => documentElementMock);
                (x) =>
        albumAccentColorServiceMock = Mock.ofType<AlbumAccentColorService>();
            settingsMock.setup((x) => x.followSystemTheme).returns(() => false);
        });
            const service: AppearanceServiceBase = createService();
            '#077777',
            expect(bodyMock.classList).toContain('default-theme-dark');
        const darkColors: ThemeNeutralColors = createDarkColors();
        });
            '#1ddddd',

            // Act
            expect(service.backgroundRgbColor.equals(new RgbColor(21, 85, 85))).toBeTruthy();
            // Assert

        it('should ensure that the default themes exist', () => {
            expect(themes[0].name).toBe('Theme 1');
            .setup((x) => x.combinePath(['/home/user/.config/Dopamine/Themes', 'Theme 2.theme']))
            expect(documentElementMock.style.getPropertyValue('--mat-tab-header-margin-right')).toEqual('184px');
            .setup((x) => x.getFileContentAsString('/home/user/.config/Dopamine/Themes/Theme 1.theme'))
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color')).toEqual('#ccc');
            const settingsStub: any = { followSystemTheme: false };
        });
            expect(service.themesDirectoryPath).toEqual('/home/user/.config/Dopamine/Themes');
            expect(service.selectedTheme).toEqual(theme2);
            // Act
        theme2 = createTheme('Theme 2');
        });
            // Assert
            await flushPromises();
    });
            createService();
            const settingsStub: any = { followSystemTheme: false, useLightBackgroundTheme: false };
import { Logger } from '../../common/logger';
            service.followSystemTheme = false;
            expect(documentElementMock.style.getPropertyValue('--fontsize')).toEqual('13px');
            settingsMock.setup((x) => x.useSystemTitleBar).returns(() => false);
            settingsMock.reset();
        containerElementMock = document.createElement('div');
import { OverlayContainer } from '@angular/cdk/overlay';

        expect(documentElementMock.style.getPropertyValue('--theme-dialog-background')).toEqual('#1fffff');
            expect(containerElementMock.classList).toContain('default-theme-dark');
            const service: AppearanceServiceBase = createService();
            // Act
            '#1fffff',
            '#1fffff',
            assertDarkColorCssProperties('#0fffff');
            const service: AppearanceServiceBase = createService();

import { DefaultThemesCreator } from './default-themes-creator';
        expect(documentElementMock.style.getPropertyValue('--theme-slider-background')).toEqual('#0ccccc');
            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);


        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-700')).toEqual('#000000');
            // Assert
    function createServiceWithSettingsStub(settingsStub: any): AppearanceServiceBase {

            expect(service.accentRgbColor.equals(new RgbColor(204, 204, 204))).toBeTruthy();
            settingsMock.reset();
        });
        it('should listen to accent color changes of the OS and apply the theme', () => {
            settingsMock.setup((x) => x.theme).returns(() => 'Theme 2');
            const settingsStub: any = { followSystemTheme: false, useLightBackgroundTheme: true, theme: '' };
            assertLightColorCssProperties('#1fffff');
        expect(documentElementMock.style.getPropertyValue('--theme-hovered-item-background')).toEqual('#111111');

            service.selectedTheme = createTheme('My theme');

            // Arrange
            desktopAccentColorChangedMock.next();
            expect(service.backgroundRgbColor.equals(new RgbColor(21, 85, 85))).toBeTruthy();
    describe('windowHasNativeTitleBar', () => {



            );
            resetElements();
            settingsMock.setup((x) => x.followSystemTheme).returns(() => true);

        it('should apply the light theme if using the light theme', () => {

            // Act

            '#1fffff',

            // Act
            resetDefaultThemesCreatorMock();
        expect(documentElementMock.style.getPropertyValue('--theme-header-separator')).toEqual('#1fffff');
            fileAccessMock.verify(
            // Arrange
            expect(service.accentRgbColor.equals(new RgbColor(0, 17, 34))).toBeTruthy();
    }

        it('should set the themes directory path', () => {

        expect(documentElementMock.style.getPropertyValue('--theme-secondary-color')).toEqual('#000');

            // Assert
        loggerMock = Mock.ofType<Logger>();

            expect(service.selectedFontSize).toEqual(14);
            playbackServiceMock.object,
            '#0fffff',
            // Arrange
    let playbackServiceMock: IMock<PlaybackService>;
            '#1fffff',
            const theme2WithoutIsBroken = { ...theme2, isBroken: undefined };
            resetElements();
            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);
            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);
        defaultThemesCreatorMock.reset();

        it('should return false if the settings contain false', () => {
            expect(containerElementMock.classList).toContain('default-theme-light');
import { DesktopBase } from '../../common/io/desktop.base';
        });
    }
        });

    });
    }
            const service: AppearanceServiceBase = createService();
            expect(service.backgroundRgbColor.equals(new RgbColor(5, 85, 85))).toBeTruthy();
        });
            playbackServiceMock.setup((x) => x.currentTrack).returns(() => currentTrack);
import { ApplicationPaths } from '../../common/application/application-paths';
            // Assert
            desktopMock.setup((x) => x.shouldUseDarkColors()).returns(() => false);
            // Assert
            const isUsingLightTheme: boolean = service.isUsingLightTheme;
            expect(service.backgroundRgbColor.equals(new RgbColor(5, 85, 85))).toBeTruthy();
    function assertSystemThemeAccentColorCssProperties(): void {
        );

            // Act
            settingsMock.setup((x) => x.followSystemTheme).returns(() => false);
            // Assert
            expect(selectedTheme).toBe(theme);
            settingsMock.setup((x) => x.theme).returns(() => 'Theme 2');
            service.selectedTheme = theme;
        documentProxyMock.setup((x) => x.getBody()).returns(() => bodyMock);
            expect(service.accentRgbColor.green).toEqual(RgbColor.default().green);
            service.selectedFontSize = 13;


            expect(containerElementMock.classList).toContain('default-theme-light');
        });
            // Assert
        expect(documentElementMock.style.getPropertyValue('--theme-secondary-text')).toEqual('#1aaaaa');
            settingsMock.setup((x) => x.followSystemColor).returns(() => false);
            const settingsStub: any = { theme: 'Theme 2' };

            const service: AppearanceServiceBase = createService();
            settingsMock.setup((x) => x.followAlbumCoverColor).returns(() => false);

            // Arrange
            // Arrange, Act
            // Arrange
            assertSelectedThemeAccentColorCssProperties();
        it('should return true if the window has a frame', () => {
        return new AppearanceService(
        defaultThemesCreatorMock.setup((x) => x.createAllThemes()).returns(() => [theme1, theme2]);
            await flushPromises();

        expect(documentElementMock.style.getPropertyValue('--theme-main-background')).toEqual('#055555');

            // Act

            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);
            settingsMock.reset();
        it('should get themes from the themes directory', () => {

            // Assert
            settingsStub.theme = 'Theme 2';
            fileAccessMock.verify((x) => x.getFilesInDirectory('/home/user/.config/Dopamine/Themes'), Times.once());
        applicationFullScreenChangedMock$ = applicationFullScreenChangedMock.asObservable();
            // Arrange
        });
        const lightColors: ThemeNeutralColors = createLightColors();
            settingsMock.reset();

    describe('themesDirectoryPath', () => {


            settingsMock.reset();
            await service.applyAppearanceAsync();
            const service: AppearanceServiceBase = createService();
            const service: AppearanceServiceBase = createService();
        it('should return false when following the system theme and the system is using a dark theme', () => {
        });
            await service.applyAppearanceAsync();
        expect(documentElementMock.style.getPropertyValue('--theme-tooltip-text')).toEqual('#1fffff');
            settingsMock.reset();
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-A400')).toEqual('#002a55');
            '#044444',
        it('should apply the font size', () => {
            desktopMock.setup((x) => x.shouldUseDarkColors()).returns(() => false);
            .returns(() => JSON.stringify(theme2));
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-800')).toEqual('#000000');
        it('should return themes', () => {
            fileAccessMock.verify(
    describe('fontSizes', () => {
            settingsMock.setup((x) => x.followSystemColor).returns(() => true);
            // Assert

    let documentElementMock: HTMLElement;
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-700')).toEqual('#00c200');
            // Arrange, Act
            applicationMock.setup((x) => x.fullScreenChanged$).returns(() => applicationFullScreenChangedMock$);
        });

            '#1ccccc',
            '#1fffff',
});
            const service: AppearanceServiceBase = createService();
import { AppearanceService } from './appearance.service';

    let applicationMock: IMock<ApplicationBase>;
            const followSystemColor: boolean = service.followSystemColor;

            applicationPathsMock.object,
            assertDarkColorCssProperties('#0fffff');
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-A200')).toEqual('#ffffff');
    }

            settingsMock.setup((x) => x.followSystemTheme).returns(() => false);
            resetElements();
            const service: AppearanceServiceBase = createService();
            resetElements();
            // Assert
        });
            settingsMock.setup((x) => x.useLightBackgroundTheme).returns(() => true);
        resetFileAccessMock();
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color')).toEqual('#00ff00');
        expect(documentElementMock.style.getPropertyValue('--theme-search-box-icon')).toEqual('#0fffff');

        expect(documentElementMock.style.getPropertyValue('--theme-secondary-button-background')).toEqual('#0fffff');
        it('should apply the colors of the system when follow the system color is enabled and follow album cover color is disabled', async () => {
        );

            // Arrange
            assertSelectedThemeAccentColorCssProperties();
        it('should apply a correct margin when using system title bar search is visible', () => {
        it('should return false if the settings contain false', () => {

            '#1fffff',
        expect(documentElementMock.style.getPropertyValue('--theme-header-background')).toEqual('#166666');

            const settingsStub: any = { useLightBackgroundTheme: false };
            // Act
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-A100')).toEqual('#ffffff');
            // Arrange
        it('should set the selected theme from the settings', () => {

    });
        it('should return true if the settings contain true', () => {
        const coreColors: ThemeCoreColors = new ThemeCoreColors('#fff', '#000', '#ccc');

            // Assert

import { DocumentProxy } from '../../common/io/document-proxy';
            // Assert


        });
        documentProxyMock = Mock.ofType<DocumentProxy>();
            settingsMock.setup((x) => x.useSystemTitleBar).returns(() => true);


            service.followSystemColor = false;

        playbackServiceMock = Mock.ofType<PlaybackService>();
            expect(service.accentRgbColor.equals(new RgbColor(204, 204, 204))).toBeTruthy();
            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);
            '#1fffff',
        overlayContainerMock.setup((x) => x.getContainerElement()).returns(() => containerElementMock);



            const theme1WithoutIsBroken = { ...theme1, isBroken: undefined };
            '#0fffff',

    });
            // Assert
            settingsMock.setup((x) => x.useSystemTitleBar).returns(() => true);
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-500')).toEqual('#cccccc');
            // Arrange
            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);

        });
            await service.applyAppearanceAsync();
        expect(documentElementMock.style.getPropertyValue('--theme-slider-thumb-background')).toEqual('#1ddddd');
            settingsMock.setup((x) => x.theme).returns(() => 'Theme 1');
import { ThemeOptions } from './theme/theme-options';
        });
            const service: AppearanceServiceBase = createService();

            applicationMock.setup((x) => x.getGlobal('windowHasFrame')).returns(() => false);
        expect(documentElementMock.style.getPropertyValue('--theme-window-button-icon')).toEqual('#000000');
            const service: AppearanceServiceBase = createServiceWithSettingsStub(settingsStub);
            assertLightColorCssProperties('#1fffff');
        const creator: ThemeCreator = new ThemeCreator('My creator', 'my@email.com');
            settingsMock.setup((x) => x.fontSize).returns(() => 14);
            settingsMock.reset();
            // Arrange
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-600')).toEqual('#00e000');
            // Arrange

        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-50')).toEqual('#ffffff');
            await service.applyAppearanceAsync();
            // Arrange
            .returns(() => JSON.stringify(theme1));
            // Arrange
            // Assert
        expect(documentElementMock.style.getPropertyValue('--theme-selected-tab-text')).toEqual('#044444');
        it('should apply a correct margin when not using system title bar search is visible', async () => {
            settingsMock.setup((x) => x.followAlbumCoverColor).returns(() => true);
        expect(documentElementMock.style.getPropertyValue('--theme-footer-background')).toEqual('#077777');
            // Act
            albumAccentColorServiceMock.setup((x) => x.getAlbumAccentColorAsync('albumKey1')).returns(() => Promise.resolve('#001122'));

    let theme1: Theme;
            applicationMock.setup((x) => x.fullScreenChanged$).returns(() => applicationFullScreenChangedMock$);
            expect(service.accentRgbColor.equals(new RgbColor(204, 204, 204))).toBeTruthy();
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-A200')).toEqual('#99ff99');


            // Act
            expect(service.backgroundRgbColor.green).toEqual(RgbColor.default().green);
            fileAccessMock.verify((x) => x.getFilesInDirectory('/home/user/.config/Dopamine/Themes'), Times.once());
            // Assert
        expect(documentElementMock.style.getPropertyValue('--theme-context-menu-separators')).toEqual('#0fffff');
        it('should create', () => {
            settingsMock.setup((x) => x.fontSize).returns(() => 13);
        it('should return true when following the system theme and the system is not using a dark theme', () => {
            fileAccessMock.verify((x) => x.getFileContentAsString('/home/user/.config/Dopamine/Themes/Theme 2.theme'), Times.once());

            settingsMock.setup((x) => x.followSystemTheme).returns(() => false);

            // Act
    function resetDefaultThemesCreatorMock(): void {
        });
            expect(bodyMock.classList).toContain('default-theme-light');



            // Act
            const service: AppearanceServiceBase = createService();
            applicationMock.setup((x) => x.getGlobal('windowHasFrame')).returns(() => true);
            resetElements();
import { RgbColor } from '../../common/rgb-color';
            // Assert

import { AlbumAccentColorService } from '../album-accent-color/album-accent-color.service';
            settingsMock.reset();
        expect(documentElementMock.style.getPropertyValue('--theme-primary-button-text')).toEqual('#0fffff');
        });

            // Assert
            const settingsStub: any = { followSystemTheme: false, useLightBackgroundTheme: false, theme: '' };
            expect(containerElementMock.classList).toContain('default-theme-dark');

            desktopMock.setup((x) => x.shouldUseDarkColors()).returns(() => true);
        const desktopNativeThemeUpdatedMock$: Observable<void> = desktopNativeThemeUpdatedMock.asObservable();


    });
import { ApplicationBase } from '../../common/io/application.base';
            // Assert
    describe('refreshThemes', () => {
            // Act
            expect(service.accentRgbColor.red).toEqual(RgbColor.default().red);
            // Arrange
            settingsMock.setup((x) => x.followSystemColor).returns(() => false);
            const service: AppearanceServiceBase = createService();
            const service: AppearanceServiceBase = createService();
        containerElementMock = document.createElement('div');

    });
            resetElements();
            expect(windowHasNativeTitleBar).toBeFalsy();
        it('should set default accentRgbColor', () => {
            settingsMock.setup((x) => x.useSystemTitleBar).returns(() => false);
                    x.writeToFile('/home/user/.config/Dopamine/Themes/Theme 1.theme', JSON.stringify(theme1WithoutIsBroken, undefined, 2)),
            fileAccessMock.verify((x) => x.getFileContentAsString('/home/user/.config/Dopamine/Themes/Theme 2.theme'), Times.once());

            await service.applyAppearanceAsync();

    let settingsMock: IMock<SettingsBase>;
    });
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-800')).toEqual('#00a300');


            settingsMock.setup((x) => x.fontSize).returns(() => 13);
            service.useLightBackgroundTheme = true;
            settingsMock.setup((x) => x.theme).returns(() => 'Theme 2');

            assertSelectedThemeAccentColorCssProperties();
    let applicationFullScreenChangedMock$: Observable<boolean>;
            expect(isUsingLightTheme).toBeFalsy();
                Times.once(),
            // Assert
            expect(fontSizes).toEqual(Constants.fontSizes);
            // Arrange

        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-A100')).toEqual('#2290ff');
            // Assert
            fileAccessMock.object,

            '#0fffff',
            const currentTrack: TrackModel = MockCreator.createTrackModelWithAlbumKey('path1', 'albumKey1');
            settingsMock.setup((x) => x.useLightBackgroundTheme).returns(() => false);
        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-900')).toEqual('#8f8f8f');
            '#0fffff',

        expect(documentElementMock.style.getPropertyValue('--theme-accent-color-400')).toEqual('#dbdbdb');

import { PlaybackService } from '../playback/playback.service';
        expect(documentElementMock.style.getPropertyValue('--theme-primary-text')).toEqual('#099999');
            settingsMock.setup((x) => x.fontSize).returns(() => 13);
            // Arrange

            assertSelectedThemeAccentColorCssProperties();
            // Arrange


            service.followSystemTheme = false;
            '#1fffff',
            assertDarkColorCssProperties('#0fffff');
            // Assert
            // Act
            applicationMock.setup((x) => x.fullScreenChanged$).returns(() => applicationFullScreenChangedMock$);
            // Act
        });

            '#188888',

            // Act
        expect(documentElementMock.style.getPropertyValue('--theme-search-box-icon')).toEqual('#1fffff');

            expect(bodyMock.classList).toContain('default-theme-dark');

            defaultThemesCreatorMock.verify((x) => x.createAllThemes(), Times.once());
            // Assert
            expect(documentElementMock.style.getPropertyValue('--mat-tab-header-margin-right')).toEqual('219px');
        expect(documentElementMock.style.getPropertyValue('--theme-header-separator')).toEqual('#0fffff');
        });
            await service.applyAppearanceAsync();
            expect(service.backgroundRgbColor.equals(new RgbColor(21, 85, 85))).toBeTruthy();
            playbackServiceMock.object,
        expect(documentElementMock.style.getPropertyValue('--theme-highlight-foreground')).toEqual('#1fffff');
            // Act
        });
            // Arrange
            resetElements();
        expect(documentElementMock.style.getPropertyValue('--theme-tab-text')).toEqual('#133333');
            resetElements();

        it('should listen to native theme updates of the OS and apply the theme', () => {
            expect(service.backgroundRgbColor.equals(new RgbColor(5, 85, 85))).toBeTruthy();
    });
            resetElements();
            const service: AppearanceServiceBase = createService();
    function createDarkColors(): ThemeNeutralColors {
        expect(documentElementMock.style.getPropertyValue('--theme-context-menu-separators')).toEqual('#1fffff');
            // Assert
            // Assert
            const theme2WithoutIsBroken = { ...theme2, isBroken: undefined };
