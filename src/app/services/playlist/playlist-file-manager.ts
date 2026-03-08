    private _playlistsParentFolderPath: string = '';
        const newPlaylistImagePath: string = `${playlistPathWithoutExtension}-${this.guidFactory.create()}-${playlistImageExtension}`;


import { DesktopBase } from '../../common/io/desktop.base';

        this.fileAccess.copyFile(selectedImagePath, newPlaylistImagePath);
                    playlistImagePath = previousPath;

        );
        if (newName !== playlist.name) {

    ) {
            this._playlistsParentFolderPath = this.fileAccess.combinePath([musicDirectory, 'Dopamine', 'Playlists']);
            );
        private logger: Logger,
import { PlaylistModelFactory } from './playlist-model-factory';
        let musicDirectory: string = '';
                }
        if (newImagePath !== Constants.emptyImage) {
                const previousPath: string | undefined = CollectionUtils.getPreviousItem<string>(sortedFilePathsInPath, index);

        for (let index = 0; index < sortedFilePathsInPath.length; index++) {

        const filePathsInPath: string[] = await this.fileAccess.getFilesInDirectoryAsync(path);
        this.initialize();
            this.logger.error(e, 'Could not create playlists directory', 'PlaylistFileManager', 'ensurePlaylistsParentFolderExists');
import { GuidFactory } from '../../common/guid.factory';
                const playlistPath: string = currentPath;
            if (this.fileValidator.isSupportedPlaylistFile(currentPath)) {
    }
import { PlaylistModel } from './playlist-model';
        }
        return (
    }
import { StringUtils } from '../../common/utils/string-utils';
                } else if (nextPath != undefined && this.isProposedPlaylistImagePathValid(playlistPath, nextPath)) {

        private playlistModelFactory: PlaylistModelFactory,
    private isProposedPlaylistImagePathValid(playlistPath: string, proposedPlaylistImagePath: string): boolean {
        return newPlaylistPath;
    private createPlaylistImage(playlistPath: string, selectedImagePath: string): void {
                if (previousPath != undefined && this.isProposedPlaylistImagePathValid(playlistPath, previousPath)) {


    }
    public async deletePlaylistAsync(playlist: PlaylistModel): Promise<void> {
        const playlistPath: string = this.fileAccess.combinePath([playlistFolder.path, `${playlistName}${FileFormats.m3u}`]);
            }
    }

            proposedPlaylistImagePath != undefined &&
            this.createPlaylistImage(playlistPath, newImagePath);
    }
        await this.fileAccess.deleteFileIfExistsAsync(playlist.imagePath);
import { Logger } from '../../common/logger';
        return this._playlistsParentFolderPath;

        private fileValidator: FileValidator,
                `Music directory not found. Saving playlists to '${this._playlistsParentFolderPath}'`,
import { FileValidator } from '../../common/validation/file-validator';
    public createPlaylist(playlistFolder: PlaylistFolderModel, playlistName: string): PlaylistModel {
        }
export class PlaylistFileManager {

    }
    public get playlistsParentFolderPath(): string {
    public constructor(
        } catch (e: unknown) {
    }
                'initialize',
        return playlists;
    }
import { ApplicationPaths } from '../../common/application/application-paths';
        const playlistPathWithoutExtension: string = this.fileAccess.getPathWithoutExtension(playlistPath);
    public async updatePlaylistAsync(playlist: PlaylistModel, newName: string, newImagePath: string): Promise<void> {
        }
        const playlistImageExtension: string = this.fileAccess.getFileExtension(selectedImagePath).toLowerCase();
                'initialize',
                const nextPath: string | undefined = CollectionUtils.getNextItem<string>(sortedFilePathsInPath, index);
            this.logger.info(
        const newPlaylist: PlaylistModel = this.playlistModelFactory.create(this._playlistsParentFolderPath, playlistPath, '');
        private fileAccess: FileAccessBase,
        let playlistPath: string = playlist.path;
        }
        await this.fileAccess.deleteFileIfExistsAsync(playlist.path);
}
                let playlistImagePath: string = '';
            proposedPlaylistImagePath.startsWith(playlistPathWithoutExtension)
            this.fileValidator.isSupportedPlaylistImageFile(proposedPlaylistImagePath) &&
        const sortedFilePathsInPath: string[] = filePathsInPath.sort();
            playlistPath = this.updatePlaylistPath(playlist, newName);
    public ensurePlaylistsParentFolderExists(playlistsParentFolder: string): void {
        if (!StringUtils.isNullOrWhiteSpace(musicDirectory) && this.fileAccess.pathExists(musicDirectory)) {
        private guidFactory: GuidFactory,

            const currentPath: string = sortedFilePathsInPath[index];
        }
        private applicationPaths: ApplicationPaths,
import { PlaylistFolderModel } from '../playlist-folder/playlist-folder-model';
import { Injectable } from '@angular/core';
        return newPlaylist;

        } else {

    }
    }
            this.logger.error(e, 'Could not access music directory', 'PlaylistFileManager', 'initialize');
        } catch (e: unknown) {
        this.fileAccess.renameFileOrDirectory(playlist.path, newPlaylistPath);
@Injectable()
            this.fileAccess.createFullDirectoryPathIfDoesNotExist(playlistsParentFolder);

                    playlistImagePath = nextPath;
        private desktop: DesktopBase,
    private updatePlaylistPath(playlist: PlaylistModel, newName: string): string {





                playlists.push(this.playlistModelFactory.create(this._playlistsParentFolderPath, playlistPath, playlistImagePath));
            musicDirectory = this.desktop.getMusicDirectory();
import { Constants } from '../../common/application/constants';
        const newPlaylistPath: string = this.fileAccess.changeFileName(playlist.path, newName);
import { CollectionUtils } from '../../common/utils/collections-utils';
    public async getPlaylistsInPathAsync(path: string): Promise<PlaylistModel[]> {
        const playlistPathWithoutExtension: string = this.fileAccess.getPathWithoutExtension(playlistPath);
import { FileAccessBase } from '../../common/io/file-access.base';


                'PlaylistFileManager',
        try {
            this._playlistsParentFolderPath = this.fileAccess.combinePath([this.desktop.getApplicationDataDirectory(), 'Playlists']);
            );
        await this.fileAccess.deleteFileIfExistsAsync(playlist.imagePath);
                'PlaylistFileManager',

import { FileFormats } from '../../common/application/file-formats';
                `Music directory found at '${musicDirectory}'. Saving playlists to '${this._playlistsParentFolderPath}'`,

    }
        try {
        }
    private initialize(): void {
        this.fileAccess.createFile(playlistPath);
            this.logger.info(
        const playlists: PlaylistModel[] = [];
