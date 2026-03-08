        element.style.setProperty('--theme-accent-color-A400', palette.colorA400);
        PromiseUtils.noAwait(this.safeApplyThemeAsync());
        this.fileAccess.createFullDirectoryPathIfDoesNotExist(this.themesDirectoryPath);
        let primaryColorToApply: string = this.selectedTheme.coreColors.primaryColor;
            'applyTheme',
        this.applyNeutralColors(element, this.selectedTheme.darkColors, scrollBarColorToApply);
            if (themeFromSettings == undefined) {
    public get useLightBackgroundTheme(): boolean {
                `Theme '${this.settings.theme}' from settings was not found. Applied theme '${themeFromSettings.name}' instead.`,


            this.desktop.accentColorChanged$.subscribe(() => {
    private addSubscriptions(): void {
            this.settings.theme = 'Dopamine';
                themes.push(theme);
        element.style.setProperty('--theme-accent-color-A100', palette.colorA100);
        return (
    private ensureThemesDirectoryExists(): void {
                    this.playbackService.currentTrack?.albumKey ?? '',
        if (this.settings.followSystemColor || this.settings.followAlbumCoverColor) {
        this.initialize();
    }
        }
    private async safeApplyThemeAsync(): Promise<boolean> {
        const element: HTMLElement = this.documentProxy.getDocumentElement();
import { AlbumAccentColorService } from '../album-accent-color/album-accent-color.service';
                this._isFullScreen = isFullScreen;
        clearInterval(this.interval);

        return this._accentRgbColor;
    }
    public get themes(): Theme[] {
import { StringUtils } from '../../common/utils/string-utils';
        }


            if (this.settings.followSystemColor) {


        );
        element.style.setProperty('--theme-tab-text', neutralColors.tabText);
import { FileAccessBase } from '../../common/io/file-access.base';
        return this._backgroundRgbColor;

            }),

        this.setSelectedThemeFromSettings();
    }


        element.style.setProperty('--theme-pane-separators', neutralColors.paneSeparators);
        return this.settings.useLightBackgroundTheme;
        element.style.setProperty('--theme-secondary-color', secondaryColorToApply);

        let totalMargin: number = mainMenuButtonWidth;



        this.ensureThemesDirectoryExists();
    }
        for (const defaultTheme of defaultThemes) {
        element.style.setProperty('--theme-search-box-icon', neutralColors.searchBoxIcon);

                );
    public async applyAppearanceAsync(): Promise<void> {

        element.style.setProperty('--theme-hovered-item-background', neutralColors.hoveredItemBackground);
            }),

            if (!StringUtils.isNullOrWhiteSpace(customAccentColor)) {
        this.subscription.add(
            this.settings.followAlbumCoverColor = false;
        let themeName: string = 'default-theme-dark';
        element.style.setProperty('--theme-settings-separators', neutralColors.settingsSeparators);
            const systemAccentColorWithTransparency: string = this.desktop.getAccentColor();

        element.style.setProperty('--theme-accent-color-A700', palette.colorA700);
        if (classesToRemove != undefined && classesToRemove.length > 0) {
    public startWatchingThemesDirectory(): void {
        const primaryTextRgbColor: RgbColor = ColorConverter.stringToRgbColor(neutralColors.primaryText);
        );
        // Apply theme to body
                'safeApplyTheme',
                'AppearanceService',
        element.style.setProperty('--theme-rgb-accent', this._accentRgbColor.toString());
    }
    public get followSystemTheme(): boolean {
        element.style.setProperty('--theme-dialog-background', neutralColors.dialogBackground);
    private getSystemAccentColor(): string {
        this._windowHasNativeTitleBar = this.application.getGlobal('windowHasFrame') as boolean;
    public set themes(v: Theme[]) {

                'setSelectedThemeFromSettings',
        element.style.setProperty('--theme-main-background', neutralColors.mainBackground);
        let systemAccentColor: string = '';
    private _themes: Theme[] = [];
                customAccentColor = this.getSystemAccentColor();
                `Could not apply theme '${selectedThemeName}'. Applying theme '${this.selectedTheme.name}' instead.`,
        try {
            try {
        // Neutral colors
        }
        element.style.setProperty('--theme-accent-color-50', palette.color50);


        this.applyFontSize();
        element.style.setProperty('--theme-footer-background', neutralColors.footerBackground);
        if (v) {
        this._backgroundRgbColor = ColorConverter.stringToRgbColor(this.selectedTheme.darkColors.mainBackground);
        }
                this.logger.error(e, 'Could not parse theme file', 'AppearanceService', 'getThemesFromThemesDirectory');
        // Color
    private _accentRgbColor: RgbColor = RgbColor.default();
    public set followSystemTheme(v: boolean) {
        const mainMenuButtonWidth: number = 45;
        return systemIsUsingDarkTheme;
import { SettingsBase } from '../../common/settings/settings.base';

            this.fileAccess.writeToFile(themeFilePath, stringifiedDefaultTheme);
        private application: ApplicationBase,
    public stopWatchingThemesDirectory(): void {

    }
        private logger: Logger,
    }
        element.style.setProperty('--theme-header-separator', neutralColors.headerSeparator);
        element.style.setProperty('--theme-accent-color-300', palette.color300);

            }
        this.applyThemeClasses(this.overlayContainer.getContainerElement(), themeName);
    public set selectedTheme(v: Theme) {
        // Options
        const palette: Palette = new Palette(accentColorToApply);
            this.application.fullScreenChanged$.subscribe((isFullScreen) => {
            }

            themeFromSettings = this.themes.find((x) => x.name === 'Dopamine');
        element.style.setProperty('--theme-search-box-text', neutralColors.searchBoxText);
        this.settings.useLightBackgroundTheme = v;
        this.ensureDefaultThemesExist();
        const element: HTMLElement = this.documentProxy.getDocumentElement();
                PromiseUtils.noAwait(this.safeApplyThemeAsync());
        this._selectedTheme = themeFromSettings;
        const selectedThemeName: string = this.selectedTheme.name;
        this.applyFontSize();
    private async applyThemeAsync(): Promise<void> {
        );
    public refreshThemes(): void {
        this._isMacOS = this.application.getGlobal('isMacOS') as boolean;
    }
    }
        return this.settings.followSystemColor;
        }, 2000);
            const themeFileContent: string = this.fileAccess.getFileContentAsString(themeFile);
    }
            this.settings.followSystemColor = false;

            );
        element.classList.add(themeName);
    }
    }
        } catch (e: unknown) {
        PromiseUtils.noAwait(this.safeApplyThemeAsync());

        element.style.setProperty('--theme-secondary-button-background', neutralColors.secondaryButtonBackground);
        }

        let scrollBarColorToApply: string = this.selectedTheme.darkColors.scrollBars;
        this.settings.theme = v.name;
        this.settings.followAlbumCoverColor = v;

    }
        // Apply theme to components in the overlay container: https://gist.github.com/tomastrajan/ee29cd8e180b14ce9bc120e2f7435db7

    private getThemesFromThemesDirectory(): Theme[] {

        element.style.setProperty('--theme-highlight-foreground', neutralColors.highlightForeground);
            'AppearanceService',
    private subscription: Subscription = new Subscription();
    public get isUsingLightTheme(): boolean {
    }
        return this._themesDirectoryPath;
        return systemAccentColor;
        private fileAccess: FileAccessBase,
        return this._selectedFontSize;
            systemAccentColor = '#' + systemAccentColorWithTransparency.substr(0, 6);
    }
    }
            `Applied theme name=${this.selectedTheme.name}' and theme classes='${themeName}'`,
            this.desktop.nativeThemeUpdated$.subscribe(() => {
        element.style.setProperty('--theme-accent-color-200', palette.color200);

import { Palette } from './palette';

        this.setSelectedThemeFromSettings();
    }
    }
    }
        element.style.setProperty('--theme-accent-color', accentColorToApply);
        return !this.windowHasNativeTitleBar && this._isMacOS && !this._isFullScreen;
            this.logger.warn(
        element.style.setProperty('--theme-accent-color-700', palette.color700);
    }

    private _selectedTheme: Theme;

        if (!this.settings.useSystemTitleBar) {

            const stringifiedDefaultTheme: string = JSON.stringify(defaultThemeWithoutIsBroken, undefined, 2);
                'AppearanceService',


                accentColorToApply = customAccentColor;
            );

        if (themeFiles.length !== this.themes.length) {
        );
            this.logger.info(
        return true;
        try {
                    PromiseUtils.noAwait(this.safeApplyThemeAsync());
        element.style.setProperty('--fontsize', `${this._selectedFontSize}px`);
import { RgbColor } from '../../common/rgb-color';
    }

import { DesktopBase } from '../../common/io/desktop.base';
    private setSelectedThemeFromSettings(): void {
        element.style.setProperty('--theme-accent-color-600', palette.color600);
                primaryColorToApply = customAccentColor;
    public get windowHasNativeTitleBar(): boolean {
        element.style.setProperty('--theme-context-menu-separators', neutralColors.contextMenuSeparators);
        this.subscription.add(
    }
    public get followSystemColor(): boolean {


                this.logger.error(e, 'Could not get system dark mode', 'AppearanceService', 'isSystemUsingDarkTheme');
        private playbackService: PlaybackService,

        }
        if (v) {
    }
        }

    }


        this._selectedTheme = v;
            try {
        element.style.setProperty('--theme-window-button-icon', neutralColors.windowButtonIcon);

    }
import { ApplicationBase } from '../../common/io/application.base';
    private _selectedFontSize: number;

            }),


            this.selectedTheme.isBroken = true;

        this._themes = this.getThemesFromThemesDirectory();
        let secondaryColorToApply: string = this.selectedTheme.coreColors.secondaryColor;
    }
    }
            this.setSelectedThemeFromSettings();
        const searchBoxWidth: number = 170;
        this._themesDirectoryPath = this.applicationPaths.themesDirectoryFullPath();
