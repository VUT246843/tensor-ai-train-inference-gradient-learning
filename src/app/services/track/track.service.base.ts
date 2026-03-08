    public abstract savePlayCountAndDateLastPlayed(track: TrackModel): void;
    public abstract getTracksInSubfolderAsync(subfolderPath: string): Promise<TrackModels>;
    public abstract getVisibleTracks(): TrackModels;
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
export abstract class TrackServiceBase {

    public abstract getTracksForAlbums(albumKeys: string[]): TrackModels;
    public abstract getTracksForGenres(genres: string[]): TrackModels;
import { ArtistModel } from '../artist/artist-model';
    public abstract scrollToPlayingTrack(tracks: TrackModel[], viewPort: CdkVirtualScrollViewport): void;
import { TrackModel } from './track-model';
import { ArtistType } from '../artist/artist-type';
    public abstract getTracksForArtists(artists: ArtistModel[], artistType: ArtistType): TrackModels;
}
import { TrackModels } from './track-models';
    public abstract saveSkipCount(track: TrackModel): void;
