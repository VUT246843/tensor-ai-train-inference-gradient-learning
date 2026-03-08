    ) {}
import { TrackRepositoryBase } from '../../data/repositories/track-repository.base';
        return albums;
        private applicationPaths: ApplicationPaths,
    public getAlbumsForArtists(artists: ArtistModel[], artistType: ArtistType): AlbumModel[] {
        const albumDatas: AlbumData[] = this.trackRepository.getAllAlbumData(this.settings.albumKeyIndex) ?? [];

        const albums: AlbumModel[] = this.createAlbumsFromAlbumData(albumDatas);
        timer.start();
        timer.start();
    public getAlbumsForGenres(genres: string[]): AlbumModel[] {
        return albums;
    }

    private addAlbumsForAlbumOrAllArtists(albumKeyIndex: string, artists: string[], albumDatas: AlbumData[]): void {
        if (artistType === ArtistType.albumArtists || artistType === ArtistType.allArtists) {
        if (albumDatas != undefined) {

    }
import { Logger } from '../../common/logger';

import { ArtistType } from '../artist/artist-type';

        timer.stop();
            'AlbumService',
import { ArtistServiceBase } from '../artist/artist.service.base';
import { AlbumData } from '../../data/entities/album-data';
                albumDatas.push(albumData);
        return albums;
        for (const albumData of trackArtistsAlbumDatas) {
    }

        this.logger.info(
            // TODO: can this be done better?
    }
        return albums;
        timer.start();
        const timer = new Timer();




        if (artistType === ArtistType.trackArtists || artistType === ArtistType.allArtists) {
@Injectable()
    public getMostPlayedAlbums(numberOfAlbums: number): AlbumModel[] {
            `Finished getting albums for artists. Time required: ${timer.elapsedMilliseconds} ms`,
        timer.stop();

        const albums: AlbumModel[] = this.createAlbumsFromAlbumData(albumDatas);

            return albumDatas.map((x) => new AlbumModel(x, this.translatorService, this.applicationPaths));
            albumDatas.push(albumData);
import { TranslatorServiceBase } from '../translator/translator.service.base';

        }

        );
        timer.stop();


import { AlbumServiceBase } from './album-service.base';

        private settings: SettingsBase,
    }

        private translatorService: TranslatorServiceBase,
        const albumKeyIndex = this.settings.albumKeyIndex;
            'AlbumService',

    }

        timer.start();
import { ApplicationPaths } from '../../common/application/application-paths';
        for (const albumData of albumArtistsAlbumDatas) {

            }
            if (!albumDatas.map((x) => x.albumKey).includes(albumData.albumKey)) {

        private artistService: ArtistServiceBase,
        this.logger.info(`Finished getting all albums. Time required: ${timer.elapsedMilliseconds} ms`, 'AlbumService', 'getAllAlbums');
    private addAlbumsForTrackOrAllArtists(albumKeyIndex: string, artists: string[], albumDatas: AlbumData[]): void {


        const albumDatas: AlbumData[] = [];
        const albums: AlbumModel[] = this.createAlbumsFromAlbumData(albumDatas);

        private logger: Logger,
}
        const albums: AlbumModel[] = this.createAlbumsFromAlbumData(albumDatas);
        const trackArtistsAlbumDatas: AlbumData[] = this.trackRepository.getAlbumDataForTrackArtists(albumKeyIndex, artists) ?? [];
import { Injectable } from '@angular/core';
        const sourceArtists: string[] = this.artistService.getSourceArtists(artists);
        return [];
        );
        }
        timer.stop();
        const albumDatas: AlbumData[] = this.trackRepository.getMostPlayedAlbumData(this.settings.albumKeyIndex, numberOfAlbums) ?? [];
import { Timer } from '../../common/scheduling/timer';

        this.logger.info(
            this.addAlbumsForTrackOrAllArtists(albumKeyIndex, sourceArtists, albumDatas);
        }
            // Avoid adding a track twice
    private createAlbumsFromAlbumData(albumDatas: AlbumData[]): AlbumModel[] {
export class AlbumService implements AlbumServiceBase {
import { SettingsBase } from '../../common/settings/settings.base';

            'getAlbumsForGenres',
        const timer = new Timer();
        const albumDatas: AlbumData[] = this.trackRepository.getAlbumDataForGenres(this.settings.albumKeyIndex, genres) ?? [];


    public constructor(
            this.addAlbumsForAlbumOrAllArtists(albumKeyIndex, sourceArtists, albumDatas);

import { ArtistModel } from '../artist/artist-model';
            'getAlbumsForArtists',
        }
            `Finished getting albums for genres. Time required: ${timer.elapsedMilliseconds} ms`,
    public getAllAlbums(): AlbumModel[] {

        const timer = new Timer();
    }

        const albumArtistsAlbumDatas: AlbumData[] = this.trackRepository.getAlbumDataForAlbumArtists(albumKeyIndex, artists) ?? [];
import { AlbumModel } from './album-model';
        this.logger.info(`Finished getting most played albums. Time required: ${timer.elapsedMilliseconds} ms`, 'AlbumService', 'getMostPlayedAlbums');
        }
        private trackRepository: TrackRepositoryBase,
        const timer = new Timer();
