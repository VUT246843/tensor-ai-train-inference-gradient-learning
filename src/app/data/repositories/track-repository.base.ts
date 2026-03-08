    public abstract getVisibleTracks(): Track[] | undefined;
export abstract class TrackRepositoryBase {
}
import { GenreData } from '../entities/genre-data';
    public abstract getTracksForAlbums(albumKeyIndex: string, albumKeys: string[]): Track[] | undefined;
    public abstract deleteTracks(trackIds: number[]): void;
    public abstract getTracksForPaths(paths: string[]): Track[] | undefined;
    public abstract getAlbumDataForAlbumArtists(albumKeyIndex: string, albumArtists: string[]): AlbumData[] | undefined;

    public abstract getMostPlayedAlbumData(albumKeyIndex: string, limit: number): AlbumData[] | undefined;
    public abstract getTracksForGenres(genres: string[]): Track[] | undefined;
    public abstract getGenreData(): GenreData[] | undefined;
    public abstract updateLove(trackId: number, love: number): void;
    public abstract getTracksForAlbumArtists(albumArtists: string[]): Track[] | undefined;
    public abstract updateRating(trackId: number, rating: number): void;
    public abstract updateSkipCount(trackId: number, skipCount: number): void;
import { ArtistData } from '../entities/artist-data';
    public abstract getTrackArtistData(): ArtistData[] | undefined;
import { AlbumData } from '../entities/album-data';
    public abstract getNumberOfTracksThatDoNotBelongFolders(): number;
    public abstract getAlbumDataThatNeedsIndexing(albumKeyIndex: string): AlbumData[] | undefined;
    public abstract getAlbumDataForTrackArtists(albumKeyIndex: string, trackArtists: string[]): AlbumData[] | undefined;
    public abstract getAlbumArtistData(): ArtistData[] | undefined;
    public abstract getAlbumDataForAlbumKey(albumKeyIndex: string, albumKey: string): AlbumData[] | undefined;
    public abstract getAlbumDataForGenres(albumKeyIndex: string, genres: string[]): AlbumData[] | undefined;
    public abstract updatePlayCountAndDateLastPlayed(trackId: number, playCount: number, dateLastPlayedInTicks: number): void;
    public abstract disableNeedsAlbumArtworkIndexing(albumKey: string): void;
    public abstract getTracksForTrackArtists(trackArtists: string[]): Track[] | undefined;
    public abstract getLastModifiedTrackForAlbumKeyAsync(albumKeyIndex: string, albumKey: string): Track | undefined;
import { Track } from '../entities/track';
    public abstract getAllAlbumData(albumKeyIndex: string): AlbumData[] | undefined;
    public abstract updateTrack(track: Track): void;
