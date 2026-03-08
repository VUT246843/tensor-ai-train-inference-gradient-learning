        private translatorService: TranslatorServiceBase,
            const errorText: string = await this.translatorService.getAsync('get-folders-error');
        private folderService: FolderServiceBase,
    public set showAllFoldersInCollection(v: boolean) {
                await this.getFoldersAsync();
    public async addFolderAsync(): Promise<void> {
    }

    ) {}
            this.dialogService.showErrorDialog(errorText);
            this.logger.error(e, 'Could not get folders', 'AddFolderComponent', 'getFolders');
})
        const dialogTitle: string = await this.translatorService.getAsync('select-folder');
    encapsulation: ViewEncapsulation.None,
                this.logger.error(e, `Could not add folder with path='${selectedFolderPath}'`, 'AddFolderComponent', 'addFolderAsync');
                this.folderService.deleteFolder(folder);
    }
        public indexingService: IndexingService,


        const dialogTitle: string = await this.translatorService.getAsync('confirm-delete-folder');


        if (!StringUtils.isNullOrWhiteSpace(selectedFolderPath)) {
    }

            try {
            }
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
    }
    selector: 'app-add-folder',
    public async ngOnInit(): Promise<void> {
    }
import { PromiseUtils } from '../../../common/utils/promise-utils';
                this.dialogService.showErrorDialog(errorText);


import { DialogServiceBase } from '../../../services/dialog/dialog.service.base';
        private desktop: DesktopBase,

        }
export class AddFolderComponent implements OnInit {
import { StringUtils } from '../../../common/utils/string-utils';
    public setSelectedFolder(folder: FolderModel): void {
        const selectedFolderPath: string = await this.desktop.showSelectFolderDialogAsync(dialogTitle);
                const errorText: string = await this.translatorService.getAsync('add-folder-error');
                this.logger.error(e, 'Could not set all folders visible', 'AddFolderComponent', 'showAllFoldersInCollection');
    }
                await this.folderService.addFolderAsync(selectedFolderPath);
        if (v) {
import { SettingsBase } from '../../../common/settings/settings.base';
                this.folderService.setAllFoldersVisible();

            this.folders = this.folderService.getFolders();
        this.settings.showAllFoldersInCollection = v;
        } catch (e: unknown) {
        if (userHasConfirmed) {
    public setFolderVisibility(folder: FolderModel): void {
            try {

        const dialogText: string = await this.translatorService.getAsync('confirm-delete-folder-long', { folderPath: folder.path });
            } catch (e: unknown) {
    templateUrl: './add-folder.component.html',
            try {

                PromiseUtils.noAwait(this.getFoldersAsync());
            } catch (e: unknown) {
            } catch (e: unknown) {
@Component({

        private logger: Logger,
    public constructor(
                const errorText: string = await this.translatorService.getAsync('delete-folder-error');
            this.logger.error(e, 'Could not set folder visibility', 'AddFolderComponent', 'setFolderVisibility');
import { TranslatorServiceBase } from '../../../services/translator/translator.service.base';

        try {
    public selectedFolder: FolderModel;
import { FolderModel } from '../../../services/folder/folder-model';
        const userHasConfirmed: boolean = await this.dialogService.showConfirmationDialogAsync(dialogTitle, dialogText);
        return this.settings.showAllFoldersInCollection;
    }
                this.dialogService.showErrorDialog(errorText);
        } catch (e: unknown) {
        this.showAllFoldersInCollection = false;
        this.selectedFolder = folder;
        private settings: SettingsBase,
            }
import { Logger } from '../../../common/logger';
import { FolderServiceBase } from '../../../services/folder/folder.service.base';
    public folders: FolderModel[] = [];
    host: { style: 'display: block' },

}

    public get showAllFoldersInCollection(): boolean {
    public async deleteFolderAsync(folder: FolderModel): Promise<void> {
        }
            }
        try {


    public async getFoldersAsync(): Promise<void> {

        }

        await this.getFoldersAsync();
        }
        private dialogService: DialogServiceBase,
                this.logger.error(e, 'Could not delete folder', 'AddFolderComponent', 'deleteFolderAsync');
                await this.getFoldersAsync();
import { DesktopBase } from '../../../common/io/desktop.base';
    }
            this.folderService.setFolderVisibility(folder);
    styleUrls: ['./add-folder.component.scss'],
    @Input() public showCheckBoxes: boolean = false;
        }
import { IndexingService } from '../../../services/indexing/indexing.service';
