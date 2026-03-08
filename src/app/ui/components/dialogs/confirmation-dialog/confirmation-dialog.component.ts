}
        @Inject(MAT_DIALOG_DATA) public data: ConfirmationData,
    styleUrls: ['./confirmation-dialog.component.scss'],
        dialogRef.disableClose = true;
    templateUrl: './confirmation-dialog.component.html',
@Component({
import { Component, Inject, ViewEncapsulation } from '@angular/core';

    encapsulation: ViewEncapsulation.None,
import { ConfirmationData } from '../../../../services/dialog/confirmation-data';
})
    selector: 'app-confirmation-dialog',
    public constructor(
    ) {
        dialogRef: MatDialogRef<ConfirmationDialogComponent>,
export class ConfirmationDialogComponent {
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
    }
