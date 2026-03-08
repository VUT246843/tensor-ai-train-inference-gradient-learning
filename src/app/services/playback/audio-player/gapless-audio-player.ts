
        }
import { TrackModel } from '../../track/track-model';
        }
import { Observable, Subject } from 'rxjs';
                } else {
    public getAudio(): HTMLAudioElement | undefined {
    }
    private _preloadedTrack: TrackModel | undefined;
        this._audioContext = new AudioContext();
            this._audio = this._tempAudio;
                this._sourceNode.onended = () => {
            this._audio.setSinkId('default');

        }
        this.fetchAudioFile(audioFilePath)

                    this._nextBuffer &&
        await this.playAsync(track);
    }
                };
    }
    private _analyser: AnalyserNode;
        this.loadAudioWithWebAudio(playableAudioFilePath, true);

    public async playAsync(track: TrackModel): Promise<void> {

import { PathUtils } from '../../../common/utils/path-utils';
        this._audio.volume = 0;
        }
                this._sourceNode.disconnect(); // Disconnect the previous node to avoid issues
}
            // @ts-ignore
        return this._isPaused;
            this.logger.error(e, `Could not play with web audio`, 'GaplessAudioPlayer', 'playWebAudio');
        if (!response.ok) {
    public stop(): void {
            .catch((e: unknown) => this.logger.error(e, `Could not load with web audio`, 'GaplessAudioPlayer', 'loadAudioWithWebAudio'));
            };
                    this._currentTrack &&
                    this._preloadedTrack.number === this._currentTrack.number + 1
            return;
                reader.readAsArrayBuffer(blob);
        }
export class GaplessAudioPlayer implements IAudioPlayer {
})
    }


@Injectable({
    }
            }
        }

                        this._playbackFailed.next(audioFilePath);
        this._tempAudio = new Audio();
            throw new Error(`Failed to fetch audio file: ${response.statusText}`);
        this._tempAudio.src = playableAudioFilePath;
        this._audio.pause();
            // Sync playback position with HTML5 Audio
        try {
    private _tempAudio: HTMLAudioElement;
    }
        if (!this._currentBuffer) {
            this._sourceNode.buffer = this._currentBuffer;
        }
    public async skipToSecondsAsync(seconds: number): Promise<void> {
            })
        return undefined;
