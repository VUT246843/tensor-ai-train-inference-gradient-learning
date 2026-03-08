}
import { AlbumModel } from '../album/album-model';
    public abstract setActivePlaylistFolder(selectedPlaylistFolders: PlaylistFolderModel[]): void;
    public abstract getPlaylistsInParentFolder(): Promise<PlaylistModel[]>;
    public abstract playlistTracksChanged$: Observable<void>;
import { ArtistModel } from '../artist/artist-model';
    public abstract addTracksToPlaylistAsync(playlistPath: string, playlistName: string, tracksToAdd: TrackModel[]): Promise<void>;
    public abstract playlistsChanged$: Observable<void>;

import { PlaylistFolderModel } from '../playlist-folder/playlist-folder-model';
    public abstract updatePlaylistOrderAsync(tracks: TrackModel[]): Promise<void>;
    public abstract hasActivePlaylistFolder: boolean;
import { Observable } from 'rxjs';
    public abstract getPlaylistsAsync(playlistFolders: PlaylistFolderModel[]): Promise<PlaylistModel[]>;
import { TrackModel } from '../track/track-model';
    public abstract addAlbumsToPlaylistAsync(playlistPath: string, playlistName: string, albumsToAdd: AlbumModel[]): Promise<void>;
import { PlaylistModel } from './playlist-model';
export abstract class PlaylistServiceBase {
    public abstract addArtistsToPlaylistAsync(playlistPath: string, playlistName: string, artistsToAdd: ArtistModel[]): Promise<void>;
import { GenreModel } from '../genre/genre-model';
    public abstract updatePlaylistDetailsAsync(playlist: PlaylistModel, newName: string, selectedImagePath: string): Promise<void>;
    public abstract deletePlaylistAsync(playlist: PlaylistModel): Promise<void>;
    public abstract removeTracksFromPlaylistsAsync(tracksToRemove: TrackModel[]): Promise<void>;
    public abstract isUpdatingPlaylistFile: boolean;
    public abstract addGenresToPlaylistAsync(playlistPath: string, playlistName: string, genresToAdd: GenreModel[]): Promise<void>;
    public abstract playlistsParentFolderPath: string;
import { TrackModels } from '../track/track-models';
    public abstract activePlaylistFolder: PlaylistFolderModel;
    public abstract getTracksAsync(playlists: PlaylistModel[]): Promise<TrackModels>;
