        private playlistFolderService: PlaylistFolderServiceBase,

        await this.playlistService.addGenresToPlaylistAsync(playlistName, playlistPath, genres);
        );
/* eslint-disable @typescript-eslint/no-unsafe-return */

            await this.playlistService.addTracksToPlaylistAsync(playlistName, playlistPath, tracks);
            this.logger.error(e, 'Could not add tracks to playlist', 'AddToPlaylistMenu', 'addTracksToPlaylist');
        const playlistFolders: PlaylistFolderModel[] = await this.playlistFolderService.getPlaylistFoldersAsync();
    public async addAlbumsToPlaylistAsync(playlistName: string, playlistPath: string, albums: AlbumModel[]): Promise<void> {

    private playlistsToJson(playlists: PlaylistModel[]): any {
            }
            if (json[objectKey] == undefined) {
    }
        await this.fillPlaylistsAsync();
    }
        }
    public constructor(
import { PlaylistFolderServiceBase } from '../../services/playlist-folder/playlist-folder.service.base';
import { AlbumModel } from '../../services/album/album-model';
import { PlaylistFolderModel } from '../../services/playlist-folder/playlist-folder-model';
        return playlists.reduce((json: any, playlist: PlaylistModel) => {

    }
        try {

    public playlists: any;

import { ArtistModel } from '../../services/artist/artist-model';
    }
                PromiseUtils.noAwait(this.fillPlaylistsAsync());
            }),
}
import { Subscription } from 'rxjs';
    public async addGenresToPlaylistAsync(playlistName: string, playlistPath: string, genres: GenreModel[]): Promise<void> {
    private subscription: Subscription = new Subscription();
        return this.playlists != undefined && Object.keys(this.playlists).length > 0;
    public async addTracksToPlaylistAsync(playlistName: string, playlistPath: string, tracks: TrackModel[]): Promise<void> {
    public get hasPlaylists(): boolean {
        await this.playlistService.addArtistsToPlaylistAsync(playlistName, playlistPath, artists);
            this.playlistService.playlistsChanged$.subscribe(() => {
@Injectable()
import { GenreModel } from '../../services/genre/genre-model';


    }

import { Injectable } from '@angular/core';
                json[objectKey] = [];
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { PlaylistModel } from '../../services/playlist/playlist-model';
            }),
export class AddToPlaylistMenu {

    }

import { Logger } from '../../common/logger';
/* eslint-disable @typescript-eslint/no-unsafe-argument */
    }
    public async addArtistsToPlaylistAsync(playlistName: string, playlistPath: string, artists: ArtistModel[]): Promise<void> {

        await this.playlistService.addAlbumsToPlaylistAsync(playlistName, playlistPath, albums);

/* eslint-disable @typescript-eslint/no-unsafe-call */

            json[objectKey].push({ path: playlist.path, name: playlist.name });
    private async fillPlaylistsAsync(): Promise<void> {
        this.subscription.add(
        private playlistService: PlaylistServiceBase,
        private logger: Logger,
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
            const objectKey: any = playlist['folderName'];

import { TrackModel } from '../../services/track/track-model';
        );
                PromiseUtils.noAwait(this.fillPlaylistsAsync());
            return json;
import { PlaylistServiceBase } from '../../services/playlist/playlist.service.base';
        this.subscription.add(
        const playlists: PlaylistModel[] = await this.playlistService.getPlaylistsAsync(playlistFolders);
    public async initializeAsync(): Promise<void> {
    ) {}
import { PromiseUtils } from '../../common/utils/promise-utils';
            this.playlistFolderService.playlistFoldersChanged$.subscribe(() => {
        }, {});
/* eslint-disable @typescript-eslint/no-explicit-any */

    }

        } catch (e: unknown) {
        this.playlists = this.playlistsToJson(playlists);
