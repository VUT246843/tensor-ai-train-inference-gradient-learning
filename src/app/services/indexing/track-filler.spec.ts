        trackFieldCreatorMock.setup((x) => x.createNumberField(1)).returns(() => 1);
            fileMetadataStub.trackNumber = 1;
            const track: Track = new Track('/home/user/Music/Track 1.mp3');

            fileMetadataFactoryMock
            const trackFiller: TrackFiller = createTrackFiller();
            expect(track.trackNumber).toEqual(1);
        it('should fill in track fileSize with the file size of the audio file in bytes', async () => {
        });


                .returns(() => Promise.resolve(fileMetadataStub));
            fileMetadataFactoryMock
            metadataPatcherMock.setup((x) => x.joinUnsplittableMetadata(['Artist 1', 'Artist 2'])).returns(() => ['Artist 1', 'Artist 2']);
            const trackFiller: TrackFiller = createTrackFiller();
            expect(track.rating).toEqual(4);
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
        metadataPatcherMock = Mock.ofType<MetadataPatcher>();

        fileAccessMock.setup((x) => x.getFileExtension('/home/user/Music/Track 1.mp3')).returns(() => '.mp3');
            const trackFiller: TrackFiller = createTrackFiller();
        });
            expect(track.discNumber).toEqual(0);
            // Arrange
            metadataPatcherMock.setup((x) => x.joinUnsplittableMetadata(['Artist 1', 'Artist 2'])).returns(() => ['Artist 1', 'Artist 2']);

            // Act
            fileMetadataFactoryMock

    let dateTimeMock: IMock<DateTime>;
                .returns(() => Promise.resolve(fileMetadataStub));
            fileMetadataFactoryMock
            trackFieldCreatorMock.verify((x) => x.createNumberField(123456000), Times.exactly(1));
            fileMetadataStub.genres = ['Genre 1', 'Genre 2'];
            expect(track.indexingSuccess).toEqual(1);
            fileMetadataFactoryMock
            // Act

            const trackFiller: TrackFiller = createTrackFiller();

            trackFieldCreatorMock.verify((x) => x.createNumberField(15), Times.exactly(1));
                .returns(() => Promise.resolve(fileMetadataStub));
        it('should fill in track dateFileModified with the date that the file was modified in ticks', async () => {

            trackFieldCreatorMock.verify((x) => x.createTextField('Album title'), Times.exactly(1));
        });
            expect(track.mimeType).toEqual('audio/mpeg');
            const fileMetadataStub = new FileMetadataImplementation();
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
            const trackFiller: TrackFiller = createTrackFiller();
            // Assert
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
            const trackFiller: TrackFiller = createTrackFiller();
        fileAccessMock = Mock.ofType<FileAccessBase>();
            await trackFiller.addFileMetadataToTrackAsync(track, false);
            await trackFiller.addFileMetadataToTrackAsync(track, false);

            // Act
        });
            expect(track.discCount).toEqual(2);
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
            expect(track.needsAlbumArtworkIndexing).toEqual(1);
        it('should fill in track hasLyrics with 0 if the audio file lyrics are not empty', async () => {

        it('should fill in track discNumber with the disc number of the audio file', async () => {
            fileMetadataFactoryMock

            // Arrange
            albumKeyGeneratorMock.object,
            fileMetadataStub.discNumber = 1;
            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];
            fileMetadataFactoryMock
            await trackFiller.addFileMetadataToTrackAsync(track, false);
import { MimeTypes } from '../../common/metadata/mime-types';
            fileMetadataStub.lyrics = '';
            expect(track.albumArtists).toEqual(';Album artist 1;;Album artist 2;');
            // Act

            // Assert
import { TrackFiller } from './track-filler';
            // Assert
            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];




    public albumArtists: string[];


            const fileMetadataStub = new FileMetadataImplementation();
            fileMetadataFactoryMock
            // Arrange
import { IFileMetadata } from '../../common/metadata/i-file-metadata';
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
            fileMetadataFactoryMock
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);

            expect(track.albumTitle).toEqual('Album title');
            expect(track.duration).toEqual(123456000);
            // Arrange
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            trackFieldCreatorMock.setup((x) => x.createNumberField(123456)).returns(() => 123456);

            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            // Act
            expect(track.year).toEqual(2020);
            dateTimeMock.setup((x) => x.convertDateToTicks(It.isAny())).returns(() => 123456);
            // Assert
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
class FileMetadataImplementation implements IFileMetadata {
        it('should fill in track mimeType with the mime type of the audio file', async () => {
            expect(track.discNumber).toEqual(1);
            const fileMetadataStub = new FileMetadataImplementation();
            const trackFiller: TrackFiller = createTrackFiller();

            fileMetadataStub.discCount = 2;
        it('should fill in track bitRate with the bit rate of the audio file', async () => {

            const trackFiller: TrackFiller = createTrackFiller();
            fileMetadataStub.album = 'Album title';
            expect(track.fileSize).toEqual(123);
            // Arrange
            // Assert
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
            fileMetadataFactoryMock

            // Arrange

            const trackFiller: TrackFiller = createTrackFiller();
            expect(track.needsIndexing).toEqual(0);
            // Assert
    public rating: number;
            await trackFiller.addFileMetadataToTrackAsync(track, false);
        });
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);

    public conductor: string;
            expect(track.trackTitle).toEqual('Track title');

        });
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
        });
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
            expect(track.duration).toEqual(123456000);
            trackFieldCreatorMock.verify((x) => x.createNumberField(1), Times.exactly(1));

            expect(track.fileName).toEqual('Track 1');
        it('should only fill essential metadata when fillOnlyEssentialMetadata is true', async () => {
            // Act
            fileMetadataStub.durationInMilliseconds = 123456000;
            // Assert
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
            const trackFiller: TrackFiller = createTrackFiller();
        it('should fill in track duration with the duration of the audio file', async () => {
            expect(track.indexingSuccess).toEqual(1);

            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];
            const fileMetadataStub = new FileMetadataImplementation();


            // Arrange
            // Arrange
            // Assert

                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))

            // Assert

            fileMetadataFactoryMock
            const trackFiller: TrackFiller = createTrackFiller();
            // Arrange
            fileMetadataFactoryMock
        fileAccessMock.setup((x) => x.getDateCreatedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 456);

            const trackFiller: TrackFiller = createTrackFiller();
import { FileAccessBase } from '../../common/io/file-access.base';
            expect(track.trackCount).toEqual(15);
            fileMetadataFactoryMock
            await trackFiller.addFileMetadataToTrackAsync(track, false);
            await trackFiller.addFileMetadataToTrackAsync(track, false);
            expect(track.needsAlbumArtworkIndexing).toEqual(1);
            .returns(() => ';Album artist 1;;Album artist 2;');
            metadataPatcherMock.verify((x) => x.joinUnsplittableMetadata(['Genre 1', 'Genre 2']), Times.exactly(1));
            expect(track.needsAlbumArtworkIndexing).toEqual(1);

            loggerMock.object,

    let loggerMock: IMock<Logger>;
            fileMetadataStub.title = 'Track title';
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            expect(track.dateLastSynced).toEqual(0);

    public save(): void {}

            // Act

            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];

            fileMetadataFactoryMock
            const fileMetadataStub = new FileMetadataImplementation();
    public async loadAsync(): Promise<void> {}
                .setup((x) => x.joinUnsplittableMetadata(['Album artist 1', 'Album artist 2']))
            fileMetadataFactoryMock
            expect(track.dateFileModified).toEqual(789);

            fileAccessMock.verify((x) => x.getFileExtension('/home/user/Music/Track 1.mp3'), Times.exactly(1));
            metadataPatcherMock.setup((x) => x.joinUnsplittableMetadata(['Genre 1', 'Genre 2'])).returns(() => ['Genre 1', 'Genre 2']);
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
            expect(track.fileName).toEqual('Track 1');
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
    let albumKeyGeneratorMock: IMock<AlbumKeyGenerator>;
            fileMetadataStub.trackNumber = 1;
            fileMetadataStub.discNumber = 1;
            fileMetadataFactoryMock


            fileMetadataFactoryMock
            fileMetadataStub.sampleRate = 44;
        });
            // Arrange
            const trackFiller: TrackFiller = createTrackFiller();
            const track: Track = new Track('/home/user/Music/Track 1.mp3');

            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
            fileMetadataStub.trackNumber = 1;
        trackFieldCreatorMock.setup((x) => x.createNumberField(15)).returns(() => 15);
            const trackFiller: TrackFiller = createTrackFiller();
    public bitRate: number;
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
            // Assert
            await trackFiller.addFileMetadataToTrackAsync(track, false);
            // Assert
            expect(track.artists).toEqual(';Artist 1;;Artist 2;');
        it('should fill all metadata when fillOnlyEssentialMetadata is false', async () => {
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
            // Arrange
            fileMetadataFactoryMock
            const trackFiller: TrackFiller = createTrackFiller();

            fileMetadataStub.trackCount = 15;

            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);

            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            // Assert

            await trackFiller.addFileMetadataToTrackAsync(track, false);
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
        );
            fileMetadataStub.rating = 4;
        });
            const fileMetadataStub = new FileMetadataImplementation();
            dateTimeMock.object,
            expect(track.fileSize).toEqual(123);

            const fileMetadataStub = new FileMetadataImplementation();
            trackFieldCreatorMock.verify((x) => x.createNumberField(1), Times.exactly(1));
                .returns(() => Promise.resolve(fileMetadataStub));


            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];
            fileMetadataStub.durationInMilliseconds = 123456000;
            expect(track.hasLyrics).toEqual(1);
            // Arrange
            // Arrange
            expect(track.discCount).toEqual(0);

            fileMetadataFactoryMock
            expect(track.dateFileModified).toEqual(0);
        it('should fill in an empty track indexingFailureReason if no errors occur', async () => {

            expect(track.sampleRate).toEqual(0);
                .returns(() => ['Album artist 1', 'Album artist 2']);


            expect(track.trackTitle).toEqual('Track title');
    public path: string;
        mimeTypesMock = Mock.ofType<MimeTypes>();
            expect(track.trackTitle).toEqual('Track title');
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
            await trackFiller.addFileMetadataToTrackAsync(track, false);
            // Arrange


            trackFieldCreatorMock.verify((x) => x.createMultiTextField(['Album artist 1', 'Album artist 2']), Times.exactly(1));
            trackFieldCreatorMock.verify((x) => x.createTextField('Track title'), Times.exactly(1));
            const fileMetadataStub = new FileMetadataImplementation();
            await trackFiller.addFileMetadataToTrackAsync(track, false);
            expect(track.rating).toEqual(4);

            // Arrange
            fileMetadataFactoryMock
            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];
            // Act
            const trackFiller: TrackFiller = createTrackFiller();
            fileMetadataStub.rating = 4;

            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);

            const fileMetadataStub = new FileMetadataImplementation();
        });
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            trackFieldCreatorMock.verify((x) => x.createNumberField(320), Times.exactly(1));
            const trackFiller: TrackFiller = createTrackFiller();
            // Act
            expect(track.dateAdded).toEqual(0);
            fileMetadataStub.year = 2020;

            await trackFiller.addFileMetadataToTrackAsync(track, false);
        mimeTypesMock.setup((x) => x.getMimeTypeForFileExtension('.mp3')).returns(() => 'audio/mpeg');
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).throws(new Error('The error text'));
            const fileMetadataStub = new FileMetadataImplementation();
    public sampleRate: number;
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
                .returns(() => Promise.resolve(fileMetadataStub));
                .returns(() => Promise.resolve(fileMetadataStub));
        });
            expect(track.discNumber).toEqual(1);

                .returns(() => Promise.resolve(fileMetadataStub));
            // Assert

            .returns(() => ';Album title;;Album artist 1;;Album artist 2;');
            .setup((x) => x.createMultiTextField(['Album artist 1', 'Album artist 2']))
            await trackFiller.addFileMetadataToTrackAsync(track, false);
        });
        trackFieldCreatorMock.setup((x) => x.createMultiTextField(['Genre 1', 'Genre 2'])).returns(() => ';Genre 1;;Genre 2;');
            await trackFiller.addFileMetadataToTrackAsync(track, false);

            const fileMetadataStub = new FileMetadataImplementation();
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);

        fileMetadataFactoryMock = Mock.ofType<FileMetadataFactoryBase>();
            fileMetadataFactoryMock
            metadataPatcherMock
        it('should fill in track dateAdded wit hthe current date and time in ticks', async () => {


            const fileMetadataStub = new FileMetadataImplementation();
            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];
    });
        });
            fileMetadataStub.artists = ['Artist 1', 'Artist 2'];
            expect(track.mimeType).toEqual('');
                .returns(() => Promise.resolve(fileMetadataStub));
                .returns(() => Promise.resolve(fileMetadataStub));
            fileMetadataStub.album = 'Album title';
            // Arrange
            fileMetadataStub.album = 'Album title';
            await trackFiller.addFileMetadataToTrackAsync(track, false);
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
            trackFieldCreatorMock.object,
            fileMetadataStub.artists = ['Artist 1', 'Artist 2'];
        trackFieldCreatorMock