import { Injectable } from '@angular/core';
                            this.skipSecondsAfterStarting = 0;
            if (this._isPaused) {
    public playbackFinished$: Observable<void> = this._playbackFinished.asObservable();
            this._sourceNode.onended = async () => {
    public get analyser(): AnalyserNode {
        if (isPaused) {
                            this._currentBuffer = await this._audioContext.decodeAudioData(arrayBuffer);

    private skipSecondsAfterStarting: number = 0;
                    const arrayBuffer = reader.result as ArrayBuffer;
    public async resumeAsync(): Promise<void> {
                    this._preloadedTrack = undefined;
        this.loadAudioWithWebAudio(playableAudioFilePath, false);

    private _audio: HTMLAudioElement;
                            await this.playWebAudioAsync(this.skipSecondsAfterStarting);
    private async transitionToNextBufferAsync(): Promise<void> {
        await this._audio.play();
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    } catch (e: unknown) {
        this._audio.currentTime = seconds;

    private _gainNode: GainNode;
    }
        const logarithmicVolume: number = linearVolume > 0 ? this.mathExtensions.linearToLogarithmic(linearVolume, 0.01, 1) : 0;
    private _isPaused: boolean = false;


        } catch (e) {


    public async startPausedAsync(track: TrackModel, skipSeconds: number): Promise<void> {
                        if (preload) {
    }
    public get progressSeconds(): number {
        this._gainNode.connect(this._audioContext.destination);
        this._gainNode = this._audioContext.createGain();
    ) {

    }
                this.pause();

    private _audioPausedAt: number = 0;
            this._sourceNode.connect(this._analyser);

                this.shouldPauseAfterStarting = false;
        if (this._isPlaying) {
            this._sourceNode.connect(this._gainNode);
            this._sourceNode = this._audioContext.createBufferSource();
        this._preloadedTrack = track;


            this._audioStartTime = this._audioContext.currentTime - offset;
    private _playingPreloadedTrack: Subject<TrackModel> = new Subject();
            }
                        this.logger.error(e, `Could not decode audio data`, 'GaplessAudioPlayer', 'loadAudioWithWebAudio');
    public playingPreloadedTrack$: Observable<TrackModel> = this._playingPreloadedTrack.asObservable();

    }
        this._gainNode.gain.setValueAtTime(1, 0);
                return this._audioContext.currentTime - this._audioStartTime;
            this._sourceNode.start(0, offset);
    private async fetchAudioFile(url: string): Promise<Blob> {
        } catch (e: unknown) {

            this._sourceNode.disconnect();
    }

    public get isPaused(): boolean {
    public constructor(
            // Make sure to stop any previous sourceNode if it's still playing

                const reader = new FileReader();
            if (this._sourceNode) {
            await this._audio.play();
            // Create a new buffer source node
    }
    public playbackFailed$: Observable<string> = this._playbackFailed.asObservable();

                ) {
        }
    }

                if (
        this._audio.muted = false;
        if (this._sourceNode) {

        this._isPaused = false;
        try {
        private mathExtensions: MathExtensions,
        if (this._sourceNode) {
        // log(0) is undefined. So we provide a minimum of 0.01.
    private loadAudioWithWebAudio(audioFilePath: string, preload: boolean): void {
        await this.playWebAudioAsync(this._audioPausedAt);
                // Intentionally left blank
                this._sourceNode.stop();
        const playableAudioFilePath: string = PathUtils.createPlayableAudioFilePath(track.path);
            this._isPlaying = true;
                    this._playbackFinished.next();
    }

        this.skipSecondsAfterStarting = skipSeconds;
    private _audioContext: AudioContext;
                            this._nextBuffer = await this._audioContext.decodeAudioData(arrayBuffer);
            this._isPaused = false;
    private _playbackFailed: Subject<string> = new Subject();
import { Logger } from '../../../common/logger';
            this._sourceNode.stop();
        this._audioPausedAt = this._audioContext.currentTime - this._audioStartTime;
        this._audio = new Audio();
                    // Intentionally left blank
        this._gainNode.gain.setValueAtTime(0, 0);
                this._gainNode.gain.setValueAtTime(this._lastSetLogarithmicVolume, 0);
                        } else {
            this.pause();
        this._audio.currentTime = 0;
    private shouldPauseAfterStarting: boolean = false;
            // Connect the source node to the gain node
            .then((blob) => {

        await this.playWebAudioAsync(0);
        this._gainNode.gain.setValueAtTime(logarithmicVolume, 0);
        this._isPaused = true;
    public get totalSeconds(): number {
        this.shouldPauseAfterStarting = true;
                    this._preloadedTrack &&
        const response = await fetch(url);
            // This fails during unit tests because setSinkId() does not exist on HTMLAudioElement
    private async playWebAudioAsync(offset: number): Promise<void> {
    }
        this._tempAudio.volume = 0;
                };

            return 0;
        this._analyser = this._audioContext.createAnalyser();
                    this._currentTrack = this._preloadedTrack;
        this._audio.pause();

        await this.playWebAudioAsync(seconds);
        this._isPlaying = false;
    private _nextBuffer: AudioBuffer | undefined;
        if (!this._nextBuffer) {
        } else {
    private _lastSetLogarithmicVolume: number = 0;
        return this._analyser;
    private _audioStartTime: number = 0;
            // Connect the source to the analyser
                // Intentionally left blank
    private _isPlaying: boolean = false;
        this._lastSetLogarithmicVolume = logarithmicVolume;
        }
                this._audio.currentTime = offset;

    private _playbackFinished: Subject<void> = new Subject();
                reader.onloadend = async () => {
        this._currentTrack = track;

    public preloadNext(track: TrackModel): void {
            // Suppress this error, but log it, in case it happens in production.


            // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    private _sourceNode: AudioBufferSourceNode | undefined;
            };
                }
    private _currentBuffer: AudioBuffer | undefined;
        this._nextBuffer = undefined;
            this._sourceNode.onended = () => {

    // eslint-disable-next-line @typescript-eslint/require-await
                        }
            this._sourceNode.onended = () => {
            this._sourceNode.stop();
            };
            }
            this.logger.error(e, 'Could not perform setSinkId()', 'AudioPlayer', 'constructor');
                    try {
        return await response.blob(); // Convert the response to a Blob
                    await this.transitionToNextBufferAsync();
                    }


        this._currentBuffer = this._nextBuffer;
import { MathExtensions } from '../../../common/math-extensions';
        const playableAudioFilePath: string = PathUtils.createPlayableAudioFilePath(track.path);
    }
    providedIn: 'root',
                return this._audioPausedAt;
            } else {
            if (this.shouldPauseAfterStarting) {


                    this._playingPreloadedTrack.next(this._preloadedTrack);
        private logger: Logger,
            return;
import { IAudioPlayer } from './i-audio-player';
    }
    }
        this._analyser.fftSize = 128;

        const isPaused = this._isPaused;
            this._sourceNode.disconnect();

            // Store the current time when audio starts playing
        this._tempAudio.muted = false;
        return this._isPlaying ? this._currentBuffer?.duration ?? 0 : 0;
    public setVolume(linearVolume: number): void {
    private _currentTrack: TrackModel | undefined;
    public pause(): void {
