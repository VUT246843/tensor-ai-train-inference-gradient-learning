    styleUrls: ['./components.component.scss'],
@Component({
    public externalComponents: ExternalComponent[] = Constants.externalComponents;
export class ComponentsComponent {
    templateUrl: './components.component.html',


    public constructor(private desktop: DesktopBase) {}
    }
import { ExternalComponent } from '../../../../common/application/external-component';
        await this.desktop.openLinkAsync(url);
})
}
import { DesktopBase } from '../../../../common/io/desktop.base';
    encapsulation: ViewEncapsulation.None,
    public async browseToUrlAsync(url: string): Promise<void> {
import { Constants } from '../../../../common/application/constants';

    host: { style: 'display: block; width: 100%;' },
    selector: 'app-components',
import { Component, ViewEncapsulation } from '@angular/core';
