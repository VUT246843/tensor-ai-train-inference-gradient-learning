import { FileAccessBase } from './file-access.base';
    }
@Injectable()
    public constructor(
            this.fileAccess.combinePath([this.desktop.getApplicationDataDirectory(), 'logs', Constants.logFileName]),

        this.desktop.showFileInDirectory(

        private desktop: DesktopBase,
}
        private fileAccess: FileAccessBase,
import { Constants } from '../application/constants';
export class LogViewer {
    public viewLog(): void {
        // See: https://stackoverflow.com/questions/30381450/open-external-file-with-electron
import { Injectable } from '@angular/core';
        );
    ) {}
import { DesktopBase } from './desktop.base';
