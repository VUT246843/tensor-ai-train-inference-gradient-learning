import { CollectionUtils } from '../../common/utils/collections-utils';
            const playlistTracks: TrackModel[] = await this.decodePlaylistAsync(playlist.path);

            throw new Error('playlistPath is undefined');
    private playlistTracksChanged: Subject<void> = new Subject();
            if (tracksToAdd.length === 1) {
import { PlaylistDecoder } from './playlist-decoder';
            throw new Error('albumsToAdd is undefined');
        if (selectedPlaylistFolders != undefined && selectedPlaylistFolders.length > 0) {
            }
    }
            .pipe(debounceTime(Constants.playlistsSaveDelayMilliseconds))
            }
            throw new Error('tracks is undefined');




        }
                tracks.push(track);
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
        if (playlistPath == undefined) {
        }
        this.playlistFileManager.ensurePlaylistsParentFolderExists(this._playlistsParentFolderPath);

            );

        try {
        const tracks: TrackModels = this.trackService.getTracksForGenres(genreNames);
            this.logger.error(e, `Could not update tracks in playlist '${playlistPath}'`, 'PlaylistService', 'updatePlaylistFileAsync');
        if (this.playlistsParentFolderPath == undefined) {

                    playlistTracksAfterRemoval.push(playlistTrack);
    public get hasActivePlaylistFolder(): boolean {

        }
            if (playlist.isDefault) {
        this._activePlaylistFolder = this.playlistFolderModelFactory.createDefault();
        return tracks;

    }
        const genreNames: string[] = genresToAdd.map((x) => x.name);

import { PlaylistModel } from './playlist-model';
        const trackModels: TrackModels = new TrackModels();
                await this.fileAccess.appendTextToFileAsync(playlistPath, playlistTrack.path);
        if (albumsToAdd == undefined) {
            const playlistTracksAfterRemoval: TrackModel[] = [];

        return !this._activePlaylistFolder.isDefault;
                playlistPath,
    }
    }
                trackModels.addTrack(playlistTrack);

        await this.addTracksToPlaylistAsync(playlistPath, playlistName, tracks.tracks);
                const track: TrackModel = await this.trackModelFactory.createFromFileAsync(playlistEntry.decodedPath, albumKeyIndex);
            if (this.fileValidator.isPlayableAudioFile(playlistEntry.decodedPath)) {


            throw new Error('playlistPath is undefined');
            throw new Error('playlistPath is undefined');
                'removeTracksFromPlaylistAsync',
        
import { PlaylistEntry } from './playlist-entry';
                `Could not remove tracks from playlist '${playlistPath}'`,
        }
        private settings: SettingsBase,
            const playlistsInPlaylistFolder: PlaylistModel[] = await this.playlistFileManager.getPlaylistsInPathAsync(playlistFolder.path);
        this._playlistsParentFolderPath = this.playlistFileManager.playlistsParentFolderPath;
        private playlistFileManager: PlaylistFileManager,
import { PlaylistFileManager } from './playlist-file-manager';
                PromiseUtils.noAwait(this.updatePlaylistFileAsync(playlistUpdateInfo.playlistPath, playlistUpdateInfo.tracks));

        }
            }

                'PlaylistService',

                await this.fileAccess.appendTextToFileAsync(playlistPath, path);
            );
