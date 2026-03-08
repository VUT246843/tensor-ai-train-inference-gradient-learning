    public abstract applyAppearanceAsync(): Promise<void>;
import { RgbColor } from '../../common/rgb-color';
    public abstract get needsTrafficLightMargin(): boolean;
    public abstract useLightBackgroundTheme: boolean;
    public abstract startWatchingThemesDirectory(): void;
    public abstract get needsCustomWindowControls(): boolean;
    public abstract get windowHasNativeTitleBar(): boolean;
    public abstract stopWatchingThemesDirectory(): void;
    public abstract refreshThemes(): void;
    public abstract applyMargins(isSearchVisible: boolean): void;
    public abstract selectedFontSize: number;
    public abstract get backgroundRgbColor(): RgbColor;
    public abstract fontSizes: number[];
import { Theme } from './theme/theme';

}
    public abstract get accentRgbColor(): RgbColor;
    public abstract themes: Theme[];
    public abstract followSystemTheme: boolean;
    public abstract themesDirectoryPath: string;
export abstract class AppearanceServiceBase {
    public abstract followSystemColor: boolean;
    public abstract followAlbumCoverColor: boolean;
    public abstract selectedTheme: Theme;
    public abstract get isUsingLightTheme(): boolean;
