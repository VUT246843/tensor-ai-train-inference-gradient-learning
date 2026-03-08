
export class AlbumKeyGenerator {
            const albumKeyItems: string[] = [];
            const albumKeyItems: string[] = [];
    public generateAlbumKey2(albumTitle: string): string {


            albumKeyItems.push(albumTitle!);
        }
            const albumKeyItems: string[] = [];
        return '';

}

    }
    }
        if (!StringUtils.isNullOrWhiteSpace(albumTitle)) {
import { DataDelimiter } from './data-delimiter';
    public generateAlbumKey3(folder: string): string {
            }

    public generateAlbumKey(albumTitle: string | undefined, albumArtists: string[] | undefined): string {
            albumKeyItems.push(albumTitle);

            return DataDelimiter.toDelimitedString(albumKeyItems);
        if (albumTitle !== undefined && albumTitle.length > 0) {
                albumKeyItems.push(...albumArtists.map((x) => x.toLowerCase()));
            albumKeyItems.push(folder);
            return DataDelimiter.toDelimitedString(albumKeyItems);
        return '';
import { Injectable } from '@angular/core';

        if (folder !== undefined && folder.length > 0) {
    }
@Injectable()
        }
import { StringUtils } from '../common/utils/string-utils';
            if (albumArtists != undefined && albumArtists.length > 0) {
            return DataDelimiter.toDelimitedString(albumKeyItems);
        }

        return '';

