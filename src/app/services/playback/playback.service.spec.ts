            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
        tracks.addTrack(trackModel4);
            // Arrange
            const service: PlaybackService = createService();
        const playEvent$: Observable<void> = playEvent.asObservable();

            await service.playNextAsync();
            expect(service.currentTrack).toBe(trackModel1);
            service.volume = -0.5;
            expect(queue.tracks[1]).toBe(tracks.tracks[1]);
            expect(service.canResume).toBeFalsy();

            // Assert

            }
            const service: PlaybackService = createService();
            const service: PlaybackService = createService();
            expect(queue.tracks.length).toEqual(4);
            );
        it('should stop playback if a previous track was not found and playback lasted for less then 3 seconds', async () => {
            // Assert

            // Arrange

            trackSorterMock.verify((x) => x.sortByAlbum(tracks.tracks), Times.exactly(1));
            // Assert
            expect(service.currentTrack).toBe(trackModel2);

            trackModelMock.verify((x) => x.increasePlayCountAndDateLastPlayed(), Times.once());
            expect(service.canPause).toBeTruthy();
            expect(service.canResume).toBeFalsy();
        queuePersisterMock = Mock.ofType<QueuePersister>();
            // Assert
            expect(service.canResume).toBeTruthy();
            // Assert


        it('should set the audio player volume to 1 if a volume greater than 1 is provided', () => {
        });
            // Arrange
            audioPlayerMock.reset();

            const service: PlaybackService = createService();
    let tracks: TrackModels;
            // Arrange
            // Arrange
            // Assert


            // Assert
        });
        it('should get tracks for the given artist', async () => {

        it('should save skip count for the current track if progress is less than 80%', async () => {

            // Assert
            // Assert
import { TrackSorter } from '../../common/sorting/track-sorter';

        });
            playbackFinished.next();
                }),
            // Arrange
            audioPlayerMock.verifyAll();
        track4.discNumber = 1;
            mathExtensionsMock.setup((x) => x.clamp(1, 0, 1)).returns(() => 1);
            // Arrange
            expect(service.progress.totalSeconds).toEqual(0);
            while (service.loopMode !== LoopMode.One) {

            expect(service.currentTrack).toBe(trackModel2);




        it('should pause playback', async () => {
            subscription.add(

            queueMock.verify((x) => x.shuffle(), Times.exactly(1));
                    receivedTrack = playbackStarted.currentTrack;
            // Act
            settingsStub.volume = 0;
            queueMock.verify((x) => x.getNextTrack(It.isAny(), It.isAny()), Times.never());
            await service.enqueueAndPlayTracksStartingFromGivenTrackAsync([], trackModel1);
import { PlaybackStarted } from './playback-started';

            await service.addGenreToQueueAsync(genreToAdd);
        it('should stop playback if the given track is playing and it is the only track in the queue', async () => {

            // Act
            // Arrange
            // Assert

        tracks = new TrackModels();
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            expect(service.canResume).toBeTruthy();
            while (!service.isShuffled) {
        track2 = new Track('Path 2');
            queueMock.setup((x) => x.setTracks(trackModels, true)).returns(() => trackModels);
            // Arrange
            // Act

            const service: PlaybackService = createService();
        it('should get tracks for the given album', async () => {
            audioPlayerMock.setup((x) => x.totalSeconds).returns(() => 60);
            const service: PlaybackService = createService();
        it('should start playback', async () => {

            audioPlayerMock.verifyAll();

    });
            // Assert
        settingsMock = new SettingsMock();
        it('should define playbackStarted$', () => {

            const artistToPlay: ArtistModel = new ArtistModel('artist1', translatorServiceMock.object);
            audioPlayerMock.verifyAll();
            const service: PlaybackService = createService();



            let receivedTrack: TrackModel | undefined;
            trackServiceMock.verify((x) => x.getTracksForAlbums([album1.albumKey]), Times.exactly(1));
    describe('playQueuedTrack', () => {

        });
            await service.enqueueAndPlayTracksAsync([trackModelMock.object]);
            // Assert
            await service.enqueueAndPlayTracksAsync(trackModels);
            }

            // Assert
            expect(service.canPause).toBeTruthy();

            expect(service.currentTrack).toBe(trackModel1);

            mathExtensionsMock.setup((x) => x.clamp(1.5, 0, 1)).returns(() => 1);
        it('should get tracks for unknown genre', async () => {

import { ExpectedCallType, IMock, It, Mock, Times } from 'typemoq';
        });
                service.playbackStarted$.subscribe((playbackStarted: PlaybackStarted) => {
            expect(service.canResume).toBeFalsy();
        it('should set loopMode to None when loopMode is One', () => {
            let currentTrack: TrackModel | undefined;


            await service.playNextAsync();
        track3 = new Track('Path 3');
            // Assert
        queueMock = Mock.ofType<Queue>();
            const service: PlaybackService = createService();

        });
            // Assert
            await service.enqueueAndPlayArtistAsync(artistToPlay, ArtistType.trackArtists);
    let trackServiceMock: IMock<TrackServiceBase>;
            audioPlayerMock.reset();
            // Assert
            const service: PlaybackService = createService();
            await service.enqueueAndPlayGenreAsync(genreToPlay);

        it('should start playback', async () => {
            const service: PlaybackService = createService();



        });
            expect(service.volume).toEqual(0.6);
            await service.enqueueAndPlayGenreAsync(genreToPlay);
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
        audioPlayerFactoryMock = Mock.ofType<AudioPlayerFactory>();
                }),

            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModelMock.object);
            // Assert
            // Arrange
            await service.enqueueAndPlayTracksAsync(trackModels);
            // Act
            trackServiceMock.verify((x) => x.getTracksForAlbums([album1.albumKey]), Times.exactly(1));
            const service: PlaybackService = createService();
            }
            // Arrange

            const service: PlaybackService = createService();
        it('should not remove tracks when tracksToRemove is empty', () => {
            queueMock.setup((x) => x.getNextTrack(It.isObjectWith<TrackModel>({ path: 'Path 1' }), It.isAny())).returns(() => trackModel2);
            queueMock.setup((x) => x.getPreviousTrack(trackModel1, false)).returns(() => trackModel2);
                service.toggleIsShuffled();
    });
            subscription.add(
        playbackFailed = new Subject();

                    currentTrack = service.currentTrack;

            while (service.loopMode !== LoopMode.One) {
        });
                    playbackIsStopped = true;
            // Act
            audioPlayerMock.reset();


            expect(service.volume).toEqual(0.9);
                }),
            let playbackIsPaused: boolean = false;
            expect(service.canPause).toBeFalsy();
            // Arrange
        it('should stop playback if a next track is not found', async () => {
            notificationServiceMock.verify((x) => x.multipleTracksAddedToPlaybackQueueAsync(4), Times.exactly(1));

            expect(service.isShuffled).toBeFalsy();
            // Act
            audioPlayerMock.reset();
                    receivedPlaybackSkipped = true;

            await service.playPreviousAsync();
                service.playbackPaused$.subscribe(() => {
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            // Act
                service.playbackStarted$.subscribe((playbackStarted: PlaybackStarted) => {

            service.toggleIsShuffled();
import { DialogServiceBase } from '../dialog/dialog.service.base';
        });
        });
            while (service.loopMode !== LoopMode.All) {
            audioPlayerMock.verify((x) => x.setVolume(0.5), Times.once());

        it('should start playback', async () => {

            // Assert

        });
            let isPlayingPreviousTrack: boolean = true;

            subscription.add(


            // Assert
            // Act
        it('should skip to a fraction of the total seconds', async () => {

            const service: PlaybackService = createService();
            const service: PlaybackService = createService();

            const service: PlaybackService = createService();
            // Assert
            // Arrange
            await service.enqueueAndPlayTracksAsync(trackModels);
            // Arrange
        it('should have shuffled the queue when shuffle is enabled', () => {
            const service: PlaybackService = createService();
    describe('addAlbumToQueueAsync', () => {
            expect(queue.tracks.length).toEqual(0);
            // Arrange, Act
            queueMock.verify((x) => x.getPreviousTrack(It.isAny(), true), Times.exactly(1));

            playbackFinished.next();
                service.toggleLoopMode();
        });

            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();
        it('should initialize canPause as false', () => {
            await service.enqueueAndPlayTracksAsync([trackModelMock.object]);
        });
            const service: PlaybackService = createService();

        it('should define playbackResumed$', () => {
            subscription.add(
        track1.trackTitle = 'Title 1';

            service.volume = 0;
        });

            trackSorterMock.object,
            // Assert
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            mathExtensionsMock.setup((x) => x.clamp(-0.5, 0, 1)).returns(() => 0);

            expect(service.canPause).toBeFalsy();
            const service: PlaybackService = createService();
        });

            audioPlayerMock.verify((x) => x.playAsync(It.isAny()), Times.never());
                service.playbackStopped$.subscribe(() => {
            }
            const service: PlaybackService = createService();
            // Assert
            audioPlayerMock.setup((x) => x.playAsync(trackModel2)).verifiable(Times.once(), ExpectedCallType.InSequence);


            // Arrange
            await service.addTracksToQueueAsync([trackModel1]);
        });
            // Arrange
        });

            // Act
            const service: PlaybackService = createService();
        it('should raise an event that playback is paused.', async () => {
        track3.discNumber = 1;

            // Assert
    });
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
        it('should raise an event that playback has started, containing the current track and if a next track is being played.', async () => {
            audioPlayerMock.setup((x) => x.playAsync(trackModel1)).verifiable(Times.once(), ExpectedCallType.InSequence);
            // Act
                    isPlayingPreviousTrack = playbackStarted.isPlayingPreviousTrack;

            const service: PlaybackService = createService();
            expect(service.isPlaying).toBeTruthy();
        const previousTrackEvent$: Observable<void> = previousTrackEvent.asObservable();
            // Act
        });
            mathExtensionsMock.setup((x) => x.clamp(-0.5, 0, 1)).returns(() => 0);

            await service.enqueueAndPlayTracksAsync(trackModels);


        it('should enable shuffle when shuffle is disabled', () => {
        const pauseEvent$: Observable<void> = pauseEvent.asObservable();
            // Arrange
    let settingsStub: any;

            const service: PlaybackService = createService();
import { Track } from '../../data/entities/track';


            // Assert
            // Assert
            const service: PlaybackService = createService();
                }),
            let isPlayingPreviousTrack: boolean = false;
            // Assert
            expect(service.volume).toEqual(0);
            // Assert
    let playbackFinished: Subject<void>;
        track4.trackTitle = 'Title 4';
            const genreName = '';
            let receivedTrack: TrackModel | undefined;
            playbackFinished.next();
        });
    });
            while (service.loopMode !== LoopMode.All) {
            // Arrange
            queueMock.setup((x) => x.getNextTrack(It.isObjectWith<TrackModel>({ path: 'Path 1' }), false)).returns(() => undefined);
            subscription.add(

            expect(service.canPause).toEqual(false);
            translatorServiceMock.verify((x) => x.get(It.isAny()), Times.never());
        it('should initialize isPlaying as false', () => {
            // Arrange

            // Arrange
            // Assert
import { PlaybackService } from './playback.service';
        it('should get the next track without wrap around if loopMode is None', async () => {
            trackServiceMock.verify((x) => x.getTracksForGenres([genreName]), Times.once());

            audioPlayerMock.reset();
            const service: PlaybackService = createService();
            // Assert
            expect(isPlayingPreviousTrack).toBeFalsy();
            // Act
            audioPlayerMock.reset();
                }),
            queueMock.verify((x) => x.setTracks(It.isAny(), It.isAny()), Times.never());
            // Act


            trackServiceMock.verify((x) => x.saveSkipCount(trackModelMock.object), Times.once());


            expect(isPlayingPreviousTrack).toBeFalsy();


            service.volume = 0.8;

        it('should start playback', async () => {
            let isPlayingPreviousTrack: boolean = true;

            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();
    });

            await service.addGenreToQueueAsync(genreToAdd);
            expect(service.currentTrack).toBeUndefined();
            // Arrange
            service.toggleMute();
            // Act

        it('should enable shuffle', () => {


            // Assert
            // Arrange, Act
                    isPlayingPreviousTrack = playbackStarted.isPlayingPreviousTrack;
                    receivedTrack = playbackStarted.currentTrack;
        });
            // Act
            await service.enqueueAndPlayTracksAsync(trackModels);
            mathExtensionsMock.setup((x) => x.clamp(0.8, 0, 1)).returns(() => 0.8);
                }),
            expect(service.canPause).toBeTruthy();
            await service.enqueueAndPlayTracksAsync([trackModelMock.object]);

            const service: PlaybackService = createService();

            await service.enqueueAndPlayTracksAsync(trackModels);

            // Assert


        test.todo('should write tests');
            // Act


        it('should order tracks for the album byAlbum', async () => {

        track3.trackNumber = 1;
            // Assert

                service.playbackStarted$.subscribe((playbackStarted: PlaybackStarted) => {

            const service: PlaybackService = createService();
            expect(settingsStub.volume).toEqual(0.5);
            const service: PlaybackService = createService();

describe('PlaybackService', () => {
        });

            // Assert
        audioPlayerFactoryMock.setup((x) => x.create()).returns(() => audioPlayerMock.object);


        });
            const service: PlaybackService = createService();
            // Assert
            service.pause();
    let album1: AlbumModel;
            const service: PlaybackService = createService();
            // Act
    describe('togglePlayback', () => {
                service.playbackStopped$.subscribe(() => {

        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();


            while (service.loopMode !== LoopMode.None) {

            expect(service.canPause).toBeTruthy();
            while (service.isShuffled) {
                    progressChanged = true;
            service.volume = 0;
            // Arrange


        it('should unshuffle the queue when shuffle is enabled', () => {
        trackModel4 = new TrackModel(track4, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            expect(settingsStub.volume).toEqual(0.8);
            // Act
        });
        it('should save a volume of 0 in the settings if a volume smaller than 0 is provided', () => {
            // Act
            // Arrange
        it('should resume playback if playing', async () => {
            expect(service.canResume).toBeTruthy();
        });
            // Arrange
        });
        mathExtensionsMock = Mock.ofType<MathExtensions>();
        settingsStub = { volume: 0.6 };
            await service.playNextAsync();
            trackServiceMock.verify((x) => x.savePlayCountAndDateLastPlayed(trackModelMock.object), Times.once());
            const genreToPlay: GenreModel = new GenreModel('genre1', translatorServiceMock.object);

            // Arrange
    let playlistServiceMock: IMock<PlaylistServiceBase>;
            queueMock.verify((x) => x.addTracks(orderedTrackModels), Times.exactly(1));
            const service: PlaybackService = createService();
            const service: PlaybackService = createService();
            await service.playPreviousAsync();

            expect(settingsStub.volume).toEqual(1);
            // Arrange
            audioPlayerMock.setup((x) => x.totalSeconds).returns(() => 100);
        it('should add tracks to the queue unshuffled if shuffle is disabled', async () => {
            expect(service.isPlaying).toBeTruthy();
            playbackFinished.next();
import { ApplicationPaths } from '../../common/application/application-paths';


            // Assert
            service.removeFromQueue([]);
            expect(receivedTrack).toBe(trackModel2);
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
        track2.trackTitle = 'Title 2';
        });
            // Arrange

            // Arrange
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            await service.playNextAsync();


        return new PlaybackService(
            expect(service.isPlaying).toBeFalsy();
            translatorServiceMock.verify((x) => x.get(It.isAny()), Times.never());

import { Logger } from '../../common/logger';
            // Arrange
            audioPlayerMock.setup((x) => x.progressSeconds).returns(() => 2.9);
    describe('volume', () => {
import { AlbumModel } from '../album/album-model';
            let receivedTrack: TrackModel | undefined;


            // Act

            loggerMock.object,

    });
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModelMock.object);
            await service.playNextAsync();
            audioPlayerMock.reset();
        });
            const service: PlaybackService = createService();
            await service.enqueueAndPlayTracksAsync(trackModels);
        });

        });
            mediaSessionServiceMock.object,
            audioPlayerMock.setup((x) => x.progressSeconds).returns(() => 2.9);
            // Arrange
            // Arrange
        });


    let notificationServiceMock: IMock<NotificationServiceBase>;
            }
            // Arrange

        it('should get tracks for the given album', async () => {
        it('should play the next track if found', async () => {

        });
        trackServiceMock.setup((x) => x.getTracksForArtists(It.isAny(), It.isAny())).returns(() => tracks);

            service.toggleLoopMode();
        subscription.unsubscribe();
            expect(service.progress.progressSeconds).toEqual(0);
            expect(receivedTrack).toBe(trackModel2);

            settingsStub,
            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();
            // Act
            const service: PlaybackService = createService();
            // Act
        });
        mediaSessionServiceMock.setup((x) => x.nextTrackEvent$).returns(() => nextTrackEvent$);
            // Arrange

            queueMock.verify((x) => x.shuffle(), Times.exactly(1));
            audioPlayerMock.verify((x) => x.playAsync(It.isAny()), Times.never());
    describe('constructor', () => {
    });
            // Assert
            queueMock.setup((x) => x.getNextTrack(It.isObjectWith<TrackModel>({ path: 'Path 1' }), false)).returns(() => trackModel2);
            const genreToPlay: GenreModel = new GenreModel(genreName, translatorServiceMock.object);

            let isPlayingPreviousTrack: boolean = true;
            const service: PlaybackService = createService();
            // Assert
    });

import { TranslatorServiceBase } from '../translator/translator.service.base';
            // Assert
            audioPlayerMock.verify((x) => x.stop(), Times.once());

            const genreToPlay: GenreModel = new GenreModel('genre1', translatorServiceMock.object);

            await service.enqueueAndPlayTracksAsync(trackModels);
            // Act
            notificationServiceMock.verify((x) => x.singleTrackAddedToPlaybackQueueAsync(), Times.exactly(1));

            expect(service.isPlaying).toEqual(false);
    let track1: Track;

            await service.playNextAsync();
        it('should raise an event that playback is stopped on playback finished if a next track is not found', () => {
            );
            mathExtensionsMock.setup((x) => x.clamp(0, 0, 1)).returns(() => 0);

            // Arrange
            queueMock.setup((x) => x.getNextTrack(It.isObjectWith<TrackModel>({ path: 'Path 1' }), false)).returns(() => trackModel2);
            audioPlayerMock.verify((x) => x.playAsync(It.isAny()), Times.never());
            // Arrange
            // Assert
            expect(playbackIsResumed).toBeFalsy();


            // Act
            await service.enqueueAndPlayTracksAsync([trackModelMock.object]);
        it('should raise an event that playback is resumed if not playing', async () => {
                service.toggleLoopMode();
            await service.enqueueAndPlayAlbumAsync(album1);


            mathExtensionsMock.setup((x) => x.clamp(0.9, 0, 1)).returns(() => 0.9);
            const genreToPlay: GenreModel = new GenreModel(genreName, translatorServiceMock.object);
            await service.enqueueAndPlayArtistAsync(artistToPlay, ArtistType.trackArtists);
                service.toggleIsShuffled();
        });
            await service.addArtistToQueueAsync(artistToAdd, ArtistType.trackArtists);


            // Act
        it('should initialize loopMode as LoopMode.None', () => {


            const service: PlaybackService = createService();
            // Arrange

            expect(service.playbackStopped$).toBeDefined();


            const artistToPlay: ArtistModel = new ArtistModel('artist1', translatorServiceMock.object);
            // Act

        notificationServiceMock = Mock.ofType<NotificationServiceBase>();
            audioPlayerMock.setup((x) => x.progressSeconds).returns(() => 2.9);
            // Act
            // Act
        });
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);

            // Act
                service.playbackResumed$.subscribe(() => {
            await service.enqueueAndPlayTracksAsync([trackModelMock.object]);

            expect(service.currentTrack).toBe(trackModel2);
        mediaSessionServiceMock.setup((x) => x.previousTrackEvent$).returns(() => previousTrackEvent$);
        it('should apply volume from the settings when not muted', () => {
import { DateTime } from '../../common/date-time';
            await service.enqueueAndPlayTracksAsync(trackModels);

    let playingPreloadedTrack: Subject<TrackModel>;

            await service.enqueueAndPlayTracksAsync(trackModels);
    let trackModel1: TrackModel;
        });
            const service: PlaybackService = createService();
        trackModels = [trackModel1, trackModel2, trackModel3, trackModel4];
        });
            // Arrange
            const genreToPlay: GenreModel = new GenreModel('genre1', translatorServiceMock.object);
            // Arrange
import { SettingsMock } from '../../testing/settings-mock';
            const service: PlaybackService = createService();
            let playbackIsStopped: boolean = false;
        tracks.addTrack(trackModel1);
        tracks.addTrack(trackModel2);
            notificationServiceMock.verify((x) => x.multipleTracksAddedToPlaybackQueueAsync(It.isAny()), Times.never());
            await service.togglePlaybackAsync();

        );
        });

            queueMock.setup((x) => x.tracksInPlaybackOrder).returns(() => []);

            service.pause();

        });
        nextTrackEvent = new Subject();
        it('should raise an event that playback is stopped if a next track is not found', async () => {
            expect(volume).toEqual(0.6);
            const service: PlaybackService = createService();
                    playbackIsResumed = true;

            await service.playQueuedTrackAsync(trackModel2);
        });
        it('should declare currentTrack', () => {
            // Act
            // Arrange
        });

            const service: PlaybackService = createService();
            // Act
    });
        });
            expect(service.canPause).toBeTruthy();

            // Arrange
            // Act

            expect(service.isPlaying).toBeTruthy();
            // Arrange
            service.volume = 1.5;
    let track4: Track;

            playbackFinished.next();
            // Arrange
        it('should add tracks to the queue ordered by album', async () => {

            );
            service.toggleIsShuffled();
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel2);
    });

            const service: PlaybackService = createService();


            audioPlayerMock.verify((x) => x.stop(), Times.exactly(1));

        dialogServiceMock = Mock.ofType<DialogServiceBase>();



        it('should set the volume to 1 if a volume greater than 1 is provided', () => {
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            // Arrange
            const service: PlaybackService = createService();
            while (service.loopMode !== LoopMode.None) {
            audioPlayerMock.setup((x) => x.progressSeconds).returns(() => 79);
            mathExtensionsMock.setup((x) => x.clamp(0, 0, 1)).returns(() => 0);
            trackModelMock.verify((x) => x.increaseSkipCount(), Times.once());

import { LoopMode } from './loop-mode';
            dialogServiceMock.object,
            expect(settingsStub.volume).toEqual(0);

            // Act

            }
            // Assert
        });
            const service: PlaybackService = createService();
            const service: PlaybackService = createService();
            expect(service.isShuffled).toBeFalsy();
    albumData1.albumKey = 'albumKey1';

            audioPlayerMock.verify((x) => x.stop(), Times.exactly(1));
            const service: PlaybackService = createService();
        trackServiceMock.setup((x) => x.getTracksForAlbums([album1.albumKey])).returns(() => tracks);
            mathExtensionsMock.setup((x) => x.clamp(0.5, 0, 1)).returns(() => 0.5);
        it('should return the volume', () => {

        mediaSessionServiceMock = Mock.ofType<MediaSessionService>();
            // Arrange
            audioPlayerMock.reset();

        });
    let trackModel2: TrackModel;
        it('should not start playback if tracks is empty', async () => {
            subscription.add(
            audioPlayerMock.verify((x) => x.playAsync(trackModel1), Times.exactly(1));
            }
            let receivedTrack: TrackModel | undefined;
            expect(service.canResume).toEqual(true);

        subscription = new Subscription();

        it('should get the previous track with wrap around if loopMode is All', async () => {

            const artistToAdd: ArtistModel = new ArtistModel('artist1', translatorServiceMock.object);
            expect(service.currentTrack).toBeUndefined();
            // Assert
            }
            queueMock.verify((x) => x.addTracks(orderedTrackModels), Times.exactly(1));
        it('should raise an event that playback has started, containing the current track and if a next track is being played.', async () => {
            queueMock.verify((x) => x.removeTracks([trackModel1]), Times.once());

                }),

                }),
        it('should get tracks for the given artist and artistType', async () => {
        it('should save the provided volume in the settings if a volume of 0 is provided', () => {
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            // Arrange, Act
            const service: PlaybackService = createService();
    });
            // Act
                }),
                    playbackIsStopped = true;
                    receivedTrack = playbackStarted.currentTrack;
        });
            // Assert
            // Arrange
            // Act
            const service: PlaybackService = createService();

            service.toggleIsShuffled();

        loggerMock = Mock.ofType<Logger>();
        it('should define playbackPaused$', () => {
            expect(service.loopMode).toEqual(LoopMode.All);
        });
                    isPlayingPreviousTrack = playbackStarted.isPlayingPreviousTrack;
            while (!service.isShuffled) {
            await service.playPreviousAsync();
            const service: PlaybackService = createService();
            mathExtensionsMock.setup((x) => x.clamp(0.8, 0, 1)).returns(() => 0.8);
            await service.stopIfPlayingAsync(trackModel1);
    });
            // Act
            const service: PlaybackService = createService();

            // Act
        it('should set the provided volume if a volume between 0 and 1 exclusive is provided', () => {
            service.volume = 1.5;
            playbackFinished.next();

    const albumData1: AlbumData = new AlbumData();
            // Act
            audioPlayerMock.setup((x) => x.progressSeconds).returns(() => 81);

                }),
        it('should raise an event that playback has started, containing the current track and if a next track is being played.', async () => {
            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();
            queueMock.verify((x) => x.setTracks(orderedTrackModels, It.isAny()), Times.exactly(1));
            }
            const service: PlaybackService = createService();
        it('should add tracks to the queue if tracksToAdd has tracks', async () => {
            audioPlayerMock.reset();
            await service.playNextAsync();
import { Observable, Subject, Subscription } from 'rxjs';


        });
        trackModel2 = new TrackModel(track2, dateTimeMock.object, translatorServiceMock.object, settingsMock);

            // Arrange


            queueMock.setup((x) => x.getNextTrack(It.isObjectWith<TrackModel>({ path: 'Path 1' }), false)).returns(() => trackModel2);
            await service.enqueueAndPlayTracksAsync(trackModels);
            expect(service.isPlaying).toBeTruthy();

            const service: PlaybackService = createService();
        playingPreloadedTrack = new Subject();
            audioPlayerMock.verify((x) => x.resumeAsync(), Times.exactly(1));
            // Assert
            expect(service.canResume).toBeFalsy();
            expect(service.currentTrack).toBe(trackModel2);
                service.playbackResumed$.subscribe(() => {
            // Arrange


            expect(service.canPause).toBeTruthy();

        it('should not stop playback if the given track is not playing', async () => {
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
        });
            // Assert

            // Assert

            await service.resumeAsync();
            // Assert
        });
        it('should increase skip count for the current track if progress is less than 80%', async () => {
            // Act

            // Act
        });
            // Arrange
            // Assert
            subscription.add(

            // Act
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
    describe('enqueueAndPlayTracksStartingFromGivenTrack', () => {
            await service.enqueueAndPlayTracksAsync(trackModels);
            const service: PlaybackService = createService();
            // Act

        });
            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();
        it('should add tracks to the queue shuffled if shuffle is enabled', async () => {

                service.toggleIsShuffled();
            const service: PlaybackService = createService();

            audioPlayerMock.setup((x) => x.playAsync(trackModel2)).verifiable(Times.once(), ExpectedCallType.InSequence);


            }
        });
            expect(service.canPause).toBeTruthy();
            // Act

            await service.enqueueAndPlayTracksAsync(trackModels);
            queueMock.setup((x) => x.getNextTrack(It.isAny(), false)).returns(() => undefined);
            const service: PlaybackService = createService();
            );
            // Act
            const service: PlaybackService = createService();
            const service: PlaybackService = createService();
            subscription.add(
            expect(service.canResume).toBeFalsy();

            const service: PlaybackService = createService();
            // Assert
            let currentTrack: TrackModel | undefined;
            expect(service).toBeDefined();


            // Assert
            service.volume = -0.5;
        });
        });

            const service: PlaybackService = createService();

            expect(service.canResume).toBeTruthy();
            const service: PlaybackService = createService();


            // Arrange
        it('should get tracks for the given genre', async () => {

            audioPlayerMock.verifyAll();
        it('should set the audio player volume to 0 if a volume smaller than 0 is provided', () => {
            // Act

        it('should get tracks for the given genre', async () => {
            }
            let receivedPlaybackSkipped: boolean = false;
        });
        audioPlayerMock = Mock.ofType<IAudioPlayer>();

            expect(receivedTrack).toBe(trackModel1);
        const playbackFailed$: Observable<string> = playbackFailed.asObservable();

            // Arrange
        it('should play the same track on playback finished if loopMode is One', async () => {
            const service: PlaybackService = createService();
        });
            );
            );
            // Assert

            // Arrange
            expect(service.canResume).toBeFalsy();
            expect(isPlayingPreviousTrack).toBeFalsy();
            const service: PlaybackService = createService();
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModelMock.object);

    let orderedTrackModels: TrackModel[];
            // Assert

            );
        track1.trackNumber = 1;
        });
            trackSorterMock.verify((x) => x.sortByAlbum(tracks.tracks), Times.exactly(1));
    });

            const service: PlaybackService = createService();
        });

            trackSorterMock.verify((x) => x.sortByAlbum(tracks.tracks), Times.exactly(1));
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
        });
            // Assert
            queueMock.reset();
