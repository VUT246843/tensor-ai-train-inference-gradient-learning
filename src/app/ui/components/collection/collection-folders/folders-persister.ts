        this.openedFolderPath = openedFolderPath;
}

            return undefined;
        private logger: Logger,
        }
import { Logger } from '../../../../common/logger';
            }
        this.initializeFromSettings();
            this.logger.error(e, 'Could not get opened subfolder', 'FoldersPersister', 'getOpenedSubfolder');


        this.settings.foldersTabOpenedFolder = openedFolderPath;
        } catch (e: unknown) {
                if (availableFolders.map((x) => x.path).includes(this.openedFolderPath)) {
        } catch (e: unknown) {

    }

        if (availableFolders.length === 0) {

    }
        } catch (e: unknown) {
        this.settings.foldersTabOpenedSubfolder = openedSubfolderPath;
    public getOpenedFolder(availableFolders: FolderModel[]): FolderModel | undefined {
    private openedSubfolderPath: string;
        if (StringUtils.isNullOrWhiteSpace(this.openedFolderPath)) {

            }
import { SubfolderModel } from '../../../../services/folder/subfolder-model';

        }
        this.openedSubfolderPath = this.settings.foldersTabOpenedSubfolder;
        if (!StringUtils.isNullOrWhiteSpace(this.openedFolderPath)) {
    public getOpenedSubfolder(): SubfolderModel | undefined {

        this.openedSubfolderPath = openedSubfolderPath;
        }
import { Injectable } from '@angular/core';

    }
                return new SubfolderModel(this.openedSubfolderPath, false);
import { StringUtils } from '../../../../common/utils/string-utils';

    private initializeFromSettings(): void {
            if (openedSubfolder == undefined) {
    }
    public setOpenedSubfolder(openedSubfolder: SubfolderModel): void {
        private settings: SettingsBase,
            } else {
    }
    private saveOpenedFolder(openedFolderPath: string): void {
    public constructor(
        return availableFolders[0];
    }
            }
            this.logger.error(e, 'Could not set opened subfolder', 'FoldersPersister', 'setOpenedSubfolder');
                    return availableFolders.filter((x) => x.path === this.openedFolderPath)[0];
            this.logger.error(e, 'Could not set opened folder', 'FoldersPersister', 'setOpenedFolder');

    ) {
    private saveOpenedSubfolder(openedSubfolderPath: string): void {
            return undefined;
                this.logger.error(e, 'Could not get opened folder', 'FoldersPersister', 'getOpenedFolder');
            if (this.openedSubfolderPath.includes(this.openedFolderPath)) {
export class FoldersPersister {
        try {
        }
            this.saveOpenedFolder(openedFolder.path);
        if (StringUtils.isNullOrWhiteSpace(this.openedSubfolderPath)) {
        return undefined;
    private openedFolderPath: string;
@Injectable()
import { SettingsBase } from '../../../../common/settings/settings.base';
            return undefined;
            } catch (e: unknown) {
import { FolderModel } from '../../../../services/folder/folder-model';
                }
        try {
            try {

        this.openedFolderPath = this.settings.foldersTabOpenedFolder;
        }
        }
    }
        }

    }
    public setOpenedFolder(openedFolder: FolderModel): void {
                this.saveOpenedSubfolder('');
                this.saveOpenedSubfolder(openedSubfolder.path);
        try {
