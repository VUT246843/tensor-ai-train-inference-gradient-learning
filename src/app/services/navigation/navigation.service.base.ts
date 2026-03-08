    public abstract navigateToHighlightsAsync(): Promise<void>;
    public abstract navigateToNowPlayingAsync(): Promise<void>;
    public abstract showPlaybackQueue(): void;
    public abstract navigateToLoadingAsync(): Promise<void>;
import { Observable } from 'rxjs';
    public abstract refreshPlaybackQueueList(): void;
    public abstract navigateToInformationAsync(): Promise<void>;
    public abstract navigateToCollectionAsync(): Promise<void>;
    public abstract navigateToSettingsAsync(): Promise<void>;
    public abstract navigateToManageCollectionAsync(): Promise<void>;
    public abstract navigateToCoverPlayerAsync(): Promise<void>;
export abstract class NavigationServiceBase {
    public abstract navigateToWelcomeAsync(): Promise<void>;
    public abstract refreshPlaybackQueueListRequested$: Observable<void>;

    public abstract showPlaybackQueueRequested$: Observable<void>;
}
