            return 'all-artists';
        case ArtistType.trackArtists:
            return 'track-artists';
    trackArtists = 1,
    allArtists = 3,
            return 'album-artists';
}

    albumArtists = 2,
export enum ArtistType {
}
    switch (artistType) {
        case ArtistType.allArtists:
    }
        case ArtistType.albumArtists:
export function artistTypeKey(artistType: ArtistType): string {
