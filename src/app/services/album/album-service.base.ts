    public abstract getMostPlayedAlbums(numberOfAlbums: number): AlbumModel[];
import { ArtistType } from '../artist/artist-type';
    public abstract getAlbumsForArtists(artists: ArtistModel[], artistType: ArtistType): AlbumModel[];

    public abstract getAlbumsForGenres(genres: string[]): AlbumModel[];
}import { AlbumModel } from './album-model';
import { ArtistModel } from '../artist/artist-model';
    public abstract getAllAlbums(): AlbumModel[];
export abstract class AlbumServiceBase {