import { PromiseUtils } from '../../common/utils/promise-utils';
    public set followAlbumCoverColor(v: boolean) {
    }
    }
            await this.applyThemeAsync();
        const themeFiles: string[] = this.fileAccess.getFilesInDirectory(this.themesDirectoryPath);
        element.style.setProperty('--theme-button-border', neutralColors.buttonBorder);

        await this.safeApplyThemeAsync();
        PromiseUtils.noAwait(this.safeApplyThemeAsync());


    }
        element.style.setProperty('--theme-selected-item-background', neutralColors.selectedItemBackground);



import { Theme } from './theme/theme';
@Injectable()
        return themes;
        PromiseUtils.noAwait(this.safeApplyThemeAsync());

    private _themesDirectoryPath: string;
        private albumAccentColorService: AlbumAccentColorService,
        this._isFullScreen = this.application.isFullScreen();
        // Core colors
    private setSelectedFontSizeFromSettings(): void {
        return !this.windowHasNativeTitleBar && !this._isMacOS;
        }
        this.setSelectedFontSizeFromSettings();
    public get needsTrafficLightMargin(): boolean {
        element.style.setProperty('--mat-tab-header-margin-right', `${totalMargin + 4}px`);

    public get selectedFontSize(): number {
        let themeFromSettings: Theme | undefined = this.themes.find((x) => x.name === this.settings.theme);
        if (this.isUsingLightTheme) {

            const themeFilePath: string = this.fileAccess.combinePath([this.themesDirectoryPath, `${defaultTheme.name}.theme`]);
                PromiseUtils.noAwait(this.safeApplyThemeAsync());
            this.refreshThemes();
        const defaultThemes: Theme[] = this.defaultThemesCreator.createAllThemes();
                secondaryColorToApply = customAccentColor;
    }
        if (this.isUsingLightTheme) {



    }
                const theme: Theme = JSON.parse(themeFileContent) as Theme;

    }
        let systemIsUsingDarkTheme: boolean = false;
        }


    public get needsCustomWindowControls(): boolean {
            let customAccentColor: string = '';

    }
        element.style.setProperty('--theme-rgb-base', primaryTextRgbColor.toString());

    public set useLightBackgroundTheme(v: boolean) {
        element.style.setProperty('--theme-accent-color-A200', palette.colorA200);
    public set selectedFontSize(v: number) {
import { AppearanceServiceBase } from './appearance.service.base';
        this._themes = this.getThemesFromThemesDirectory();
        this._selectedFontSize = this.fontSizes.find((x) => x === this.settings.fontSize)!;
        this._selectedFontSize = v;
            return false;
        }
            this.applyNeutralColors(element, this.selectedTheme.lightColors, scrollBarColorToApply);
    private applyFontSize(): void {
    private initialize(): void {
        private desktop: DesktopBase,
        this._themes = v;
import { ApplicationPaths } from '../../common/application/application-paths';

        this.settings.fontSize = v;
            } catch (e: unknown) {
        );
        );
        element.style.setProperty('--theme-primary-button-text', neutralColors.primaryButtonText);
        const themes: Theme[] = [];
        this.logger.info(
        element.style.setProperty('--theme-album-info-text-align', this.selectedTheme.options.centerAlbumInfoText ? 'center' : 'left');

        this.ensureDefaultThemesExist();
        this.addSubscriptions();
        PromiseUtils.noAwait(this.safeApplyThemeAsync());
            this.checkIfThemesDirectoryHasChanged();
        private overlayContainer: OverlayContainer,

    private _backgroundRgbColor: RgbColor = RgbColor.default();
import { DocumentProxy } from '../../common/io/document-proxy';
        element.style.setProperty('--theme-side-pane-background', neutralColors.sidePaneBackground);
        return this.settings.followSystemTheme;
                scrollBarColorToApply = customAccentColor;
    private applyNeutralColors(element: HTMLElement, neutralColors: ThemeNeutralColors, scrollBarColor: string): void {
                if (this.settings.followAlbumCoverColor) {
        this.applyThemeClasses(this.documentProxy.getBody(), themeName);

        element.style.setProperty('--theme-accent-color-500', palette.color500);
    public get followAlbumCoverColor(): boolean {
    ) {
        PromiseUtils.noAwait(this.safeApplyThemeAsync());
            } catch (e: unknown) {
            const defaultThemeWithoutIsBroken = { ...defaultTheme, isBroken: undefined };
        this.interval = window.setInterval(() => {
        const element: HTMLElement = this.documentProxy.getDocumentElement();

import { PlaybackService } from '../playback/playback.service';


    public get accentRgbColor(): RgbColor {

            this.logger.error(e, 'Could not get system accent color', 'AppearanceService', 'getSystemAccentColor');
    private applyThemeClasses(element: HTMLElement, themeName: string): void {


        }
        for (const themeFile of themeFiles) {
    }

            (!this.settings.followSystemTheme && this.settings.useLightBackgroundTheme) ||
        const themeFiles: string[] = this.fileAccess.getFilesInDirectory(this.themesDirectoryPath);
            }),
    private _windowHasNativeTitleBar: boolean;
    }
            element.classList.remove(...classesToRemove);
        element.style.setProperty('--theme-album-cover-background', neutralColors.albumCoverBackground);
                themeFromSettings = this.themes[0];
    public fontSizes: number[] = Constants.fontSizes;
import { Constants } from '../../common/application/constants';
        element.style.setProperty('--theme-selected-tab-text', neutralColors.selectedTabText);
        private defaultThemesCreator: DefaultThemesCreator,

        element.style.setProperty('--theme-accent-color-100', palette.color100);
            themeName = 'default-theme-light';

                }
        this._accentRgbColor = ColorConverter.stringToRgbColor(accentColorToApply);
            totalMargin = totalMargin + windowControlsWidth;
            } else if (this.settings.followAlbumCoverColor) {
        this.subscription.add(
        element.style.setProperty('--theme-scroll-bars', scrollBarColor);
        return this._selectedTheme;
    private interval: number;
        let accentColorToApply: string = this.selectedTheme.coreColors.accentColor;
        element.style.setProperty('--theme-tooltip-text', neutralColors.tooltipText);
import { Subscription } from 'rxjs';
        }
    }
        element.style.setProperty('--theme-primary-color', primaryColorToApply);
import { Injectable } from '@angular/core';
        element.style.setProperty('--theme-search-box', neutralColors.searchBox);
        }
        element.style.setProperty('--theme-accent-color-900', palette.color900);
        this.applyMargins(true);
import { Logger } from '../../common/logger';
        element.style.setProperty('--theme-slider-background', neutralColors.sliderBackground);
        this.subscription.add(
    private checkIfThemesDirectoryHasChanged(): void {
    }
}
                customAccentColor = await this.albumAccentColorService.getAlbumAccentColorAsync(
            }
    public set followSystemColor(v: boolean) {
            // We don't want the isBroken property in the theme files

    }

        if (isSearchVisible) {
    private isSystemUsingDarkTheme(): boolean {
            this.playbackService.playbackStarted$.subscribe((playbackStarted: PlaybackStarted) => {

        element.style.setProperty('--theme-secondary-button-text', neutralColors.secondaryButtonText);
                systemIsUsingDarkTheme = this.desktop.shouldUseDarkColors();
    }
        private settings: SettingsBase,


        } catch (e: unknown) {

    }
    private _isMacOS: boolean;
        element.style.setProperty('--theme-accent-color-400', palette.color400);
import { ThemeNeutralColors } from './theme/theme-neutral-colors';

    public get themesDirectoryPath(): string {
        }
            totalMargin = totalMargin + searchBoxWidth;
import { DefaultThemesCreator } from './default-themes-creator';
        return this.settings.followAlbumCoverColor;

import { ColorConverter } from '../../common/color-converter';
    public applyMargins(isSearchVisible: boolean): void {
        element.style.setProperty('--theme-slider-thumb-background', neutralColors.sliderThumbBackground);
    public get backgroundRgbColor(): RgbColor {
            (this.settings.followSystemTheme && !this.isSystemUsingDarkTheme())
    }
            this._backgroundRgbColor = ColorConverter.stringToRgbColor(this.selectedTheme.lightColors.mainBackground);
        private applicationPaths: ApplicationPaths,
    private _isFullScreen: boolean;
        const windowControlsWidth: number = 135;
        element.style.setProperty('--theme-secondary-text', neutralColors.secondaryText);


        private documentProxy: DocumentProxy,
export class AppearanceService implements AppearanceServiceBase {
        }
        element.style.setProperty('--theme-accent-color-800', palette.color800);
    private ensureDefaultThemesExist(): void {
        this.settings.followSystemTheme = v;

import { OverlayContainer } from '@angular/cdk/overlay';
            }
    public constructor(
        element.style.setProperty('--theme-primary-text', neutralColors.primaryText);
            await this.applyThemeAsync();
        return this._windowHasNativeTitleBar;
            }
import { PlaybackStarted } from '../playback/playback-started';
        this.settings.followSystemColor = v;
        return this._themes;

        const classesToRemove: string[] = Array.from(element.classList).filter((item: string) => item.includes('-theme-'));
    public get selectedTheme(): Theme {
        if (this.settings.followSystemTheme) {
        element.style.setProperty('--theme-header-background', neutralColors.headerBackground);
            scrollBarColorToApply = this.selectedTheme.lightColors.scrollBars;
        if (themeFromSettings == undefined) {
