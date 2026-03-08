import { Component, Input, ViewEncapsulation } from '@angular/core';
    encapsulation: ViewEncapsulation.None,

    styleUrls: ['./dialog-header.component.scss'],
    @Input() public icon: string;
@Component({
}
})
    @Input() public title: string;
    templateUrl: './dialog-header.component.html',
export class DialogHeaderComponent {
    selector: 'app-dialog-header',
