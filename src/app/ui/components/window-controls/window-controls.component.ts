    }
    public minButtonClick(): void {
        }
@Component({
import { BrowserWindow } from 'electron';
        } else {
        } else {
    public constructor(private application: ApplicationBase) {}
        const window: BrowserWindow = this.application.getCurrentWindow();
    templateUrl: './window-controls.component.html',
import { ApplicationBase } from '../../../common/io/application.base';
export class WindowControlsComponent implements OnInit {
        this.canMaximize = !window.isMaximized();
    host: { style: 'display: block' },
})
    selector: 'app-window-controls',
    public showMaximize: boolean = true;
        const window: BrowserWindow = this.application.getCurrentWindow();
    }
    @Input()
    }
            window.close();
            window.maximize();
    public closeButtonClick(): void {
    styleUrls: ['./window-controls.component.scss'],
    @Input()
            this.canMaximize = false;
        window.minimize();

    public canMaximize: boolean = false;

        const window: BrowserWindow = this.application.getCurrentWindow();

    encapsulation: ViewEncapsulation.None,

    public ngOnInit(): void {

import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

        if (this.application.getGlobal('isMacOS')) {
            this.canMaximize = true;

            window.hide();
    public maxRestoreClick(): void {
            window.unmaximize();
}
        const window: BrowserWindow = this.application.getCurrentWindow();

        if (window.isMaximized()) {
        }
    }


    public highContrast: boolean = false;
