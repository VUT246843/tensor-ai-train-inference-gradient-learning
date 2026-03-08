import { PlaylistModel } from '../playlist/playlist-model';
        invalidCharacters: string[],

}
    public abstract showInputDialogAsync(
    public abstract cannotPlayAudioFileAsync(): Promise<void>;
    public abstract showConfirmationDialogAsync(dialogTitle: string, dialogText: string): Promise<boolean>;
    public abstract showLicenseDialog(): void;
export abstract class DialogServiceBase {
    public abstract showEditTracksAsync(tracks: TrackModel[]): Promise<boolean>;
        inputText: string,
    public abstract showInfoDialog(infoText: string): void;
    public abstract cannotPlayM4aFileAsync(): Promise<void>;
        placeHolderText: string,
    public abstract showCreatePlaylistDialogAsync(): Promise<void>;
import { TrackModel } from '../track/track-model';
    public abstract showEditColumnsDialogAsync(): Promise<void>;
    public abstract showErrorDialog(errorText: string): void;
    public abstract showEditPlaylistDialogAsync(playlist: PlaylistModel): Promise<void>;
        dialogTitle: string,
    ): Promise<string>;
