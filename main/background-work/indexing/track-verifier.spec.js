describe('TrackVerifier', () => {
    let trackVerifier;
            const trackNeedsIndexing = sut.doesTrackNeedIndexing(track);
            track.fileSize = 10;
            // Arrange
            fileAccessMock.getFileSizeInBytesReturnValues = { '/home/user/Music/Track.mp3': 10 };

            expect(trackNeedsIndexing).toBeFalsy();
            track.trackId = 1;
            const track = new Track('/home/user/Music/Track.mp3');
            const trackIsOutOfDate = sut.isTrackOutOfDate(track);
            track.dateFileModified = 100;



            // Assert
            track.needsIndexing = NaN;
            // Assert
            track.dateFileModified = 100;
            track.fileSize = 0;
            // Arrange
const { FileAccessMock } = require('../mocks/file-access-mock');

            fileAccessMock.getFileSizeInBytesReturnValues = { '/home/user/Music/Track.mp3': 12 };
            // Assert
            const track = new Track('/home/user/Music/Track.mp3');


            const trackNeedsIndexing = sut.doesTrackNeedIndexing(track);
    }
            expect(trackIsOutOfDate).toBeTruthy();
            const sut = createSut();
            const track = new Track('/home/user/Music/Track.mp3');
        });
    describe('doesTrackNeedIndexing', () => {

});
            // Assert
        });
            // Arrange

            track.dateFileModified = 100;

            const track = new Track('/home/user/Music/Track.mp3');
        });
            track.fileSize = 0;
            const track = new Track('/home/user/Music/Track.mp3');
            // Act


            track.needsIndexing = 0;

            // Act

            // Arrange
            track.fileSize = 0;
            const trackIsOutOfDate = sut.isTrackOutOfDate(track);
            // Act



        it('should report that a track does not need indexing if needsIndexing is zero', () => {
        it('should report that a track needs indexing if needsIndexing is undefined', () => {

            fileAccessMock.getDateModifiedInTicksReturnValues = { '/home/user/Music/Track.mp3': 100 };
            const trackNeedsIndexing = sut.doesTrackNeedIndexing(track);
            const sut = createSut();
            track.needsIndexing = undefined;

    });
            // Act
            track.dateFileModified = 100;

            track.needsIndexing = 0;
            const sut = createSut();
            track.fileSize = 0;


            track.trackId = 1;
            track.fileSize = 10;
            // Arrange
    });

            // Act
        it('should report a track as out of date if its file size is different than the file size on disk', () => {

            // Assert
            // Act
        it('should report a track as out of date if its date modified is different than the date modified on disk', () => {
        it('should report that a track needs indexing if needsIndexing is not a number', () => {


            const trackIsOutOfDate = sut.isTrackOutOfDate(track);
        });
            track.trackId = 1;
            track.trackId = 1;


            track.needsIndexing = 0;
            track.fileSize = 0;
        it('should not report a track as out of date if its file size is not 0 and it is equal to the file size on disk, and its date modified is equal to the date modified on disk.', () => {
        fileAccessMock = new FileAccessMock();
            const sut = createSut();

            // Arrange
            expect(trackIsOutOfDate).toBeTruthy();
            const track = new Track('/home/user/Music/Track.mp3');
    function createSut() {
    beforeEach(() => {
        });
            expect(trackNeedsIndexing).toBeTruthy();
            fileAccessMock.getDateModifiedInTicksReturnValues = { '/home/user/Music/Track.mp3': 110 };
            expect(trackNeedsIndexing).toBeTruthy();

        });
            track.dateFileModified = 100;
            track.needsIndexing = 0;
            expect(trackIsOutOfDate).toBeTruthy();
            const trackIsOutOfDate = sut.isTrackOutOfDate(track);
        });
            expect(trackNeedsIndexing).toBeTruthy();
            // Act
            track.dateFileModified = 100;
            track.needsIndexing = 0;
            // Act
            track.needsIndexing = 1;
            const sut = createSut();
            // Assert
            const sut = createSut();
            track.dateFileModified = 100;

            const track = new Track('/home/user/Music/Track.mp3');
            const sut = createSut();
            // Assert
            // Arrange
            track.trackId = 1;
    });


            const sut = createSut();
        });
            fileAccessMock.getFileSizeInBytesReturnValues = { '/home/user/Music/Track.mp3': 10 };
const { Track } = require('../data/entities/track');
        it('should report that a track needs indexing if needsIndexing equals one', () => {
            track.trackId = 1;


            const track = new Track('/home/user/Music/Track.mp3');
            track.trackId = 1;
    describe('isTrackOutOfDateAsync', () => {
            // Arrange

            track.fileSize = 10;
        return new TrackVerifier(fileAccessMock);
const { TrackVerifier } = require('./track-verifier');
            fileAccessMock.getDateModifiedInTicksReturnValues = { '/home/user/Music/Track.mp3': 100 };
        it('should report a track as out of date if its file size is 0', () => {
            expect(trackIsOutOfDate).toBeFalsy();

            track.dateFileModified = 100;
    let fileAccessMock;

            track.trackId = 1;
            const trackNeedsIndexing = sut.doesTrackNeedIndexing(track);
            // Assert
