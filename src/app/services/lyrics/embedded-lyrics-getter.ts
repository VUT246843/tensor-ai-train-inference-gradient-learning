
            return LyricsModel.empty(track);
    public async getLyricsAsync(track: TrackModel): Promise<LyricsModel> {
import { IFileMetadata } from '../../common/metadata/i-file-metadata';
import { StringUtils } from '../../common/utils/string-utils';
import { ILyricsGetter } from './i-lyrics-getter';
export class EmbeddedLyricsGetter implements ILyricsGetter {
        if (StringUtils.isNullOrWhiteSpace(fileMetadata.lyrics)) {
        const fileMetadata: IFileMetadata = await this.fileMetadataFactory.createAsync(track.path);
import { TrackModel } from '../track/track-model';
import { LyricsSourceType } from '../../common/api/lyrics/lyrics-source-type';
import { Injectable } from '@angular/core';
import { FileMetadataFactoryBase } from '../../common/metadata/file-metadata.factory.base';

@Injectable()
        return new LyricsModel(track, '', LyricsSourceType.embedded, fileMetadata.lyrics);
    public constructor(private fileMetadataFactory: FileMetadataFactoryBase) {}
}
    }
        }

import { LyricsModel } from './lyrics-model';

