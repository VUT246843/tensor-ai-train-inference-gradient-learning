        ) {
                    playlistEntries.push(new PlaylistEntry(fileLine, fullTrackPath));
                const fullTrackPath: string = this.ensureFullTrackPath(playlistPath, fileLine);
        const playlistEntries: PlaylistEntry[] = [];
    public async decodePlaylistAsync(playlistPath: string): Promise<PlaylistEntry[]> {
                if (!StringUtils.isNullOrWhiteSpace(fullTrackPath)) {
        let playlistEntries: PlaylistEntry[] = [];
        return playlistEntries;
            this.fileAccess.getFileExtension(playlistPath) === FileFormats.m3u ||
        for (const fileLine of fileLines) {
        return playlistEntries;
            if (!StringUtils.isNullOrWhiteSpace(fileLine) && !fileLine.startsWith('#')) {

        const fileLines: string[] = await this.fileAccess.readLinesAsync(playlistPath);
    }
            fullTrackPath = this.fileAccess.generateFullPath(playlistDirectory, trackPath);




        let fullTrackPath: string = '';
}
            playlistEntries = await this.decodeM3uPlaylistAsync(playlistPath);
@Injectable()
            fullTrackPath = trackPath;


                }
import { PlaylistEntry } from './playlist-entry';
import { StringUtils } from '../../common/utils/string-utils';
            // We don't process empty lines and lines containing comments
import { FileAccessBase } from '../../common/io/file-access.base';
            this.fileAccess.getFileExtension(playlistPath) === FileFormats.m3u8
        return fullTrackPath;
        }
export class PlaylistDecoder {
        }
import { Injectable } from '@angular/core';


        if (
    private async decodeM3uPlaylistAsync(playlistPath: string): Promise<PlaylistEntry[]> {
        }

    public constructor(private fileAccess: FileAccessBase) {}
    }
            }
    }
    private ensureFullTrackPath(playlistPath: string, trackPath: string): string {
import { FileFormats } from '../../common/application/file-formats';
        const playlistDirectory: string = this.fileAccess.getDirectoryOrFileName(playlistPath);

        if (this.fileAccess.isAbsolutePath(trackPath)) {
        } else {
