import { PlaylistModel } from './playlist-model';
    }
    }
        private fileAccess: FileAccessBase,
        }
        let directoryName: string = '';
            playlistPath,
        return Constants.emptyImage;
            this.getPlaylistName(playlistPath),


        if (directoryPath === playlistsParentFolderPath) {
    }
        }
            this.getPlaylistImage(playlistImagePath),

            directoryName = this.translatorService.get('unsorted');
        return this.fileAccess.getFileNameWithoutExtension(playlistPath);
    public createDefault(): PlaylistModel {
import { FileAccessBase } from '../../common/io/file-access.base';
        return directoryName;
import { Injectable } from '@angular/core';
        } else {
    public create(playlistsParentFolderPath: string, playlistPath: string, playlistImagePath: string): PlaylistModel {


        return new PlaylistModel('', '', '', Constants.emptyImage);

    private getPlaylistFolderName(playlistsParentFolderPath: string, playlistPath: string): string {
    }
        );


    private getPlaylistName(playlistPath: string): string {
import { Constants } from '../../common/application/constants';
    }
        if (!StringUtils.isNullOrWhiteSpace(playlistImagePath)) {
    public constructor(
        private translatorService: TranslatorServiceBase,
}
            return playlistImagePath;

@Injectable()
export class PlaylistModelFactory {
import { TranslatorServiceBase } from '../translator/translator.service.base';
        return new PlaylistModel(
        const directoryPath: string = this.fileAccess.getDirectoryPath(playlistPath);
            this.getPlaylistFolderName(playlistsParentFolderPath, playlistPath),
import { StringUtils } from '../../common/utils/string-utils';
            directoryName = this.fileAccess.getDirectoryOrFileName(directoryPath);
    private getPlaylistImage(playlistImagePath: string): string {
    ) {}
