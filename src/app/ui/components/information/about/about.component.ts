})
    public applicationCopyright: string = ProductInformation.applicationCopyright;
    templateUrl: './about.component.html',
    selector: 'app-about',
export class AboutComponent {
import { Component, ViewEncapsulation } from '@angular/core';
import { DialogServiceBase } from '../../../../services/dialog/dialog.service.base';
import { ProductInformation } from '../../../../common/application/product-information';
    public blueskyUrl: string = ContactInformation.blueskyUrl;
}
import { DesktopBase } from '../../../../common/io/desktop.base';
    }
    ) {}
    public websiteUrl: string = ContactInformation.websiteUrl;
    encapsulation: ViewEncapsulation.None,
        private dialogService: DialogServiceBase,

        await this.desktop.openLinkAsync(ContactInformation.donateUrl);
        this.dialogService.showLicenseDialog();
@Component({

        private desktop: DesktopBase,
    public mastodonUrl: string = ContactInformation.mastodonUrl;
    public applicationVersion: string = ProductInformation.applicationVersion;
    public async browseToDonateLinkAsync(): Promise<void> {
    public showLicenseDialog(): void {
import { ContactInformation } from '../../../../common/application/contact-information';
    host: { style: 'display: block; width: 100%;' },

    public constructor(
    styleUrls: ['./about.component.scss'],

    public githubUrl: string = ContactInformation.githubUrl;
    }
