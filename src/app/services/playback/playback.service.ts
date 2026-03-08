        this.postPause();
    }
    private async stopAndPlayAsync(trackToPlay: TrackModel, isPlayingPreviousTrack: boolean): Promise<void> {
            await this.stopAndPlayAsync(firstTrack, false);
    }
        this.currentTrack = trackToPlay;
                clearTimeout(this._preloadTimeoutId);
            if (this.settings.playbackControlsLoop !== 0) {
        const orderedTracks: TrackModel[] = this.trackSorter.sortByAlbum(tracksForArtists.tracks);
        }
            this.logger.info(


            this.queue.unShuffle();
                this.logger.info(`Preloaded '${nextTrack.path}'`, 'PlaybackService', 'preloadNextTrackAfterDelay');
    private _canResume: boolean = true;
    }
                if (this.currentTrack && this.currentTrack.path === trackInQueue.path) {
    }
    public progressChanged$: Observable<PlaybackProgress> = this.progressChanged.asObservable();
        this._isPlaying = true;
        private logger: Logger,
        const seconds: number = fractionOfTotalSeconds * this.audioPlayer.totalSeconds;
    }


            trackToPlay = this.queue.getPreviousTrack(this.currentTrack, allowWrapAround);
            if (this._preloadTimeoutId !== undefined && this._preloadTimeoutId !== null) {
        }
                }
        } else {
    }
    private startUpdatingProgress(): void {

    public playbackStopped$: Observable<void> = this.playbackStopped.asObservable();
export class PlaybackService {
        }
            this.increasePlayCountAndDateLastPlayedForCurrentTrack();
        this.queue.restoreTracks(info.tracks, info.playbackOrder);
        this._canResume = false;

        this.currentTrack = undefined;
        }
    }
    public constructor(
        if (trackToPlay != undefined) {
            }),
        if (this.progress.progressPercent <= 80) {

        this.preloadNextTrackAfterDelay();
        if (tracksToEnqueue.length === 0) {
        this._volume = this.settings.volume;
    }
    private _canPause: boolean = false;
        this.queue.shuffle();
    }
        this.playbackSkipped.next();
            await this.playAsync(trackToPlay, false);
        this.stopUpdatingProgress();


        }
    }
        await this.stopAndPlayAsync(trackToPlay, false);
