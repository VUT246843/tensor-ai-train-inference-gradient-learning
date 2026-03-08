
            // Assert

    describe('constructor', () => {
            const tracks: TrackModel[] = queue.tracksInPlaybackOrder;
            // Arrange
            const track4Clone: TrackModel = queue.tracks[3];
    describe('shuffle', () => {
            // Arrange
            // Assert
        });
            queue.setTracks([track1, track2], false);
            queue.setTracks([track1, track2, track3, track4, track5], true);

            // Arrange
            // Act
            expect(previousTrack).toBeUndefined();
        it('should return the first track when the queue is not shuffled', () => {
            // Arrange
            queue.setTracks([track1, track2, track3], false);
            const track1Clone: TrackModel = queue.tracks[0];
            shufflerMock.setup((x) => x.shuffle([0, 1, 2])).returns(() => [1, 2, 0]);
            // Act
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');

            queue.setTracks([track1, track2, track3], false);
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');

            // Assert

            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            const queue: Queue = createQueue();
            expect(previousTrack).toEqual(track2);
            const previousTrack: TrackModel | undefined = queue.getPreviousTrack(track1Clone, true);
            const track2Clone: TrackModel = queue.tracks[1];


            queue.removeTracks(undefined);
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');

                new Track('/home/user/Music/Track2.mp3'),
            const previousTrack: TrackModel | undefined = queue.getPreviousTrack(track2, false);
            const track1Clone: TrackModel = queue.tracks[0];
            const queue: Queue = createQueue();
            const track2Clone: TrackModel = queue.tracks[1];
import { TrackModel } from '../track/track-model';
            );
import { Track } from '../../data/entities/track';
    });

            const queue: Queue = createQueue();
            queue.setTracks([track1, track2], true);
            expect(queue.getNextTrack(track1, false)).toBeUndefined();
            const track2Clone: TrackModel = queue.tracks[1];
            // Act
            expect(queue.tracks[1]).toEqual(track2);
            // Assert
        it('should return the first track if currentTrack is undefined and the queue is not shuffled', () => {
            const track3Clone: TrackModel = queue.tracks[2];
        });
        it('should add clones of the tracks', () => {
        it('should return undefined if there are no tracks', () => {
            expect(queue.tracks[2]).toEqual(track3);
            // Assert
            const track2: TrackModel = new TrackModel(
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');


            // Assert
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            const track1Clone: TrackModel = queue.tracks[0];
            queue.removeTracks(undefined);

            const track3Clone: TrackModel = queue.tracks[2];
            // Assert
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
        it('should return the first track if currentTrack is undefined and the queue is not shuffled', () => {
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            // Assert


            queue.addTracks([track3, track4, track5]);
        });

            queue.setTracks([track1, track2, track3], false);
            const nextTrack1: TrackModel | undefined = queue.getNextTrack(track1Clone, false);
            expect(queue.tracks.length).toEqual(5);

            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            expect(queue.tracks[1]).toEqual(track2);
            const track4Clone: TrackModel = queue.tracks[3];
            expect(previousTrack).toEqual(track1);
            shufflerMock.setup((x) => x.shuffle([0, 1, 2, 3, 4])).returns(() => [3, 2, 4, 0, 1]);
            // Assert
        });
            expect(queue.tracks[2]).toEqual(track3);
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
    });
            const queue: Queue = createQueue();

            // Assert
            const queue: Queue = createQueue();
            const track5Clone: TrackModel = queue.tracks[4];
            const track4: TrackModel = createTrackModel('/home/user/Music/Track4.mp3');


            // Arrange
            expect(queue.getNextTrack(track4Clone, false)).toEqual(track5);
            queue.setTracks([track1, track2, track3, track4, track5], false);
            queue.removeTracks([track2Clone]);
        });
        });
