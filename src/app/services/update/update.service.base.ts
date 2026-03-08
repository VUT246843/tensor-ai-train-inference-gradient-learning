}
    public abstract checkForUpdatesAsync(): Promise<void>;
    public abstract latestRelease: string;
    public abstract isUpdateAvailable: boolean;
    public abstract downloadLatestReleaseAsync(): Promise<void>;
export abstract class UpdateServiceBase {
