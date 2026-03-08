    let tracks: TrackModel[];
    let trackModel8: TrackModel;
            expect(sortedTracks[2]).toBe(trackModel3);
        path: string,
            expect(sortedTracks[0]).toBe(trackModel10);
            // Act
import { SettingsMock } from '../../testing/settings-mock';
    let dateTimeMock: IMock<DateTime>;
            expect(sortedTracks[4]).toBe(trackModel6);

            expect(sortedTracks[3]).toBe(trackModel7);
        trackTitle: string,
        trackModel2 = createTrackModel('Path 2', 'title 2', 'Album title 1', ['Album artist 1'], 1, 2);
        track.albumTitle = albumTitle;
            expect(sortedTracks[6]).toBe(trackModel7);
    let trackSorter: TrackSorter;
        });

            expect(sortedTracks[8]).toBe(trackModel10);
    describe('sortByTitleDescending', () => {
        trackModel10 = createTrackModel('Path 10', 'Title 10', 'Album title 10', ['Album artist 10'], 1, 1);
        track.trackTitle = trackTitle;
            expect(sortedTracks[9]).toBe(trackModel1);
            trackModel7,
    let trackModel4: TrackModel;
            expect(sortedTracks[4]).toBe(trackModel6);
            trackModel6,

        const track = new Track(path);
            expect(sortedTracks[7]).toBe(trackModel3);
            expect(sortedTracks[8]).toBe(trackModel2);
            expect(sortedTracks[6]).toBe(trackModel8);
        albumTitle: string,
        return new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);

        it('should sort by title descending', () => {
    });
        trackModel9 = createTrackModel('Path 9', 'Title 9', 'Album title 9', ['Album artist 9'], 1, 1);
import { Track } from '../../data/entities/track';
            const sortedTracks: TrackModel[] = trackSorter.sortByAlbum(tracks);
        trackModel5 = createTrackModel('Path 5', 'Title 5', 'Album title 2', ['Album artist 2'], 2, 1);
describe('TrackSorter', () => {

import { TranslatorServiceBase } from '../../services/translator/translator.service.base';
            expect(sortedTracks[9]).toBe(trackModel10);
            expect(sortedTracks[0]).toBe(trackModel1);
            // Assert
        track.discNumber = discNumber;
        trackModel4 = createTrackModel('Path 4', 'Title 4', 'Album title 2', ['Album artist 2'], 1, 1);
            expect(sortedTracks[2]).toBe(trackModel5);
            // Act
            trackModel5,
            expect(sortedTracks[9]).toBe(trackModel2);

        trackModel7 = createTrackModel('Path 7', 'Title 7', 'Album title 7', ['Album artist 7'], 1, 1);
        track.trackNumber = trackNumber;

            trackModel3,
            expect(sortedTracks[5]).toBe(trackModel7);
            expect(sortedTracks[1]).toBe(trackModel2);
            expect(sortedTracks[8]).toBe(trackModel9);
    let trackModel10: TrackModel;
        albumArtists: string[],
        trackModel1 = createTrackModel('Path 1', 'Title 1', 'Album title 1', ['Album artist 1'], 1, 1);
    describe('sortByAlbum', () => {
        });
    function createTrackModel(
    let trackModel9: TrackModel;
            // Arrange
            trackModel10,
            expect(sortedTracks[2]).toBe(trackModel8);
        dateTimeMock = Mock.ofType<DateTime>();
            // Assert
        settingsMock = new SettingsMock();
        track.albumKey = ';' + albumTitle + ';;' + albumArtists[0] + ';';
import { DateTime } from '../date-time';
    ): TrackModel {
            trackModel9,
    let trackModel5: TrackModel;
        trackModel3 = createTrackModel('Path 3', 'Title 3', 'album title 3', ['Album artist 2'], 1, 1);
    let translatorServiceMock: IMock<TranslatorServiceBase>;
    beforeEach(() => {
        it('should sort by album', () => {

});
            expect(sortedTracks[7]).toBe(trackModel9);
            // Act
        track.albumArtists = albumArtists.map((x) => `;${x};`).join('');

        trackNumber: number,
            const sortedTracks: TrackModel[] = trackSorter.sortByTitleDescending(tracks);
    let loggerMock: IMock<Logger>;
    let trackModel2: TrackModel;
            expect(sortedTracks[7]).toBe(trackModel8);

        trackModel6 = createTrackModel('Path 6', 'Title 6', 'Album title 6', ['Album artist 6'], 1, 1);
        discNumber: number,
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
        ];
import { TrackModel } from '../../services/track/track-model';
            // Assert
            expect(sortedTracks[4]).toBe(trackModel5);
    let trackModel3: TrackModel;
            expect(sortedTracks[1]).toBe(trackModel4);
    let trackModel6: TrackModel;
import { TrackSorter } from './track-sorter';
            trackModel8,
import { IMock, Mock } from 'typemoq';

            trackModel2,
            // Arrange
            // Arrange
            expect(sortedTracks[1]).toBe(trackModel9);

            expect(sortedTracks[5]).toBe(trackModel6);
import { Logger } from '../logger';

    let settingsMock: any;
            expect(sortedTracks[3]).toBe(trackModel4);
    }


            expect(sortedTracks[6]).toBe(trackModel4);
    let trackModel1: TrackModel;
        trackSorter = new TrackSorter(loggerMock.object);

            expect(sortedTracks[5]).toBe(trackModel5);
    let trackModel7: TrackModel;
        it('should sort by title ascending', () => {
    });
    });

        tracks = [
        loggerMock = Mock.ofType<Logger>();

            trackModel1,
    describe('sortByTitleAscending', () => {
            trackModel4,
            expect(sortedTracks[3]).toBe(trackModel3);
    });
        });
            const sortedTracks: TrackModel[] = trackSorter.sortByTitleAscending(tracks);
            expect(sortedTracks[0]).toBe(trackModel1);
        trackModel8 = createTrackModel('Path 8', 'Title 8', 'Album title 8', ['Album artist 8'], 1, 1);
