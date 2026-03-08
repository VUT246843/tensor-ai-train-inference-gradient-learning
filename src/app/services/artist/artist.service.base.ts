    public abstract getArtists(artistType: ArtistType): ArtistModel[];
}

import { ArtistType } from './artist-type';
import { ArtistModel } from './artist-model';
    public abstract getSourceArtists(artists: ArtistModel[]): string[];
export abstract class ArtistServiceBase {
