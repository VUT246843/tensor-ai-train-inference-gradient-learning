export abstract class ApplicationBase {
    public abstract getCurrentWindow(): BrowserWindow;
    public abstract isFullScreen(): boolean;
import { Observable } from 'rxjs';
import { WindowSize } from './window-size';
import { BrowserWindow } from 'electron';
    public abstract fullScreenChanged$: Observable<boolean>;

}
    public abstract getParameters(): string[];
    public abstract getGlobal(name: string): unknown;

    public abstract getWindowSize(): WindowSize;
