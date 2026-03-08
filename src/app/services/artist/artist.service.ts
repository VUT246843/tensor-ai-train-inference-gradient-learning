    }
        private artistSplitter: ArtistSplitter,

import { CollectionUtils } from '../../common/utils/collections-utils';
        private trackRepository: TrackRepositoryBase,
import { ArtistType } from './artist-type';
        timer.stop();
import { Injectable } from '@angular/core';
        const splitArtists: ArtistModel[] = this.artistSplitter.splitArtists(artists);
        const separators: string[] = CollectionUtils.fromString(this.settings.artistSplitSeparators);


                )

        return splitArtists;
        }
export class ArtistService implements ArtistServiceBase {
            const trackArtistDatas: ArtistData[] = this.trackRepository.getTrackArtistData() ?? [];
    ) {}
@Injectable()

        timer.start();
        const artists: string[] = [];
                filteredSourceArtists.push(sourceArtist.trim());
            const albumArtistDatas: ArtistData[] = this.trackRepository.getAlbumArtistData() ?? [];
                        (separator) =>
                    separators.some(
                    ),
                            sourceArtist.toLowerCase().includes(` ${separator} ${name} `) ||

        }
        }
        const sourceArtistsSurroundedBySpaces = this.sourceArtists.map((artist) => ` ${artist} `);
        const artistDatas: ArtistData[] = [];

        this.sourceArtists = artists;
import { ArtistServiceBase } from './artist.service.base';
        private logger: Logger,
        if (artistType === ArtistType.albumArtists || artistType === ArtistType.allArtists) {

        const lowerCaseArtistNames = new Set(artists.map((artist) => artist.name.toLowerCase()));
import { TrackRepositoryBase } from '../../data/repositories/track-repository.base';
import { TranslatorServiceBase } from '../translator/translator.service.base';
import { ArtistModel } from './artist-model';
            artists.push(...DataDelimiter.fromDelimitedString(artistData.artists));
    public constructor(
        private settings: SettingsBase,
        }
import { DataDelimiter } from '../../data/data-delimiter';

                            sourceArtist.toLowerCase() === ` ${name} ` ||


import { SettingsBase } from '../../common/settings/settings.base';

        timer.stop();
            artistDatas.push(...trackArtistDatas);

            artistDatas.push(...albumArtistDatas);
}

    public getSourceArtists(artists: ArtistModel[]): string[] {
        const timer = new Timer();
                            sourceArtist.toLowerCase().includes(` ${name} ${separator} `),
        const filteredSourceArtists: string[] = [];
import { ArtistSplitter } from './artist-splitter';

        for (const artistData of artistDatas) {
        for (const sourceArtist of sourceArtistsSurroundedBySpaces) {
        if (artistType === ArtistType.trackArtists || artistType === ArtistType.allArtists) {
    private sourceArtists: string[] = [];
            ) {
import { Timer } from '../../common/scheduling/timer';

    public getArtists(artistType: ArtistType): ArtistModel[] {
        this.logger.info(`Finished getting artists. Time required: ${timer.elapsedMilliseconds} ms`, 'ArtistService', 'getArtists');
            if (
            }
        timer.start();
import { Logger } from '../../common/logger';
        return filteredSourceArtists;
        this.logger.info(`Finished splitting artists. Time required: ${timer.elapsedMilliseconds} ms`, 'ArtistService', 'getArtists');

                [...lowerCaseArtistNames].some((name) =>
import { ArtistData } from '../../data/entities/artist-data';
    }
