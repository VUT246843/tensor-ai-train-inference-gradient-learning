        if (popularimeterFramesForWindowsUser.length > 0) {
                    }
                    this.albumArtists = (tagLibFile.tag.albumArtists ?? []).map((a) => a.replace(/\u0000/g, ''));
                if (this.path.toLowerCase().endsWith('.wav')) {
    public durationInMilliseconds: number = 0;
                this.discCount = tagLibFile.tag.discCount ?? 0;
        tagLibFile.tag.trackCount = this.trackCount;
                mimeType: 'image/png',

            this.ratingHasChanged = false;
import { IFileMetadata } from './i-file-metadata';
                this.title = tagLibFile.tag.title ?? '';
            return 0;
        }
    public trackNumber: number = 0;
        }
                for (const picture of tagLibFile.tag.pictures.filter((x) => x.type !== PictureType.NotAPicture)) {
        tagLibFile.tag.conductor = this.conductor;

    public sampleRate: number = 0;
                filename: '', // Not required
            tagLibFile.tag.pictures = [picture];
        }
                    // There seems to be no dedicated tag for album artists in the RIFF INFO tags. Artist is stored in the 'IART' tag.

            }
    public discNumber: number = 0;

        }
    private ratingHasChanged: boolean = false;
        }
                            this.picture = Buffer.from(picture.data.toBase64String(), 'base64');
    }
    public comment: string = '';
                        } catch (error) {
    Id3v2FrameClassType,
                this.beatsPerMinute = tagLibFile.tag.beatsPerMinute ?? 0;
            if (tagLibFile.tag.composers != undefined) {
                this.sampleRate = tagLibFile.properties.audioSampleRate ?? 0;
            if (tagLibFile.properties.audioBitrate != undefined && !Number.isNaN(tagLibFile.properties.audioBitrate)) {
        tagLibFile.dispose();
                        }
            popularimeterFramesForWindowsUser[0].rating = RatingConverter.starToPopMRating(rating);
        tagLibFile.tag.discCount = this.discCount;
            if (tagLibFile.tag.genres != undefined) {
    PictureType,

    public save(): void {
                this.year = tagLibFile.tag.year ?? 0;
            if (tagLibFile.tag.year != undefined && !Number.isNaN(tagLibFile.tag.year)) {
        const popularimeterFramesForWindowsUser: Id3v2PopularimeterFrame[] = allPopularimeterFrames.filter(
            }
            this._rating = this.readRatingFromFile(tagLibFile) ?? 0;
        if (allPopularimeterFrames.length === 0) {
}
                type: PictureType.FrontCover,
            }
        tagLibFile.tag.title = this.title;
                this.trackCount = tagLibFile.tag.trackCount ?? 0;
    public trackCount: number = 0;
                data: ByteVector.fromByteArray(this.picture),
            }
    Id3v2Tag,
        this._rating = v;
        const id3v2Tag: Id3v2Tag = <Id3v2Tag>tagLibFile.getTag(TagTypes.Id3v2, true);
        try {

    public artists: string[] = [];
            }

                            // Intended suppression
    public async loadAsync(): Promise<void> {
        tagLibFile.save();
            }
import {
            if (tagLibFile.tag.disc != undefined && !Number.isNaN(tagLibFile.tag.disc)) {
            }
            if (tagLibFile.tag.pictures != undefined && tagLibFile.tag.pictures.length > 0) {
        this.ratingHasChanged = true;
                    // node-taglib-sharp reads the album artist from the RIFF 'IART' tag, but adds a null character at the end of the string.
        if (allPopularimeterFrames.length === 0) {
            if (tagLibFile.tag.albumArtists !== undefined) {
    public get rating(): number {

                this.genres = tagLibFile.tag.genres ?? [];
    public constructor(public path: string) {}
            Id3v2FrameClassType.PopularimeterFrame,
import { RatingConverter } from './rating-converter';

export class TagLibFileMetadata implements IFileMetadata {
    }

            // Intended suppression
            }
        if (popularimeterFramesForWindowsUser.length > 0) {
        tagLibFile.tag.year = this.year;

    private writeRatingToFile(tagLibFile: File, rating: number): void {
                    // .wav files have limited tagging capabilities. RIFF INFO tags are used to store metadata in .wav files.
    }
        // tagLibFile.tag.lyrics = this.lyrics;
            id3v2Tag.addFrame(Id3v2PopularimeterFrame.fromUser(this.windowsPopMUser));

    public title: string = '';
        tagLibFile.tag.grouping = this.grouping;
        const popularimeterFramesForWindowsUser: Id3v2PopularimeterFrame[] = allPopularimeterFrames.filter(
            }
                            couldGetPicture = true;
            }
        const allPopularimeterFrames: Id3v2PopularimeterFrame[] = id3v2Tag.getFramesByClassType<Id3v2PopularimeterFrame>(

        const tagLibFile = File.createFromPath(this.path);
        );
                    // That is why we remove all null characters from all strings in the array here.
            }
                this.durationInMilliseconds = tagLibFile.properties.durationMilliseconds ?? 0;
        }
        tagLibFile.tag.genres = this.genres;
        } catch (error) {
    public album: string = '';
            }
        return RatingConverter.popMToStarRating(allPopularimeterFrames[0].rating);
    File,
        const id3v2Tag: Id3v2Tag = <Id3v2Tag>tagLibFile.getTag(TagTypes.Id3v2, true);
    }
            if (tagLibFile.tag.discCount != undefined && !Number.isNaN(tagLibFile.tag.discCount)) {




            tagLibFile.tag.pictures = [];
            if (tagLibFile.tag.comment != undefined) {
                this.composers = tagLibFile.tag.composers ?? [];
        return this._rating;

        const tagLibFile = File.createFromPath(this.path);
        let allPopularimeterFrames: Id3v2PopularimeterFrame[] = id3v2Tag.getFramesByClassType<Id3v2PopularimeterFrame>(
    ByteVector,
            }
        }

            id3v2Tag.removeFrames(Id3v2FrameIdentifiers.POPM);
    public lyrics: string = '';

            if (tagLibFile.tag.album != undefined) {
        if (tagLibFile.properties != undefined) {
                        try {
    public beatsPerMinute: number = 0;
        allPopularimeterFrames = id3v2Tag.getFramesByClassType<Id3v2PopularimeterFrame>(Id3v2FrameClassType.PopularimeterFrame);
        }

        tagLibFile.tag.performers = this.artists;
                }

            }
        tagLibFile.tag.albumArtists = this.albumArtists;

    private windowsPopMUser: string = 'Windows Media Player 9 Series';
            if (tagLibFile.tag.lyrics != undefined) {
            if (tagLibFile.tag.beatsPerMinute != undefined && !Number.isNaN(tagLibFile.tag.beatsPerMinute)) {
    public year: number = 0;
    public conductor: string = '';
    // eslint-disable-next-line @typescript-eslint/require-await
        tagLibFile.tag.composers = this.composers;
    }
                description: '', // Not required
        if (tagLibFile.tag != undefined) {
                this.conductor = tagLibFile.tag.conductor ?? '';
                this.grouping = tagLibFile.tag.grouping ?? '';
    public composers: string[] = [];
        );

            if (tagLibFile.tag.conductor != undefined) {
            if (tagLibFile.tag.trackCount != undefined && !Number.isNaN(tagLibFile.tag.trackCount)) {

    Id3v2PopularimeterFrame,
            }
} from '@digimezzo/node-taglib-sharp';


            }

    }
            if (tagLibFile.tag.title != undefined) {
        );
    public picture: Buffer | undefined;

        tagLibFile.tag.album = this.album;

            const picture = {

        } else {
    public genres: string[] = [];



            (x) => x.user === this.windowsPopMUser,
                this.bitRate = tagLibFile.properties.audioBitrate ?? 0;
            if (tagLibFile.tag.track != undefined && !Number.isNaN(tagLibFile.tag.track)) {
        if (this.picture) {
                this.artists = tagLibFile.tag.performers ?? [];
            }
            if (tagLibFile.properties.durationMilliseconds != undefined && !Number.isNaN(tagLibFile.properties.durationMilliseconds)) {
                this.comment = tagLibFile.tag.comment ?? '';
            if (tagLibFile.properties.audioSampleRate != undefined && !Number.isNaN(tagLibFile.properties.audioSampleRate)) {
            }


            };
            (x) => x.user === this.windowsPopMUser,
    private _rating: number = 0;
            Id3v2FrameClassType.PopularimeterFrame,
                    if (!couldGetPicture) {
        }
        tagLibFile.tag.comment = this.comment;
    private readRatingFromFile(tagLibFile: File): number {
                let couldGetPicture: boolean = false;
        tagLibFile.dispose();
    public set rating(v: number) {
    public albumArtists: string[] = [];
    public discCount: number = 0;

                    this.albumArtists = tagLibFile.tag.albumArtists ?? [];
                this.trackNumber = tagLibFile.tag.track ?? 0;
                } else {


            if (tagLibFile.tag.grouping != undefined) {

        tagLibFile.tag.beatsPerMinute = this.beatsPerMinute;
        if (this.ratingHasChanged) {
        );
    public grouping: string = '';
                this.album = tagLibFile.tag.album ?? '';
    Id3v2FrameIdentifiers,
        tagLibFile.tag.track = this.trackNumber;
        tagLibFile.tag.disc = this.discNumber;


            }
                this.lyrics = tagLibFile.tag.lyrics ?? '';

                }
    TagTypes,
            }
                this.discNumber = tagLibFile.tag.disc ?? 0;
            return RatingConverter.popMToStarRating(popularimeterFramesForWindowsUser[0].rating);

            if (tagLibFile.tag.performers != undefined) {

    public bitRate: number = 0;
            this.writeRatingToFile(tagLibFile, this.rating);

