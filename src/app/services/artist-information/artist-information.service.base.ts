import { ArtistInformation } from './artist-information';
export abstract class ArtistInformationServiceBase {
    public abstract getArtistInformationAsync(track: TrackModel | undefined): Promise<ArtistInformation>;
}
import { TrackModel } from '../track/track-model';
    public abstract getQuickArtistInformation(track: TrackModel | undefined): ArtistInformation;

