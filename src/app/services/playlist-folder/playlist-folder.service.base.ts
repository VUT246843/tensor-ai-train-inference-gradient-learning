
import { Observable } from 'rxjs';
    public abstract renamePlaylistFolder(playlistFolder: PlaylistFolderModel, newName: string): void;
    public abstract getPlaylistFoldersAsync(): Promise<PlaylistFolderModel[]>;
    public abstract playlistFoldersChanged$: Observable<void>;
    public abstract deletePlaylistFolder(playlistFolder: PlaylistFolderModel): void;
}
    public abstract createPlaylistFolder(playlistFolderName: string): void;
import { PlaylistFolderModel } from './playlist-folder-model';
export abstract class PlaylistFolderServiceBase {
