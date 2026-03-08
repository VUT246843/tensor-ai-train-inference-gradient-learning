
    private skipSecondsAfterStarting: number = 0;
        const tempAudio: HTMLAudioElement = new Audio();
    private connectVisualizer(): void {
    public get analyser(): AnalyserNode {
                await this.skipToSecondsAsync(this.skipSecondsAfterStarting);
                this.shouldPauseAfterStarting = false;

        this._audio = tempAudio;
        return this._isPaused;
    // eslint-disable-next-line @typescript-eslint/require-await
        }
    ) {
            this.skipSecondsAfterStarting = 0;
    private _playbackFinished: Subject<void> = new Subject();
    private _audioContext: AudioContext;

import { PathUtils } from '../../../common/utils/path-utils';
    public playbackFailed$: Observable<string> = this._playbackFailed.asObservable();
        this._audio.currentTime = seconds;
            }
                this.pause();

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment


        this._audio.pause();
        if (isNaN(this._audio.currentTime)) {
        this._isPaused = false;
    public pause(): void {
        const playableAudioFilePath: string = PathUtils.createPlayableAudioFilePath(track.path);
        this._analyser.fftSize = 128;
    public getAudio(): HTMLAudioElement | undefined {
    private _analyser: AnalyserNode;
    }

            if (this.shouldPauseAfterStarting) {
        // Not implemented as not supported by legacy audio player.
        const mediaElementSource: MediaElementAudioSourceNode = this._audioContext.createMediaElementSource(this._audio);

    }
        // This is a workaround to fix flickering of OS media controls when switching track from the media controls
import { Logger } from '../../../common/logger';
        tempAudio.muted = this._audio.muted;
    }

        return this._audio.currentTime;


    public playbackFinished$: Observable<void> = this._playbackFinished.asObservable();
            return 0;

    private shouldPauseAfterStarting: boolean = false;
            // Suppress this error, but log it, in case it happens in production.

        this._audio.pause();
        return this._audio;
            this._playbackFailed.next(this._audio.src);


        this._audio.volume = linearVolume > 0 ? this.mathExtensions.linearToLogarithmic(linearVolume, 0.01, 1) : 0;


    }
        mediaElementSource.connect(this._analyser);
        tempAudio.defaultPlaybackRate = this._audio.defaultPlaybackRate;
            // This fails during unit tests because setSinkId() does not exist on HTMLAudioElement
export class LegacyAudioPlayer implements IAudioPlayer {
        this.shouldPauseAfterStarting = true;
    }
        tempAudio.src = playableAudioFilePath;
    public playingPreloadedTrack$: Observable<TrackModel> = this._playingPreloadedTrack.asObservable();
    private _playingPreloadedTrack: Subject<TrackModel> = new Subject();
            // Intentionally left blank
        this.skipSecondsAfterStarting = skipSeconds;


        }
        await this._audio.play();
    public async resumeAsync(): Promise<void> {
        this._analyser.connect(this._audioContext.destination);
            this._audio.setSinkId('default');
    public get progressSeconds(): number {
            return 0;
    }
            await this._audio.play();
        this._audioContext = new AudioContext();
        }
    public get totalSeconds(): number {
    }
    }
        return this._analyser;


        private logger: Logger,
import { MathExtensions } from '../../../common/math-extensions';
        this._audio.playbackRate = 1;
    }
        try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
            // @ts-ignore
        this._audio.currentTime = 0;
    }
    private _audio: HTMLAudioElement;
        this._audio = new Audio();
    private _isPaused: boolean = false;

        } catch (e: unknown) {
import { TrackModel } from '../../track/track-model';
            this.logger.error(e, `Audio src failed to load: ${this._audio.src}`, 'LegacyAudioPlayer', 'play');
        this._isPaused = false;
    private _playbackFailed: Subject<string> = new Subject();
        };
            this.logger.error(e, 'Could not perform setSinkId()', 'AudioPlayer', 'constructor');
}
    }
        } catch (e: unknown) {
        if (isNaN(this._audio.duration)) {
        this.connectVisualizer();
            this.shouldPauseAfterStarting = false;
    public async playAsync(track: TrackModel): Promise<void> {
import { Observable, Subject } from 'rxjs';
    }
        }

        // log(0) is undefined. So we provide a minimum of 0.01.
        this._audio.onended = () => {
                this.skipSecondsAfterStarting = 0;
        this._audio.volume = 1;
    public async skipToSecondsAsync(seconds: number): Promise<void> {
        this._audio.defaultPlaybackRate = 1;
        return this._audio.duration;
    }
        this._isPaused = true;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
import { IAudioPlayer } from './i-audio-player';

    public async startPausedAsync(track: TrackModel, skipSeconds: number): Promise<void> {
    }
    public preloadNext(track: TrackModel): void {
    public stop(): void {
    public constructor(
        tempAudio.playbackRate = this._audio.playbackRate;
        private mathExtensions: MathExtensions,
        this._analyser = this._audioContext.createAnalyser();


    public setVolume(linearVolume: number): void {
            this._audio.onended = () => this._playbackFinished.next();
        this._audio.muted = false;
        try {
    public get isPaused(): boolean {

    }

        this.connectVisualizer();

        tempAudio.volume = this._audio.volume;
        await this.playAsync(track);


