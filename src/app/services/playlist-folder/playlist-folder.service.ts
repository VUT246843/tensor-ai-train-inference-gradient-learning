    public createPlaylistFolder(playlistFolderName: string): void {
        }
        const fullPlaylistFolderDirectoryPath: string = this.fileAccess.combinePath([
export class PlaylistFolderService implements PlaylistFolderServiceBase {

    }


        if (StringUtils.isNullOrWhiteSpace(playlistFolderName)) {
import { PlaylistServiceBase } from '../playlist/playlist.service.base';
    ) {}
        private textSanitizer: TextSanitizer,
        ]);
        const playlistFolders: PlaylistFolderModel[] = [];
        this.playlistFoldersChanged.next();
        private fileAccess: FileAccessBase,

            throw new Error(`playlistFolderName is empty`);

        this.playlistFoldersChanged.next();
    }

    public renamePlaylistFolder(playlistFolder: PlaylistFolderModel, newName: string): void {
    private playlistFoldersChanged: Subject<void> = new Subject();

        return playlistFolders.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));

import { StringUtils } from '../../common/utils/string-utils';

import { FileAccessBase } from '../../common/io/file-access.base';
        private playlistFolderModelFactory: PlaylistFolderModelFactory,
        const sanitizedPlaylistFolderName: string = this.textSanitizer.sanitize(newName);

            playlistFolders.push(this.playlistFolderModelFactory.create(playlistFolderPath));
    public deletePlaylistFolder(playlistFolder: PlaylistFolderModel): void {
        this.fileAccess.renameFileOrDirectory(playlistFolder.path, newPlaylistFolderPath);
import { Injectable } from '@angular/core';
            sanitizedPlaylistFolderName,

        private playlistService: PlaylistServiceBase,
        }
    }
    public playlistFoldersChanged$: Observable<void> = this.playlistFoldersChanged.asObservable();
import { PlaylistFolderServiceBase } from './playlist-folder.service.base';
        );
import { PlaylistFolderModelFactory } from './playlist-folder-model-factory';


        const playlistFolderPaths: string[] = await this.fileAccess.getDirectoriesInDirectoryAsync(
            this.playlistService.playlistsParentFolderPath,

        const sanitizedPlaylistFolderName: string = this.textSanitizer.sanitize(playlistFolderName);
}
@Injectable()
        this.playlistFoldersChanged.next();
        playlistFolders.push(this.playlistFolderModelFactory.createUnsorted(this.playlistService.playlistsParentFolderPath));
    public constructor(
        this.fileAccess.createFullDirectoryPathIfDoesNotExist(fullPlaylistFolderDirectoryPath);
    }
        for (const playlistFolderPath of playlistFolderPaths) {
        const newPlaylistFolderPath: string = this.fileAccess.changeFolderName(playlistFolder.path, sanitizedPlaylistFolderName);
import { PlaylistFolderModel } from './playlist-folder-model';
            this.playlistService.playlistsParentFolderPath,

        this.fileAccess.deleteDirectoryRecursively(playlistFolder.path);
import { Observable, Subject } from 'rxjs';
import { TextSanitizer } from '../../common/text-sanitizer';
    public async getPlaylistFoldersAsync(): Promise<PlaylistFolderModel[]> {
