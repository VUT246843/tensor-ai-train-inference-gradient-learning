    });
            // Act
            expect(trackModel).toBeDefined();
            expect(albumKey).toEqual('albumKey2');
        it('should return all genres separated by a comma if track genres contains multiple genres', () => {
            // Arrange
            const artists: string = trackModel.sortableArtists;
        });
            const trackModel: TrackModel = createTrackModel('');
    });
            expect(genres).toEqual('genre 1');
    }
            // Arrange
            // Assert
        translatorServiceMock.setup((x) => x.get('unknown-genre')).returns(() => 'Unknown genre');
            expect(trackModel.playCount).toEqual(10);
    describe('id', () => {
            const discCount: number = trackModel.discCount;

        track.year = 2020;
            // Act
        it('should return "unknown artist" if track artists is empty', () => {
    });

            // Arrange
            // Arrange
        it('should not return empty artists', () => {
        });
            track.genres = undefined;
        });
        });
        track.rating = 4;
            // Arrange

        });
            expect(albumTitle).toEqual('Unknown album');
            // Arrange

            // Arrange
        it('should not return empty genres', () => {

});
            // Act
            // Act
        it('should return all album artists separated by a comma if the track has multiple album artists', () => {
            // Arrange
        });
            const trackModel: TrackModel = createTrackModel('');
import { TrackModel } from './track-model';
        it('should return an empty array if track artists is undefined', () => {
            expect(rawArtists).toEqual([]);
            const artists: string = trackModel.artists;
        });

        });
            // Arrange
    describe('albumTitle', () => {

            // Act

            // Act
            const trackModel: TrackModel = createTrackModel('');
            const genres: string = trackModel.genres;
            expect(artists).toEqual('unknown artist');
            // Assert


            // Assert
            expect(albumArtists).toEqual('Unknown artist');
            // Assert
            // Act
    describe('artists', () => {
        it('should return the first non-space artist', () => {
        });
            // Arrange

            // Arrange
            // Act
        });
            expect(id).toEqual(42);


    });
            track.artists = ';;';


            // Act
            track.albumTitle = undefined;
            track.genres = ';;';
        });

        it('should return "Unknown album" if the track album title is whitespace', () => {
            // Arrange
    });
        });
            track.genres = ';Genre 1;; ;;Genre 3;';

