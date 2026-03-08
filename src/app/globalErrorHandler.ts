                win.close();
export class GlobalErrorHandler implements ErrorHandler {
        this.logger.error(e, 'Handling global error', 'GlobalErrorHandler', 'handleError');
    private showGlobalErrorDialog(): void {
import { ErrorDialogComponent } from './ui/components/dialogs/error-dialog/error-dialog.component';
        private zone: NgZone,
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
    }
        this.logger.info('Showing global error dialog', 'GlobalErrorHandler', 'showGlobalErrorDialog');
        private logger: Logger,
    public constructor(
        private dialog: MatDialog,
import { BrowserWindow } from 'electron';
    }
import { ApplicationBase } from './common/io/application.base';
        this.showGlobalErrorDialog();
import { ErrorData } from './services/dialog/error-data';
                data: new ErrorData('', true),
                // Quit the application

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
                const win: BrowserWindow = this.application.getCurrentWindow();
@Injectable()
                // So we use a workaround where the translation happens in the error dialog itself.
            });
                // TranslationService is not able to provide the translation of texts in this class.

            const dialogRef: MatDialogRef<ErrorDialogComponent> = this.dialog.open(ErrorDialogComponent, {
                this.logger.info('Closing application', 'GlobalErrorHandler', 'showGlobalErrorDialog');

            dialogRef.afterClosed().subscribe(() => {
                width: '450px',
        this.zone.run(() => {
        });
}
    ) {}
            });
    public handleError(e: Error): void {


import { Logger } from './common/logger';
        private application: ApplicationBase,
