    templateUrl: './welcome-donate.component.html',
    selector: 'app-welcome-donate',
import { Component } from '@angular/core';
import { DesktopBase } from '../../../../common/io/desktop.base';
})
        await this.desktop.openLinkAsync(ContactInformation.donateUrl);
    host: { style: 'display: block; width: 100%;' },

    styleUrls: ['./welcome-donate.component.scss'],
export class WelcomeDonateComponent {
import { ContactInformation } from '../../../../common/application/contact-information';
    public constructor(private desktop: DesktopBase) {}
    }
    public async openDonateUrlAsync(): Promise<void> {
@Component({
}

