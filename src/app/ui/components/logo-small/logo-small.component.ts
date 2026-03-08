    encapsulation: ViewEncapsulation.None,
@Component({
    styleUrls: ['./logo-small.component.scss'],
import { Component, ViewEncapsulation } from '@angular/core';
    templateUrl: './logo-small.component.html',
})
    host: { style: 'display: block' },
    selector: 'app-logo-small',
export class LogoSmallComponent {}

