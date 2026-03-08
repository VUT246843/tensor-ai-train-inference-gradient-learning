


        return '';
            return LyricsModel.empty(track);
    }


        }
        possibleLrcFilePath = `${trackPathWithoutExtension}.LRC`;
import { LyricsSourceType } from '../../common/api/lyrics/lyrics-source-type';




    }
            return possibleLrcFilePath;

        const trackPathWithoutExtension: string = this.fileAccess.getPathWithoutExtension(track.path);
            return LyricsModel.empty(track);
    private getLrcFilePath(track: TrackModel): string {
        const lrcFilePath: string = this.getLrcFilePath(track);
        return new LyricsModel(track, '', LyricsSourceType.lrc, lyricsText);

import { ILyricsGetter } from './i-lyrics-getter';

            }
        for (let i = 0; i < lines.length; i++) {
            return possibleLrcFilePath;
export class LrcLyricsGetter implements ILyricsGetter {
            const lineWithoutTimestamp: string = lineParts.length > 1 ? lineParts[1] : lineParts[0];

}
            return possibleLrcFilePath;
import { Injectable } from '@angular/core';
        if (this.fileAccess.pathExists(possibleLrcFilePath)) {
        if (this.fileAccess.pathExists(possibleLrcFilePath)) {
        if (StringUtils.isNullOrWhiteSpace(lrcFilePath)) {
    public constructor(private fileAccess: FileAccessBase) {}
            if (!StringUtils.isNullOrWhiteSpace(lineWithoutTimestamp) && !lineWithoutTimestamp.startsWith('[')) {

import { StringUtils } from '../../common/utils/string-utils';
                }
@Injectable()
        let lyricsText: string = '';
        if (this.fileAccess.pathExists(possibleLrcFilePath)) {
        }
import { FileAccessBase } from '../../common/io/file-access.base';
                lyricsText += `${lineWithoutTimestamp}`;
        let possibleLrcFilePath: string = `${trackPathWithoutExtension}.lrc`;

        possibleLrcFilePath = `${trackPathWithoutExtension}.Lrc`;
        }
                    lyricsText += '\n';
        }
import { LyricsModel } from './lyrics-model';
import { TrackModel } from '../track/track-model';
        }
            const lineParts: string[] = lines[i].split(']');
        if (StringUtils.isNullOrWhiteSpace(lyricsText)) {
    public async getLyricsAsync(track: TrackModel): Promise<LyricsModel> {
        const lines: string[] = await this.fileAccess.readLinesAsync(lrcFilePath);

                if (i < lines.length - 1) {
        }
