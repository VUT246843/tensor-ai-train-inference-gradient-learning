    styleUrls: ['./icon-button.component.scss'],
    templateUrl: './icon-button.component.html',
}
import { Component, Input } from '@angular/core';
    selector: 'app-icon-button',
})
@Component({
export class IconButtonComponent {
    @Input() public icon: string;

