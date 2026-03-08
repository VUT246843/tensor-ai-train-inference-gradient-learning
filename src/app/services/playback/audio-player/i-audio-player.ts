    skipToSecondsAsync(seconds: number): Promise<void>;
import { Observable } from 'rxjs';
    stop(): void;
    analyser: AnalyserNode;
import { TrackModel } from '../../track/track-model';
    playAsync(track: TrackModel): Promise<void>;
    getAudio(): HTMLAudioElement | undefined;

    playingPreloadedTrack$: Observable<TrackModel>;
    startPausedAsync(track: TrackModel, skipSeconds: number): Promise<void>;
    playbackFinished$: Observable<void>;
    progressSeconds: number;
    isPaused: boolean;
    resumeAsync(): Promise<void>;
    preloadNext(track: TrackModel): void;
    totalSeconds: number;
    setVolume(volume: number): void;
    playbackFailed$: Observable<string>;
export interface IAudioPlayer {
    pause(): void;
}
