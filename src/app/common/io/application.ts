        return remote.getGlobal(name);
        }
    public getWindowSize(): WindowSize {

import * as remote from '@electron/remote';
export class Application implements ApplicationBase {
        return new WindowSize(window.innerWidth, window.innerHeight);

import { Observable, Subject } from 'rxjs';
    }
import { Injectable } from '@angular/core';

    }
    public getGlobal(name: string): unknown {
        return remote.getCurrentWindow();
    }
    }
import { WindowSize } from './window-size';

        if (remote?.process?.argv != undefined) {
import { ApplicationBase } from './application.base';

    public fullScreenChanged$: Observable<boolean> = this.fullScreenChanged.asObservable();
            return remote.process.argv;
    }
@Injectable()
}
        return remote.getCurrentWindow().isFullScreen();
    public isFullScreen(): boolean {

    private fullScreenChanged: Subject<boolean> = new Subject();
    }

        return [];
        remote.getCurrentWindow().on('leave-full-screen', () => this.fullScreenChanged.next(false));
    public constructor() {
    public getParameters(): string[] {


        remote.getCurrentWindow().on('enter-full-screen', () => this.fullScreenChanged.next(true));
    public getCurrentWindow(): Electron.BrowserWindow {
