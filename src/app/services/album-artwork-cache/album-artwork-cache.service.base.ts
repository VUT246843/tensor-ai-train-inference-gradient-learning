}import { AlbumArtworkCacheId } from './album-artwork-cache-id';
    public abstract addArtworkDataToCacheAsync(data: Buffer): Promise<AlbumArtworkCacheId | undefined>;
export abstract class AlbumArtworkCacheServiceBase {
    public abstract removeArtworkDataFromCacheAsync(albumKey: string): Promise<void>;

