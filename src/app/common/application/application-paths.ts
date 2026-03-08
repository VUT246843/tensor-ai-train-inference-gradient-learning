    }
    private _coverArtCacheFullPath = '';
        return this.fileAccess.combinePath([this._coverArtCacheFullPath, `${artworkId}.jpg`]);
        this._coverArtCacheFullPath = this.fileAccess.combinePath([this.desktop.getApplicationDataDirectory(), 'Cache', 'CoverArt']);
    }
        return this._themesDirectoryFullPath;

import { DesktopBase } from '../io/desktop.base';
})
@Injectable({

    }
    public themesDirectoryFullPath(): string {
export class ApplicationPaths {

    private _themesDirectoryFullPath = '';
        return this._coverArtCacheFullPath;
        this._themesDirectoryFullPath = this.fileAccess.combinePath([this.desktop.getApplicationDataDirectory(), 'Themes']);


    providedIn: 'root',
    public constructor(
    ) {
        private fileAccess: FileAccessBase,
    public coverArtCacheFullPath(): string {
}
import { Injectable } from '@angular/core';
        private desktop: DesktopBase,
    }
    public coverArtFullPath(artworkId: string): string {
import { FileAccessBase } from '../io/file-access.base';
