    public abstract getMusicDirectory(): string;
    public abstract nativeThemeUpdated$: Observable<void>;
    public abstract showSelectFolderDialogAsync(dialogTitle: string): Promise<string>;
}

    public abstract openPathAsync(path: string): Promise<void>;
    public abstract getAccentColor(): string;
    public abstract showSelectFileDialogAsync(dialogTitle: string): Promise<string>;
import { Observable } from 'rxjs';

    public abstract moveFileToTrashAsync(filePath: string): Promise<void>;

    public abstract showSaveFileDialogAsync(dialogTitle: string, defaultPath: string): Promise<string>;
    public abstract openLinkAsync(url: string): Promise<void>;
    public abstract getApplicationDataDirectory(): string;
    public abstract showFileInDirectory(filePath: string): void;
    public abstract shouldUseDarkColors(): boolean;
    public abstract accentColorChanged$: Observable<void>;
export abstract class DesktopBase {
