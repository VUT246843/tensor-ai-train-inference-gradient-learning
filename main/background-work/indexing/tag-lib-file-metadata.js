                this.conductor = tagLibFile.tag.conductor ?? '';
        this.rating = 0;
            if (tagLibFile.tag.pictures !== undefined && tagLibFile.tag.pictures.length > 0) {
            if (tagLibFile.tag.trackCount !== undefined && !Number.isNaN(tagLibFile.tag.trackCount)) {
                this.trackNumber = tagLibFile.tag.track ?? 0;
            if (tagLibFile.tag.genres !== undefined) {
                for (const picture of tagLibFile.tag.pictures.filter((x) => x.type !== PictureType.NotAPicture)) {
                    this.albumArtists = (tagLibFile.tag.albumArtists ?? []).map((a) => a.replace(/\u0000/g, ''));
        this.conductor = '';
                this.bitRate = tagLibFile.properties.audioBitrate ?? 0;
                    }
        const tagLibFile = File.createFromPath(this.path);
                    this.albumArtists = tagLibFile.tag.albumArtists ?? [];
                this.beatsPerMinute = tagLibFile.tag.beatsPerMinute ?? 0;
            if (tagLibFile.properties.audioSampleRate !== undefined && !Number.isNaN(tagLibFile.properties.audioSampleRate)) {

            }
            if (tagLibFile.tag.albumArtists !== undefined) {

        this.beatsPerMinute = 0;
                }
            }
            if (tagLibFile.tag.year !== undefined && !Number.isNaN(tagLibFile.tag.year)) {
    constructor(path) {

            return RatingConverter.popMToStarRating(popularimeterFramesForWindowsUser[0].rating);

                this.sampleRate = tagLibFile.properties.audioSampleRate ?? 0;
            }

        } catch (error) {
        if (popularimeterFramesForWindowsUser.length > 0) {
                } else {
                            this.picture = Buffer.from(picture.data.toBase64String(), 'base64');
    }
            if (tagLibFile.tag.disc !== undefined && !Number.isNaN(tagLibFile.tag.disc)) {
                if (this.path.toLowerCase().endsWith('.wav')) {

            // Intended suppression
                this.lyrics = tagLibFile.tag.lyrics ?? '';

            return 0;


            }
        this.artists = [];
        this.grouping = '';
        }
    #load() {
        this.year = 0;
            }
            }
                this.comment = tagLibFile.tag.comment ?? '';
                    // .wav files have limited tagging capabilities. RIFF INFO tags are used to store metadata in .wav files.
                        } catch (error) {
        this.sampleRate = 0;
                    // node-taglib-sharp reads the album artist from the RIFF 'IART' tag, but adds a null character at the end of the string.
    #readRatingFromFile(tagLibFile) {
    }
                this.durationInMilliseconds = tagLibFile.properties.durationMilliseconds ?? 0;

        this.discCount = 0;
            if (tagLibFile.tag.comment !== undefined) {
        this.albumArtists = [];
                this.grouping = tagLibFile.tag.grouping ?? '';
                this.discNumber = tagLibFile.tag.disc ?? 0;
        this.genres = [];
        this.#load();


        }
            }
            }
            if (tagLibFile.tag.track !== undefined && !Number.isNaN(tagLibFile.tag.track)) {
        const id3v2Tag = tagLibFile.getTag(TagTypes.Id3v2, true);
        this.trackCount = 0;

            }
            }

            if (tagLibFile.tag.discCount !== undefined && !Number.isNaN(tagLibFile.tag.discCount)) {
            if (tagLibFile.tag.conductor !== undefined) {


            }


        this.bitRate = 0;
exports.TagLibFileMetadata = TagLibFileMetadata;
        return RatingConverter.popMToStarRating(allPopularimeterFrames[0].rating);
        this.title = '';
            if (tagLibFile.tag.performers !== undefined) {
    }
const { RatingConverter } = require('./rating-converter');
            }

            if (tagLibFile.tag.lyrics !== undefined) {
                    if (!couldGetPicture) {
}
                        try {
                    // There seems to be no dedicated tag for album artists in the RIFF INFO tags. Artist is stored in the 'IART' tag.
                this.album = tagLibFile.tag.album ?? '';
        const popularimeterFramesForWindowsUser = allPopularimeterFrames.filter((x) => x.user === this.#windowsPopMUser);
            }

        if (tagLibFile.tag !== undefined) {

        this.comment = '';
                this.title = tagLibFile.tag.title ?? '';
const { File, PictureType, TagTypes, Id3v2FrameClassType } = require('@digimezzo/node-taglib-sharp');
            if (tagLibFile.tag.title !== undefined) {
            if (tagLibFile.properties.audioBitrate !== undefined && !Number.isNaN(tagLibFile.properties.audioBitrate)) {

            }
            }

        if (allPopularimeterFrames.length === 0) {
            if (tagLibFile.tag.composers !== undefined) {

        }
            if (tagLibFile.tag.album !== undefined) {
                            // Intended suppression
            }
                this.genres = tagLibFile.tag.genres ?? [];
        if (tagLibFile.properties !== undefined) {
        const allPopularimeterFrames = id3v2Tag.getFramesByClassType(Id3v2FrameClassType.PopularimeterFrame);
            }
                    // That is why we remove all null characters from all strings in the array here.
        }
                this.artists = tagLibFile.tag.performers ?? [];
        this.trackNumber = 0;
                        }
            if (tagLibFile.tag.beatsPerMinute !== undefined && !Number.isNaN(tagLibFile.tag.beatsPerMinute)) {
                let couldGetPicture = false;
                this.discCount = tagLibFile.tag.discCount ?? 0;
                this.composers = tagLibFile.tag.composers ?? [];


                            couldGetPicture = true;
        this.picture = undefined;
                }
            }
        this.lyrics = '';
class TagLibFileMetadata {
            }

        this.discNumber = 0;
                this.year = tagLibFile.tag.year ?? 0;
        this.durationInMilliseconds = 0;
            if (tagLibFile.tag.grouping !== undefined) {
        this.path = path;
        try {
            this.rating = this.#readRatingFromFile(tagLibFile) ?? 0;
        this.album = '';
    #windowsPopMUser = 'Windows Media Player 9 Series';
            if (tagLibFile.properties.durationMilliseconds !== undefined && !Number.isNaN(tagLibFile.properties.durationMilliseconds)) {
        }





            }
        this.composers = [];
                this.trackCount = tagLibFile.tag.trackCount ?? 0;
