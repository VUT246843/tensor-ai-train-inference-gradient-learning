
})
export class BigIconButtonComponent {
@Component({
import { Component, Input } from '@angular/core';
    @Input() public icon: string;
    selector: 'app-big-icon-button',
    styleUrls: ['./big-icon-button.component.scss'],
}
    templateUrl: './big-icon-button.component.html',
