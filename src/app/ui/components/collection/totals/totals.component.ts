@Component({
    @Input() public totalDurationInMilliseconds: number = 0;
    host: { style: 'display: block;' },
    styleUrls: ['./totals.component.scss'],
    selector: 'app-totals',
})
}
    templateUrl: './totals.component.html',
export class TotalsComponent {
import { Component, Input, ViewEncapsulation } from '@angular/core';

    @Input() public totalFileSizeInBytes: number = 0;
