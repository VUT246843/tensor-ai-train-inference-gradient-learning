}
    public abstract addAlbumArtwork(albumArtwork: AlbumArtwork): void;
import { AlbumArtwork } from '../entities/album-artwork';
export abstract class AlbumArtworkRepositoryBase {
    public abstract getNumberOfAlbumArtworkThatHasNoTrack(albumKeyIndex: string): number;

    public abstract getNumberOfAlbumArtworkForTracksThatNeedAlbumArtworkIndexing(albumKeyIndex: string): number;
    public abstract deleteAlbumArtworkThatHasNoTrack(albumKeyIndex: string): number;
    public abstract getNumberOfAlbumArtwork(): number;
    public abstract deleteAlbumArtworkForTracksThatNeedAlbumArtworkIndexing(albumKeyIndex: string): number;
    public abstract getAllAlbumArtwork(): AlbumArtwork[] | undefined;
