            }
                    'handlePlaybackStartedAsync',
        if (StringUtils.isNullOrWhiteSpace(track.rawTitle)) {
    }

            if (isSuccess) {
        }
    public username: string = '';
            ),
            return;



            return;

                    await this.lastfmApi.loveTrackAsync(this.sessionKey, artist, track.rawTitle);
        this.subscription.add(this.playbackService.playbackSkipped$.subscribe(() => this.handlePlaybackSkipped()));
                this.settings.lastFmPassword = this.password;
    }
    private currentTrack: TrackModel;
            return;
                        e,


        if (playbackProgress.totalSeconds > 30) {
                    await this.lastfmApi.unloveTrackAsync(this.sessionKey, artist, track.rawTitle);
            const isSuccess: boolean = await this.lastfmApi.updateTrackNowPlayingAsync(this.sessionKey, artist, trackTitle, albumTitle);
                }
        }
        }
            return;
        // - And the track has been played for at least half its duration, or for 4 minutes (whichever occurs earlier).
import { PlaybackProgress } from '../playback/playback-progress';
        if (!this.canScrobble) {
                        this.logger.info(
                this.settings.lastFmUsername = this.username;
                    );
        this.settings.lastFmSessionKey = '';
                try {
                        'ScrobblingService',

            !StringUtils.isNullOrWhiteSpace(this.username) &&
        const albumTitle: string = this.currentTrack.rawAlbumTitle;
                PromiseUtils.noAwait(this.handlePlaybackStartedAsync(playbackStarted)),
                    this.logger.error(
    private canScrobble: boolean = false;
@Injectable({ providedIn: 'root' })
            }
                this.logger.info(
import { SignInState } from './sign-in-state';
            } else {
        this.currentTrack = playbackStarted.currentTrack;
import { TrackModel } from '../track/track-model';
            this.subscription.unsubscribe();
        try {

            );
    }
    }
                this.logger.warn(
                        this.logger.warn(


            return;
        this.canScrobble = false;
            return;
                        `Could not Scrobble track '${artist} - ${trackTitle}'`,
                e,
                this.logger.info(`User '${this.username}' successfully signed in to Last.fm.`, 'ScrobblingService', 'signIn');
    public initialize(): void {
        this.logger.info(`User '${this.username}' signed out from Last.fm`, 'ScrobblingService', 'signOut');
    private handlePlaybackSkipped(): void {

    public signOut(): void {
            } else {
            this.sessionKey = await this.lastfmApi.getMobileSessionAsync(this.username, this.password);
                            'ScrobblingService',
        for (const artist of track.rawArtists) {
                        );
                    } else {
        private dateTime: DateTime,
    private initializeSubscriptions(): void {
                `Could not update Now Playing for track '${artist} - ${trackTitle}'`,
                    'ScrobblingService',
        this.sessionKey = '';
                    'ScrobblingService',
        if (!this.settings.enableLastFmScrobbling) {

    }
        private playbackService: PlaybackService,
        const trackTitle: string = this.currentTrack.rawTitle;

        ) {
            this.playbackService.progressChanged$.subscribe((playbackProgress: PlaybackProgress) =>
                } catch (e: unknown) {
                    `Successfully updated Now Playing for track '${artist} - ${trackTitle}'`,
import { PlaybackService } from '../playback/playback.service';
        const trackTitle: string = this.currentTrack.rawTitle;

                            'ScrobblingService',
        // When is a scrobble a scrobble?

                            'handlePlaybackProgressChangedAsync',

    }
            return;
        }
            if (!StringUtils.isNullOrWhiteSpace(this.sessionKey)) {
        if (StringUtils.isNullOrWhiteSpace(artist) || StringUtils.isNullOrWhiteSpace(trackTitle)) {

    private async handlePlaybackStartedAsync(playbackStarted: PlaybackStarted): Promise<void> {

        this.sessionKey = this.settings.lastFmSessionKey;
                'handlePlaybackStartedAsync',
        }
            this._signInState = SignInState.SignedOut;
    private sessionKey: string = '';
    public async sendTrackLoveAsync(track: TrackModel, love: boolean): Promise<void> {
}
        // When the user skips, we don't allow scrobbling.
        this.password = this.settings.lastFmPassword;
                } catch (e: unknown) {
                    this.logger.error(e, 'Could not send track.unlove to Last.fm', 'ScrobblingService', 'sendTrackLoveAsync');
            this.logger.error(e, `User '${this.username}' could not sign in to last.fm`, 'ScrobblingService', 'signIn');
import { LastfmApi } from '../../common/api/lastfm/lastfm.api';

        private logger: Logger,
    public constructor(

                        this.currentTrackUTCStartTime,
                        'handlePlaybackProgressChangedAsync',
        } catch (e: unknown) {
    private _signInState: SignInState = SignInState.SignedOut;
        if (StringUtils.isNullOrWhiteSpace(artist) || StringUtils.isNullOrWhiteSpace(trackTitle)) {
            this.logger.error(
        this.username = this.settings.lastFmUsername;
    ) {}
                        albumTitle,
                            'handlePlaybackProgressChangedAsync',
        try {
        if (this.signInState !== SignInState.SignedIn) {
        private lastfmApi: LastfmApi,
                this.canScrobble = false;
        this.initializeSubscriptions();
        }

            if (playbackProgress.progressSeconds >= playbackProgress.totalSeconds / 2 || playbackProgress.progressSeconds > 4 * 60) {
        );
                    }

        } else {

                try {
    }
    public async signInAsync(): Promise<void> {
        this.initializeSessionFromSettings();
                    `Could not update Now Playing for track '${artist} - ${trackTitle}'`,
            return;

        this.currentTrackUTCStartTime = this.dateTime.getUTCDate(new Date());

                try {
            } else {

    }


                );
    private initializeSessionFromSettings(): void {
        this.signInStateChanged.next(this.signInState);
        this.subscription.add(
            !StringUtils.isNullOrWhiteSpace(this.sessionKey)
        if (this.currentTrack == undefined) {
        this.subscription.add(

                    if (isSuccess) {
    private currentTrackUTCStartTime: Date;

            }
                            `Could not Scrobble track '${artist} - ${trackTitle}'`,
        const artist: string = this.currentTrack.rawFirstArtist;


                            `Successfully Scrobbled track '${artist} - ${trackTitle}'`,


    public password: string = '';
                PromiseUtils.noAwait(this.handlePlaybackProgressChangedAsync(playbackProgress)),


            this.playbackService.playbackStarted$.subscribe((playbackStarted: PlaybackStarted) =>
                        this.sessionKey,
            if (love) {

    private signInStateChanged: Subject<SignInState> = new Subject();

    public get signInState(): SignInState {
        }
            }
                this._signInState = SignInState.Error;
            this._signInState = SignInState.Error;
    private subscription: Subscription = new Subscription();
        }
import { SettingsBase } from '../../common/settings/settings.base';
        // We can't send track love for an unknown track title
        }
                    'handlePlaybackStartedAsync',
import { Logger } from '../../common/logger';
                    );
        }

        if (this.signInState !== SignInState.SignedIn) {
                'ScrobblingService',

                );
import { Observable, Subject, Subscription } from 'rxjs';
import { PlaybackStarted } from '../playback/playback-started';
        }
            return;
import { PromiseUtils } from '../../common/utils/promise-utils';
import { StringUtils } from '../../common/utils/string-utils';
        }
        }

        } catch (e: unknown) {
                    this.logger.error(e, 'Could not send track.love to Last.fm', 'ScrobblingService', 'sendTrackLoveAsync');
    }
import { DateTime } from '../../common/date-time';
                    const isSuccess: boolean = await this.lastfmApi.scrobbleTrackAsync(
            return;
                }
        }
        const albumTitle: string = this.currentTrack.rawAlbumTitle;
        if (
            !StringUtils.isNullOrWhiteSpace(this.password) &&
                        artist,
                        );
            this._signInState = SignInState.SignedIn;
        this.canScrobble = true;
        // - The track must be longer than 30 seconds
        private settings: SettingsBase,
                this.settings.lastFmSessionKey = this.sessionKey;
        this.signInStateChanged.next(this.signInState);
            ),

                } catch (e: unknown) {
                        trackTitle,

        return this._signInState;
                this.logger.warn(`User '${this.username}' could not sign in to Last.fm.`, 'ScrobblingService', 'signIn');
                this._signInState = SignInState.SignedIn;

                }
import { Injectable } from '@angular/core';
        if (this.signInState !== SignInState.SignedIn) {
    }
        this._signInState = SignInState.SignedOut;
        if (!this.settings.enableLastFmScrobbling) {
        const artist: string = this.currentTrack.rawFirstArtist;
        // As soon as a track starts playing, send a Now Playing request.
    public signInStateChanged$: Observable<SignInState> = this.signInStateChanged.asObservable();
export class ScrobblingService {
    private async handlePlaybackProgressChangedAsync(playbackProgress: PlaybackProgress): Promise<void> {
        );
        }
