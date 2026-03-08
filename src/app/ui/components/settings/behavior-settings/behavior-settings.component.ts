            } catch (e: unknown) {

            try {
    templateUrl: './behavior-settings.component.html',
    }
                }
                    this.settings.artistSplitSeparators = CollectionUtils.toString(this.artistSplitSeparators);
        public settings: SettingsBase,
    public async addSplitSeparatorAsync(): Promise<void> {
    public async removeSplitExceptionAsync(exception: string): Promise<void> {

                );
            } catch (e: unknown) {
    host: { style: 'display: block; width: 100%;' },
}
    public constructor(
                }
    ) {}

                this.settings.artistSplitSeparators = CollectionUtils.toString(this.artistSplitSeparators);
    public ngOnInit(): void {
                    this.artistSplitExceptions.splice(index, 1);
                    'addSplitExceptionAsync',
                this.artistSplitSeparators.push(newSplitSeparator.trim());


        const dialogTitle: string = await this.translatorService.getAsync('add-symbol');

import { SettingsBase } from '../../../../common/settings/settings.base';
        const userHasConfirmed: boolean = await this.dialogService.showConfirmationDialogAsync(dialogTitle, dialogText);
                this.logger.error(e, 'Could not remove split exception', 'BehaviorSettingsComponent', 'removeSplitExceptionAsync');
            }
        if (!StringUtils.isNullOrWhiteSpace(newSplitException)) {
            try {
                this.dialogService.showErrorDialog(errorText);
        if (!StringUtils.isNullOrWhiteSpace(newSplitSeparator)) {
                this.logger.error(e, 'Could not remove split separator', 'BehaviorSettingsComponent', 'removeSplitSeparatorAsync');
                    e,

                    `Could not add split exception "${newSplitException}"`,
                this.logger.error(
                const errorText: string = await this.translatorService.getAsync('remove-artist-error');

@Component({
            }
                const errorText: string = await this.translatorService.getAsync('add-symbol-error');
import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
        this.artistSplitExceptions = CollectionUtils.fromString(this.settings.artistSplitExceptions);
    }
                this.settings.artistSplitExceptions = CollectionUtils.toString(this.artistSplitExceptions);
import { CollectionUtils } from '../../../../common/utils/collections-utils';
import { DialogServiceBase } from '../../../../services/dialog/dialog.service.base';
            }
        private translatorService: TranslatorServiceBase,
                this.artistSplitExceptions.push(newSplitException.trim());
                    `Could not add split separator "${newSplitSeparator}"`,
                const errorText: string = await this.translatorService.getAsync('add-artist-error');

        let dialogText: string = await this.translatorService.getAsync('confirm-remove-symbol', { symbol: separator });
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
                    'addSplitSeparatorAsync',
        const dialogTitle: string = await this.translatorService.getAsync('add-artist');
                );
                const errorText: string = await this.translatorService.getAsync('remove-symbol-error');
    }
                const index = this.artistSplitSeparators.indexOf(separator);

        let dialogText: string = await this.translatorService.getAsync('confirm-remove-artist', { artist: exception });
                    this.settings.artistSplitExceptions = CollectionUtils.toString(this.artistSplitExceptions);
import { StringUtils } from '../../../../common/utils/string-utils';
import { TrayServiceBase } from '../../../../services/tray/tray.service.base';
export class BehaviorSettingsComponent implements OnInit {
        private dialogService: DialogServiceBase,
                this.logger.error(
        }
        const newSplitException: string = await this.dialogService.showInputDialogAsync(dialogTitle, '', '', []);
    public async addSplitExceptionAsync(): Promise<void> {
                const index = this.artistSplitExceptions.indexOf(exception);
        if (userHasConfirmed) {
        }

        const newSplitSeparator: string = await this.dialogService.showInputDialogAsync(dialogTitle, '', '', ['[', ']']);
            try {
    public async removeSplitSeparatorAsync(separator: string): Promise<void> {
    encapsulation: ViewEncapsulation.None,
        let dialogTitle: string = await this.translatorService.getAsync('remove-artist');
})

            } catch (e: unknown) {
    public artistSplitExceptions: string[] = [];

                this.dialogService.showErrorDialog(errorText);
                this.dialogService.showErrorDialog(errorText);
                if (index !== -1) {
        }
            } catch (e: unknown) {
        this.artistSplitSeparators = CollectionUtils.fromString(this.settings.artistSplitSeparators);
import { Logger } from '../../../../common/logger';
            try {

import { MediaSessionService } from '../../../../services/media-session/media-session.service';
        if (userHasConfirmed) {
        public trayService: TrayServiceBase,
        private logger: Logger,
        public mediaSessionService: MediaSessionService,
    public artistSplitSeparators: string[] = [];

                if (index !== -1) {
                    'BehaviorSettingsComponent',
    styleUrls: ['./behavior-settings.component.scss'],
    }
        }
                    this.artistSplitSeparators.splice(index, 1);
        let dialogTitle: string = await this.translatorService.getAsync('remove-symbol');
    selector: 'app-behavior-settings',
        const userHasConfirmed: boolean = await this.dialogService.showConfirmationDialogAsync(dialogTitle, dialogText);
                    'BehaviorSettingsComponent',
                    e,
                this.dialogService.showErrorDialog(errorText);
    }
            }
