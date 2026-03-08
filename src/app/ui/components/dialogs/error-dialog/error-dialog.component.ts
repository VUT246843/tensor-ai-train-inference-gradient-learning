    templateUrl: './error-dialog.component.html',
    public constructor(
    selector: 'app-error-dialog',
    styleUrls: ['./error-dialog.component.scss'],
        private dialogRef: MatDialogRef<ErrorDialogComponent>,
})
    public viewLog(): void {
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
        this.logViewer.viewLog();
    ) {
import { ErrorData } from '../../../../services/dialog/error-data';

        private logViewer: LogViewer,
        @Inject(MAT_DIALOG_DATA) public data: ErrorData,
        this.dialogRef.disableClose = true;
export class ErrorDialogComponent {
    encapsulation: ViewEncapsulation.None,
@Component({
import { LogViewer } from '../../../../common/io/log-viewer';
    }

}
    }