describe('TrackModel', () => {

        track.trackTitle = 'Track title';
            track.artists = ';Artist 1;;;;Artist 3;';
    describe('increasePlayCount', () => {
            const dateAdded: number = trackModel.dateAdded;

        it('should initialize isPlaying as false', () => {
        });
        });
            const trackModel: TrackModel = createTrackModel('');
            const trackModel: TrackModel = createTrackModel('');
            expect(artists).toEqual('artist 1');

            const genres: string = trackModel.genres;
            track.artists = ';Artist 1;';
            // Act



            // Arrange
        it('should return the track album title if the track has an album title', () => {
            // Assert

            // Assert

        });
            // Arrange

    });
            const trackModel: TrackModel = createTrackModel('');
            track.artists = undefined;
            track.artists = ';Artist 1;;  ;;Artist 3;';
            const artists: string = trackModel.artists;
            // Arrange

            const trackModel: TrackModel = createTrackModel('');
        it('should return the track file size in bytes', () => {


            const rawFirstArtist: string = trackModel.rawFirstArtist;
        });
        it('should return the track album title if the track has an album title', () => {
            track.artists = ';Artist 1;;;;Artist 3;';
            // Arrange
            const trackModel: TrackModel = createTrackModel('');
            const trackModel: TrackModel = createTrackModel('');


            expect(albumTitle).toEqual('Unknown album');

            // Act
        it('should increase the track play count by 1', () => {
            // Act
            const trackModel: TrackModel = createTrackModel('');
            expect(sortableAlbumTitle).toEqual('album title');
        it('should not return space artists', () => {
    });
        track.genres = ';Genre 1;;Genre 2;';
            const trackModel: TrackModel = createTrackModel('');

            const id: number = trackModel.id;
        it('should return an empty array if track artists is empty', () => {
            // Arrange
        });

        });

            const fileSizeInBytes: number = trackModel.fileSizeInBytes;
            // Arrange

            const path: string = trackModel.path;
            // Act



            // Act
            const trackModel: TrackModel = createTrackModel('');
        });
            const trackModel: TrackModel = createTrackModel('');
            track.artists = '';
            const trackModel: TrackModel = createTrackModel('');
            expect(fileSizeInBytes).toEqual(7704126);
        });
            // Assert
    describe('sortableTitle', () => {
            expect(path).toEqual('Track1.mp3');
            trackModel.rating = 2;

        });
            expect(albumArtists).toEqual('Artist 1');


        });
        it('should return the track date last played', () => {
        it('should return "unknown artist" if track artists is undefined', () => {
            track.artists = ';Artist 1;;  ;;Artist 3;';
            // Act
            const trackModel: TrackModel = createTrackModel('');
            expect(rating).toEqual(4);
            // Assert
            // Assert
            expect(artists).toEqual('artist 1, artist 3');
        });
            expect(artists).toEqual('unknown artist');
            track.artists = ';Artist 1;';
        });




            const artists: string = trackModel.artists;


            // Assert
        });
        });


            track.artists = ';Artist 1;';
            // Assert
            // Assert

        });
            // Act
        });
            expect(rawFirstArtist).toEqual('');
            const trackModel: TrackModel = createTrackModel('');
            expect(artists).toEqual('Artist 1, Artist 3');
            // Arrange
            // Arrange
            const trackModel: TrackModel = createTrackModel('');
            // Arrange
        });
    });

            const path: string = trackModel.fileName;
        it('should not return double space artists', () => {
        });
            // Act



            // Assert
            // Arrange
            expect(rawArtists).toEqual(['Artist 1', 'Artist 3']);
        it('should define playlistPath as empty', () => {
            // Arrange

            // Assert
            expect(rawFirstArtist).toEqual('');
            const sortableAlbumTitle: string = trackModel.sortableAlbumTitle;
    let dateTimeMock: IMock<DateTime>;
    describe('rating', () => {
            const rawArtists: string[] = trackModel.rawArtists;



            // Act
        translatorServiceMock.setup((x) => x.get('unknown-album')).returns(() => 'Unknown album');
            // Arrange


        track.albumKey = 'albumKey';
            expect(genres).toEqual('genre 1, genre 2');
            track.albumArtists = '';
            // Arrange
            expect(genres).toEqual('Genre 1, Genre 2');
            const genres: string = trackModel.sortableGenres;

            const rawArtists: string[] = trackModel.rawArtists;


            expect(albumKey).toEqual('albumKey3');
            const trackModel: TrackModel = createTrackModel('');

            expect(skipCount).toEqual(7);
            // Arrange
            const trackModel: TrackModel = createTrackModel('');
            // Act
            // Act
            // Act
            // Assert
            // Arrange
            // Assert
        });
            // Act
            // Assert
            track.genres = ';Genre 1;;  ;;Genre 3;';
            // Assert
        it('should return "unknown genre" if track genres is empty', () => {
            const sortableTitle: string = trackModel.sortableTitle;
            // Assert


            track.trackTitle = 'The track title';
            const discNumber: number = trackModel.discNumber;
            // Arrange


            // Assert
            track.artists = undefined;
        it('should return the track discCount', () => {
            // Assert
            const trackModel: TrackModel = createTrackModel('');
        });

        it('should return an array containing all artists if track artists contains multiple artists', () => {
            // Arrange
            track.artists = ';Artist 1;;Artist 2;';
            const trackModel: TrackModel = createTrackModel('');
            const skipCount: number = trackModel.skipCount;
            const trackModel: TrackModel = createTrackModel('');
            expect(sortableTitle).toEqual('track title');
            const trackModel: TrackModel = createTrackModel('');
            // Assert
            // Arrange
        it('should return the genre in sortable form if track genres contains only one genre', () => {
            const trackModel: TrackModel = createTrackModel('3');
        it('should return "Unknown album" if the track album title is empty', () => {
        });
            // Act

            const trackModel: TrackModel = createTrackModel('');
            expect(artists).toEqual('unknown artist');
            expect(rawFirstArtist).toEqual('Artist 1');
    describe('year', () => {
            const rawFirstArtist: string = trackModel.rawFirstArtist;

            // Act


            const albumTitle: string = trackModel.albumTitle;
        });
            track.artists = ';;';
            // Arrange
            expect(year).toEqual(2020);
            const trackModel: TrackModel = createTrackModel('');

        });
            expect(rawArtists).toEqual(['Artist 1', 'Artist 3']);
            const rawFirstArtist: string = trackModel.rawFirstArtist;

        });
            // Arrange
            // Assert

            const sortableAlbumArtists: string = trackModel.sortableAlbumArtists;

        it('should return "Unknown artist" if track artists contains only one empty artist', () => {
            expect(rawFirstArtist).toEqual('Artist 1');
            track.artists = ';Artist 1;; ;;Artist 3;';
    let translatorServiceMock: IMock<TranslatorServiceBase>;
        });
import { TranslatorServiceBase } from '../translator/translator.service.base';

    describe('title', () => {
            const trackModel: TrackModel = createTrackModel('');

    describe('skipCount', () => {
        it('should return the artist in sortable form if track artists contains only one artist', () => {

            // Act
        it('should return the track albumKey if albumKeyIndex is ""', () => {
            expect(trackModel.playlistPath).toEqual('');

            track.artists = ';;;Artist 1;;Artist 2;';


            const trackModel: TrackModel = createTrackModel('');
        });
    describe('fileSizeInBytes', () => {
            // Act
        it('should return "unknown genre" if track genre contains only one empty genre', () => {
        });

            expect(title).toEqual('Track1.mp3');


            const genres: string = trackModel.genres;
            const trackModel: TrackModel = createTrackModel('');

            const trackModel: TrackModel = createTrackModel('');
        it('should return an empty string if track artists contains only one empty artist', () => {
        it('should not return empty artists', () => {
            expect(genres).toEqual('unknown genre');
        track = new Track('/home/user/Music/Track1.mp3');
            expect(genres).toEqual('genre 1, genre 3');
            const rawFirstArtist: string = trackModel.rawFirstArtist;

            // Act

            // Assert
            const trackModel: TrackModel = createTrackModel('');


            // Assert
            const genres: string = trackModel.sortableGenres;
        it('should return all track artists separated by a comma in lowercase if the track has no album artists and has multiple track artists', () => {
            // Arrange


            // Assert
        track.duration = 45648713213;

            // Act

            expect(path).toEqual('/home/user/Music/Track1.mp3');
        });
        it('should return "Unknown genre" if track genre contains only one empty genr', () => {
        });
        });
            const rawFirstArtist: string = trackModel.rawFirstArtist;

            // Act
            track.albumTitle = ' ';

            track.artists = ';Artist 1;; ;;Artist 3;';
            expect(rawAlbumTitle).toEqual('Album title');

        track.artists = ';Artist 1;;Artist 2;';
            // Assert
            const genres: string = trackModel.genres;
            // Act
            expect(rawArtists).toEqual(['Artist 1', 'Artist 2']);

            // Arrange
            // Arrange
            expect(genres).toEqual('Genre 1, Genre 3');
    describe('dateLastPlayed', () => {
            const albumTitle: string = trackModel.albumTitle;
            // Act

        track.playCount = 9;

        it('should return an empty string if the track album title is undefined', () => {
            // Act
            const genres: string = trackModel.sortableGenres;

    });
            track.genres = ';Genre 1;;  ;;Genre 3;';
            // Arrange
            // Arrange
        });
            // Act

        it('should not return double space artists', () => {
        it('should return an empty array if track artists contains only one empty artist', () => {
        it('should not return double space artists', () => {
            // Act
    describe('discNumber', () => {
            const trackModel: TrackModel = createTrackModel('');

            const genres: string = trackModel.genres;
        it('should not return space genres', () => {
            // Act
            track.genres = ';;';
        });

        });
    });
            // Act


            // Act
            // Act
            expect(rawFirstArtist).toEqual('');
            const trackModel: TrackModel = createTrackModel('');
            // Assert

            // Act
    describe('fileName', () => {
    let track: Track;
        track.dateLastPlayed = 74;
            // Assert
            track.artists = ';Artist 1;;Artist 2;';
            expect(genres).toEqual('Unknown genre');
    });
        });
        it('should not return space artists', () => {
            const trackModel: TrackModel = createTrackModel('');
            // Act
            // Assert
    beforeEach(() => {
            // Act
            expect(genres).toEqual('Genre 1, Genre 3');

        });
            track.genres = '';

        it('should initialize showHeader as false', () => {
            // Arrange
        });
            // Act
            const durationInMilliseconds: number = trackModel.durationInMilliseconds;

        });

            track.artists = ';;';

            const trackModel: TrackModel = createTrackModel('');
            // Act
            // Arrange


    describe('playCount', () => {
            const rating: number = trackModel.rating;
    });




        track.albumTitle = 'Album title';
            // Act
    });


            // Assert
            track.artists = ';Artist 1;;Artist 2;';

            // Act

    describe('number', () => {
            // Assert

            // Act
    });
            const genres: string = trackModel.sortableGenres;


            // Assert
            const trackModel: TrackModel = createTrackModel('');


        });

            const rawAlbumTitle: string = trackModel.rawAlbumTitle;

            // Assert
            const trackModel: TrackModel = createTrackModel('');
            // Arrange
        it('should not return double space genres', () => {
            const trackModel: TrackModel = createTrackModel('');
            const trackModel: TrackModel = createTrackModel('');
            // Act
            // Arrange
            const genres: string = trackModel.sortableGenres;
        });
        it('should return "Unknown genre" if track genres is empty', () => {
            // Act
            const rawArtists: string[] = trackModel.rawArtists;

            const trackModel: TrackModel = createTrackModel('');
            // Arrange
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            // Act
            const rawAlbumTitle: string = trackModel.rawAlbumTitle;
            expect(trackModel.skipCount).toEqual(8);

            const artists: string = trackModel.artists;
            // Arrange
            // Assert
            expect(artists).toEqual('Artist 1, Artist 2');


            // Act
            // Arrange
            // Assert
            const rawAlbumTitle: string = trackModel.rawAlbumTitle;
            // Arrange
            // Assert
            // Arrange

            // Act
            expect(sortableAlbumArtists).toEqual('artist 1, artist 2');
            expect(genres).toEqual('genre 1, genre 3');
        track.fileName = 'Track1.mp3';
            // Act


        it('should return an empty string if the track album title is empty', () => {
            const trackModel: TrackModel = createTrackModel('');
            // Arrange

            expect(genres).toEqual('Unknown genre');
            const trackModel: TrackModel = createTrackModel('');
            // Act

    });
            const number: number = trackModel.number;
            const trackModel: TrackModel = createTrackModel('');
            // Act
            // Act

            const trackModel: TrackModel = createTrackModel('');
        it('should return "Unknown artist" if track artists is undefined', () => {
            track.artists = ';Artist 1;;  ;;Artist 3;';

            const trackModel: TrackModel = createTrackModel('');



            expect(number).toEqual(5);

        return new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, albumKeyIndex);
        it('should return the track TrackID', () => {
        it('should return "Unknown artist" if track artists is empty', () => {
            const trackModel: TrackModel = createTrackModel('');

            // Act

            // Assert

        it('should return the track albumKey3 if albumKeyIndex is "3"', () => {
            track.genres = ';Genre 1;; ;;Genre 3;';
            const artists: string = trackModel.sortableArtists;

            // Assert
    });

            // Arrange

            // Assert
            track.artists = ';;';
            const albumKey: string = trackModel.albumKey;
            // Assert
        });
            // Assert
            track.artists = ';Artist 1;; ;;Artist 3;';

            // Arrange

        it('Should return the track title in sortable form if there is a track title', () => {
            const albumKey: string = trackModel.albumKey;
            const sortableTitle: string = trackModel.sortableTitle;
    describe('durationInMilliseconds', () => {
    describe('rawFirstArtist', () => {


            const trackModel: TrackModel = createTrackModel('');
            // Arrange
        it('should return the first non-empty artist', () => {
    });
        it('should create', () => {
            const artists: string = trackModel.sortableArtists;
            // Act

            expect(durationInMilliseconds).toEqual(45648713213);
            // Act
            // Act


            const trackModel: TrackModel = createTrackModel('');
        track.skipCount = 7;
            // Arrange
            const rawArtists: string[] = trackModel.rawArtists;
            track.artists = '';


            track.artists = ';Artist 1;;Artist 2;';

            const artists: string = trackModel.artists;
            const rawArtists: string[] = trackModel.rawArtists;
            // Assert


            const artists: string = trackModel.artists;

            // Assert
        it('should return the first non-double space artist', () => {
    describe('genres', () => {

            const trackModel: TrackModel = createTrackModel('');
            const trackModel: TrackModel = createTrackModel('');
            const trackModel: TrackModel = createTrackModel('');
            // Act

        it('should return the track love', () => {
            // Act

        it('should return all genres in sortable form separated by a comma if track genres contains multiple genres', () => {
            const trackModel: TrackModel = createTrackModel('');
            const trackModel: TrackModel = createTrackModel('');
            // Act
        track.discNumber = 1;
        });

            trackModel.increasePlayCountAndDateLastPlayed();
            const title: string = trackModel.title;

            const trackModel: TrackModel = createTrackModel('');
            // Act
        it('should not return double space genres', () => {
        it('should return all artists in sortable form separated by a comma if track artists contains multiple artists', () => {

        it('should return the track file name', () => {
            const trackModel: TrackModel = createTrackModel('');
        it('should return an array containing the artist if track artists contains only one artist', () => {
        track.love = -1;
    describe('rawArtists', () => {
            expect(dateLastPlayed).toEqual(74);
            const trackModel: TrackModel = createTrackModel('');
import { SettingsMock } from '../../testing/settings-mock';

            const albumTitle: string = trackModel.albumTitle;
            expect(sortableTitle).toEqual('track1.mp3');


            // Assert

            const trackModel: TrackModel = createTrackModel('');

    });
            // Assert
    describe('Sortable artists', () => {
            expect(title).toEqual('The track title');
            track.artists = '; ;;Artist 1;;Artist 2;';
            // Assert
            // Assert
            // Assert
        it('should return track title if it is not empty and not undefined', () => {
            expect(artists).toEqual('artist 1, artist 3');

        it('should increase the track skip count by 1', () => {
            const trackModel: TrackModel = createTrackModel('');
            // Arrange

            track.genres = ';Genre 1;';
            const rawFirstArtist: string = trackModel.rawFirstArtist;
            // Assert
            const trackModel: TrackModel = createTrackModel('');

            // Arrange


            // Assert
            expect(rawArtists).toEqual(['Artist 1', 'Artist 3']);

            track.artists = ';Artist 1;;;;Artist 3;';
        it('should return the track rating', () => {
        it('should return track fileName if track title is empty', () => {
            // Act
    function createTrackModel(albumKeyIndex: string): TrackModel {
            // Assert

        });
    describe('love', () => {
        });
            track.genres = '';


            track.albumArtists = '';
    });
        track.albumKey2 = 'albumKey2';
            expect(artists).toEqual('Artist 1');
        });
            // Arrange
    });
        it('should return "unknown genre" if track genres is undefined', () => {
            expect(artists).toEqual('artist 1, artist 2');
            // Act
            const trackModel: TrackModel = createTrackModel('');

            expect(rawFirstArtist).toEqual('Artist 1');
            track.artists = '';
    describe('albumTitle', () => {
        });
        });
            // Arrange
        it('should return the artist if track artists contains only one artist', () => {
            const trackModel: TrackModel = createTrackModel('2');

            // Arrange

            track.artists = ';Artist 1; Artist 2;;Artist 3;';
        });
            // Assert
            // Act
        track.trackId = 42;
            // Assert
            const trackModel: TrackModel = createTrackModel('');
            const trackModel: TrackModel = createTrackModel('');
            expect(love).toEqual(-1);
            const trackModel: TrackModel = createTrackModel('');
            // Assert

            // Act

            // Arrange

            const albumTitle: string = trackModel.albumTitle;
        });

            expect(artists).toEqual('Unknown artist');
    });
            // Assert
            const trackModel: TrackModel = createTrackModel('');
        it('should return the track skip count', () => {
            const artists: string = trackModel.sortableArtists;
            const rawArtists: string[] = trackModel.rawArtists;

            const trackModel: TrackModel = createTrackModel('');
        });
        });
        });
            // Assert
            // Arrange

            const trackModel: TrackModel = createTrackModel('');
            expect(sortableTitle).toEqual('track title');
    });

    });
            expect(playCount).toEqual(9);
            expect(rawArtists).toEqual([]);
        it('should set the track rating', () => {
            // Assert
            const trackModel: TrackModel = createTrackModel('');
            const trackModel: TrackModel = createTrackModel('');
    });

            // Arrange
    describe('constructor', () => {

        });
            // Assert
        });
            expect(genres).toEqual('unknown genre');
            const trackModel: TrackModel = createTrackModel('');

            // Assert
            // Assert
            track.trackTitle = undefined;

        });
            // Assert
            // Arrange
        });
        it('should return "unknown artist" if track artists contains only one empty artist', () => {
        });
            expect(trackModel.rating).toEqual(2);
            // Arrange

        });
            const trackModel: TrackModel = createTrackModel('');
            // Assert
            // Assert
            // Assert


        it('should return an empty string if the track album title is whitespace', () => {
        it('should return multiple artists without double space', () => {
            const artists: string = trackModel.sortableArtists;


import { DateTime } from '../../common/date-time';


            // Act

            // Act
        it('should return "Unknown genre" if track genres is undefined', () => {
            const trackModel: TrackModel = createTrackModel('');

            // Arrange
        });
            // Act
        it('should return the album artist if the track has only 1 album artist', () => {
            expect(genres).toEqual('Genre 1');
            const title: string = trackModel.title;
            expect(discCount).toEqual(2);

        });
            const albumKey: string = trackModel.albumKey;
        });

            const trackModel: TrackModel = createTrackModel('');
            expect(rawFirstArtist).toEqual('Artist 1');
            const genres: string = trackModel.sortableGenres;
            // Assert

            track.artists = '';

            track.genres = ';Genre 1;;;;Genre 3;';
            // Arrange

            expect(albumTitle).toEqual('Album title');
            // Act
            // Assert
import { Track } from '../../data/entities/track';

            const artists: string = trackModel.sortableArtists;
            // Assert
            // Arrange
            const trackModel: TrackModel = createTrackModel('');
            // Assert
    describe('albumArtist', () => {
        it('should return the track discNumber', () => {

            expect(artists).toEqual('Unknown artist');
        });
    });
            // Assert
            track.artists = ';Artist 1;;Artist 2;';
            // Assert

        });

            // Act
        });
        });
            const trackModel: TrackModel = createTrackModel('');

            expect(trackModel.love).toEqual(1);
            track.trackTitle = '';
            // Assert

            track.albumArtists = ';Album artist 1;;Album artist 2;';
            const trackModel: TrackModel = createTrackModel('');


            const genres: string = trackModel.genres;
            expect(dateAdded).toEqual(89);
            const title: string = trackModel.title;
            // Assert
            track.genres = ';Genre 1;';
        });


        });
            const trackModel: TrackModel = createTrackModel('');
            const trackModel: TrackModel = createTrackModel('');
            track.trackTitle = '';

            // Arrange

            // Act
            // Assert
    });
            const trackModel: TrackModel = createTrackModel('');
            // Assert

        it('should return the track title in lowercase', () => {
            expect(albumArtists).toEqual('Artist 1, Artist 2');
            // Arrange
            // Assert
            expect(trackModel.isSelected).toBeFalsy();
        it('should return track fileName if track title is undefined', () => {

    });

        translatorServiceMock.setup((x) => x.get('unknown-artist')).returns(() => 'Unknown artist');
            // Arrange
            expect(genres).toEqual('genre 1, genre 3');
            expect(albumTitle).toEqual('Unknown album');

            const rawArtists: string[] = trackModel.rawArtists;
        it('should return the track number', () => {
            // Act



            const genres: string = trackModel.sortableGenres;
            const trackModel: TrackModel = createTrackModel('');
        it('Should return the track file name in sortable form if there is no track title', () => {
            const rawArtists: string[] = trackModel.rawArtists;
            // Assert
    });
        });


            // Arrange
            // Arrange
            // Act
        });
            // Assert

            track.artists = '';
        });
        track.fileSize = 7704126;
            const albumArtists: string = trackModel.albumArtists;


            // Arrange
            // Act

        it('should return the track date added', () => {

        });
            track.artists = ';   ;;Artist 1;;Artist 2;';

            const love: number = trackModel.love;
            const trackModel: TrackModel = createTrackModel('');
        it('should not return empty genres', () => {

            // Arrange

            // Arrange
            const trackModel: TrackModel = createTrackModel('');
        });

            // Act
            // Arrange
            // Act

            const trackModel: TrackModel = createTrackModel('');
            // Assert
        it('should return "Unknown artist" if the track has no album artists and no track artists', () => {

        it('should return the track year', () => {
        it('should return the track album title in lowercase if the track has an album title', () => {
            // Arrange
    describe('increaseSkipCount', () => {
            // Act
            // Assert

        it('should return the track play count', () => {
            expect(artists).toEqual('Artist 1, Artist 3');
            // Arrange
            const trackModel: TrackModel = createTrackModel('');
            // Act
        it('should return the track path', () => {
            // Act
            const albumArtists: string = trackModel.albumArtists;
        });
            // Assert

        it('should return the first artist if track artists contains multiple artists', () => {
        track.albumKey3 = 'albumKey3';
        it('should initialize isSelected as false', () => {
        it('should set the track love', () => {
            // Arrange
    });
        it('should return an empty string if track artists is empty', () => {
        });
            const trackModel: TrackModel = createTrackModel('');
        it('should return the genre if track genres contains only one genre', () => {

            // Arrange

            expect(rawAlbumTitle).toEqual('');

            // Act
            const artists: string = trackModel.artists;
    });
            expect(artists).toEqual('Unknown artist');
            // Arrange
            const trackModel: TrackModel = createTrackModel('');
        });
            // Arrange
            // Arrange




            // Act
        it('should not return space genres', () => {
            // Act
            // Act
        });

            // Arrange
        dateTimeMock = Mock.ofType<DateTime>();
        it('should return the track artist if the track has no album artists and has only 1 track artist', () => {
            track.artists = undefined;
        it('should return an empty string if track artists is undefined', () => {
            // Assert
            // Act
            expect(albumArtists).toEqual('Album artist 1, Album artist 2');
            trackModel.love = 1;
            const albumArtists: string = trackModel.albumArtists;
            const sortableTitle: string = trackModel.sortableTitle;
            expect(discNumber).toEqual(1);
            // Arrange
        it('should return the artist if track artists contains only one artist', () => {
            track.artists = ';Artist 1;';
    describe('dateAdded', () => {
            // Act
            // Assert

            track.albumTitle = ' ';

            // Arrange
            track.albumTitle = undefined;
            const genres: string = trackModel.genres;
            expect(genres).toEqual('unknown genre');
            const rawFirstArtist: string = trackModel.rawFirstArtist;
    describe('path', () => {
            // Act
        it('should not return space artists', () => {
            expect(track.love).toEqual(1);


    describe('discCount', () => {
            // Act
    describe('sortableGenres', () => {
            expect(artists).toEqual('artist 1, artist 3');
            // Assert
            // Assert
            track.albumTitle = '';
            expect(rawAlbumTitle).toEqual('');
            track.genres = ';Genre 1;;;;Genre 3;';
        });
    });
            // Assert
        });
            trackModel.increaseSkipCount();
        });
            const artists: string = trackModel.artists;
        it('should return "Unknown album" if the track album title is undefined', () => {


            // Assert

            expect(title).toEqual('Track1.mp3');

            const trackModel: TrackModel = createTrackModel('');

            const artists: string = trackModel.sortableArtists;

        it('should return all artists separated by a comma if track artists contains multiple artists', () => {

            const trackModel: TrackModel = createTrackModel('');
        track.trackNumber = 5;
            expect(albumKey).toEqual('albumKey');
            // Arrange
    describe('sortableTitle', () => {
        track.discCount = 2;
        it('should return all track artists separated by a comma if the track has no album artists and has multiple track artists', () => {
            const trackModel: TrackModel = createTrackModel('');
            const trackModel: TrackModel = createTrackModel('');
            // Arrange
            expect(rawFirstArtist).toEqual('Artist 1');
            // Arrange
            // Arrange
            expect(rawArtists).toEqual([]);
    describe('albumKey', () => {



            // Arrange
            const genres: string = trackModel.genres;
            // Act
            const trackModel: TrackModel = createTrackModel('');

            expect(artists).toEqual('Artist 1, Artist 3');
            track.artists = ';Artist 1;';
            expect(genres).toEqual('Unknown genre');
            // Act
            expect(trackModel.isPlaying).toBeFalsy();
            const trackModel: TrackModel = createTrackModel('');

            // Assert
            expect(track.rating).toEqual(2);
        });
            // Assert

            // Act
            // Act
            expect(rawArtists).toEqual(['Artist 1']);
            const trackModel: TrackModel = createTrackModel('');
            // Arrange
            // Assert
            expect(albumArtists).toEqual('Album artist 1');
            // Act


            const trackModel: TrackModel = createTrackModel('');
            const genres: string = trackModel.sortableGenres;


        it('should not return empty artists', () => {
            const albumArtists: string = trackModel.albumArtists;

            track.artists = ';Artist 1;;Artist 2;';
            // Act
        });


            // Arrange
            // Assert
        });
    });
            expect(artists).toEqual('Artist 1, Artist 2, Artist 3');
            const rawFirstArtist: string = trackModel.rawFirstArtist;

            expect(genres).toEqual('Genre 1, Genre 3');
            expect(rawAlbumTitle).toEqual('');
            const artists: string = trackModel.artists;
            // Act
        it('should return the track albumKey2 if albumKeyIndex is "2"', () => {
            const trackModel: TrackModel = createTrackModel('');
    describe('rawAlbumTitle', () => {
            // Assert
            // Arrange

            const albumArtists: string = trackModel.albumArtists;

            track.albumArtists = ';Album artist 1;';
            // Arrange
        track.dateAdded = 89;
import { IMock, Mock } from 'typemoq';

            // Assert
            const year: number = trackModel.year;
        it('should return the track duration in milliseconds', () => {
            // Act
            track.albumTitle = '';

            const rawAlbumTitle: string = trackModel.albumTitle;
        });
            track.albumArtists = '';

    });
            const trackModel: TrackModel = createTrackModel('');
            expect(trackModel.showHeader).toBeFalsy();
            // Arrange

            // Assert
            track.genres = ';Genre 1;;Genre 2;';
        });
            // Arrange

            // Arrange


            track.albumArtists = '';
            const artists: string = trackModel.sortableArtists;

            track.genres = ';Genre 1;;Genre 2;';

            // Assert
            const dateLastPlayed: number = trackModel.dateLastPlayed;
            // Arrange
            // Assert
            const trackModel: TrackModel = createTrackModel('');
            // Arrange

        });
            track.genres = undefined;


        });
            const playCount: number = trackModel.playCount;
            track.artists = undefined;

        track.albumArtists = ';Album artist 1;;Album artist 2;';
            // Assert
