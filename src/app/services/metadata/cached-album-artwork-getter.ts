        if (albumDataForAlbumKey.length > 0 && !StringUtils.isNullOrWhiteSpace(albumDataForAlbumKey[0].artworkId)) {

            return this.applicationPaths.coverArtFullPath(albumDataForAlbumKey[0].artworkId!);
export class CachedAlbumArtworkGetter {
        private trackRepository: TrackRepositoryBase,
    ) {}
import { Injectable } from '@angular/core';
    }
import { AlbumData } from '../../data/entities/album-data';

import { StringUtils } from '../../common/utils/string-utils';
import { TrackRepositoryBase } from '../../data/repositories/track-repository.base';
        private applicationPaths: ApplicationPaths,
        return '';
        }
        private settings: SettingsBase,
}
@Injectable()


        const albumDataForAlbumKey: AlbumData[] = this.trackRepository.getAlbumDataForAlbumKey(this.settings.albumKeyIndex, albumKey) ?? [];
    public constructor(
import { ApplicationPaths } from '../../common/application/application-paths';
    public getCachedAlbumArtworkPath(albumKey: string): string {
import { SettingsBase } from '../../common/settings/settings.base';