import { AudioPlayerFactory } from './audio-player/audio-player.factory';
            const service: PlaybackService = createService();
            let receivedTrack: TrackModel | undefined;
            await service.enqueueAndPlayAlbumAsync(album1);
            // Assert

    function createService(): PlaybackService {
            // Act
            await service.playNextAsync();

            audioPlayerMock.reset();

            // Arrange
            mathExtensionsMock.setup((x) => x.clamp(-0.5, 0, 1)).returns(() => 0);

            // Act
            // Assert
            expect(service.canPause).toBeFalsy();
            audioPlayerMock.setup((x) => x.progressSeconds).returns(() => 3.1);
            mathExtensionsMock.setup((x) => x.clamp(1.5, 0, 1)).returns(() => 1);
        trackSorterMock.setup((x) => x.sortByAlbum(tracks.tracks)).returns(() => orderedTrackModels);
            expect(service.canPause).toBeTruthy();
        it('should play the current track if there is a current track and playback lasted for more than 3 seconds', async () => {
            queueMock.setup((x) => x.getNextTrack(It.isAny(), false)).returns(() => undefined);
        track3.trackTitle = 'Title 3';
        it('should not play the next track if there is no track playing', async () => {
            // Arrange, Act

            }
    describe('enqueueAndPlayPlaylistAsync', () => {
            await service.stopIfPlayingAsync(trackModel2);
        it('should not unshuffle the queue when shuffle is disabled', () => {
        orderedTrackModels = [trackModel2, trackModel1, trackModel3, trackModel4];
    let queuePersisterMock: IMock<QueuePersister>;
            expect(service.isShuffled).toBeTruthy();
            queueMock.setup((x) => x.getPreviousTrack(trackModel1, false)).returns(() => undefined);
            // Act


            // Act
            audioPlayerMock.setup((x) => x.progressSeconds).returns(() => 79);


    let audioPlayerFactoryMock: IMock<AudioPlayerFactory>;

        });
            audioPlayerMock.verify((x) => x.playAsync(trackModel2), Times.exactly(1));


        audioPlayerMock.setup((x) => x.playbackFailed$).returns(() => playbackFailed$);

            await service.enqueueAndPlayAlbumAsync(album1);
        it('should get tracks for unknown genre', async () => {
            // Arrange
            const genreToAdd: GenreModel = new GenreModel(genreName, translatorServiceMock.object);
            // Arrange
            audioPlayerMock.verify((x) => x.pause(), Times.once());
            // Arrange, Act
            service.toggleIsShuffled();
            // Act
            // Act
            subscription.add(
            queueMock.verify((x) => x.unShuffle(), Times.never());
            // Assert
            subscription.add(

        });
            // Assert
        it('should disable shuffle when shuffle is enabled', () => {
            await service.enqueueAndPlayTracksAsync(trackModels);
            const genreToPlay: GenreModel = new GenreModel('genre1', translatorServiceMock.object);
            await service.playPreviousAsync();
        });
            // Assert
            const service: PlaybackService = createService();
            // Act
        it('should not resume playback if not playing and the queue is empty', async () => {

    let dialogServiceMock: IMock<DialogServiceBase>;
            service.volume = 0.8;
            const queue: TrackModels = service.playbackQueue;


            );
        });
            // Assert
            expect(service.volume).toEqual(0);
            expect(settingsStub.volume).toEqual(0);
        });
            expect(playbackIsStopped).toBeTruthy();
        it('should raise an event that playback has started, containing the current track and if a next track is being played.', async () => {
        it('should play the next track on playback finished if found and if loopMode is All', async () => {
            const artistToPlay: ArtistModel = new ArtistModel('artist1', translatorServiceMock.object);
            expect(service.currentTrack).toBeUndefined();
    let translatorServiceMock: IMock<TranslatorServiceBase>;
            // Arrange
        it('should not add tracks to the queue if tracks is empty', async () => {
            // Assert

            await service.playNextAsync();
        });

            await service.playNextAsync();
            audioPlayerMock.reset();

            await service.enqueueAndPlayTracksAsync(trackModels);
            audioPlayerMock.verify((x) => x.pause(), Times.exactly(1));
        });
            await service.enqueueAndPlayTracksStartingFromGivenTrackAsync([], trackModel1);
            while (service.isShuffled) {

        it('should raise an event that playback has started, containing the current track and if a next track is being played.', async () => {


        });


            const service: PlaybackService = createService();
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            service.toggleIsShuffled();

            await service.addGenreToQueueAsync(genreToAdd);
                service.playbackStopped$.subscribe(() => {

            queueMock.setup((x) => x.setTracks(trackModels, false)).returns(() => trackModels);
            audioPlayerMock.verifyAll();
            await service.addGenreToQueueAsync(genreToAdd);
            // Arrange
        });
        });
            queueMock.verify((x) => x.setTracks(trackModels, false), Times.exactly(1));


        it('should set the provided volume if a volume of 0 is provided', () => {


        });

            // Arrange

            expect(service.progress.totalSeconds).toEqual(0);

            await service.enqueueAndPlayGenreAsync(genreToPlay);
            // Act

            audioPlayerMock.reset();
            audioPlayerMock.setup((x) => x.playAsync(trackModel2)).verifiable(Times.once(), ExpectedCallType.InSequence);
    let trackModel4: TrackModel;


            // Act
            mathExtensionsMock.setup((x) => x.clamp(1, 0, 1)).returns(() => 1);
            // Assert
            expect(service.canResume).toBeFalsy();

            const service: PlaybackService = createService();
            queueMock.setup((x) => x.getNextTrack(It.isAny(), false)).returns(() => undefined);
            );



        it('should raise an event that playback is stopped if a previous track was not found and playback lasted for less then 3 seconds.', async () => {
            // Assert
            expect(service.currentTrack).toBe(trackModel2);
                    isPlayingPreviousTrack = playbackStarted.isPlayingPreviousTrack;
                    receivedTrack = playbackStarted.currentTrack;
            audioPlayerMock.verify((x) => x.setVolume(0), Times.exactly(1));
        track4 = new Track('Path 4');
            expect(service.isPlaying).toBeFalsy();

            await service.enqueueAndPlayTracksStartingFromGivenTrackAsync(trackModels, trackModel1);
            await service.addAlbumToQueueAsync(album1);
        it('should order tracks for the artist byAlbum', async () => {
            expect(isPlayingPreviousTrack).toBeFalsy();
        });

        it('should add tracks to the queue ordered by album', async () => {


            // Assert

import { NotificationServiceBase } from '../notification/notification.service.base';
            // Act
    let previousTrackEvent: Subject<void>;
            await service.playPreviousAsync();
            expect(service.playbackPaused$).toBeDefined();
            expect(service.isShuffled).toBeTruthy();
            // Assert
        tracks.addTrack(trackModel3);
            // Act
            audioPlayerMock.verify((x) => x.playAsync(trackModel2), Times.never());

            // Act
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            // Assert

            queueMock.verify((x) => x.getNextTrack(It.isAny(), false), Times.exactly(1));

                service.playbackStarted$.subscribe((playbackStarted: PlaybackStarted) => {
            const artistToAdd: ArtistModel = new ArtistModel('artist1', translatorServiceMock.object);
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            const genreToAdd: GenreModel = new GenreModel('genre1', translatorServiceMock.object);

});
        });
            expect(receivedTrack).toBe(trackModel2);
    });
    let fileAccessMock: IMock<FileAccessBase>;



            // Assert
                    isPlayingPreviousTrack = playbackStarted.isPlayingPreviousTrack;
            // Arrange
            queueMock.setup((x) => x.getNextTrack(It.isObjectWith<TrackModel>({ path: 'Path 1' }), true)).returns(() => trackModel2);

            const service: PlaybackService = createService();
        });
            // Act

            let isPlayingPreviousTrack: boolean = true;

        it('should save a volume of 1 in the settings if a volume greater than 1 is provided', () => {
                service.playbackStarted$.subscribe((playbackStarted: PlaybackStarted) => {
            expect(service.canPause).toBeFalsy();

            // Assert
import { TrackModel } from '../track/track-model';
                    playbackIsStopped = true;
        it('should not start playback if tracks is empty', async () => {
            const service: PlaybackService = createService();
            // Assert
            audioPlayerMock.reset();
        it('should play the next track on playback finished if found and if loopMode is None', async () => {
    });

            const service: PlaybackService = createService();
    describe('pause', () => {
            queueMock.verify((x) => x.unShuffle(), Times.exactly(1));
            expect(currentTrack).toBeUndefined();

    });
            audioPlayerMock.verify((x) => x.playAsync(trackModel2), Times.exactly(1));

            );
import { TrackModels } from '../track/track-models';
        it('should set the volume to 0 if a volume smaller than 0 is provided', () => {
            // Assert
            const service: PlaybackService = createService();
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
import { MathExtensions } from '../../common/math-extensions';
            // Arrange
            service.toggleMute();
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            queueMock.setup((x) => x.getNextTrack(It.isObjectWith<TrackModel>({ path: 'Path 1' }), false)).returns(() => trackModel2);

            notificationServiceMock.object,


import { AlbumData } from '../../data/entities/album-data';


            await service.enqueueAndPlayTracksAsync(trackModels);
        });
            // Assert
            await service.stopIfPlayingAsync(trackModel2);
                service.playbackStarted$.subscribe((playbackStarted: PlaybackStarted) => {
                service.toggleIsShuffled();
            expect(service.progress.progressSeconds).toEqual(0);
            await service.playNextAsync();

            const service: PlaybackService = createService();
import { Queue } from './queue';
        it('should raise an event that playback has started, containing the current track and if a next track is being played.', async () => {
        });
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);

            // Arrange, Act
            // Arrange, Act
            expect(playbackIsStopped).toBeTruthy();
            audioPlayerMock.reset();
        });
            const service: PlaybackService = createService();
            expect(receivedTrack).toBe(trackModel1);
            expect(service.canResume).toBeTruthy();
            await service.playPreviousAsync();
        it('should not add tracks to the queue if tracks is empty', async () => {
            await service.resumeAsync();
            subscription.add(

            queueMock.object,
        it('should order tracks for the artist byAlbum', async () => {
            // Arrange
            subscription.add(
        it('should set the audio player volume to the provided volume if a volume of 0 is provided', () => {
        });
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            // Arrange
            expect(isPlayingPreviousTrack).toBeTruthy();
            expect(service.progress.progressSeconds).toEqual(0);
            // Arrange



            const service: PlaybackService = createService();

        });


            // Assert
        });
    });

            // Arrange
            expect(service.currentTrack).toBeUndefined();
            // Act

            const service: PlaybackService = createService();

                    playbackIsPaused = true;
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            mathExtensionsMock.setup((x) => x.clamp(0, 0, 1)).returns(() => 0);

            queueMock.setup((x) => x.getFirstTrack()).returns(() => undefined);
        track1 = new Track('Path 1');

            await service.skipByFractionOfTotalSecondsAsync(0.5);
        });


            mathExtensionsMock.object,
        it('should save the provided volume in the settings if a volume of 1 is provided', () => {
        it('should start playback', async () => {
            mathExtensionsMock.setup((x) => x.clamp(0, 0, 1)).returns(() => 0);

            translatorServiceMock.verify((x) => x.get(It.isAny()), Times.never());
            expect(isPlayingPreviousTrack).toBeFalsy();
            const service: PlaybackService = createService();

            // Assert
            // Arrange
            // Arrange, Act
            // Arrange
                    playbackIsResumed = true;
                }),
            // Arrange
        });

            await service.stopIfPlayingAsync(trackModel1);

            // Arrange
        track4.trackNumber = 2;
        trackModel1 = new TrackModel(track1, dateTimeMock.object, translatorServiceMock.object, settingsMock);
            );

        it('should set the current track to undefined before raising a stop event', async () => {
            // Assert
            audioPlayerMock.verify((x) => x.playAsync(It.isAny()), Times.never());
            // Assert
    let trackSorterMock: IMock<TrackSorter>;
            const service: PlaybackService = createService();
    describe('stopIfPlaying', () => {
            service.getCurrentProgress();
            const service: PlaybackService = createService();

                service.toggleLoopMode();
            const service: PlaybackService = createService();

            }



            // Assert
            // Assert
            audioPlayerMock.setup((x) => x.stop()).verifiable(Times.once(), ExpectedCallType.InSequence);
            // Act
            queueMock.verify((x) => x.setTracks(trackModels, true), Times.exactly(1));

            const service: PlaybackService = createService();
            // Act

            await service.playNextAsync();
        });
            service.toggleIsShuffled();
            // Act
            // Arrange
            await service.resumeAsync();
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            expect(playbackIsResumed).toBeTruthy();
            const volume: number = service.volume;

            expect(service.volume).toEqual(0);
            const service: PlaybackService = createService();
            expect(service.canResume).toEqual(true);
            audioPlayerMock.reset();
            expect(playbackIsPaused).toBeTruthy();
    let trackModels: TrackModel[];
        });
            // Arrange, Act
        });
            queueMock.setup((x) => x.tracksInPlaybackOrder).returns(() => tracks.tracks);
        it('should add tracks to the queue ordered by album', async () => {

            trackServiceMock.object,
        it('should create', () => {
            // Act
import { ArtistModel } from '../artist/artist-model';
            // Act
            audioPlayerMock.reset();
            expect(service.canPause).toBeFalsy();
        it('should define playbackStopped$', () => {
            // Act

            expect(service.canPause).toBeTruthy();

            audioPlayerMock.reset();
        it('should save play count and date last played for the current track if progress is more than 80%', async () => {
            // Act
            // Assert
        it('should not stop playback if there is no track playing', async () => {
            // Arrange
            await service.enqueueAndPlayTracksAsync(trackModels);
            // Act
            trackSorterMock.verify((x) => x.sortByAlbum(tracks.tracks), Times.exactly(1));
            const service: PlaybackService = createService();
            await service.enqueueAndPlayTracksAsync(trackModels);
            let playbackIsStopped: boolean = false;

        it('should define progress with progressSeconds as 0 and totalSeconds as 0', () => {
            // Arrange
            expect(queue.tracks[0]).toBe(tracks.tracks[0]);
            // Arrange
        });
            const service: PlaybackService = createService();

            await service.addAlbumToQueueAsync(album1);
            // Arrange
            // Assert
                service.toggleIsShuffled();
        });
            // Act
            // Arrange
            // Act
            // Assert
            }
        it('should apply the volume from before muting if it is not 0 and save the volume to the settings when toggling to unmuted', () => {

            // Arrange
            // Arrange
    describe('toggleLoopMode', () => {
            // Act
        it('should get the next track with wrap around if loopMode is All', async () => {
        });
        });
        });
            subscription.add(
            audioPlayerMock.setup((x) => x.progressSeconds).returns(() => 81);

            // Act
            expect(service.isShuffled).toBeFalsy();
            // Arrange
            // Assert
                service.toggleIsShuffled();
            );
            queueMock.verify((x) => x.getNextTrack(It.isAny(), true), Times.exactly(1));

            const service: PlaybackService = createService();
            let playbackIsResumed: boolean = false;
            service.toggleLoopMode();
            subscription.add(
            // Assert

            // Arrange

            const service: PlaybackService = createService();
        fileAccessMock = Mock.ofType<FileAccessBase>();
import { QueuePersister } from './queue-persister';

        it('should apply a volume of 0.5 if the volume before muting is 0 and save the volume to the settings when toggling to unmuted', () => {
            expect(isPlayingPreviousTrack).toBeFalsy();

        it('should play the next track if the given track is playing and it not the only track in the queue', async () => {
            subscription.add(

            expect(service.canResume).toBeTruthy();


    });
            const genreToAdd: GenreModel = new GenreModel('genre1', translatorServiceMock.object);
            expect(playbackIsStopped).toBeTruthy();

    });
            queueMock.verify((x) => x.addTracks([trackModel1]), Times.once());
import { GenreModel } from '../genre/genre-model';
            // Act
            queueMock.verify((x) => x.getNextTrack(It.isAny(), false), Times.exactly(1));
        album1 = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
            expect(service.playbackStarted$).toBeDefined();
            // Act
            const service: PlaybackService = createService();
            await service.enqueueAndPlayTracksAsync(trackModels);
            audioPlayerMock.verify((x) => x.playAsync(trackModel2), Times.exactly(1));
        });
            await service.enqueueAndPlayTracksAsync(trackModels);
            while (service.loopMode !== LoopMode.None) {
            expect(service.progressChanged$).toBeDefined();
            // Arrange, Act
            audioPlayerMock.reset();
            service.volume = 1;
            const service: PlaybackService = createService();
            expect(service.canPause).toBeTruthy();
    describe('addGenreToQueueAsync', () => {
            // Arrange

        it('should save play count and date last played for the current track on playback finished', async () => {


            // Arrange
            const service: PlaybackService = createService();
            audioPlayerMock.reset();
            expect(service.canPause).toEqual(false);
        });
                service.playbackSkipped$.subscribe(() => {
            await service.addAlbumToQueueAsync(album1);
        });


                    receivedTrack = playbackStarted.currentTrack;

        it('should shuffle the queue when shuffle is disabled', () => {
            const service: PlaybackService = createService();
            trackServiceMock.verify((x) => x.getTracksForArtists([artistToAdd], ArtistType.trackArtists), Times.exactly(1));
            // Arrange

            expect(settingsStub.volume).toEqual(1);
        pauseEvent = new Subject();

            // Arrange
            const service: PlaybackService = createService();
            mathExtensionsMock.setup((x) => x.clamp(1.5, 0, 1)).returns(() => 1);
            audioPlayerMock.reset();
            expect(service.isPlaying).toBeTruthy();
        it('should add tracks to the queue shuffled if shuffle is enabled', async () => {

            // Arrange
            await service.playPreviousAsync();
            audioPlayerMock.verify((x) => x.setVolume(0.9), Times.once());
import { PlaylistServiceBase } from '../playlist/playlist.service.base';
            // Arrange
            await service.enqueueAndPlayTracksAsync(trackModels);

        });
            const service: PlaybackService = createService();
            const service: PlaybackService = createService();
            expect(service.isPlaying).toBeTruthy();

                service.toggleLoopMode();
            // Arrange
            queueMock.setup((x) => x.numberOfTracks).returns(() => 1);


            notificationServiceMock.verify((x) => x.multipleTracksAddedToPlaybackQueueAsync(4), Times.exactly(1));
        });
            // Act
            const service: PlaybackService = createService();
        mediaSessionServiceMock.setup((x) => x.playEvent$).returns(() => playEvent$);
            service.toggleIsShuffled();
        it('should set the provided volume if a volume of 1 is provided', () => {
            subscription.add(
    let trackModel3: TrackModel;
            // Act
            await service.enqueueAndPlayArtistAsync(artistToPlay, ArtistType.trackArtists);


            service.volume = 1.5;

            service.volume = 1;
            }
            service.volume = 1;
            audioPlayerFactoryMock.object,
    describe('enqueueAndPlayArtist', () => {
    describe('playNext', () => {
            settingsStub.isMuted = false;
            // Assert
            while (!service.isShuffled) {

            queueMock.setup((x) => x.tracks).returns(() => tracks.tracks);

        track4.albumTitle = 'Album title 2';
            // Act


            await service.enqueueAndPlayArtistAsync(artistToPlay, ArtistType.trackArtists);



            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);


            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            audioPlayerMock.verify((x) => x.stop(), Times.never());
            // Arrange

            // Assert
            // Arrange
            trackSorterMock.verify((x) => x.sortByAlbum(tracks.tracks), Times.exactly(1));
            const service: PlaybackService = createService();



            // Act
        });
            queueMock.setup((x) => x.getNextTrack(It.isObjectWith<TrackModel>({ path: 'Path 1' }), false)).returns(() => undefined);
            );
            // Arrange
        });
            const genreToAdd: GenreModel = new GenreModel(genreName, translatorServiceMock.object);
            queueMock.setup((x) => x.numberOfTracks).returns(() => 4);
            // Assert
            mathExtensionsMock.setup((x) => x.clamp(0, 0, 1)).returns(() => 0);
            // Act
            audioPlayerMock.setup((x) => x.totalSeconds).returns(() => 100);
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel2);
            expect(service.canResume).toBeFalsy();

            notificationServiceMock.verify((x) => x.multipleTracksAddedToPlaybackQueueAsync(4), Times.exactly(1));


            // Arrange
            // Arrange
            queuePersisterMock.object,
        });
            queueMock.verify((x) => x.setTracks(trackModels, false), Times.exactly(1));
                service.toggleLoopMode();
            playbackFinished.next();
        playbackFinished = new Subject();
            playbackFinished.next();

            // Arrange

    let playbackFailed: Subject<string>;
            expect(service.isPlaying).toBeTruthy();
            // Act
            // Act
            audioPlayerMock.setup((x) => x.stop()).verifiable(Times.once(), ExpectedCallType.InSequence);
            // Assert
            // Assert
            // Assert
            // Assert
    let nextTrackEvent: Subject<void>;

            const service: PlaybackService = createService();
            expect(service.isPlaying).toBeTruthy();
            trackServiceMock.verify((x) => x.getTracksForGenres([genreName]), Times.once());
                }),
            const service: PlaybackService = createService();
            trackServiceMock.verify((x) => x.getTracksForGenres([genreName]), Times.once());
        it('should set the current track to undefined before raising a playback stopped event', async () => {
            await service.stopIfPlayingAsync(trackModel2);
            const service: PlaybackService = createService();
            // Act

            while (service.isShuffled) {
        });



            // Act

            // Assert
            audioPlayerMock.reset();

                    receivedTrack = playbackStarted.currentTrack;
            // Assert
        it('should return an empty queue if it has no tracks', () => {
        track3.albumTitle = 'Album title 2';
            service.toggleIsShuffled();
    });
        it('should add tracks to the queue ordered by album', async () => {
        });
            queueMock.verify((x) => x.setTracks(orderedTrackModels, It.isAny()), Times.exactly(1));
        it('should add tracks to the queue ordered by album', async () => {
            audioPlayerMock.setup((x) => x.stop()).verifiable(Times.once(), ExpectedCallType.InSequence);
            expect(service.playbackSkipped$).toBeDefined();
        });

            // Assert
            audioPlayerMock.reset();



            let receivedTrack: TrackModel | undefined;

            expect(service.canResume).toBeFalsy();

    });

            service.pause();
        it('should set the current track to undefined before raising a stop event', async () => {
            // Arrange
            // Act
            // Assert

                service.playbackStopped$.subscribe(() => {
            Object.defineProperty(service, '_progress', { value: new PlaybackProgress(10, 20) });

            let progressChanged: boolean = false;
    describe('enqueueAndPlayGenre', () => {
            let currentTrack: TrackModel | undefined;
            // Act
        it('should add tracks to the queue ordered by album', async () => {
            const service: PlaybackService = createService();
            service.removeFromQueue([trackModel1]);

            // Arrange
        it('should return the queued tracks if the queue has tracks', () => {
        it('should get the previous track without wrap around if loopMode is None', async () => {

    let track3: Track;

            expect(settingsStub.volume).toEqual(0);
            // Arrange
            service.toggleIsShuffled();
            // Act

        it('should define progressChanged$', () => {
            // Assert
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);

    });

    });

            // Assert
            const artistToPlay: ArtistModel = new ArtistModel('artist1', translatorServiceMock.object);
            await service.playPreviousAsync();
        trackSorterMock = Mock.ofType<TrackSorter>();



        it('should order tracks for the artist byAlbum', async () => {

            );
            audioPlayerMock.setup((x) => x.playAsync(trackModel1)).verifiable(Times.once(), ExpectedCallType.InSequence);
            await service.skipByFractionOfTotalSecondsAsync(0.5);
                    isPlayingPreviousTrack = playbackStarted.isPlayingPreviousTrack;
            expect(queue.tracks[2]).toBe(tracks.tracks[2]);
            await service.togglePlaybackAsync();
                }),
            // Arrange
            audioPlayerMock.reset();
        });
            audioPlayerMock.verify((x) => x.setVolume(0), Times.exactly(1));
            // Assert
            settingsStub.volume = 0.9;
        audioPlayerMock.setup((x) => x.playingPreloadedTrack$).returns(() => playingPreloadedTrack$);
            // Arrange
    });
            const service: PlaybackService = createService();
            let playbackIsStopped: boolean = false;
            notificationServiceMock.verify((x) => x.singleTrackAddedToPlaybackQueueAsync(), Times.never());
        it('should raise an event that playback is resumed if playing', async () => {

            // Act
            // Assert

            await service.playPreviousAsync();

            playbackFinished.next();
            await service.resumeAsync();
            // Act

            }
            // Assert


                service.toggleIsShuffled();

    describe('playPrevious', () => {



            audioPlayerMock.verify((x) => x.playAsync(trackModel1), Times.once());

        });
                    currentTrack = service.currentTrack;

            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModelMock.object);
                    isPlayingPreviousTrack = playbackStarted.isPlayingPreviousTrack;

    let loggerMock: IMock<Logger>;

            trackSorterMock.verify((x) => x.sortByAlbum(tracks.tracks), Times.exactly(1));
            const service: PlaybackService = createService();
            // Assert
            // Assert
            // Act

        });
            trackModelMock.verify((x) => x.increasePlayCountAndDateLastPlayed(), Times.once());
            expect(service.volume).toEqual(1);

            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel2);
            audioPlayerMock.verify((x) => x.playAsync(trackModel2), Times.exactly(1));
            audioPlayerMock.verify((x) => x.setVolume(0), Times.once());


            const service: PlaybackService = createService();



            queueMock.setup((x) => x.setTracks(trackModels, false)).returns(() => trackModels);
            let isPlayingPreviousTrack: boolean = true;
            const service: PlaybackService = createService();
        it('should not play the next track on playback finished if found and if loopMode is One', async () => {
            // Arrange

        track1.albumArtists = ';Album artist 1;';
        it('should set the audio player volume to the provided volume if a volume between 0 and 1 exclusive is provided', () => {
        });
        it('should define playbackSkipped$', () => {
            const service: PlaybackService = createService();
            );
    describe('playbackQueue', () => {

        it('should order tracks for the artist byAlbum', async () => {
    describe('forceShuffled', () => {
            // Arrange


            await service.addArtistToQueueAsync(artistToAdd, ArtistType.trackArtists);
            // Act
            // Assert
            // Assert
            audioPlayerMock.verify((x) => x.playAsync(trackModel1), Times.exactly(1));
            }

            // Arrange, Act

            audioPlayerMock.reset();

            const service: PlaybackService = createService();
    describe('addTracksToQueueAsync', () => {
    beforeEach(() => {
import { IAudioPlayer } from './audio-player/i-audio-player';
        });
            audioPlayerMock.verify((x) => x.resumeAsync(), Times.once());
            expect(service.loopMode).toEqual(LoopMode.One);
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);


        applicationPathsMock = Mock.ofType<ApplicationPaths>();
        trackModel3 = new TrackModel(track3, dateTimeMock.object, translatorServiceMock.object, settingsMock);


            expect(service.isPlaying).toBeTruthy();
                    receivedTrack = playbackStarted.currentTrack;
            let isPlayingPreviousTrack: boolean = true;

        it('should set the audio player volume to the provided volume if a volume of 1 is provided', () => {
            // Arrange, Act
        });

            await service.enqueueAndPlayAlbumAsync(album1);
            mathExtensionsMock.setup((x) => x.clamp(1, 0, 1)).returns(() => 1);
            // Assert
            // Arrange
            // Assert
            // Arrange

            subscription.add(
            // Act

            // Assert
            const service: PlaybackService = createService();
            const service: PlaybackService = createService();


        track4.albumArtists = ';Album artist 2;';

            // Arrange
            queueMock.setup((x) => x.getPreviousTrack(trackModel1, false)).returns(() => trackModel2);
        it('should pause playback if playing', async () => {
    let settingsMock: any;
            // Assert
            // Act
            }
        track2.albumTitle = 'Album title 1';
            const service: PlaybackService = createService();

            queueMock.verify((x) => x.setTracks(orderedTrackModels, It.isAny()), Times.exactly(1));
            // Act
            expect(service.volume).toEqual(0.5);
                service.toggleLoopMode();
            const service: PlaybackService = createService();

                service.playbackStarted$.subscribe((playbackStarted: PlaybackStarted) => {
    });
            // Act
                }),
            audioPlayerMock.setup((x) => x.playAsync(trackModel2)).verifiable(Times.once(), ExpectedCallType.InSequence);
        track2.discNumber = 2;


            await service.enqueueAndPlayArtistAsync(artistToPlay, ArtistType.trackArtists);
                service.playbackStopped$.subscribe(() => {
            await service.enqueueAndPlayGenreAsync(genreToPlay);
            while (service.isShuffled) {
            // Assert
            const service: PlaybackService = createService();
            // Assert
            // Assert
        playEvent = new Subject();

            const genreName = 'genre1';
        });
            const service: PlaybackService = createService();
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
    });
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);

            fileAccessMock.object,

            let receivedTrack: TrackModel | undefined;
            const genreName = 'genre1';
            expect(isPlayingPreviousTrack).toBeFalsy();

        it('should remove tracks when tracksToRemove has items', () => {
        });
            // Assert
        });

            expect(service.loopMode).toEqual(LoopMode.None);
            expect(receivedPlaybackSkipped).toBeTruthy();
        const playingPreloadedTrack$: Observable<TrackModel> = playingPreloadedTrack.asObservable();
            // Act
        it('should order tracks for the album byAlbum', async () => {
        dateTimeMock = Mock.ofType<DateTime>();
    }
            // Assert
            // Act

            // Act
        track1.discNumber = 1;
            expect(service.volume).toEqual(0.8);
        it('should play the previous track if found and playback lasted for less then 3 seconds', async () => {
            );
            const genreName = '';
            const service: PlaybackService = createService();
        });
    describe('toggleIsShuffled', () => {
            audioPlayerMock.reset();
            expect(service.volume).toEqual(1);
            // Assert
            queueMock.setup((x) => x.getNextTrack(It.isObjectWith<TrackModel>({ path: 'Path 1' }), false)).returns(() => undefined);
        });
            // Arrange
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel2);

    afterEach(() => {


            expect(service.currentTrack).toBe(trackModel2);
                }),
            // Assert


        it('should get the previous track with wrap around if loopMode is One', async () => {

            // Act
    describe('skipByFractionOfTotalSeconds', () => {
            await service.enqueueAndPlayGenreAsync(genreToPlay);

            await service.enqueueAndPlayTracksAsync(trackModels);
        track2.albumArtists = ';Album artist 1;';
        it('should initialize canResume as true', () => {

            await service.enqueueAndPlayTracksAsync(trackModels);
        it('should start playing the first queued track if not playing and the queue is not empty', async () => {
            const service: PlaybackService = createService();

            await service.enqueueAndPlayTracksAsync(trackModels);
            expect(service.isPlaying).toBeTruthy();
    let pauseEvent: Subject<void>;
            // Arrange
        });
        test.todo('should write tests');
            // Assert
    let subscription: Subscription;

    describe('enqueueAndPlayTracks', () => {
        });
            // Assert


            trackServiceMock.verify((x) => x.getTracksForArtists([artistToPlay], ArtistType.trackArtists), Times.exactly(1));
            // Assert
            // Act
            const service: PlaybackService = createService();

            // Arrange
            audioPlayerMock.setup((x) => x.totalSeconds).returns(() => 100);

        });
        it('should start playback', async () => {
        });
    describe('removeFromQueue', () => {
            // Act


        const playbackFinished$: Observable<void> = playbackFinished.asObservable();
            const service: PlaybackService = createService();
            // Arrange

        it('should resume playback if paused', async () => {
            expect(queue.tracks[3]).toBe(tracks.tracks[3]);
        it('should initialize isShuffled as false', () => {
            const service: PlaybackService = createService();
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);

            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            queueMock.verify((x) => x.setTracks(It.isAny(), It.isAny()), Times.never());
            service.toggleMute();



            await service.enqueueAndPlayTracksAsync(trackModels);
            expect(service.canResume).toBeTruthy();

        it('should raise an event that playback has started, containing the current track and if a previous track is being played.', async () => {
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            // Act

        });
            expect(progressChanged).toBeTruthy();
    let audioPlayerMock: IMock<IAudioPlayer>;

            // Act
            expect(service.isPlaying).toBeFalsy();



        });
        it('should add tracks to the queue unshuffled if shuffle is disabled', async () => {

                    receivedTrack = playbackStarted.currentTrack;
            await service.enqueueAndPlayTracksStartingFromGivenTrackAsync(trackModels, trackModel1);
        trackServiceMock.setup((x) => x.getTracksForGenres(It.isAny())).returns(() => tracks);
            const service: PlaybackService = createService();
    let queueMock: IMock<Queue>;
        });
            await service.addTracksToQueueAsync([]);


            expect(currentTrack).toBeUndefined();
        mediaSessionServiceMock.setup((x) => x.pauseEvent$).returns(() => pauseEvent$);
            // Arrange
            while (service.loopMode !== LoopMode.All) {

    let applicationPathsMock: IMock<ApplicationPaths>;
            // Assert
        });
            let receivedTrack: TrackModel | undefined;

            // Act
            service.toggleLoopMode();
            // Arrange
            while (service.loopMode !== LoopMode.None) {
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            // Assert

            while (service.loopMode !== LoopMode.All) {
            const service: PlaybackService = createService();
            let isPlayingPreviousTrack: boolean = true;

            // Arrange, Act
            const service: PlaybackService = createService();
                service.playbackStopped$.subscribe(() => {
            }
            mathExtensionsMock.setup((x) => x.clamp(0, 0, 1)).returns(() => 0);



            await service.enqueueAndPlayTracksStartingFromGivenTrackAsync(trackModels, trackModel1);
            // Act
            audioPlayerMock.setup((x) => x.totalSeconds).returns(() => 60);
            subscription.add(
            audioPlayerMock.verify((x) => x.resumeAsync(), Times.never());
            expect(settingsStub.volume).toEqual(0.9);
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel2);

            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
                    currentTrack = service.currentTrack;
            mathExtensionsMock.setup((x) => x.clamp(0.8, 0, 1)).returns(() => 0.8);


    let mediaSessionServiceMock: IMock<MediaSessionService>;

            const service: PlaybackService = createService();

            await service.enqueueAndPlayTracksAsync([trackModelMock.object]);
                    isPlayingPreviousTrack = playbackStarted.isPlayingPreviousTrack;
        previousTrackEvent = new Subject();
            // Act


            // Arrange
            await service.enqueueAndPlayTracksAsync([]);
            const trackModelMock: IMock<TrackModel> = Mock.ofType<TrackModel>();

            expect(service.canPause).toBeFalsy();

            // Act
        it('should shuffle the queue', () => {
        it('should raise an event that playback was skipped', async () => {

            while (service.loopMode !== LoopMode.One) {
            // Arrange
            await service.enqueueAndPlayAlbumAsync(album1);
            audioPlayerMock.verify((x) => x.setVolume(1), Times.exactly(1));
                }),
            queueMock.reset();
        });
            await service.resumeAsync();
        track2.trackNumber = 1;
            expect(service.isPlaying).toEqual(false);
            const artistToPlay: ArtistModel = new ArtistModel('artist1', translatorServiceMock.object);
            // Arrange
            // Assert
            audioPlayerMock.setup((x) => x.stop()).verifiable(Times.once(), ExpectedCallType.InSequence);
            // Assert
            queueMock.verify((x) => x.addTracks(It.isAny()), Times.never());
            // Assert
                }),

            const service: PlaybackService = createService();
        });
            }
            const service: PlaybackService = createService();
        audioPlayerMock.setup((x) => x.playbackFinished$).returns(() => playbackFinished$);
            audioPlayerMock.verify((x) => x.stop(), Times.exactly(1));
        });
            audioPlayerMock.setup((x) => x.stop()).verifiable(Times.once(), ExpectedCallType.InSequence);
            // Assert
                service.progressChanged$.subscribe(() => {
            service.toggleIsShuffled();
            audioPlayerMock.setup((x) => x.totalSeconds).returns(() => 100);
            const service: PlaybackService = createService();
            // Assert
            settingsStub.volume = 0.9;



        });
            // Assert
            const service: PlaybackService = createService();
            queueMock.setup((x) => x.setTracks(trackModels, false)).returns(() => trackModels);
    let track2: Track;
            // Act
            audioPlayerMock.verify((x) => x.setVolume(0.8), Times.exactly(1));
            expect(service.canPause).toBeTruthy();
            queueMock.setup((x) => x.getPreviousTrack(trackModel1, false)).returns(() => undefined);
            while (service.loopMode !== LoopMode.One) {
            // Arrange

            expect(receivedTrack).toBe(trackModel2);
            audioPlayerMock.verify((x) => x.stop(), Times.once());
                }),
            // Act
            const service: PlaybackService = createService();
        track1.albumTitle = 'Album title 1';
            queueMock.setup((x) => x.tracks).returns(() => []);

            // Act
            // Act


                service.toggleLoopMode();
            const queue: TrackModels = service.playbackQueue;
        it('should save the provided volume in the settings if a volume between 0 and 1 exclusive is provided', () => {
            const service: PlaybackService = createService();
            expect(service.canPause).toBeFalsy();
            // Arrange
        });
        it('should set loopMode to One when loopMode is All', () => {
                service.toggleIsShuffled();
            queueMock.verify((x) => x.getPreviousTrack(It.isAny(), false), Times.exactly(1));
            }

            const service: PlaybackService = createService();

        const nextTrackEvent$: Observable<void> = nextTrackEvent.asObservable();
                service.toggleLoopMode();

            const service: PlaybackService = createService();
            expect(service.isPlaying).toBeTruthy();

        });
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel2);
            const service: PlaybackService = createService();

            // Arrange, Act
            // Act
    let dateTimeMock: IMock<DateTime>;
            queueMock.verify((x) => x.removeTracks(It.isAny()), Times.never());
            );

            // Act
            // Assert
            const service: PlaybackService = createService();
            // Assert
        it('should not add tracks to the queue if tracksToAdd is empty', async () => {
            const service: PlaybackService = createService();
        it('should apply a volume of 0 and save the volume to the settings when toggling to muted', () => {
            trackServiceMock.verify((x) => x.getTracksForGenres([genreName]), Times.once());
        });
            // Assert
        it('should stop playback on playback finished if a next track is not found', () => {
            // Act
        });
        });

            expect(service.canResume).toBeFalsy();
            // Act
    describe('enqueueAndPlayAlbum', () => {

            // Arrange, Act

            // Assert
            audioPlayerMock.verify((x) => x.setVolume(1), Times.exactly(1));

            // Assert
        });
import { TrackServiceBase } from '../track/track.service.base';


            const service: PlaybackService = createService();
        });
            const service: PlaybackService = createService();
            expect(service.playbackResumed$).toBeDefined();
                service.toggleLoopMode();
    });
import { ArtistType } from '../artist/artist-type';
            const service: PlaybackService = createService();
            const service: PlaybackService = createService();
            // Act
    let playEvent: Subject<void>;
            queueMock.verify((x) => x.getNextTrack(trackModel1, It.isAny()), Times.once());
            // Act
            await service.enqueueAndPlayTracksStartingFromGivenTrackAsync(trackModels, trackModel1);

            queueMock.verify((x) => x.setTracks(trackModels, true), Times.exactly(1));
            // Assert
            audioPlayerMock.setup((x) => x.stop()).verifiable(Times.once(), ExpectedCallType.InSequence);
    });
        });
        });
            expect(service.isPlaying).toBeFalsy();

            // Arrange
        track3.albumArtists = ';Album artist 2;';
            // Arrange

    describe('addPlaylistToQueueAsync', () => {
            // Assert

            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
            expect(service.progress.totalSeconds).toEqual(0);
    describe('addArtistToQueueAsync', () => {
            expect(receivedTrack).toBe(trackModel2);
            while (service.loopMode !== LoopMode.One) {
            // Assert

            await service.playQueuedTrackAsync(trackModel2);
            while (service.isShuffled) {
            service.volume = 0;

        it('should get the next track with wrap around if loopMode is One', async () => {
import { FileAccessBase } from '../../common/io/file-access.base';
            expect(receivedTrack).toBe(trackModel2);
            playlistServiceMock.object,
            queueMock.verify((x) => x.shuffle(), Times.exactly(1));
            // Assert
            // Assert

            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModelMock.object);
        });
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
                service.toggleLoopMode();
            // Assert

        trackServiceMock = Mock.ofType<TrackServiceBase>();
        });

            service.volume = -0.5;
            const service: PlaybackService = createService();
            await service.enqueueAndPlayGenreAsync(genreToPlay);

        it('should raise an event that playback has started, containing the current track and if a next track is being played.', async () => {
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);

            let playbackIsResumed: boolean = false;
            expect(currentTrack).toBeUndefined();
            const service: PlaybackService = createService();
            await service.enqueueAndPlayTracksAsync([trackModel1]);
            // Assert
            // Assert
            // Arrange
    let mathExtensionsMock: IMock<MathExtensions>;
        });
            audioPlayerMock.reset();
            audioPlayerMock.verify((x) => x.playAsync(trackModel2), Times.once());

            // Arrange
    describe('resume', () => {

            const service: PlaybackService = createService();

            // Arrange
        });
            // Act
            // Assert
    describe('toggleMute', () => {
        it('should set loopMode to All when loopMode is None', () => {
            // Arrange


            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModelMock.object);
    });
            await service.addArtistToQueueAsync(artistToAdd, ArtistType.trackArtists);
                service.playbackStarted$.subscribe((playbackStarted: PlaybackStarted) => {
            audioPlayerMock.reset();
            // Act
            queueMock.setup((x) => x.getFirstTrack()).returns(() => trackModel1);
                service.toggleLoopMode();
            queueMock.verify((x) => x.addTracks(orderedTrackModels), Times.exactly(1));
            await service.enqueueAndPlayTracksAsync(trackModels);
            const service: PlaybackService = createService();
            queueMock.verify((x) => x.getPreviousTrack(It.isAny(), false), Times.exactly(1));
            expect(service.canResume).toBeFalsy();
            const service: PlaybackService = createService();

        playlistServiceMock = Mock.ofType<PlaylistServiceBase>();
            audioPlayerMock.verify((x) => x.setVolume(0.6), Times.exactly(1));
            queueMock.setup((x) => x.getNextTrack(It.isAny(), false)).returns(() => undefined);
            );

            await service.enqueueAndPlayTracksAsync(trackModels);
            expect(service.canPause).toBeTruthy();
            translatorServiceMock.verify((x) => x.get(It.isAny()), Times.never());
            // Act

            // Act
        it('should increase play count and date last played for the current track on playback finished', async () => {

            audioPlayerMock.verify((x) => x.stop(), Times.never());
            // Assert
            );
import { MediaSessionService } from '../media-session/media-session.service';


            // Arrange

            trackServiceMock.verify((x) => x.savePlayCountAndDateLastPlayed(trackModelMock.object), Times.once());
            audioPlayerMock.verifyAll();

            service.toggleMute();
        it('should increase play count and date last played for the current track if progress is more than 80%', async () => {
        });
            audioPlayerMock.reset();


            audioPlayerMock.verify((x) => x.skipToSecondsAsync(30), Times.exactly(1));
            subscription.add(
            await service.enqueueAndPlayTracksAsync([]);
            const artistToAdd: ArtistModel = new ArtistModel('artist1', translatorServiceMock.object);
            service.volume = 0.8;
            expect(service.isPlaying).toBeTruthy();
                }),

            expect(service.canResume).toBeFalsy();
        });
                service.toggleLoopMode();
import { PlaybackProgress } from './playback-progress';
            expect(service.loopMode).toEqual(LoopMode.None);
                service.toggleLoopMode();

            // Act

            // Act
