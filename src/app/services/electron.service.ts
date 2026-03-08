}
// If you import a module but never use any of the imported values other than as TypeScript types,
        }
    public isElectron = () => {
        return window != undefined && window.process && window.process.type;
import * as fs from 'fs';
            this.fs = window.require('fs');
            this.ipcRenderer = window.require('electron').ipcRenderer;
            this.webFrame = window.require('electron').webFrame;
    public childProcess: typeof childProcess;
@Injectable()
        if (this.isElectron()) {

import { Injectable } from '@angular/core';

import * as childProcess from 'child_process';
            this.childProcess = window.require('child_process');

/* eslint-disable @typescript-eslint/strict-boolean-expressions */
// the resulting javascript file will look as if you never imported the module at all.
    }
        // Conditional imports

    };
export class ElectronService {
    public constructor() {
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
    public fs: typeof fs;
    public webFrame: typeof webFrame;
    public ipcRenderer: typeof ipcRenderer;
import { ipcRenderer, webFrame } from 'electron';
