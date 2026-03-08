    selector: 'app-icon-text-button',

    @Input() public icon: string;
    host: {
export class IconTextButtonComponent {
import { Component, Input } from '@angular/core';
@Component({
})
        style: 'display: inline-block',
    templateUrl: './icon-text-button.component.html',
    styleUrls: ['./icon-text-button.component.scss'],
}
    },
