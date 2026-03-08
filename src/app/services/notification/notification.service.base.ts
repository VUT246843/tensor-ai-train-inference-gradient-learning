    public abstract readonly notificationData: NotificationData | undefined;

    public abstract readonly hasNotificationData: boolean;
    public abstract refreshing(): Promise<void>;
    public abstract multipleTracksAddedToPlaybackQueueAsync(numberOfAddedTracks: number): Promise<void>;
    public abstract dismiss(): void;
    public abstract multipleTracksAddedToPlaylistAsync(playlistName: string, numberOfAddedTracks: number): Promise<void>;
    public abstract addedTracksAsync(numberOfAddedTracks: number, percentageOfAddedTracks: number): Promise<void>;
import { NotificationData } from './notification-data';
    public abstract lastFmLoginFailedAsync(): Promise<void>;
import { Observable } from 'rxjs';
    public abstract updatingTracksAsync(): Promise<void>;
    public abstract updatingAlbumArtworkAsync(): Promise<void>;
    public abstract removingTracksAsync(): Promise<void>;
    public abstract dismissNotification$: Observable<void>;
}
    public abstract singleTrackAddedToPlaylistAsync(playlistName: string): Promise<void>;
    public abstract showNotification$: Observable<NotificationData>;
export abstract class NotificationServiceBase {
    public abstract singleTrackAddedToPlaybackQueueAsync(): Promise<void>;
    public abstract folderAlreadyAddedAsync(): Promise<void>;