import { Logger } from '../../common/logger';
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');


            expect(tracks[2].path).toBe(track1.path);
        it('should put tracks in shuffled order when not being shuffled', () => {
        });
            // Act
            expect(nextTrack).toEqual(track3);

            shufflerMock.setup((x) => x.shuffle([0, 1])).returns(() => [1, 0]);

            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');

            const queue: Queue = createQueue();
            // Arrange

            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');


            // Arrange
            queue.setTracks([track1, track2, track3], false);
        });
        it('should keep tracks in unshuffled order after being shuffled', () => {
            const track2Clone: TrackModel = queue.tracks[1];
});


            // Act
    beforeEach(() => {
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
        });
            // Arrange




            // Assert
        it('should return the previous track if currentTrack is not the first track and the queue is not shuffled', () => {
            queue.setTracks([track1, track2, track3], false);

        it('should add tracks to the end of queue when not shuffled', () => {
            const track5: TrackModel = createTrackModel('/home/user/Music/Track5.mp3');
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            // Assert
            const track4: TrackModel = createTrackModel('/home/user/Music/Track4.mp3');
            queue.setTracks([track1, track2, track3], false);
            // Assert
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            queue.setTracks([track1, track2], true);
            const track4: TrackModel = createTrackModel('/home/user/Music/Track4.mp3');

            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            const previousTrack: TrackModel | undefined = queue.getPreviousTrack(track1Clone, false);


            queue.unShuffle();
            // Arrange
            expect(nextTrack).toEqual(track2);
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');

            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');

    });
            expect(tracks[1].path).toBe(track3.path);

            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            expect(queue.getNextTrack(track5Clone, false)).toEqual(undefined);

            queue.addTracks([track3, track4, track5]);
            expect(previousTrack).toEqual(track2);
            expect(queue.tracks[0]).toEqual(track1);

            // Arrange

            // Act
            // Act
            const queue: Queue = createQueue();
            expect(previousTrack).toEqual(track1);
            // Arrange
            const queue: Queue = createQueue();
            // Arrange
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
    describe('getPreviousTrack', () => {

        it('should return the correct next track if the same track is added multiple times', () => {
            // Assert

            const queue: Queue = createQueue();
            // Arrange
            // Act

            const track4: TrackModel = createTrackModel('/home/user/Music/Track4.mp3');
            const track1Clone: TrackModel = queue.tracks[0];
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            // Act
            queue.addTracks([track3, track4, track5]);
import { TranslatorServiceBase } from '../translator/translator.service.base';
            // Arrange
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            // Arrange
            expect(queue.getNextTrack(track3Clone, false)).toEqual(track5);

            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            const queue: Queue = createQueue();

            const track4: TrackModel = createTrackModel('/home/user/Music/Track4.mp3');

    }
            // Assert
            expect(queue.getNextTrack(track1Clone, false)).toEqual(track2);
            // Arrange

            // Assert
            queue.setTracks([track1, track2, track3], true);
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
        it('should return the first track if currentTrack is not found and the queue is shuffled', () => {
            expect(nextTrack).toEqual(track1);

            const track4: TrackModel = createTrackModel('/home/user/Music/Track4.mp3');
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            const previousTrack: TrackModel | undefined = queue.getPreviousTrack(track3, false);
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            queue.setTracks([track1, track2, track3], true);

            shufflerMock.setup((x) => x.shuffle([0, 1, 2, 3, 4])).returns(() => [3, 2, 4, 0, 1]);
            const track3Clone: TrackModel = queue.tracks[2];
            expect(nextTrack).toEqual(track1);
            expect(tracks[0].path).toBe(track1.path);
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');

            expect(queue.tracks[0]).toEqual(track1);

        it('should not remove tracks from queue if tracksToRemove is empty', () => {


            queue.setTracks([track1, track2], false);

            const queue: Queue = createQueue();

            expect(nextTrack).toEqual(track1);
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            expect(queue.tracks[0]).toEqual(track1);
            // Assert
            // Assert
            // Arrange
            queue.setTracks([track1, track2], false);
            expect(queue.getNextTrack(track5Clone, false)).toEqual(track1);
            // Act
        });
            expect(queue.getNextTrack(track3Clone, false)).toEqual(track4);
        it('should remove tracks from shuffled playback order if tracksToRemove has items', () => {
        it('should not remove tracks from shuffled playback order if tracksToRemove is undefined', () => {
            expect(queue.tracks[0]).toEqual(track1);
            expect(queue.getNextTrack(track2Clone, false)).toEqual(undefined);

            queue.setTracks([track1, track2, track3], true);
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            expect(queue.getNextTrack(track5Clone, false)).toEqual(track1);
            queue.setTracks([track1, track2], false);

            const previousTrack: TrackModel | undefined = queue.getPreviousTrack(undefined, false);

            expect(queue.tracks[3]).toEqual(track4);
            const previousTrack: TrackModel | undefined = queue.getPreviousTrack(undefined, false);
            expect(queue.tracks.length).toEqual(0);

            // Arrange
            queue.removeTracks([]);
            shufflerMock.setup((x) => x.shuffle([0, 1])).returns(() => [1, 0]);
        loggerMock = Mock.ofType<Logger>();
            // Act
            expect(queue.getNextTrack(track4Clone, false)).toEqual(track3);

            // Assert
            // Arrange


    let loggerMock: IMock<Logger>;
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            // Act
    describe('getFirstTrack', () => {
            const queue: Queue = createQueue();

        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();

    });
            shufflerMock.setup((x) => x.shuffle([0, 1])).returns(() => [1, 0]);

            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
import { Queue } from './queue';
            const nextTrack: TrackModel | undefined = queue.getNextTrack(track2Clone, false);
            // Act

            queue.shuffle();
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
    describe('tracksInPlaybackOrder', () => {
            expect(queue.tracks.length).toEqual(3);

            expect(queue.tracks[2]).toEqual(track3);

    describe('setTracks', () => {
            queue.setTracks([track1, track2, track3], false);
            const track2Clone: TrackModel = queue.tracks[1];
            const numberOfTracks: number = queue.numberOfTracks;
            const queue: Queue = createQueue();
            // Assert
            const nextTrack: TrackModel | undefined = queue.getNextTrack(undefined, false);

            expect(queue.getNextTrack(track3Clone, false)).toEqual(track4);
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            // Act

            shufflerMock.setup((x) => x.shuffle([0, 1, 2])).returns(() => [1, 2, 0]);
        });

            expect(queue.tracks.length).toEqual(3);
            expect(queue.tracks.length).toEqual(5);
            const track5: TrackModel = createTrackModel('/home/user/Music/Track5.mp3');
        });

            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');


            expect(queue.getNextTrack(track3Clone, false)).toEqual(track4);
                dateTimeMock.object,
            const nextTrack2: TrackModel | undefined = queue.getNextTrack(track2Clone, false);
            // Arrange
            const queue: Queue = createQueue();

    describe('unShuffle', () => {
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
                settingsMock,
            expect(tracks[2].path).toBe(track3.path);
            expect(nextTrack).toEqual(track1);


                settingsMock,
            // Assert
            const track2Clone: TrackModel = queue.tracks[1];
import { DateTime } from '../../common/date-time';
            shufflerMock.setup((x) => x.shuffle([0, 1, 2, 3, 4])).returns(() => [3, 2, 4, 0, 1]);
            const track1Clone: TrackModel = queue.tracks[0];
            expect(previousTrack).toEqual(track1);

            // Arrange
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');

            const queue: Queue = createQueue();
            expect(queue.tracks[2]).toEqual(track3);
            shufflerMock.setup((x) => x.shuffle([0, 1, 2])).returns(() => [1, 2, 0]);

    });
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            expect(queue.getNextTrack(track1Clone, false)).toEqual(track2);
            queue.setTracks([track1, track2, track3], false);
            const track2Clone: TrackModel = queue.tracks[1];
            expect(tracks[0].path).toBe(track2.path);
            queue.setTracks([track1, track2, track3], false);
        });

            // Assert
            const queue: Queue = createQueue();
        });
            const track4Clone: TrackModel = queue.tracks[3];
            // Act
            queue.setTracks([track1, track2, track3], false);
            const track3: TrackModel = new TrackModel(
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');

            const queue: Queue = createQueue();
            const previousTrack: TrackModel | undefined = queue.getPreviousTrack(track2Clone, false);
            queue.setTracks([track1, track2, track3], true);
        });
            // Assert
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');

            shufflerMock.setup((x) => x.shuffle([0, 1, 2])).returns(() => [1, 2, 0]);
            const queue: Queue = createQueue();
            queue.unShuffle();
            // Assert
            queue.removeTracks([track2Clone, track4Clone]);

            queue.setTracks([track1, track2, track3], true);

            // Act
        it('should return the number of tracks', () => {
            queue.removeTracks(undefined);
            const track4: TrackModel = createTrackModel('/home/user/Music/Track4.mp3');
        it('should keep tracks in shuffled order after being shuffled', () => {

    function createQueue(): Queue {
            // Assert
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');

            const track2Clone: TrackModel = queue.tracks[1];
        });

            // Act
            expect(queue.getNextTrack(track3Clone, false)).toEqual(track5);

            shufflerMock.setup((x) => x.shuffle([0, 1, 2])).returns(() => [1, 2, 0]);
            expect(queue.tracks[0]).not.toBe(track1);
            // Arrange
            expect(tracks[2].path).toBe(track3.path);
            // Assert
                translatorServiceMock.object,
        return new Queue(shufflerMock.object, loggerMock.object);
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            // Arrange
    });
            const track4: TrackModel = createTrackModel('/home/user/Music/Track4.mp3');
            );
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');

            const queue: Queue = createQueue();
            // Act



            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
    describe('addTracks', () => {
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            // Assert
            const track1Clone: TrackModel = queue.tracks[0];
describe('Queue', () => {
            expect(queue.tracks[1]).not.toBe(track2);
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
        it('should not remove tracks from unshuffled playback order if tracksToRemove is empty', () => {
        });
        });
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            expect(queue.tracks[3]).not.toBe(track4);
            const firstTrack: TrackModel | undefined = queue.getFirstTrack();
            // Arrange
    describe('tracks', () => {
            queue.setTracks([track1, track2, track3], true);

    describe('removeTracks', () => {
            const nextTrack: TrackModel | undefined = queue.getNextTrack(track3Clone, true);
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            const nextTrack: TrackModel | undefined = queue.getNextTrack(track2Clone, false);
    describe('getNextTrack', () => {

        it('should return the next track if currentTrack is not the last track and the queue is shuffled', () => {
            const track1Clone: TrackModel = queue.tracks[0];
            const queue: Queue = createQueue();
        it('should return the first track if currentTrack is undefined and the queue is shuffled', () => {

            const track3Clone: TrackModel = queue.tracks[2];
        it('should add tracks to the end of queue when shuffled', () => {
            shufflerMock.setup((x) => x.shuffle([0, 1, 2])).returns(() => [1, 2, 0]);


        });
            const queue: Queue = createQueue();
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');

            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');


            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            expect(queue.tracks[1]).toEqual(track2);
            const queue: Queue = createQueue();
            expect(queue.getNextTrack(track1, false)).toBeUndefined();
            expect(queue.tracks[1]).toEqual(track2);

        it('should set the tracks in the order they were provided when shuffle is true', () => {
            // Act
            const queue: Queue = createQueue();
        it('should remove tracks from queue if tracksToRemove has items', () => {
            // Act
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
        });
            const nextTrack: TrackModel | undefined = queue.getNextTrack(track1Clone, true);

            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            // Act
            expect(nextTrack).toEqual(track3);
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            queue.removeTracks([track2Clone, track4Clone]);
            expect(queue.tracks[0]).toEqual(track1Clone);
            const queue: Queue = createQueue();

            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');

            queue.shuffle();
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            queue.setTracks([track1, track2, track3, track4, track5], false);
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');

            const nextTrack: TrackModel | undefined = queue.getNextTrack(track1Clone, false);
            const track3Clone: TrackModel = queue.tracks[2];
                translatorServiceMock.object,
            const tracks: TrackModel[] = queue.tracks;
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
                dateTimeMock.object,
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');

            // Assert
import { IMock, Mock } from 'typemoq';
            expect(queue.getNextTrack(track4Clone, false)).toEqual(track5);
            expect(queue.tracks[1]).not.toBe(track2);
            // Act
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
        });

        });
        });
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');

            expect(firstTrack).toEqual(track2);
            // Arrange
            // Act
            // Arrange
            expect(queue.getNextTrack(track1Clone, false)).toEqual(track2);
            // Arrange
            const queue: Queue = createQueue();
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');

            // Assert
            const nextTrack: TrackModel | undefined = queue.getNextTrack(track3Clone, false);

            const track4: TrackModel = createTrackModel('/home/user/Music/Track4.mp3');
            expect(queue.getNextTrack(track3Clone, false)).toEqual(track5);
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            queue.setTracks([track1, track2, track3], false);
        it('should keep tracks in unshuffled order when not being shuffled', () => {
            expect(queue.tracks[2]).toEqual(track3);
            // Assert

        it('should return the next track if currentTrack is not the last track and the queue is not shuffled', () => {

            // Act


            expect(queue.tracks.length).toEqual(5);
            queue.setTracks([track1, track2, track3], false);
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
    });
            shufflerMock.setup((x) => x.shuffle([0, 1])).returns(() => [1, 0]);


            // Arrange
            queue.setTracks([track1, track1, track2], false);
            const previousTrack: TrackModel | undefined = queue.getPreviousTrack(track3, false);


            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            shufflerMock.setup((x) => x.shuffle([0, 1, 2])).returns(() => [2, 1, 0]);
            expect(queue.tracks[2]).toEqual(track3);
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
        });

            expect(queue.tracks[0]).toEqual(track1);
    });
            const firstTrack: TrackModel | undefined = queue.getFirstTrack();
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
        it('should add tracks to the end of unshuffled playback order', () => {
            // Arrange
            // Arrange
            shufflerMock.setup((x) => x.shuffle([0, 1])).returns(() => [1, 0]);
            // Arrange
            expect(queue.getNextTrack(track3Clone, false)).toEqual(track5);


            const track5: TrackModel = createTrackModel('/home/user/Music/Track5.mp3');
        });

            const track2Clone: TrackModel = queue.tracks[1];
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            // Act

            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');

            // Arrange
            const queue: Queue = createQueue();
        });
    let dateTimeMock: IMock<DateTime>;

            const nextTrack: TrackModel | undefined = queue.getNextTrack(track2Clone, false);
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            const track3Clone: TrackModel = queue.tracks[2];
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
    });
            // Assert
            const queue: Queue = createQueue();
            // Arrange
import { Shuffler } from '../../common/shuffler';

            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            expect(queue.getNextTrack(track1Clone, false)).toEqual(track3);
            // Arrange
            const track5: TrackModel = createTrackModel('/home/user/Music/Track5.mp3');
            expect(queue.getNextTrack(track2Clone, false)).toEqual(track1);
            const queue: Queue = createQueue();
        });
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');

        it('should return undefined if there are no tracks', () => {
            expect(queue.tracks[4]).not.toBe(track5);
            expect(queue.tracks[4]).toEqual(track5);
            expect(queue.tracks.length).toEqual(5);
            expect(queue.tracks.length).toEqual(3);
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            expect(queue.tracks[0]).toEqual(track1);
            queue.setTracks([track1, track2], true);
            const track5: TrackModel = createTrackModel('/home/user/Music/Track5.mp3');
            const queue: Queue = createQueue();

        it('should return undefined if currentTrack is the last track and allowWrapAround is false and the queue is not shuffled', () => {
    let settingsMock: any;
            // Act
        it('should set clones of the tracks', () => {

            expect(firstTrack).toEqual(track1);

        it('should return undefined if currentTrack is the first track and allowWrapAround is false and the queue is shuffled', () => {
        });
            // Arrange


            expect(queue.getNextTrack(track1Clone, false)).toEqual(track2);

        it('should return the first track if currentTrack is not found and the queue is not shuffled', () => {
            expect(numberOfTracks).toEqual(3);
            const queue: Queue = createQueue();
            const track4Clone: TrackModel = queue.tracks[3];


            const queue: Queue = createQueue();
            const queue: Queue = createQueue();
        });
            // Act
            queue.removeTracks([]);
        });

            queue.setTracks([track1, track2, track3], true);
            // Act
            // Act
            // Assert
            // Assert
            const track3Clone: TrackModel = queue.tracks[2];
            const queue: Queue = createQueue();
            const tracks: TrackModel[] = queue.tracksInPlaybackOrder;
            // Act
            const track3Clone: TrackModel = queue.tracks[2];
            // Arrange
                dateTimeMock.object,
    });
            // Act
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');

            // Arrange

            expect(queue.tracks[3]).toEqual(track4);
            const queue: Queue = createQueue();
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');

            const track3Clone: TrackModel = queue.tracks[2];
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
        });
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            queue.setTracks([track1, track2, track3], false);
            expect(queue.tracks[0]).toEqual(track1);


    let shufflerMock: IMock<Shuffler>;
            expect(queue.tracks[1].path).toEqual(track2.path);
            expect(queue.tracks[0]).not.toBe(track1);
            // Assert
            queue.setTracks([track1, track2, track3], true);
            // Act
            // Assert
            // Act

            // Act
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            const tracks: TrackModel[] = queue.tracks;
            const nextTrack: TrackModel | undefined = queue.getNextTrack(undefined, false);
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            const track4Clone: TrackModel = queue.tracks[3];
        it('should return the first track if currentTrack is the last track and allowWrapAround is true and the queue is shuffled', () => {
            expect(previousTrack).toEqual(track3);

            expect(nextTrack).toBeUndefined();
            const queue: Queue = createQueue();
            const queue: Queue = createQueue();
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            const track5Clone: TrackModel = queue.tracks[4];
            const queue: Queue = createQueue();

    });

                new Track('/home/user/Music/Track1.mp3'),
            expect(nextTrack1).toEqual(track1);
                new Track('/home/user/Music/Track3.mp3'),
            // Assert


            const track2Clone: TrackModel = queue.tracks[1];
            expect(queue.getPreviousTrack(track1, false)).toBeUndefined();
            // Act

            queue.setTracks([track1, track2, track3], false);
            queue.setTracks([track1, track2], true);
            expect(queue.getNextTrack(track4Clone, false)).toEqual(track5);
            const queue: Queue = createQueue();
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            const queue: Queue = createQueue();
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');


    function createTrackModel(path: string): TrackModel {
            expect(nextTrack2).toEqual(track2);
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            const track1Clone: TrackModel = queue.tracks[0];
            queue.setTracks([track1, track2, track3], true);
        it('should return the tracks in playback order when shuffled', () => {
            expect(tracks[1].path).toBe(track2.path);
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
        });
        it('should not remove tracks from queue if tracksToRemove is undefined', () => {
            // Assert

            const track2Clone: TrackModel = queue.tracks[1];
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            expect(queue.tracks[2].path).toEqual(track3.path);
            const queue: Queue = createQueue();
            // Act
            expect(queue.getNextTrack(track1Clone, false)).toEqual(track3);
            // Assert
        settingsMock = new SettingsMock();
            queue.setTracks([track1, track2, track3], false);
            queue.setTracks([track1, track2, track3, track4, track5], true);
        it('should set the tracks in the order they were provided when shuffle is false', () => {

        it('should return the last track if currentTrack is the first track and allowWrapAround is true and the queue is shuffled', () => {
            // Assert
            // Act
            const nextTrack: TrackModel | undefined = queue.getNextTrack(track2Clone, false);


            // Act
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            // Assert
            const track1Clone: TrackModel = queue.tracks[0];
        shufflerMock = Mock.ofType<Shuffler>();

            shufflerMock.setup((x) => x.shuffle([0, 1, 2])).returns(() => [2, 1, 0]);


            queue.setTracks([track1, track2, track3], false);
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');

            const nextTrack: TrackModel | undefined = queue.getNextTrack(track2Clone, false);
            queue.removeTracks([]);
            expect(queue.tracks[3].path).toEqual(track4.path);
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            expect(queue.tracks[1]).toEqual(track3Clone);
    });
            const track1Clone: TrackModel = queue.tracks[0];
            const track4: TrackModel = createTrackModel('/home/user/Music/Track4.mp3');
        });
            const track2Clone: TrackModel = queue.tracks[1];

            // Arrange
            expect(queue.getNextTrack(track5Clone, false)).toEqual(track1);
        });
            // Assert
            // Assert
            const track5Clone: TrackModel = queue.tracks[4];
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');

            const queue: Queue = createQueue();
            expect(tracks[1].path).toBe(track2.path);
            const track5Clone: TrackModel = queue.tracks[4];
        });
        });


            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            // Arrange

            const nextTrack: TrackModel | undefined = queue.getNextTrack(track3Clone, false);
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            // Arrange
            expect(queue.getNextTrack(track2Clone, false)).toEqual(track3);
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');


        it('should return the last track if currentTrack is the first track and allowWrapAround is true and the queue is not shuffled', () => {
            queue.setTracks([track1, track2], false);
            const track1Clone: TrackModel = queue.tracks[0];
            // Act
            const queue: Queue = createQueue();
            expect(queue.getNextTrack(track2Clone, false)).toEqual(track3);
            // Act
            shufflerMock.setup((x) => x.shuffle([0, 1, 2])).returns(() => [1, 2, 0]);
            expect(nextTrack).toEqual(track3);
            const track4Clone: TrackModel = queue.tracks[3];
            // Arrange
            expect(queue.getNextTrack(track2Clone, false)).toEqual(undefined);
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            queue.setTracks([track1, track2], false);
            queue.setTracks([track1, track2], false);

            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            // Arrange
            expect(queue.getNextTrack(track1Clone, false)).toEqual(track2);

            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
        it('should return the tracks in original order when shuffled', () => {


            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            const queue: Queue = createQueue();
            expect(queue.tracks.length).toEqual(3);
        it('should return the first track when the queue is shuffled', () => {
        it('should return the previous track if currentTrack is not the first track and the queue is shuffled', () => {
        });
            expect(queue.tracks[2]).not.toBe(track3);

    describe('numberOfTracks', () => {
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
        });
            expect(queue.tracks[4].path).toEqual(track5.path);
            expect(nextTrack).toEqual(track1);
        });
        it('should return the first track if currentTrack is undefined and the queue is shuffled', () => {
            expect(queue.tracks.length).toEqual(5);
            const previousTrack: TrackModel | undefined = queue.getPreviousTrack(track3, false);

            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
        });
        it('should return the tracks in original order when not shuffled', () => {

            const track1Clone: TrackModel = queue.tracks[0];
        });
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            // Assert
            // Arrange
            // Arrange
            expect(queue.tracks.length).toEqual(3);


            expect(queue.getNextTrack(track1Clone, false)).toEqual(undefined);
            expect(queue.tracks.length).toEqual(3);
            // Assert
            // Act
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            const queue: Queue = createQueue();

            queue.setTracks([track1, track2], true);
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');

            // Arrange
            shufflerMock.setup((x) => x.shuffle([0, 1])).returns(() => [1, 0]);

            const queue: Queue = createQueue();

            expect(previousTrack).toEqual(track2);
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            // Act
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');


import { SettingsMock } from '../../testing/settings-mock';
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            expect(queue.tracks.length).toEqual(2);
            const queue: Queue = createQueue();
        it('should return the first track if currentTrack is not found and the queue is not shuffled', () => {
        it('should define tracks as empty', () => {
            // Act
            const track5: TrackModel = createTrackModel('/home/user/Music/Track5.mp3');

            // Arrange

        it('should create', () => {


            const queue: Queue = createQueue();
                settingsMock,
        });
            expect(queue.tracks[2]).toEqual(track3);
        it('should add tracks to the end of shuffled playback order', () => {
            // Arrange
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            // Act
            const track5: TrackModel = createTrackModel('/home/user/Music/Track5.mp3');

            expect(tracks[0].path).toBe(track1.path);
            const track5Clone: TrackModel = queue.tracks[4];
            // Act
            expect(queue.tracks[4]).toEqual(track5);
            // Assert
            const track2Clone: TrackModel = queue.tracks[1];
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            const queue: Queue = createQueue();

            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            const track1Clone: TrackModel = queue.tracks[0];
        });



            queue.setTracks([track1, track2, track3, track4, track5], true);
            expect(tracks[0].path).toBe(track1.path);
    }
        });
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
        it('should return undefined if currentTrack is the first track and allowWrapAround is false and the queue is not shuffled', () => {
            queue.setTracks([track1, track2, track3, track4, track5], false);
            );
            expect(nextTrack).toEqual(track2);
            const track5: TrackModel = createTrackModel('/home/user/Music/Track5.mp3');
            const track4Clone: TrackModel = queue.tracks[3];
            const track3Clone: TrackModel = queue.tracks[2];
        });
            const queue: Queue = createQueue();
            // Assert

            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            // Assert
            // Assert
        });
            // Act
            // Assert
            shufflerMock.setup((x) => x.shuffle([0, 1, 2])).returns(() => [2, 1, 0]);
        });

            // Act
        it('should return the first track if currentTrack is the last track and allowWrapAround is true and the queue is not shuffled', () => {


            const queue: Queue = createQueue();

            expect(nextTrack).toEqual(track2);

            expect(queue.tracks[0].path).toEqual(track1.path);

        it('should return the tracks in their original order when not shuffled', () => {
            expect(queue.tracks[1]).toEqual(track2);
        it('should return undefined if currentTrack is the last track and allowWrapAround is false and the queue is shuffled', () => {
            expect(queue.tracks[1]).toEqual(track2);
            expect(nextTrack).toBeUndefined();
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            // Assert
            expect(queue.getNextTrack(track4Clone, false)).toEqual(track3);
            queue.setTracks([track1, track2], false);
            const track1Clone: TrackModel = queue.tracks[0];
            const track5: TrackModel = createTrackModel('/home/user/Music/Track5.mp3');




            // Act
            // Act
            const queue: Queue = createQueue();
        });
            expect(queue.getNextTrack(track3Clone, false)).toEqual(track4);
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
    });
            // Arrange
        it('should not remove tracks from shuffled playback order if tracksToRemove is empty', () => {

            const nextTrack: TrackModel | undefined = queue.getNextTrack(track3, false);
            shufflerMock.setup((x) => x.shuffle([0, 1, 2])).returns(() => [1, 2, 0]);
            queue.addTracks([track3, track4, track5]);
        it('should remove tracks from unshuffled playback order if tracksToRemove has items', () => {
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            expect(nextTrack).toEqual(track1);
            expect(queue.getNextTrack(track2Clone, false)).toEqual(track3);

            const track2Clone: TrackModel = queue.tracks[1];
        });

        dateTimeMock = Mock.ofType<DateTime>();
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            const track3Clone: TrackModel = queue.tracks[2];
            // Act
            const track4: TrackModel = createTrackModel('/home/user/Music/Track4.mp3');
            const track4Clone: TrackModel = queue.tracks[3];
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
                translatorServiceMock.object,

            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            queue.setTracks([track1, track2, track3], false);


            queue.addTracks([track3, track4, track5]);
            // Act
            expect(queue.getNextTrack(track4Clone, false)).toEqual(track5);

            expect(queue.tracks.length).toEqual(3);

            queue.setTracks([track1, track2, track3], true);
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');


        });
            // Arrange

        it('should return the first track if currentTrack is not found and the queue is shuffled', () => {
            queue.setTracks([track1, track2], true);
            shufflerMock.setup((x) => x.shuffle([0, 1])).returns(() => [1, 0]);
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            expect(tracks[1].path).toBe(track2.path);
            queue.setTracks([track1, track2], true);
            // Act
            const track2Clone: TrackModel = queue.tracks[1];

            const track2Clone: TrackModel = queue.tracks[1];
        });
            // Assert
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            expect(queue.tracks[2]).not.toBe(track3);
            // Assert
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');

            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            const track5: TrackModel = createTrackModel('/home/user/Music/Track5.mp3');
            // Act
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            const queue: Queue = createQueue();


        it('should return undefined if there are no tracks', () => {
            expect(tracks[2].path).toBe(track3.path);
            const nextTrack: TrackModel | undefined = queue.getNextTrack(track3, false);

            expect(queue.tracks[1]).toEqual(track2);
        });
            const track5: TrackModel = createTrackModel('/home/user/Music/Track5.mp3');

            const track1: TrackModel = new TrackModel(
            expect(previousTrack).toBeUndefined();
            const track3: TrackModel = createTrackModel('/home/user/Music/Track3.mp3');
            const previousTrack: TrackModel | undefined = queue.getPreviousTrack(track2, true);
            const track3Clone: TrackModel = queue.tracks[2];
            // Assert
            // Arrange

            const queue: Queue = createQueue();
            // Arrange
            // Arrange
        it('should not remove tracks from unshuffled playback order if tracksToRemove is undefined', () => {
            const track2: TrackModel = createTrackModel('/home/user/Music/Track2.mp3');
            // Assert
            expect(queue.getNextTrack(track5Clone, false)).toEqual(undefined);
            const track1: TrackModel = createTrackModel('/home/user/Music/Track1.mp3');
            expect(previousTrack).toEqual(track1);
        return new TrackModel(new Track(path), dateTimeMock.object, translatorServiceMock.object, settingsMock);


        });
            expect(queue).toBeDefined();
            // Act
        });
            const queue: Queue = createQueue();
            // Arrange
            // Arrange