import { Injectable } from '@angular/core';
            this.logger.warn('CurrentTrack is undefined', 'PlaybackService', 'increaseSkipCountForCurrentTrack');
    public async addPlaylistToQueueAsync(playlistToAdd: PlaylistModel): Promise<void> {
        this.trackService.saveSkipCount(this.currentTrack);



        const tracksForPlaylist: TrackModels = await this.playlistService.getTracksAsync([playlistToPlay]);
        private fileAccess: FileAccessBase,



    public async playQueuedTrackAsync(trackToPlay: TrackModel): Promise<void> {
        await this.enqueueAndPlayTracksAsync(orderedTracks);
    public async togglePlaybackAsync(): Promise<void> {
        // Play first track in queue (will be a random track if queue is shuffled)
        }
import { PlaylistModel } from '../playlist/playlist-model';


    public async enqueueAndPlayAlbumAsync(albumToPlay: AlbumModel): Promise<void> {
            this.settings.playbackControlsShuffle = 0;
        return this._canPause;

        if (!this.isPlaying) {
        if (this.currentTrack) {

    private increaseSkipCountForCurrentTrack(): void {
                void this.playbackFailedHandlerAsync(audioFilePath);
        }
    public async stopIfPlayingAsync(track: TrackModel): Promise<void> {


        await this.audioPlayer.skipToSecondsAsync(seconds);
            this.settings.playbackControlsLoop = 2;
            );
import { TrackModel } from '../track/track-model';


        if (this.currentTrack != undefined) {
        this._audioPlayer = this.audioPlayerFactory.create();
        this.audioPlayer.pause();
        private playlistService: PlaylistServiceBase,

        if (nextTrack) {
        this.applyVolume(v);

        }
            return;
            await this.stopAndPlayAsync(trackToPlay, false);
            this.queue.shuffle();

        const orderedTracks: TrackModel[] = this.trackSorter.sortByAlbum(tracksForGenre.tracks);
        return this._canResume;

    }
        for (const trackInQueue of tracksInQueue) {
            this.logger.info(`Pausing '${this.currentTrack.path}'`, 'PlaybackService', 'pause');
        this.progressChanged.next(this._progress);
        }
    private async playbackFinishedHandlerAsync(): Promise<void> {
    }
            return;
        return this._audioPlayer;
    public get isPlaying(): boolean {
        const nextTrack: TrackModel | undefined = this.queue.getNextTrack(this.currentTrack, this.loopMode === LoopMode.All);
        this.applyVolumeFromSettings();
            if (this.queue.numberOfTracks === 1) {
        await this.audioPlayer.resumeAsync();
            this.logger.info(`Stopping '${this.currentTrack.path}'`, 'PlaybackService', 'stop');
        if (extension === FileFormats.m4a) {


    public playbackPaused$: Observable<void> = this.playbackPaused.asObservable();
    }
            }),
        if (genreToAdd == undefined) {

        if (trackToPlay != undefined) {
            }

    private _progressInterval: number = 0;
            const firstTrack: TrackModel | undefined = this.queue.getFirstTrack();
    }
            if (trackToSet) {

    public playbackStarted$: Observable<PlaybackStarted> = this.playbackStarted.asObservable();
    public async enqueueAndPlayGenreAsync(genreToPlay: GenreModel): Promise<void> {
    }
        if (this.currentTrack != undefined) {

import { ArtistType } from '../artist/artist-type';
            return;
    private preloadNextTrackAfterDelay(): void {
            this.logger.warn('CurrentTrack is undefined', 'PlaybackService', 'increasePlayCountAndDateLastPlayedForCurrentTrack');
    private async skipToSecondsAsync(seconds: number): Promise<void> {
    public removeFromQueue(tracksToRemove: TrackModel[]): void {
        this.postPlay(preloadedTrack, false);
    private playbackStarted: Subject<PlaybackStarted> = new Subject();
        this._progress = this.getCurrentProgress();
    }
    }

                `Restoring playback to track: ${info.playingTrack.path} at ${info.progressSeconds} seconds`,
        this.pauseUpdatingProgress();
        // If already playing (e.g. from double-clicking files), do not restore queue.
        private mediaSessionService: MediaSessionService,




            return;
        this.playbackStarted.next(new PlaybackStarted(trackToPlay, isPlayingPreviousTrack));
import { TrackModels } from '../track/track-models';

    private _audioPlayer: IAudioPlayer;
            return;
            await this.stopAndPlayAsync(trackToPlay, true);

            return;
        private dialogService: DialogServiceBase,




        }
        this._progress = this.getCurrentProgress();
    }
        await this.playAsync(trackToPlay, isPlayingPreviousTrack);
                void this.playPreviousAsync();
                this.reportProgress();

        await this.audioPlayer.startPausedAsync(track, skipSeconds);
    }
        this.stop();
    public currentTrack: TrackModel | undefined;
    public toggleMute(): void {
    public toggleLoopMode(): void {
        }

    ) {
    }
    public get canPause(): boolean {


        private audioPlayerFactory: AudioPlayerFactory,

            this.mediaSessionService.previousTrackEvent$.subscribe(() => {
        await this.audioPlayer.skipToSecondsAsync(seconds);

    }

        return this._progress;
            } else {
        }
        if (tracksToRemove.length === 0) {
    }
                    // this.playbackStarted.next(new PlaybackStarted(trackInQueue, false));
    public async resumeAsync(): Promise<void> {
import { AudioPlayerFactory } from './audio-player/audio-player.factory';
        this.queue.addTracks(tracksToAdd);
            await this.notificationService.multipleTracksAddedToPlaybackQueueAsync(numberOfAddedTracks);
        await this.addTracksToQueueAsync(orderedTracks);
        if (playlistToAdd == undefined) {

    private progressChanged: Subject<PlaybackProgress> = new Subject();
    }
    }
            if (this.settings.playbackControlsShuffle === 1) {
            this.mediaSessionService.nextTrackEvent$.subscribe(() => {
    }
    public updateQueueTracks(tracks: Track[]): void {

    private reportProgress(): void {

    }
        const extension: string = this.fileAccess.getFileExtension(audioFilePath);
    public get playbackQueue(): TrackModels {


import { PlaybackStarted } from './playback-started';
        this._shouldReportProgress = true;
            this.settings.playbackControlsLoop = 1;
        if (this.settings.rememberPlaybackStateAfterRestart) {
        } else {
        const tracksForArtists: TrackModels = this.trackService.getTracksForArtists([artistToAdd], artistType);

        this.startUpdatingProgress();
    private _preloadTimeoutId: NodeJS.Timeout | number | undefined;
    }

            return;
        } else {


            this.logger.info(`Track finished: '${this.currentTrack.path}'`, 'PlaybackService', 'playbackFinishedHandler');
        private settings: SettingsBase,

        if (this.currentTrack != undefined && this.currentTrack.path === track.path) {
        this.stop();
    }
    public playbackResumed$: Observable<void> = this.playbackResumed.asObservable();
            this._loopMode = LoopMode.None;
            this._progress = this.getCurrentProgress();
        this.playbackResumed.next();
    }
        const tracksForAlbum: TrackModels = this.trackService.getTracksForAlbums([albumToPlay.albumKey]);
            }),
    }
        await this.stopAndPlayAsync(enqueuedTrackToPlay, false);

            // Add tracks to playback queue in playback order so that the user can see what is coming next in the queue
        this.currentTrack.increasePlayCountAndDateLastPlayed();

            await this.dialogService.cannotPlayAudioFileAsync();
        return this._volume;
            const trackToSet = tracks.find((t) => t.path === trackInQueue.path);
        } else {
        const info: QueueRestoreInfo = this.queuePersister.restore();
        }
        this._isShuffled = true;
                this.stop();
    }
        }
        private queue: Queue,
        }
        const trackToPlay: TrackModel | undefined = this.queue.getNextTrack(this.currentTrack, allowWrapAround);
            return;
    public async enqueueAndPlayTracksStartingFromGivenTrackAsync(tracksToEnqueue: TrackModel[], trackToPlay: TrackModel): Promise<void> {
        if (trackToPlay == undefined) {
            return;
    private async playbackFailedHandlerAsync(audioFilePath: string): Promise<void> {
        this.audioPlayer.stop();
        if (this._shouldReportProgress) {
            this.settings.playbackControlsLoop = 0;
        this.logger.info(`Toggled loopMode from ${oldLoopMode} to ${this._loopMode}`, 'PlaybackService', 'toggleLoopMode');

        return new PlaybackProgress(this.audioPlayer.progressSeconds, this.audioPlayer.totalSeconds);
            this.progressChanged.next(this._progress);
                    this.currentTrack = trackInQueue;
        }



            this.queuePersister.save(this.queue, this.currentTrack, this.progress.progressSeconds);
        this.logger.info(`Toggled isShuffled from ${!this._isShuffled} to ${this._isShuffled}`, 'PlaybackService', 'toggleIsShuffled');
            if (this.currentTrack != undefined) {

    public async playNextAsync(): Promise<void> {
    public get progress(): PlaybackProgress {
        await this.notifyOfTracksAddedToPlaybackQueueAsync(tracksToAdd.length);
    }
    }
    public async addTracksToQueueAsync(tracksToAdd: TrackModel[]): Promise<void> {
            this.logger.info('Playback already in progress, not restoring playback queue', 'PlaybackService', 'restoreQueue');
                if (this.currentTrack === undefined) {
    public async enqueueAndPlayArtistAsync(artistToPlay: ArtistModel, artistType: ArtistType): Promise<void> {

        this.initializeSubscriptions();
import { TrackServiceBase } from '../track/track.service.base';
            this.settings.playbackControlsShuffle = 1;
        }

                await this.playNextAsync();
        const orderedTracks: TrackModel[] = this.trackSorter.sortByAlbum(tracksForArtists.tracks);
        const tracksForPlaylist: TrackModels = await this.playlistService.getTracksAsync([playlistToAdd]);
                void this.togglePlaybackAsync();

        let trackToPlay: TrackModel | undefined;
    public saveQueue(): void {
        this.postPlay(trackToPlay, isPlayingPreviousTrack);
        if (this.loopMode === LoopMode.One) {
        this._isPlaying = false;
        this.subscription.add(
        if (this._isShuffled) {

        await this.enqueueAndPlayTracksAsync(tracksForPlaylist.tracks);
            this._volumeBeforeMute = this._volume;
    }
    }
        this.playbackSkipped.next();
        }
    public async playPreviousAsync(): Promise<void> {

        this.subscription.add(
            this.logger.warn('Progress was undefined', 'PlaybackService', 'increaseCountersForCurrentTrackBasedOnProgress');
    public get audioPlayer(): IAudioPlayer {

        this.subscription.add(
        await this.addTracksToQueueAsync(tracksForPlaylist.tracks);
            return;
                void this.playbackFinishedHandlerAsync();
@Injectable({ providedIn: 'root' })
        this.subscription.add(
                }
    }
        this.currentTrack.increaseSkipCount();
        if (this.currentTrack != undefined && this.audioPlayer.progressSeconds > 3) {
            this.audioPlayer.playingPreloadedTrack$.subscribe((preloadedTrack: TrackModel) => {
    }
        const trackToPlay: TrackModel | undefined = this.queue.getNextTrack(this.currentTrack, allowWrapAround);
}
                trackModels.addTrack(track);
    private increasePlayCountAndDateLastPlayedForCurrentTrack(): void {
        this._canPause = true;
        this._shouldReportProgress = false;
        private trackService: TrackServiceBase,
        if (tracksToEnqueue.length === 0) {
import { AlbumModel } from '../album/album-model';
        }
            }, this.settings.useCrossfade ? 500 : 2000); // Preload sooner when using crossfade to ensure crossfade is ready
    public get isShuffled(): boolean {
    private applyVolume(volume: number): void {
            await this.dialogService.cannotPlayM4aFileAsync();


    }
        }


    }


            }
            this.pause();
        const oldLoopMode: LoopMode = this._loopMode;

        this.queue.removeTracks(tracksToRemove);
        private queuePersister: QueuePersister,
        if (this._volume === 0) {
        await this.enqueueAndPlayTracksAsync(orderedTracks);
    }
        const orderedTracks: TrackModel[] = this.trackSorter.sortByAlbum(tracksForGenre.tracks);
        this.reportProgress();

    private async restoreQueueAsync(): Promise<void> {
        void this.mediaSessionService.setMetadataAsync(trackToPlay);
        this.subscription.add(
        return this._loopMode;
import { Logger } from '../../common/logger';
        );

                void this.togglePlaybackAsync();

import { IAudioPlayer } from './audio-player/i-audio-player';
        );
        this.audioPlayer.setVolume(this._volume);



        const enqueuedTrackToPlay: TrackModel = enqueuedTracks.filter((x) => x.path === trackToPlay.path)[0];
    private postPlay(trackToPlay: TrackModel, isPlayingPreviousTrack: boolean): void {
            for (const track of this.queue.tracksInPlaybackOrder) {
        if (this.currentTrack != undefined) {
        const trackModels: TrackModels = new TrackModels();

        } else {
    public pauseUpdatingProgress(): void {
        private trackSorter: TrackSorter,
import { TrackSorter } from '../../common/sorting/track-sorter';
        }
import { PlaylistServiceBase } from '../playlist/playlist.service.base';
    private playbackPaused: Subject<void> = new Subject();

        if (info.playingTrack) {
    private initializeSubscriptions(): void {
        const tracksForGenre: TrackModels = this.trackService.getTracksForGenres([genreToPlay.name]);
            this.audioPlayer.playbackFinished$.subscribe(() => {
        }
    }
    }
            this._loopMode = LoopMode.All;
        const allowWrapAround: boolean = this.loopMode === LoopMode.All;
            }
    }

        this.audioPlayer.stop();
    public async addAlbumToQueueAsync(albumToAdd: AlbumModel): Promise<void> {

        this.logger.info(`Restored ${info.tracks.length} tracks to playback queue`, 'PlaybackService', 'restoreQueue');
        this.postPlay(track, false);
    private playbackResumed: Subject<void> = new Subject();


    public async addArtistToQueueAsync(artistToAdd: ArtistModel, artistType: ArtistType): Promise<void> {
        this._canPause = false;
        private mathExtensions: MathExtensions,
    private async startPausedAsync(track: TrackModel, skipSeconds: number): Promise<void> {
        this.queue.setTracks(tracksToEnqueue, this.isShuffled);
    }

            }
        }
        await this.audioPlayer.playAsync(trackToPlay);

        this.stop();
            await this.restoreQueueAsync();
            return;
        this.stop();
    public async RestoreQueueIfNeededAsync(): Promise<void> {

import { QueueRestoreInfo } from './queue-restore-info';
    public async enqueueAndPlayTracksAsync(tracksToEnqueue: TrackModel[]): Promise<void> {
import { Track } from '../../data/entities/track';
        const tracksInQueue: TrackModel[] = this.queue.tracks.filter((qt) => tracks.map((t) => t.path).includes(qt.path));

            this._preloadTimeoutId = setTimeout(() => {
        return this._isPlaying;
    private playbackStopped: Subject<void> = new Subject();
        await this.enqueueAndPlayTracksAsync(orderedTracks);

        if (this.progress == undefined) {
        }
    public playbackSkipped$: Observable<void> = this.playbackSkipped.asObservable();

            }
import { Queue } from './queue';
import { ArtistModel } from '../artist/artist-model';
                await this.stopAndPlayAsync(this.queue.getFirstTrack()!, false);
    public getCurrentProgress(): PlaybackProgress {
    public forceShuffled(): void {
    private _volumeBeforeMute: number = 0;
        if (tracksToAdd.length === 0) {
        return this._isShuffled;
import { DialogServiceBase } from '../dialog/dialog.service.base';
    private _progress: PlaybackProgress = new PlaybackProgress(0, 0);

        if (numberOfAddedTracks === 1) {
        if (trackToPlay != undefined) {

    private applyVolumeFromSettings(): void {

        if (this.currentTrack == undefined) {


            return;
    private subscription: Subscription = new Subscription();

import { LoopMode } from './loop-mode';
        if (this.currentTrack == undefined) {
        this.increasePlayCountAndDateLastPlayedForCurrentTrack();
        this.postPause();
    public pause(): void {

        const tracksForArtists: TrackModels = this.trackService.getTracksForArtists([artistToPlay], artistType);
        this._volume = volumeToSet;

        const orderedTracks: TrackModel[] = this.trackSorter.sortByAlbum(tracksForAlbum.tracks);
    private async playAsync(trackToPlay: TrackModel, isPlayingPreviousTrack: boolean): Promise<void> {
        }
            await this.resumeAsync();
        this.audioPlayer.setVolume(volumeToSet);
        this.logger.info(`Playing '${this.currentTrack.path}'`, 'PlaybackService', 'play');
    private increaseCountersForCurrentTrackBasedOnProgress(): void {
    public stopUpdatingProgress(): void {
        private notificationService: NotificationServiceBase,
        this.startUpdatingProgress();
        }
            }),
        if (this._progressInterval === 0) {
            }),
    }
        this._progress = new PlaybackProgress(0, 0);

    public get loopMode(): LoopMode {

import { SettingsBase } from '../../common/settings/settings.base';
    }
            }),
        this._canPause = false;

            this.applyVolume(0);
    public async skipByFractionOfTotalSecondsAsync(fractionOfTotalSeconds: number): Promise<void> {
        if (this.currentTrack != undefined) {

        this._canResume = true;
        } else {
    }
                this._isShuffled = true;
        this.pauseUpdatingProgress();
        this.logger.info(`Forced isShuffled`, 'PlaybackService', 'forceShuffled');
            this.logger.info(`Resuming '${this.currentTrack.path}'`, 'PlaybackService', 'resume');
    }

import { NotificationServiceBase } from '../notification/notification.service.base';
        this._canPause = true;

            }, 500);
            return;
    public async enqueueAndPlayPlaylistAsync(playlistToPlay: PlaylistModel): Promise<void> {
import { FileFormats } from '../../common/application/file-formats';
    }
        this.playbackStopped.next();
        this.trackService.savePlayCountAndDateLastPlayed(this.currentTrack);
        if (this.settings.rememberPlaybackStateAfterRestart) {
import { PlaybackProgress } from './playback-progress';
            this.increaseSkipCountForCurrentTrack();
                return;
        }
import { QueuePersister } from './queue-persister';
        const volumeToSet: number = this.mathExtensions.clamp(volume, 0, 1);
            this.mediaSessionService.playEvent$.subscribe(() => {

    }

    }
        );
    public toggleIsShuffled(): void {
    }
        if (firstTrack != undefined) {
                'PlaybackService',
            return;
            this._loopMode = LoopMode.One;
            this.mediaSessionService.pauseEvent$.subscribe(() => {
        );
        this.startUpdatingProgress();
            await this.startPausedAsync(info.playingTrack, info.progressSeconds);
            const allowWrapAround: boolean = this.loopMode === LoopMode.All;

    }

            this.applyVolume(this._volumeBeforeMute > 0 ? this._volumeBeforeMute : 0.5);
            this._progressInterval = window.setInterval(() => {
            }
                'restoreQueue',
    }
        if (this.canPause) {
        }

    public set volume(v: number) {
        await this.addTracksToQueueAsync(orderedTracks);
        this.logger.info('Restoring playback queue', 'PlaybackService', 'restoreQueue');
        this.increaseCountersForCurrentTrackBasedOnProgress();

    private _shouldReportProgress: boolean = false;
        const tracksForGenre: TrackModels = this.trackService.getTracksForGenres([genreToAdd.name]);
        const orderedTracks: TrackModel[] = this.trackSorter.sortByAlbum(tracksForAlbum.tracks);
    }
    private postPause() {
            this.audioPlayer.playbackFailed$.subscribe((audioFilePath: string) => {
        const enqueuedTracks: TrackModel[] = this.queue.setTracks(tracksToEnqueue, this.isShuffled);
    }
                trackInQueue.setTrack(trackToSet);


    }
        }
        );
                this._audioPlayer.preloadNext(nextTrack);
        }
        } else if (this._loopMode === LoopMode.All) {


            }),
        this.playbackPaused.next();
            await this.notificationService.singleTrackAddedToPlaybackQueueAsync();
        }
        );
import { MediaSessionService } from '../media-session/media-session.service';
    }
    }
        this._canResume = true;
        this.subscription.add(



    private _isShuffled: boolean = false;
        this.logger.info(`Stopping '${this.currentTrack?.path ?? ''}'`, 'PlaybackService', 'stopAndPlay');
        }
        } else {
    }
        const allowWrapAround: boolean = this.loopMode === LoopMode.All;

        this.settings.volume = volumeToSet;
            return;
    private stop(): void {
    private _isPlaying: boolean = false;
                await this.playAsync(this.currentTrack, false);
        this.increasePlayCountAndDateLastPlayedForCurrentTrack();

                    return;
    private _volume: number = 0;
    public get canResume(): boolean {
        const tracksForAlbum: TrackModels = this.trackService.getTracksForAlbums([albumToAdd.albumKey]);
        await this.addTracksToQueueAsync(orderedTracks);
    private _loopMode: LoopMode = LoopMode.None;
    }
    private playingPreloadedTrackHandler(preloadedTrack: TrackModel): void {

    private async notifyOfTracksAddedToPlaybackQueueAsync(numberOfAddedTracks: number): Promise<void> {
        this.logger.info(`Starting playback paused for track: ${track.path} at ${skipSeconds} seconds`, 'PlaybackService', 'startPaused');

        }
        }
import { FileAccessBase } from '../../common/io/file-access.base';
        const firstTrack: TrackModel | undefined = this.queue.getFirstTrack();
import { GenreModel } from '../genre/genre-model';
    private playbackSkipped: Subject<void> = new Subject();
                void this.playNextAsync();

        this._isShuffled = !this._isShuffled;

            trackToPlay = this.currentTrack;
        if (this._loopMode === LoopMode.None) {
            if (firstTrack != undefined) {
                this.playingPreloadedTrackHandler(preloadedTrack);
    public get volume(): number {
        } else {
        this.subscription.add(
        }
import { Observable, Subject, Subscription } from 'rxjs';

        }
            }
    public async addGenreToQueueAsync(genreToAdd: GenreModel): Promise<void> {
            }
        }
        this._canResume = false;
        }
        return trackModels;
            return;
import { MathExtensions } from '../../common/math-extensions';
    }
                this._loopMode = this.settings.playbackControlsLoop === 1 ? LoopMode.One : LoopMode.All;
        );
        if (this.queue.tracks != undefined) {
