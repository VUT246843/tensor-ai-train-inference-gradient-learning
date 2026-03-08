        const embeddedArtwork: Buffer | undefined = this.embeddedAlbumArtworkGetter.getEmbeddedArtwork(fileMetadata);

import { SettingsBase } from '../../common/settings/settings.base';
                return onlineArtwork;
import { ExternalAlbumArtworkGetter } from './external-album-artwork-getter';
    }
export class AlbumArtworkGetter {
        private settings: SettingsBase,
        }
        if (getOnlineArtwork && this.settings.downloadMissingAlbumCovers) {
import { OnlineAlbumArtworkGetter } from './online-album-artwork-getter';
    }
        }
    public async getAlbumArtworkAsync(fileMetadata: IFileMetadata, getOnlineArtwork: boolean): Promise<Buffer | undefined> {
            const onlineArtwork: Buffer | undefined = await this.onlineAlbumArtworkGetter.getOnlineArtworkAsync(fileMetadata);
import { EmbeddedAlbumArtworkGetter } from './embedded-album-artwork-getter';

@Injectable()

            }
        return undefined;

            return embeddedArtwork;
        }
import { Injectable } from '@angular/core';
        return undefined;
        private embeddedAlbumArtworkGetter: EmbeddedAlbumArtworkGetter,

        const embeddedArtwork: Buffer | undefined = this.embeddedAlbumArtworkGetter.getEmbeddedArtwork(fileMetadata);

        if (embeddedArtwork != undefined) {
    ) {}
        private onlineAlbumArtworkGetter: OnlineAlbumArtworkGetter,


        }


            return externalArtwork;
    public constructor(
        private externalAlbumArtworkGetter: ExternalAlbumArtworkGetter,
        if (externalArtwork != undefined) {
        if (embeddedArtwork != undefined) {

    public async getEmbeddedAlbumArtworkOnlyAsync(fileMetadata: IFileMetadata): Promise<Buffer | undefined> {
}
import { IFileMetadata } from '../../common/metadata/i-file-metadata';
            return embeddedArtwork;
        const externalArtwork: Buffer | undefined = await this.externalAlbumArtworkGetter.getExternalArtworkAsync(fileMetadata);
            if (onlineArtwork != undefined) {
