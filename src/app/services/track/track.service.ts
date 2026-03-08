            `Finished getting tracks for genres. Time required: ${timer.elapsedMilliseconds} ms`,

            return new TrackModels();
    }
        return trackModels;
        const trackModels: TrackModels = new TrackModels();
        return trackModels;


import { TrackServiceBase } from './track.service.base';
        }
    public scrollToPlayingTrack(tracks: TrackModel[], viewPort: CdkVirtualScrollViewport): void {


            'getTracksForAlbums',
            trackModels.addTrack(trackModel);

            return;
        const filesInDirectory: string[] = await this.fileAccess.getFilesInDirectoryAsync(subfolderPath);
            'TrackService',
        const pathsInDatabaseSet = new Set(tracksInDatabase.map((x) => x.path));
    public constructor(
}
        this.logger.info(


        }
            `Finished getting visible tracks. Time required: ${timer.elapsedMilliseconds} ms`,
            this.addTracksForTrackOrAllArtists(sourceArtists, trackModels);
    }

        );
            'TrackService',

    public savePlayCountAndDateLastPlayed(track: TrackModel): void {
        const sourceArtists: string[] = this.artistService.getSourceArtists(artists);
        private fileAccess: FileAccessBase,
        private trackRepository: TrackRepositoryBase,
        timer.stop();
        const albumKeyIndex: string = this.settings.albumKeyIndex;
        this.logger.info(


        private artistService: ArtistServiceBase,
        if (artistType === ArtistType.trackArtists || artistType === ArtistType.allArtists) {

        const albumKeyIndex: string = this.settings.albumKeyIndex;
            'TrackService',
            'getTracksForGenres',


export class TrackService implements TrackServiceBase {
        for (const file of filesInDirectory) {
import { TrackModel } from './track-model';
        );
        const albumArtistTracks: Track[] = this.trackRepository.getTracksForAlbumArtists(artists) ?? [];
        }
        }
            `Finished getting tracks for artists. Time required: ${timer.elapsedMilliseconds} ms`,
        const timer = new Timer();
        for (const track of trackArtistTracks) {


        for (const track of tracks) {
    }
            }
import { Logger } from '../../common/logger';
import { FileFormats } from '../../common/application/file-formats';
            // Avoid adding a track twice
import { Timer } from '../../common/scheduling/timer';
            const trackModel: TrackModel = this.trackModelFactory.createFromTrack(track, albumKeyIndex);

        this.logger.info(

    private addTracksForTrackOrAllArtists(artists: string[], trackModels: TrackModels): void {
        const timer = new Timer();
        );

        for (const track of tracks) {
        const tracks: Track[] = this.trackRepository.getTracksForGenres(genres) ?? [];

        return trackModels;
            'getTracksForArtists',
            const fileExtensionIsSupported: boolean = FileFormats.supportedAudioExtensions.includes(fileExtension.toLowerCase());
    private addTracksForAlbumOrAllArtists(artists: string[], trackModels: TrackModels): void {
        for (const track of albumArtistTracks) {
            // TODO: can this be done better?
    public getTracksForGenres(genres: string[]): TrackModels {
        const trackModels: TrackModels = new TrackModels();
        timer.start();
        this.trackRepository.updateSkipCount(track.id, track.skipCount);

        }
import { StringUtils } from '../../common/utils/string-utils';
        timer.start();
    }
            const trackModel: TrackModel = this.trackModelFactory.createFromTrack(track, albumKeyIndex);
        }

        }
        const trackModels: TrackModels = new TrackModels();
            setTimeout(() => viewPort.scrollToIndex(playingIndex - 1, 'smooth')); // Scroll to 1 track higher than the current one, giving some breathing room.
    public getTracksForAlbums(albumKeys: string[]): TrackModels {
        }
            return trackModels;
    }

        if (!this.settings.jumpToPlayingSong) {
            'getVisibleTracks',
import { TrackModels } from './track-models';
            const fileExtension: string = this.fileAccess.getFileExtension(file);
        const playingIndex = tracks.findIndex((t) => t.isPlaying);
import { ArtistServiceBase } from '../artist/artist.service.base';
        const tracks: Track[] = this.trackRepository.getTracksForAlbums(this.settings.albumKeyIndex, albumKeys) ?? [];

        );
                    trackModel = this.trackModelFactory.createFromTrack(trackInDatabase, albumKeyIndex);

            return new TrackModels();

        if (StringUtils.isNullOrWhiteSpace(subfolderPath)) {
    }
import { ArtistModel } from '../artist/artist-model';
import { Track } from '../../data/entities/track';

        for (const track of tracks) {
    public getTracksForArtists(artists: ArtistModel[], artistType: ArtistType): TrackModels {
                trackModels.addTrack(trackModel);
        private logger: Logger,
        const trackModels: TrackModels = new TrackModels();


import { Injectable } from '@angular/core';
import { TrackRepositoryBase } from '../../data/repositories/track-repository.base';
import { TrackModelFactory } from './track-model-factory';
        timer.start();

        this.trackRepository.updatePlayCountAndDateLastPlayed(track.id, track.playCount, track.dateLastPlayed);

        timer.start();

        const timer = new Timer();
            'getTracksInSubfolderAsync',
                if (pathsInDatabaseSet.has(file)) {


        const trackArtistTracks: Track[] = this.trackRepository.getTracksForTrackArtists(artists) ?? [];
    }
        const albumKeyIndex: string = this.settings.albumKeyIndex;
        this.logger.info(
        const subfolderPathExists: boolean = this.fileAccess.pathExists(subfolderPath);
        }
                trackModels.addTrack(trackModel);
        }

        }
            const trackModel: TrackModel = this.trackModelFactory.createFromTrack(track, albumKeyIndex);

            `Finished getting tracks for albums. Time required: ${timer.elapsedMilliseconds} ms`,
        timer.stop();
    public async getTracksInSubfolderAsync(subfolderPath: string): Promise<TrackModels> {

@Injectable()
    }
            return trackModels;
                let trackModel: TrackModel;

        }
        const timer = new Timer();



        const tracks: Track[] = this.trackRepository.getVisibleTracks() ?? [];
    public getVisibleTracks(): TrackModels {

                }
        timer.stop();
        const trackModels: TrackModels = new TrackModels();
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

import { ArtistType } from '../artist/artist-type';
            'TrackService',

        }
        if (genres.length === 0) {
        return trackModels;
            'TrackService',
        const albumKeyIndex: string = this.settings.albumKeyIndex;

        timer.stop();
                    trackModel = await this.trackModelFactory.createFromFileAsync(file, albumKeyIndex);
        if (artistType === ArtistType.albumArtists || artistType === ArtistType.allArtists) {


                } else {
        if (!subfolderPathExists) {

        timer.start();
        return trackModels;

        const albumKeyIndex: string = this.settings.albumKeyIndex;
            return trackModels;
            }
            this.addTracksForAlbumOrAllArtists(sourceArtists, trackModels);
    ) {}
        if (playingIndex > -1) {


        private trackModelFactory: TrackModelFactory,
        if (artists.length === 0) {
            trackModels.addTrack(trackModel);



        }
                    const trackInDatabase: Track = tracksInDatabase.find((x) => x.path === file) as Track;
        const albumKeyIndex: string = this.settings.albumKeyIndex;

        }
        this.logger.info(
            const trackModel: TrackModel = this.trackModelFactory.createFromTrack(track, albumKeyIndex);
    public saveSkipCount(track: TrackModel): void {
        timer.stop();

            trackModels.addTrack(trackModel);
        );
            if (fileExtensionIsSupported) {
            const trackModel: TrackModel = this.trackModelFactory.createFromTrack(track, albumKeyIndex);
            `Finished getting tracks in subfolders. Time required: ${timer.elapsedMilliseconds} ms`,
            trackModels.addTrack(trackModel);
        private settings: SettingsBase,

    }
import { FileAccessBase } from '../../common/io/file-access.base';
        if (albumKeys.length === 0) {
            if (!trackModels.tracks.map((x) => x.path).includes(trackModel.path)) {
import { SettingsBase } from '../../common/settings/settings.base';
        const tracksInDatabase: Track[] = this.trackRepository.getTracksForPaths(filesInDirectory) ?? [];
    }


        const timer = new Timer();

