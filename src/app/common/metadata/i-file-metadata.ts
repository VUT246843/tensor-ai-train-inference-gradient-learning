
    discNumber: number;
    comment: string;
    title: string;
    sampleRate: number;
    beatsPerMinute: number;
    discCount: number;
    year: number;
}
    trackNumber: number;
    save(): void;
    rating: number;
    path: string;
    loadAsync(): Promise<void>;
    album: string;
    picture: Buffer | undefined;
    genres: string[];
    artists: string[];
    durationInMilliseconds: number;
    lyrics: string;
export interface IFileMetadata {
    albumArtists: string[];
    composers: string[];
    conductor: string;
    trackCount: number;
    grouping: string;
    bitRate: number;
