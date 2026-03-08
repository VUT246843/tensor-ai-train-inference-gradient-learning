    public get progressSeconds(): number {
            const remaining = this._currentAudio.duration - this._currentAudio.currentTime;
import { Logger } from '../../../common/logger';
    }
    public get totalSeconds(): number {
    private _analyser!: AnalyserNode;
        this._nextAudio = new Audio();
        } catch (e) {
        // Swap references
        this._currentGain.gain.value = 1;
    public playbackFinished$: Observable<void> = this._playbackFinished.asObservable();

    public async startPausedAsync(track: TrackModel, skipSeconds: number): Promise<void> {
        return this._isPaused;

            this.logger.error(e, 'Failed to play preloaded track', 'CrossfadeAudioPlayer', 'beginCrossfadeAsync');
        this._currentAudio.currentTime = seconds;
        await this._currentAudio.play();
    private async beginCrossfadeAsync(): Promise<void> {
    private _currentAudio!: HTMLAudioElement;


        if (finishedTrack) {
    }
        this._nextAudio.currentTime = 0;
    }
import { SettingsBase } from '../../../common/settings/settings.base';
            if (this._currentAudio.duration === 0) {
        await this.playAsync(track);
        const finishedTrack = this._preloadedTrack;
        this._isCrossfading = true;
        try {
    private _playbackFinished = new Subject<void>();
            this._playbackFailed.next(path);
            if (!this._isCrossfading) {

            await this._currentAudio.play();

        this._currentGain = this._audioContext.createGain();
        this._masterGain = this._audioContext.createGain();
    public get isPaused(): boolean {
        this._currentGain.connect(this._masterGain);
    public stop(): void {
    }
        const path = PathUtils.createPlayableAudioFilePath(track.path);

        this._currentSource = this._audioContext.createMediaElementSource(this._currentAudio);

            await this._audioContext.resume();
        [this._currentSource, this._nextSource] = [this._nextSource, this._currentSource];
import { TrackModel } from '../../track/track-model';
        this._currentAudio.src = path;

    public playbackFailed$: Observable<string> = this._playbackFailed.asObservable();

        this._analyser.connect(this._audioContext.destination);

    private _nextAudio!: HTMLAudioElement;

        this._currentAudio.onended = () => {
    public async resumeAsync(): Promise<void> {

    private _isPaused = false;
        }
        }

        this._isPaused = true;
    // eslint-disable-next-line @typescript-eslint/require-await
    }
import { Observable, Subject } from 'rxjs';
    private initializeAudioElements(): void {
        private settings: SettingsBase,

    private _currentGain!: GainNode;
        this._currentAudio.currentTime = 0;
    }


        this.initializeAudioElements();
    public playingPreloadedTrack$: Observable<TrackModel> = this._playingPreloadedTrack.asObservable();
        this._crossfadeTimer = window.setInterval(() => {
        this._nextGain = this._audioContext.createGain();


        }
        const now: number = this._audioContext.currentTime;
        this._currentSource.connect(this._currentGain);
        this._nextSource = this._audioContext.createMediaElementSource(this._nextAudio);
    private _isCrossfading = false;
            return;
            }
    private _nextGain!: GainNode;
export class CrossfadeAudioPlayer implements IAudioPlayer {
        this._nextAudio.src = path;

    private _masterGain!: GainNode;
        this.startCrossfadeWatcher();
        [this._currentGain, this._nextGain] = [this._nextGain, this._currentGain];
        await this.skipToSecondsAsync(skipSeconds);
        this._analyser.fftSize = 128;
        this._preloadedTrack = undefined;
    private _crossfadeTimer: NodeJS.Timeout | number | undefined;
            clearInterval(this._crossfadeTimer);


    private _audioContext: AudioContext;
    }
    }
        return this._analyser;
        this.stopInternal();

        this._nextGain.gain.value = 0;
        this._currentAudio.pause();
            }
    public async skipToSecondsAsync(seconds: number): Promise<void> {
        this._preloadedTrack = track;
    ) {
        this._currentGain.gain.linearRampToValueAtTime(0, now + fade);
}
            this.logger.error(e, `Failed to play ${path}`, 'CrossfadeAudioPlayer', 'playAsync');
    public async playAsync(track: TrackModel): Promise<void> {
        this._nextGain.connect(this._masterGain);



    private _playingPreloadedTrack = new Subject<TrackModel>();
                this._playbackFinished.next();
            await this._nextAudio.play();



        this._nextAudio.pause();
        this._nextAudio.pause();
    private _currentSource!: MediaElementAudioSourceNode;
    public pause(): void {
        try {
                return;
        setTimeout(() => this.finishCrossfade(), fade * 1000);
        }, 500);
        this._masterGain.connect(this._analyser);





        this._nextGain.gain.value = 0;
            }

    private _preloadedTrack?: TrackModel;
    private _playbackFailed = new Subject<string>();

        // Fade in next
            if (!this._preloadedTrack || this._isCrossfading) {


    }

    private startCrossfadeWatcher(): void {


    }
        this._audioContext = new AudioContext();

    private finishCrossfade(): void {
        this.stopInternal();
        if (!this._preloadedTrack || this._isCrossfading) return;
    public getAudio(): HTMLAudioElement | undefined {
        [this._currentAudio, this._nextAudio] = [this._nextAudio, this._currentAudio];

    public preloadNext(track: TrackModel): void {
        this._nextGain.gain.setValueAtTime(0, now);
            this._isPaused = false;

        private mathExtensions: MathExtensions,
        }
        this._nextAudio.load();
        this._currentAudio = new Audio();
            if (remaining <= this.settings.crossfadeDuration) {
        }
    public get analyser(): AnalyserNode {
        this._masterGain.gain.value = value;
                clearInterval(this._crossfadeTimer);

        const path = PathUtils.createPlayableAudioFilePath(track.path);
        this._currentAudio.pause();
        if (this._crossfadeTimer !== undefined && this._crossfadeTimer !== null) {
    }

    }
        this._nextSource.connect(this._nextGain);
        this._nextGain.gain.linearRampToValueAtTime(1, now + fade);
    }
    }
import { IAudioPlayer } from './i-audio-player';
    public setVolume(linearVolume: number): void {
        return isNaN(this._currentAudio.currentTime) ? 0 : this._currentAudio.currentTime;
    public constructor(
                void this.beginCrossfadeAsync();
        this._analyser = this._audioContext.createAnalyser();


import { MathExtensions } from '../../../common/math-extensions';
        this._isPaused = false;
    }
        this._currentGain.gain.setValueAtTime(1, now);
        };

        this._currentAudio.currentTime = 0;
    }
            this.startCrossfadeWatcher();
        const fade: number = this.settings.crossfadeDuration;



    }


        // Fade out current
        this.pause();
        this._isCrossfading = false;
        this._currentAudio.pause();

    }
        if (this._crossfadeTimer !== undefined && this._crossfadeTimer !== null) {
            this._playingPreloadedTrack.next(finishedTrack);
            }
    private stopInternal(): void {
    private _nextSource!: MediaElementAudioSourceNode;
        } catch (e) {
        return isNaN(this._currentAudio.duration) ? 0 : this._currentAudio.duration;
        this._isCrossfading = false;
        private logger: Logger,


                return;


        await this._audioContext.resume();

        return this._currentAudio;
            clearInterval(this._crossfadeTimer);
    }
        const value = linearVolume > 0 ? this.mathExtensions.linearToLogarithmic(linearVolume, 0.01, 1) : 0;
import { PathUtils } from '../../../common/utils/path-utils';
