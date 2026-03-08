                );
        for (const artist of artists) {
        } else if (!StringUtils.isNullOrWhiteSpace(fileMetadata.title)) {
            title = fileMetadata.album;
import { Logger } from '../../common/logger';

        if (fileMetadata == undefined) {
                            'OnlineAlbumArtworkGetter',
        if (StringUtils.isNullOrWhiteSpace(title) || artists.length === 0) {

                        );
            const nonWhiteSpaceAlbumArtists: string[] = fileMetadata.albumArtists.filter((x) => !StringUtils.isNullOrWhiteSpace(x));
        if (fileMetadata.albumArtists != undefined && fileMetadata.albumArtists.length > 0) {
                        );
        const artists: string[] = [];
            return undefined;
                    }
@Injectable()
                    } catch (e: unknown) {
                lastfmAlbum = await this.lastfmApi.getAlbumInfoAsync(artist, title, false, 'EN');
        private logger: Logger,
                        this.logger.error(
                            'OnlineAlbumArtworkGetter',
    }
                            `Could not convert file '${lastfmAlbum.largestImage()}' to data`,
            return undefined;
            const nonWhiteSpaceTrackArtists: string[] = fileMetadata.artists.filter((x) => !StringUtils.isNullOrWhiteSpace(x));
        private lastfmApi: LastfmApi,
            }

                            e,
        }
            }
    ) {}
                    'getOnlineArtworkAsync',
        }
}

import { IFileMetadata } from '../../common/metadata/i-file-metadata';
        // Artist
        }
        return undefined;
import { StringUtils } from '../../common/utils/string-utils';
                this.logger.error(
                }
        }
import { ImageProcessor } from '../../common/image-processor';
                    let artworkData: Buffer;

            artists.push(...nonWhiteSpaceAlbumArtists);
            } catch (e: unknown) {
                    e,
            if (lastfmAlbum != undefined) {
import { Injectable } from '@angular/core';
                        artworkData = await this.imageProcessor.convertOnlineImageToBufferAsync(lastfmAlbum.largestImage());
            let lastfmAlbum: LastfmAlbum | undefined;
    public async getOnlineArtworkAsync(fileMetadata: IFileMetadata | undefined): Promise<Buffer | undefined> {

            artists.push(...nonWhiteSpaceTrackArtists);
export class OnlineAlbumArtworkGetter {
                            `Downloaded online artwork for artist='${artist}' and title='${title}'`,
                            'getOnlineArtworkAsync',


import { LastfmAlbum } from '../../common/api/lastfm/lastfm-album';
        if (!StringUtils.isNullOrWhiteSpace(fileMetadata.album)) {
                if (!StringUtils.isNullOrWhiteSpace(lastfmAlbum.largestImage())) {
        if (fileMetadata.artists != undefined && fileMetadata.artists.length > 0) {

        let title: string = '';
        private imageProcessor: ImageProcessor,
                    try {
            try {
                            'getOnlineArtworkAsync',

        // Title
                    'OnlineAlbumArtworkGetter',
                        return artworkData;

        }
                    `Could not get album info for artist='${artist}' and title='${title}'`,

import { LastfmApi } from '../../common/api/lastfm/lastfm.api';

    public constructor(
        }
            title = fileMetadata.title;
                        this.logger.info(

