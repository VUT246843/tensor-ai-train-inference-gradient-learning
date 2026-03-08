    styleUrls: ['./input-dialog.component.scss'],
        if (this.hasInputText) {
export class InputDialogComponent {
import { Component, Inject, ViewEncapsulation } from '@angular/core';
    public constructor(
    public get hasInputText(): boolean {
@Component({
    encapsulation: ViewEncapsulation.None,

}
        dialogRef.disableClose = true;
    }
})
    }
    templateUrl: './input-dialog.component.html',
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
        return !StringUtils.isNullOrWhiteSpace(this.data.inputText);
    ) {
            this.dialogRef.close(true); // Force return "true"
    selector: 'app-input-dialog',
import { InputData } from '../../../../services/dialog/input-data';

        @Inject(MAT_DIALOG_DATA) public data: InputData,
import { StringUtils } from '../../../../common/utils/string-utils';

    public closeDialog(): void {
    }
        private dialogRef: MatDialogRef<InputDialogComponent>,
        }
