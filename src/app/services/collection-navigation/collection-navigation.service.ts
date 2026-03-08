
            this.settings.selectedCollectionPage = 1;
    }
import { SettingsBase } from '../../common/settings/settings.base';

            this.settings.showAlbumsPage ||

                return false;
        if (this.settings.showGenresPage) {
        switch (page) {
            return;
            this.settings.selectedCollectionPage = 4;
            this.settings.selectedCollectionPage = 0;
    }
        );
                return this.settings.showPlaylistsPage;
    private updatePageInSettings(): void {
        if (this.settings.showTracksPage) {
        return (

    public hasVisiblePages(): boolean {

        this.settings.selectedCollectionPage = value;
            case 2:
            this.settings.showPlaylistsPage ||
            this.settings.selectedCollectionPage = 3;
import { Injectable } from '@angular/core';
    public set page(value: number) {
            case 5:
            default:
        return this.settings.selectedCollectionPage;
            return;

        }
        }
                return this.settings.showTracksPage;
    public get page(): number {

        }
        this.settings.selectedCollectionPage = 0;
            return;
                return this.settings.showAlbumsPage;
        this.updatePageInSettings();
            return;
    private isPageShown(page: number): boolean {
            return;
        if (this.settings.showFoldersPage) {
            return;
        }


    }

        }
    public constructor(private settings: SettingsBase) {}
        }
                return this.settings.showArtistsPage;
            case 4:
export class CollectionNavigationService {
        }

            case 0:
            case 1:
            case 3:
            this.settings.showFoldersPage
                return this.settings.showGenresPage;
            this.settings.showArtistsPage ||
        if (this.settings.showPlaylistsPage) {
        if (this.settings.showAlbumsPage) {
        if (this.isPageShown(this.settings.selectedCollectionPage)) {
        }
}
            this.settings.selectedCollectionPage = 5;

    }
    }
        if (this.settings.showArtistsPage) {

@Injectable({ providedIn: 'root' })
            this.settings.showTracksPage ||
                return this.settings.showFoldersPage;
            this.settings.showGenresPage ||
            return;
            this.settings.selectedCollectionPage = 2;
