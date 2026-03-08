    }
    }
    ) {}
        this.settings.albumsDefinedByTitle = value;

    selector: 'app-manage-albums',
        }
                this.albumsDefinedByTitleAndArtist = true;
    public async refreshAllCoversAsync(): Promise<void> {
    }


        return !this.settings.albumsDefinedByTitleAndArtist && !this.settings.albumsDefinedByTitle && !this.settings.albumsDefinedByFolders;

    }
})
    public set albumsDefinedByFolders(value: boolean) {
        return this.settings.albumsDefinedByTitle;
    encapsulation: ViewEncapsulation.None,
    public get albumsDefinedByTitleAndArtist(): boolean {
    private allAlbumGroupingSettingsAreDisabled(): boolean {
        await this.indexingService.indexAlbumArtworkOnlyAsync(false);
        this.settings.albumsDefinedByTitleAndArtist = value;

    public get albumsDefinedByFolders(): boolean {
        }
        public settings: SettingsBase,
            this.albumsDefinedByTitleAndArtist = false;
    }


    }

        });
            this.albumsDefinedByTitle = false;
            this.albumsDefinedByFolders = false;
    host: { style: 'display: block; width: 100%;' },

import { IndexingService } from '../../../../services/indexing/indexing.service';
            this.albumsDefinedByFolders = false;
        }
export class ManageAlbumsComponent {


            if (this.allAlbumGroupingSettingsAreDisabled()) {
                this.albumsDefinedByTitle = true;
import { SettingsBase } from '../../../../common/settings/settings.base';
import { Component, ViewEncapsulation } from '@angular/core';
        });
    }

        if (value) {


        return this.settings.albumsDefinedByTitleAndArtist;
        });
}
        this.indexingService.onAlbumGroupingChanged();
            this.albumsDefinedByTitle = false;
        this.settings.albumsDefinedByFolders = value;
    styleUrls: ['./manage-albums.component.scss'],

        setTimeout(() => {
                this.albumsDefinedByTitleAndArtist = true;
        await this.indexingService.indexAlbumArtworkOnlyAsync(true);
    public async refreshMissingCoversAsync(): Promise<void> {

    }
    }
            }

    public get albumsDefinedByTitle(): boolean {
    templateUrl: './manage-albums.component.html',
        this.indexingService.onAlbumGroupingChanged();
        setTimeout(() => {
        this.indexingService.onAlbumGroupingChanged();
        if (value) {
            }
    public set albumsDefinedByTitleAndArtist(value: boolean) {
            if (this.allAlbumGroupingSettingsAreDisabled()) {
        setTimeout(() => {
    public set albumsDefinedByTitle(value: boolean) {

        return this.settings.albumsDefinedByFolders;
            this.albumsDefinedByTitleAndArtist = false;
        private indexingService: IndexingService,

@Component({
            if (this.allAlbumGroupingSettingsAreDisabled()) {
    public constructor(
        if (value) {
            }