import { PlaylistServiceBase } from './playlist.service.base';

        return this._activePlaylistFolder;
                playlist = this.playlistFileManager.createPlaylist(this.activePlaylistFolder, newName);

            throw new Error('tracksToRemove is undefined');
                if (!trackPathsToRemove.includes(playlistTrack.path)) {
    private _playlistsParentFolderPath: string = '';
            const tracksToRemoveGroupedByPlaylistPath: Map<string, TrackModel[]> = CollectionUtils.groupBy(


    private playlistsChanged: Subject<void> = new Subject();
            throw new Error('tracksToRemove is undefined');

                e,

            this.playlistsChanged.next();
    private async decodePlaylistAsync(playlistPath: string): Promise<TrackModel[]> {
    public setActivePlaylistFolder(selectedPlaylistFolders: PlaylistFolderModel[]): void {
        if (artistsToAdd == undefined) {

        }
@Injectable()
        }
    }
            throw new Error('playlistPath is undefined');
    private _activePlaylistFolder: PlaylistFolderModel = this.playlistFolderModelFactory.createDefault();
            } else {
                this.logger.info(`Created new playlist '${playlist.path}'`, 'PlaylistService', 'updatePlaylistDetailsAsync');
        return trackModels;
            throw new Error('genresToAdd is undefined');
        }
        for (const playlistEntry of playlistEntries) {
            }
        if (tracksToRemove == undefined) {
    public async addArtistsToPlaylistAsync(playlistPath: string, playlistName: string, artistsToAdd: ArtistModel[]): Promise<void> {
        try {

            throw new Error('tracksToAdd is undefined');
    }
        const tracks: TrackModels = this.trackService.getTracksForAlbums(albumKeys);
    }
    public get activePlaylistFolder(): PlaylistFolderModel {

    }
    private initialize(): void {
            for (const path of tracksToAdd.map((x) => x.path)) {
            throw new Error('tracks is empty');
    private delayedUpdatePlaylistFile: Subject<PlaylistUpdateInfo> = new Subject<PlaylistUpdateInfo>();

    }
        if (genresToAdd == undefined) {
import { PlaylistUpdateInfo } from './playlist-update-info';
        } catch (e: unknown) {
    public async addTracksToPlaylistAsync(playlistPath: string, playlistName: string, tracksToAdd: TrackModel[]): Promise<void> {
        for (const playlist of playlists) {

        private playlistFolderModelFactory: PlaylistFolderModelFactory,
    public async getTracksAsync(playlists: PlaylistModel[]): Promise<TrackModels> {
            .subscribe((playlistUpdateInfo: PlaylistUpdateInfo) => {
    }
        const tracks: TrackModel[] = [];

        if (playlistPath == undefined) {
                const tracksToRemoveForSinglePlaylist: TrackModel[] = tracksToRemoveGroupedByPlaylistPath.get(playlistPath) ?? [];
import { Observable, Subject } from 'rxjs';
            return;
        if (tracksToRemove == undefined) {
        }

            for (const playlistTrack of playlistTracksAfterRemoval) {

import { TrackModelFactory } from '../track/track-model-factory';
        if (tracksToAdd == undefined) {
        }

        return this._isUpdatingPlaylistFile;
        }
        const tracks: TrackModels = this.trackService.getTracksForArtists(artistsToAdd, ArtistType.allArtists);
}
            this.logger.error(e, `Could not add tracks to playlist '${playlistPath}'`, 'PlaylistService', 'addTracksToPlaylist');
            for (const playlistTrack of allPlaylistTracks) {
import { TrackServiceBase } from '../track/track.service.base';
    public async removeTracksFromPlaylistsAsync(tracksToRemove: TrackModel[]): Promise<void> {

        private playlistDecoder: PlaylistDecoder,
            this.logger.error(e, 'Could not remove tracks from playlists.', 'PlaylistService', 'removeTracksFromPlaylistsAsync');

    private areTrackFromSinglePlaylist(tracks: TrackModel[]): boolean {
        } catch (e: unknown) {
import { Injectable } from '@angular/core';

    public async updatePlaylistOrderAsync(tracks: TrackModel[]): Promise<void> {

                await this.notificationService.multipleTracksAddedToPlaylistAsync(playlistName, tracksToAdd.length);
    }
            throw new Error(e instanceof Error ? e.message : 'Unknown error');
        try {

        if (tracks == undefined) {
    }
    public playlistTracksChanged$: Observable<void> = this.playlistTracksChanged.asObservable();
import {SettingsBase} from "../../common/settings/settings.base";
        return uniquePlaylistPaths.size === 1;
import { NotificationServiceBase } from '../notification/notification.service.base';

        private logger: Logger,
        await this.addTracksToPlaylistAsync(playlistPath, playlistName, tracks.tracks);
            this.logger.error(e, `Could not decode playlist with path='${playlistPath}'`, 'PlaylistService', 'decodePlaylistAsync');
            throw new Error('playlistPath is undefined');
        try {
    }
            this.logger.error(
    private _isUpdatingPlaylistFile: boolean = false;
        }

    public async updatePlaylistDetailsAsync(playlist: PlaylistModel, newName: string, newImagePath: string): Promise<void> {
                tracksToRemove,
        }
        }
        

                }
        }
        if (tracks.length === 0) {
        } catch (e: unknown) {
            await this.fileAccess.clearFileContentsAsync(playlistPath);
        }
        this.playlistTracksChanged.next();
                playlistTrack.playlistPath = playlist.path;


    public async addAlbumsToPlaylistAsync(playlistPath: string, playlistName: string, albumsToAdd: AlbumModel[]): Promise<void> {
    public constructor(
        }
            await this.playlistFileManager.updatePlaylistAsync(playlist, newName, newImagePath);
import { PlaylistFolderModelFactory } from '../playlist-folder/playlist-folder-model-factory';
            throw new Error(e instanceof Error ? e.message : 'Unknown error');
    private async removeTracksFromSinglePlaylistAsync(playlistPath: string, tracksToRemove: TrackModel[]): Promise<void> {

        } catch (e: unknown) {

    public async getPlaylistsAsync(playlistFolders: PlaylistFolderModel[]): Promise<PlaylistModel[]> {
import { FileValidator } from '../../common/validation/file-validator';
        if (!this.areTrackFromSinglePlaylist(tracks)) {
            this.logger.warn(`Playlists is undefined. Returning empty array of tracks`, 'PlaylistService', 'getTracksAsync');

        if (playlistPath == undefined) {
        } catch (e: unknown) {
    public get isUpdatingPlaylistFile(): boolean {
    public get playlistsParentFolderPath(): string {
        const albumKeys: string[] = albumsToAdd.map((x) => x.albumKey);
    }

    }
    }

        } catch (e: unknown) {
        private fileAccess: FileAccessBase,
        } finally {
        if (playlistPath == undefined) {
            await this.fileAccess.replaceMultiLineTextInFileAsync(
import { Constants } from '../../common/application/constants';
    }
        private fileValidator: FileValidator,
    }
            throw new Error(e instanceof Error ? e.message : 'Unknown error');
            }
    }

    public async getPlaylistsInParentFolder(): Promise<PlaylistModel[]> {
        for (const playlistFolder of playlistFolders) {
            throw new Error(e instanceof Error ? e.message : 'Unknown error');

        this._isUpdatingPlaylistFile = true;
        private trackModelFactory: TrackModelFactory,
import { PlaylistFolderModel } from '../playlist-folder/playlist-folder-model';
            playlists.push(...playlistsInPlaylistFolder);
            this.logger.error(e, 'Could not update playlist details', 'PlaylistService', 'updatePlaylistDetailsAsync');
                (track: TrackModel) => track.playlistPath,
    }
export class PlaylistService implements PlaylistServiceBase {
        if (playlistPath == undefined) {
        const uniquePlaylistPaths: Set<string> = new Set(tracks.map((x) => x.playlistPath));
        }
                await this.notificationService.singleTrackAddedToPlaylistAsync(playlistName);
        this.delayedUpdatePlaylistFile
        return await this.playlistFileManager.getPlaylistsInPathAsync(this._playlistsParentFolderPath);
        }
        }
            }
        try {
            const allPlaylistTracks: TrackModel[] = await this.decodePlaylistAsync(playlistPath);
            for (const playlistPath of Array.from(tracksToRemoveGroupedByPlaylistPath.keys())) {
        private trackService: TrackServiceBase,

        this.delayedUpdatePlaylistFile.next(new PlaylistUpdateInfo(tracks[0].playlistPath, tracks));

        const albumKeyIndex = this.settings.albumKeyIndex;
import { TrackModels } from '../track/track-models';
        }
import { PromiseUtils } from '../../common/utils/promise-utils';
        try {

            });
import { ArtistModel } from '../artist/artist-model';
import { FileAccessBase } from '../../common/io/file-access.base';
            }
            playlistEntries = await this.playlistDecoder.decodePlaylistAsync(playlistPath);
        const playlists: PlaylistModel[] = [];

import { TrackModel } from '../track/track-model';
            for (const playlistTrack of playlistTracks) {
    }
                await this.removeTracksFromSinglePlaylistAsync(playlistPath, tracksToRemoveForSinglePlaylist);
        }
        this.playlistsChanged.next();
    public async addGenresToPlaylistAsync(playlistPath: string, playlistName: string, genresToAdd: GenreModel[]): Promise<void> {
            this._activePlaylistFolder = selectedPlaylistFolders[0];
        this.initialize();


        let playlistEntries: PlaylistEntry[] = [];
            throw new Error(e instanceof Error ? e.message : 'Unknown error');

            }
            const trackPathsToRemove: string[] = tracksToRemove.map((x) => x.path);
        }

    public async deletePlaylistAsync(playlist: PlaylistModel): Promise<void> {
            throw new Error('artistsToAdd is undefined');
        private notificationService: NotificationServiceBase,
    ) {
            throw new Error(e instanceof Error ? e.message : 'Unknown error');
        return this._playlistsParentFolderPath;
    private async updatePlaylistFileAsync(playlistPath: string, tracks: TrackModel[]): Promise<void> {
        }
import { Logger } from '../../common/logger';
            this._isUpdatingPlaylistFile = false;
        await this.playlistFileManager.deletePlaylistAsync(playlist);
import { ArtistType } from '../artist/artist-type';
            );
import { GenreModel } from '../genre/genre-model';

    }
        }


    public playlistsChanged$: Observable<void> = this.playlistsChanged.asObservable();
        return playlists;
import { AlbumModel } from '../album/album-model';
        await this.addTracksToPlaylistAsync(playlistPath, playlistName, tracks.tracks);

            return new TrackModels();
                tracks.map((x) => x.path),