import { FileMetadataFactoryBase } from '../../common/metadata/file-metadata.factory.base';
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
            expect(track.trackCount).toEqual(15);
            const fileMetadataStub = new FileMetadataImplementation();
            await trackFiller.addFileMetadataToTrackAsync(track, false);

                .returns(() => Promise.resolve(fileMetadataStub));
            const trackFiller: TrackFiller = createTrackFiller();
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);



            fileMetadataStub.bitRate = 320;
            expect(track.dateLastSynced).toEqual(123456);
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            expect(track.artists).toEqual(';Artist 1;;Artist 2;');
            metadataPatcherMock.setup((x) => x.joinUnsplittableMetadata(['Genre 1', 'Genre 2'])).returns(() => ['Genre 1', 'Genre 2']);
            // Act
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            await trackFiller.addFileMetadataToTrackAsync(track, false);
    public picture: Buffer;

                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
        loggerMock = Mock.ofType<Logger>();
            const trackFiller: TrackFiller = createTrackFiller();
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            trackFieldCreatorMock.setup((x) => x.createNumberField(123456000)).returns(() => 123456000);
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            fileMetadataStub.trackCount = 15;
        trackFieldCreatorMock.setup((x) => x.createNumberField(320)).returns(() => 320);
            // Arrange
            fileMetadataStub.album = 'Album title';
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).throws(new Error('The error text'));
import { AlbumKeyGenerator } from '../../data/album-key-generator';
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
        });

            trackFieldCreatorMock.setup((x) => x.createNumberField(123456)).returns(() => 123456);

        trackFieldCreatorMock.setup((x) => x.createTextField('Album title')).returns(() => 'Album title');
            expect(track.needsIndexing).toEqual(0);
            // Act
        trackFieldCreatorMock.setup((x) => x.createMultiTextField(['Artist 1', 'Artist 2'])).returns(() => ';Artist 1;;Artist 2;');
            // Arrange


                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
        });

            fileMetadataFactoryMock
            await trackFiller.addFileMetadataToTrackAsync(track, false);
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
                .returns(() => Promise.resolve(fileMetadataStub));
            const fileMetadataStub = new FileMetadataImplementation();
            expect(track.dateFileModified).toEqual(789);

            expect(track.albumArtists).toEqual(';Album artist 1;;Album artist 2;');
            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];
    public year: number;
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
            const trackFiller: TrackFiller = createTrackFiller();
        });
    public discCount: number;
            await trackFiller.addFileMetadataToTrackAsync(track, false);
            // Act
            // Act


            const trackFiller: TrackFiller = createTrackFiller();
    function createTrackFiller(): TrackFiller {
            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];

        trackFieldCreatorMock.setup((x) => x.createNumberField(2)).returns(() => 2);
            fileMetadataStub.discCount = 2;
            const fileMetadataStub = new FileMetadataImplementation();
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
    let trackFieldCreatorMock: IMock<TrackFieldCreator>;
            const fileMetadataStub = new FileMetadataImplementation();
                .returns(() => Promise.resolve(fileMetadataStub));
        it('should fill in track albumTitle with a single value track field', async () => {
        });

        it('should fill in track albumArtists with a multi value track field', async () => {
            expect(track.dateFileCreated).toEqual(456);

                .returns(() => ['Album artist 1', 'Album artist 2']);
                .returns(() => Promise.resolve(fileMetadataStub));

    public composers: string[];
            const trackFiller: TrackFiller = createTrackFiller();
            fileAccessMock.object,
            await trackFiller.addFileMetadataToTrackAsync(track, false);
            fileMetadataStub.genres = ['Genre 1', 'Genre 2'];
            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];
            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];
        trackFieldCreatorMock = Mock.ofType<TrackFieldCreator>();
            const fileMetadataStub = new FileMetadataImplementation();
            trackFieldCreatorMock.setup((x) => x.createNumberField(123456000)).returns(() => 123456000);
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
            fileMetadataFactoryMock

    let fileMetadataFactoryMock: IMock<FileMetadataFactoryBase>;
            const fileMetadataStub = new FileMetadataImplementation();
            fileMetadataStub.discNumber = 1;
            const track: Track = new Track('/home/user/Music/Track 1.mp3');

                .setup((x) => x.joinUnsplittableMetadata(['Album artist 1', 'Album artist 2']))
            const trackFiller: TrackFiller = createTrackFiller();

            // Act
            const track: Track = new Track('/home/user/Music/Track 1.mp3');

            expect(track.genres).toEqual(';Genre 1;;Genre 2;');

            expect(track.indexingFailureReason).toEqual('');
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
        });
        trackFieldCreatorMock.setup((x) => x.createNumberField(4)).returns(() => 4);
            expect(track.duration).toEqual(123456000);

            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];

            const fileMetadataStub = new FileMetadataImplementation();

                .returns(() => Promise.resolve(fileMetadataStub));
            fileMetadataStub.lyrics = 'Blabla';
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
            const trackFiller: TrackFiller = createTrackFiller();
            // Act
    public comment: string;
        dateTimeMock = Mock.ofType<DateTime>();
        });
            mimeTypesMock.object,
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
                .returns(() => Promise.resolve(fileMetadataStub));
            const trackFiller: TrackFiller = createTrackFiller();
            metadataPatcherMock.setup((x) => x.joinUnsplittableMetadata(['Artist 1', 'Artist 2'])).returns(() => ['Artist 1', 'Artist 2']);
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            fileMetadataStub.rating = 4;
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
            await trackFiller.addFileMetadataToTrackAsync(track, false);
            fileMetadataStub.album = 'Album title';
    let mimeTypesMock: IMock<MimeTypes>;
            trackFieldCreatorMock.verify((x) => x.createMultiTextField(['Genre 1', 'Genre 2']), Times.exactly(1));

            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
            await trackFiller.addFileMetadataToTrackAsync(track, false);
            // Assert

            trackFieldCreatorMock.verify((x) => x.createNumberField(2020), Times.exactly(1));
            // Arrange
    public trackCount: number;
            // Assert
        it('should fill in track needsAlbumArtworkIndexing with 1', async () => {
                .returns(() => Promise.resolve(fileMetadataStub));
            // Arrange

                .returns(() => Promise.resolve(fileMetadataStub));
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))

        it('should fill in track trackTitle with a single value track field', async () => {

            await trackFiller.addFileMetadataToTrackAsync(track, false);
            // Assert
            metadataPatcherMock.verify((x) => x.joinUnsplittableMetadata(['Album artist 1', 'Album artist 2']), Times.exactly(2));

        });

            expect(track.trackNumber).toEqual(1);
            fileAccessMock.verify((x) => x.getFileName('/home/user/Music/Track 1.mp3'), Times.exactly(1));
            // Arrange
            metadataPatcherMock.verify((x) => x.joinUnsplittableMetadata(['Artist 1', 'Artist 2']), Times.exactly(1));
            expect(track.dateFileCreated).toEqual(456);

            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];

        it('should fill in track hasLyrics with 0 if the audio file lyrics are empty', async () => {

            const trackFiller: TrackFiller = createTrackFiller();

                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
            // Act
    describe('addFileMetadataToTrackAsync', () => {
    let fileAccessMock: IMock<FileAccessBase>;
        trackFieldCreatorMock.setup((x) => x.createNumberField(44)).returns(() => 44);
    let metadataPatcherMock: IMock<MetadataPatcher>;
    public title: string;
        it('should fill in track indexingSuccess with 0 if errors occur', async () => {
            const fileMetadataStub = new FileMetadataImplementation();

            const track: Track = new Track('/home/user/Music/Track 1.mp3');


        albumKeyGeneratorMock = Mock.ofType<AlbumKeyGenerator>();
            // Arrange

            metadataPatcherMock

            // Arrange

            expect(track.albumTitle).toEqual('');
            expect(track.hasLyrics).toEqual(1);
        });
            // Assert
            const fileMetadataStub = new FileMetadataImplementation();
            trackFieldCreatorMock.verify((x) => x.createNumberField(4), Times.exactly(1));
            expect(track.dateAdded).toEqual(123456);
            const fileMetadataStub = new FileMetadataImplementation();

            // Act
            expect(track.albumKey).toEqual(';Album title;;Album artist 1;;Album artist 2;');
        it('should fill in track dateLastSynced with the current date and time in ticks', async () => {

        });

        it('should fill in track fileName with the file name of the audio file', async () => {
            albumKeyGeneratorMock.verify((x) => x.generateAlbumKey('Album title', ['Album artist 1', 'Album artist 2']), Times.exactly(1));
                .setup((x) => x.joinUnsplittableMetadata(['Album artist 1', 'Album artist 2']))

            // Act

            expect(track.rating).toEqual(4);
            expect(track.albumKey).toEqual(';Album title;;Album artist 1;;Album artist 2;');
import { Track } from '../../data/entities/track';
            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];
import { DateTime } from '../../common/date-time';

            // Act
    }
            mimeTypesMock.verify((x) => x.getMimeTypeForFileExtension('.mp3'), Times.exactly(1));
                .returns(() => ['Album artist 1', 'Album artist 2']);
            .setup((x) => x.generateAlbumKey('Album title', ['Album artist 1', 'Album artist 2']))
});
    public discNumber: number;
            fileMetadataStub.durationInMilliseconds = 123456000;
            fileMetadataStub.discCount = 2;
        it('should fill in track genres with a multi value track field', async () => {
            metadataPatcherMock
            trackFieldCreatorMock.setup((x) => x.createNumberField(123456000)).returns(() => 123456000);
            const fileMetadataStub = new FileMetadataImplementation();
            trackFieldCreatorMock.verify((x) => x.createMultiTextField(['Artist 1', 'Artist 2']), Times.exactly(1));
            // Act
            // Arrange
            // Act
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
    });
            const fileMetadataStub = new FileMetadataImplementation();
            fileMetadataStub.lyrics = 'Blabla';
            await trackFiller.addFileMetadataToTrackAsync(track, false);
            // Act

            const trackFiller: TrackFiller = createTrackFiller();
        });
            // Assert
        it('should fill in track rating with the rating of the audio file', async () => {
        fileAccessMock.setup((x) => x.getFileName('/home/user/Music/Track 1.mp3')).returns(() => 'Track 1');
            fileMetadataStub.album = 'Album title';
            const fileMetadataStub = new FileMetadataImplementation();
import { IMock, It, Mock, Times } from 'typemoq';
            fileMetadataStub.bitRate = 320;
            // Assert
    beforeEach(() => {
            expect(track.needsIndexing).toEqual(0);
            trackFieldCreatorMock.verify((x) => x.createNumberField(2), Times.exactly(1));
        it('should fill in track discCount with the disc count of the audio file', async () => {
        });
            expect(track.dateLastSynced).toEqual(123456);
                .returns(() => Promise.resolve(fileMetadataStub));
}
            // Act
            fileMetadataFactoryMock
import { TrackFieldCreator } from './track-field-creator';
                .returns(() => Promise.resolve(fileMetadataStub));
            // Arrange
                .returns(() => Promise.resolve(fileMetadataStub));
        it('should fill in track year with the year of the audio file', async () => {
            // Assert

            const trackFiller: TrackFiller = createTrackFiller();
            await trackFiller.addFileMetadataToTrackAsync(track, false);
                .returns(() => Promise.resolve(fileMetadataStub));
            // Assert
            fileMetadataFactoryMock

            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
        });


            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];
            expect(track.artists).toEqual(';Artist 1;;Artist 2;');
    public genres: string[];
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
        trackFieldCreatorMock.setup((x) => x.createTextField('Track title')).returns(() => 'Track title');
            await trackFiller.addFileMetadataToTrackAsync(track, false);
            // Assert
describe('TrackFiller', () => {
            fileMetadataFactoryMock
            // Act
            // Arrange

            fileAccessMock.verify((x) => x.getFileSizeInBytes('/home/user/Music/Track 1.mp3'), Times.exactly(1));

            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];
            fileMetadataFactoryMock
        it('should fill in track albumKey with a generated album key', async () => {

            expect(track.year).toEqual(0);
            // Act
        return new TrackFiller(


            const fileMetadataStub = new FileMetadataImplementation();
import { Logger } from '../../common/logger';
                .returns(() => Promise.resolve(fileMetadataStub));
            expect(track.discCount).toEqual(2);

        it('should fill in track needsIndexing with 0', async () => {
    public beatsPerMinute: number;
            // Act
            const fileMetadataStub = new FileMetadataImplementation();
            await trackFiller.addFileMetadataToTrackAsync(track, true);
            fileMetadataFactoryMock

            // Arrange
            expect(track.mimeType).toEqual('audio/mpeg');
            expect(track.genres).toEqual('');
        it('should fill in track dateFileCreated with the date that the file was created in ticks', async () => {

                .returns(() => Promise.resolve(fileMetadataStub));
            expect(track.fileSize).toEqual(123);
                .returns(() => Promise.resolve(fileMetadataStub));
            const trackFiller: TrackFiller = createTrackFiller();
            dateTimeMock.setup((x) => x.convertDateToTicks(It.isAny())).returns(() => 123456);
            metadataPatcherMock
        });
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
    public durationInMilliseconds: number;
            // Assert

            metadataPatcherMock.object,
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            expect(track.bitRate).toEqual(320);
            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];
        it('should fill in track trackNumber with the track number of the audio file', async () => {
        });
            dateTimeMock.setup((x) => x.convertDateToTicks(It.isAny())).returns(() => 123456);

            expect(track.hasLyrics).toEqual(0);
            // Arrange
            // Assert
            expect(track.trackNumber).toEqual(1);
            expect(track.hasLyrics).toEqual(0);
            // Assert
            expect(track.albumTitle).toEqual('Album title');


            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
        });
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
        trackFieldCreatorMock.setup((x) => x.createNumberField(2020)).returns(() => 2020);

            const fileMetadataStub = new FileMetadataImplementation();
            // Act
            // Act
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            const trackFiller: TrackFiller = createTrackFiller();

            expect(track.indexingSuccess).toEqual(0);

            const trackFiller: TrackFiller = createTrackFiller();
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
            expect(track.indexingFailureReason).toEqual('The error text');
                .returns(() => Promise.resolve(fileMetadataStub));
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
            fileMetadataStub.lyrics = 'Blabla';
        trackFieldCreatorMock.setup((x) => x.createNumberField(123456)).returns(() => 123456);
                .returns(() => Promise.resolve(fileMetadataStub));
            // Assert
            fileMetadataFactoryMock

                .returns(() => Promise.resolve(fileMetadataStub));
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
            fileMetadataStub.year = 2020;
    public lyrics: string;
            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];
            const track: Track = new Track('/home/user/Music/Track 1.mp3');


        fileAccessMock.setup((x) => x.getFileSizeInBytes('/home/user/Music/Track 1.mp3')).returns(() => 123);

            const fileMetadataStub = new FileMetadataImplementation();
    public grouping: string;
            expect(track.sampleRate).toEqual(44);

            expect(track.genres).toEqual(';Genre 1;;Genre 2;');

                .returns(() => Promise.resolve(fileMetadataStub));
                .returns(() => ['Album artist 1', 'Album artist 2']);
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
            await trackFiller.addFileMetadataToTrackAsync(track, false);
            fileMetadataFactoryMock
            expect(track.albumKey).toEqual(';Album title;;Album artist 1;;Album artist 2;');
            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];
            metadataPatcherMock.verify((x) => x.joinUnsplittableMetadata(['Album artist 1', 'Album artist 2']), Times.exactly(2));
            // Act



            expect(track.year).toEqual(2020);
        });
        it('should fill in track trackCount with the track count of the audio file', async () => {
            const trackFiller: TrackFiller = createTrackFiller();
            fileMetadataStub.albumArtists = ['Album artist 1', 'Album artist 2'];
            expect(track.indexingFailureReason).toEqual('');
            fileMetadataStub.sampleRate = 44;
            // Arrange
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            await trackFiller.addFileMetadataToTrackAsync(track, false);
            fileMetadataStub.sampleRate = 44;
        it('should fill in track indexingSuccess with 1 if no errors occur', async () => {
            await trackFiller.addFileMetadataToTrackAsync(track, false);
            // Assert
            fileMetadataFactoryMock
import { MetadataPatcher } from '../../common/metadata/metadata-patcher';
            await trackFiller.addFileMetadataToTrackAsync(track, false);

            fileMetadataFactoryMock

            expect(track.dateFileCreated).toEqual(0);
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))



            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            // Act
            // Act


        });
            // Act
            // Assert
            expect(track.trackCount).toEqual(0);
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            // Assert
            expect(track.dateAdded).toEqual(123456);
            await trackFiller.addFileMetadataToTrackAsync(track, false);
            fileMetadataStub.genres = ['Genre 1', 'Genre 2'];
            expect(track.bitRate).toEqual(320);

            // Assert
        it('should fill in track sampleRate with the sample rate of the audio file', async () => {

            expect(track.indexingFailureReason).toEqual('');
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
            // Assert
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);

                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
            const fileMetadataStub = new FileMetadataImplementation();
        it('should fill in track indexingFailureReason with the error text if an error occur', async () => {
            trackFieldCreatorMock.verify((x) => x.createNumberField(44), Times.exactly(1));

        albumKeyGeneratorMock
            dateTimeMock.setup((x) => x.convertDateToTicks(It.isAny())).returns(() => 123456);
            await trackFiller.addFileMetadataToTrackAsync(track, false);
    public artists: string[];
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))

            expect(track.albumArtists).toEqual('');
            expect(track.bitRate).toEqual(0);
    public album: string;

            const fileMetadataStub = new FileMetadataImplementation();
            fileMetadataStub.title = 'Track title';

                .setup((x) => x.joinUnsplittableMetadata(['Album artist 1', 'Album artist 2']))

            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            fileMetadataStub.title = 'Track title';

            const track: Track = new Track('/home/user/Music/Track 1.mp3');
    public trackNumber: number;
        });
        it('should fill in track artists with a multi value track field', async () => {

                .returns(() => Promise.resolve(fileMetadataStub));
        });
                .returns(() => Promise.resolve(fileMetadataStub));
            expect(track.indexingSuccess).toEqual(1);
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            fileAccessMock.setup((x) => x.getDateModifiedInTicks('/home/user/Music/Track 1.mp3')).returns(() => 789);
                .returns(() => Promise.resolve(fileMetadataStub));
            // Assert

            // Arrange
            expect(track.fileName).toEqual('Track 1');
            // Arrange

                .returns(() => Promise.resolve(fileMetadataStub));
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            expect(track.sampleRate).toEqual(44);
            fileMetadataStub.artists = ['Artist 1', 'Artist 2'];
            fileMetadataStub.year = 2020;
            fileMetadataStub.trackCount = 15;
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            const track: Track = new Track('/home/user/Music/Track 1.mp3');
            fileMetadataFactoryMock.object,
            const fileMetadataStub = new FileMetadataImplementation();
            fileMetadataStub.bitRate = 320;
                .setup((x) => x.createAsync('/home/user/Music/Track 1.mp3'))
            // Arrange
