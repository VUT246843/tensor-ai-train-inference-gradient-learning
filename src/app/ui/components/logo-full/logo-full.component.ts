    encapsulation: ViewEncapsulation.None,

import { ProductInformation } from '../../../common/application/product-information';
}
@Component({
    styleUrls: ['./logo-full.component.scss'],
    selector: 'app-logo-full',
    templateUrl: './logo-full.component.html',
export class LogoFullComponent {
import { Component, ViewEncapsulation } from '@angular/core';
    public applicationName: string = ProductInformation.applicationName.toLowerCase();
})
    host: { style: 'display: block' },
