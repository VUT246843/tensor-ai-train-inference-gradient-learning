        private dialogRef: MatDialogRef<InfoDialogComponent>,
import { ErrorData } from '../../../../services/dialog/error-data';
import { InfoData } from '../../../../services/dialog/info-data';
    selector: 'app-info-dialog',
        @Inject(MAT_DIALOG_DATA) public data: InfoData,
    encapsulation: ViewEncapsulation.None,
})
}
@Component({

export class InfoDialogComponent {
    public constructor(
    templateUrl: './info-dialog.component.html',
    ) {
    styleUrls: ['./info-dialog.component.scss'],
    }
        this.dialogRef.disableClose = true;
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
