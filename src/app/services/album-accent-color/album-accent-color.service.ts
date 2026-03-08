        private logger: Logger,
            return palette.Vibrant?.getHex() ?? '';

            this.logger.error(e, 'Could not extract accent color from album cover', 'AlbumAccentColorService', 'getAlbumAccentColorAsync');
    }
}
import { Logger } from '../../common/logger';
            const palette = await Vibrant.from(`file://${albumArtworkPath}`).getPalette();
        }
    public constructor(
import { MetadataService } from '../metadata/metadata.service';
        private metadataService: MetadataService,
import Vibrant from 'node-vibrant/lib/bundle';

        } catch (e) {
    ) {}
        try {
export class AlbumAccentColorService {
    public async getAlbumAccentColorAsync(albumKey: string): Promise<string> {
        const albumArtworkPath: string = this.metadataService.getAlbumArtworkPath(albumKey);
import { Injectable } from '@angular/core';

        return '';
@Injectable({ providedIn: 'root' })

