            expect(sortedAlbums[2]).toBe(albumModel8);
        it('should sort by album title descending', () => {
        });
        });
            expect(sortedAlbums[8]).toBe(albumModel1);

            const sortedAlbums: AlbumModel[] = albumSorter.sortByYearDescending(albums);
        });
            expect(sortedAlbums.length).toEqual(0);
            expect(sortedAlbums.length).toEqual(0);

            // Act
        it('should return an empty collection if empty is provided', () => {
            albumModel6,
        loggerMock = Mock.ofType<Logger>();
        });
            expect(sortedAlbums[9]).toBe(albumModel1);
            expect(sortedAlbums[5]).toBe(albumModel6);
            expect(sortedAlbums[0]).toBe(albumModel6);

            expect(sortedAlbums[3]).toBe(albumModel4);
            const sortedAlbums: AlbumModel[] = albumSorter.sortByAlbumArtist(albums);

        it('should return an empty collection if empty is provided', () => {

        it('should sort by album title ascending', () => {
        dateLastPlayed: number,
            const sortedAlbums: AlbumModel[] = albumSorter.sortByYearDescending(undefined);
import { AlbumSorter } from './album-sorter';
import { Logger } from '../logger';
            // Act
            expect(sortedAlbums[6]).toBe(albumModel4);
        albumModel8 = createAlbumModel('Album 8', ['Artist 8'], ['Artist 8'], 2008, 3, 8, 8);

            // Assert

            expect(sortedAlbums.length).toEqual(0);
        albumData.dateAdded = dateAdded;

            expect(sortedAlbums[7]).toBe(albumModel3);
            expect(sortedAlbums[2]).toBe(albumModel3);
            expect(sortedAlbums[4]).toBe(albumModel6);
            expect(sortedAlbums[4]).toBe(albumModel6);
            expect(sortedAlbums.length).toEqual(0);
            expect(sortedAlbums[9]).toBe(albumModel2);
            expect(sortedAlbums.length).toEqual(0);
            // Assert
        it('should return an empty collection if empty is provided', () => {
        });
            const sortedAlbums: AlbumModel[] = albumSorter.sortByAlbumTitleDescending([]);
describe('AlbumSorter', () => {
            const sortedAlbums: AlbumModel[] = albumSorter.sortByYearAscending([]);

    }
    let albumModel3: AlbumModel;
        it('should sort by date added', () => {
            expect(sortedAlbums[8]).toBe(albumModel9);

    ): AlbumModel {

            expect(sortedAlbums.length).toEqual(0);

        albumModel9 = createAlbumModel('Album 9', ['Artist 9'], ['Artist 9'], 2009, 4, 7, 10);
        albumData.artists = artists.map((x) => `;${x};`).join('');
    });
            expect(sortedAlbums[1]).toBe(albumModel2);
            albumModel8,
            expect(sortedAlbums[5]).toBe(albumModel6);
    });
    let albumModel7: AlbumModel;
            // Act
            // Act
            // Assert
            // Arrange




            expect(sortedAlbums[8]).toBe(albumModel2);
            const sortedAlbums: AlbumModel[] = albumSorter.sortByDateLastPlayed([]);
            // Assert
        albums = [
            expect(sortedAlbums[6]).toBe(albumModel4);
            expect(sortedAlbums[3]).toBe(albumModel4);

            // Act

    beforeEach(() => {
            expect(sortedAlbums[8]).toBe(albumModel9);
            // Assert
            expect(sortedAlbums[3]).toBe(albumModel7);
        albumModel6 = createAlbumModel('Album 6', ['Artist 6'], ['Artist 6'], 2005, 1, 10, 6);
            albumModel4,

            // Assert
        });
            expect(sortedAlbums.length).toEqual(0);
import { ApplicationPaths } from '../application/application-paths';



        it('should return an empty collection if empty is provided', () => {
            // Arrange
        it('should return an empty collection when undefined is provided', () => {
            // Assert
            // Act
            expect(sortedAlbums[5]).toBe(albumModel10);
            // Arrange

            const sortedAlbums: AlbumModel[] = albumSorter.sortByAlbumTitleAscending([]);
    let albumModel8: AlbumModel;

    let albumSorter: AlbumSorter;
            expect(sortedAlbums[6]).toBe(albumModel7);
        albumData.year = year;
        const albumData: AlbumData = new AlbumData();

            expect(sortedAlbums[4]).toBe(albumModel5);
            // Arrange
            // Assert
            expect(sortedAlbums[0]).toBe(albumModel10);

            const sortedAlbums: AlbumModel[] = albumSorter.sortByAlbumTitleDescending(undefined);
        it('should return an empty collection if empty is provided', () => {

            // Act

    describe('sortByAlbumArtist', () => {
            expect(sortedAlbums[2]).toBe(albumModel3);
            const sortedAlbums: AlbumModel[] = albumSorter.sortByDateAdded(albums);

        year: number,
    describe('sortByYearAscending', () => {
            expect(sortedAlbums[2]).toBe(albumModel8);

            expect(sortedAlbums.length).toEqual(0);
        it('should return an empty collection if empty is provided', () => {
    let albums: AlbumModel[];
        albumTitle: string,
        albumModel1 = createAlbumModel('Album 1', ['Artist 10'], ['Artist 1'], 2001, 10, 1, 2);
            // Act
            // Arrange
            expect(sortedAlbums[4]).toBe(albumModel5);

            // Assert
            const sortedAlbums: AlbumModel[] = albumSorter.sortByYearAscending(undefined);
            expect(sortedAlbums.length).toEqual(0);
            // Assert

            expect(sortedAlbums[0]).toBe(albumModel9);
            albumModel10,
            expect(sortedAlbums[5]).toBe(albumModel5);
            // Act
            // Assert
        });
        artists: string[],
            // Arrange
        ];
    describe('sortByYearDescending', () => {
    });
    });

        });

            albumModel2,
            expect(sortedAlbums.length).toEqual(0);
        it('should return an empty collection when undefined is provided', () => {
            // Arrange
        albumModel7 = createAlbumModel('Album 7', ['Artist 7'], ['Artist 7'], 2007, 2, 9, 7);


            // Act
            expect(sortedAlbums[7]).toBe(albumModel8);
            // Arrange
            // Act
        return new AlbumModel(albumData, translatorServiceMock.object, applicationPathsMock.object);
            // Act
﻿import { AlbumModel } from '../../services/album/album-model';
import { AlbumData } from '../../data/entities/album-data';
        });
        applicationPathsMock = Mock.ofType<ApplicationPaths>();
            const sortedAlbums: AlbumModel[] = albumSorter.sortByAlbumTitleDescending(albums);

            expect(sortedAlbums[7]).toBe(albumModel3);
            const sortedAlbums: AlbumModel[] = albumSorter.sortByDateAdded(undefined);
            expect(sortedAlbums.length).toEqual(0);
            expect(sortedAlbums.length).toEqual(0);
            expect(sortedAlbums.length).toEqual(0);
    function createAlbumModel(

    let albumModel1: AlbumModel;
            albumModel5,
            const sortedAlbums: AlbumModel[] = albumSorter.sortByDateCreated(albums);
            expect(sortedAlbums[1]).toBe(albumModel9);
            const sortedAlbums: AlbumModel[] = albumSorter.sortByYearAscending(albums);
            expect(sortedAlbums[4]).toBe(albumModel5);
        it('should sort by date added', () => {
        });
    });
            // Arrange
            expect(sortedAlbums[9]).toBe(albumModel1);
        it('should return an empty collection when undefined is provided', () => {
        it('should return an empty collection if empty is provided', () => {
            expect(sortedAlbums[9]).toBe(albumModel1);
            // Act
            // Assert
    describe('sortByDateLastPlayed', () => {



    });


            // Act
            expect(sortedAlbums[8]).toBe(albumModel7);
            // Assert
            const sortedAlbums: AlbumModel[] = albumSorter.sortByDateLastPlayed(albums);

            // Assert

    describe('sortByAlbumTitleDescending', () => {

            expect(sortedAlbums[9]).toBe(albumModel1);
            // Arrange
        it('should sort by date added', () => {
    let albumModel5: AlbumModel;
            expect(sortedAlbums[1]).toBe(albumModel2);


            expect(sortedAlbums[9]).toBe(albumModel6);
        });
        });

    });

            expect(sortedAlbums[0]).toBe(albumModel10);
            // Arrange
            expect(sortedAlbums[1]).toBe(albumModel9);
    });
    let albumModel2: AlbumModel;
        });
            // Arrange
            expect(sortedAlbums[4]).toBe(albumModel10);

            // Arrange
            // Assert
        albumModel4 = createAlbumModel('Album 4', ['Artist 4'], ['Artist 4'], 2004, 7, 4, 4);
        it('should sort by date added', () => {
            expect(sortedAlbums[9]).toBe(albumModel10);
            expect(sortedAlbums[3]).toBe(albumModel7);
        it('should return an empty collection when undefined is provided', () => {


            // Assert
            // Assert
        it('should return an empty collection if empty is provided', () => {
        albumData.dateFileCreated = dateFileCreated;
            expect(sortedAlbums[7]).toBe(albumModel8);
        it('should return an empty collection when undefined is provided', () => {
            // Act
        it('should sort by date created', () => {
        });
            const sortedAlbums: AlbumModel[] = albumSorter.sortByAlbumArtist(undefined);
            expect(sortedAlbums[7]).toBe(albumModel8);
            expect(sortedAlbums[0]).toBe(albumModel1);
            expect(sortedAlbums.length).toEqual(0);
    describe('sortByDateAdded', () => {
});
            // Assert
            expect(sortedAlbums[6]).toBe(albumModel4);

        albumModel5 = createAlbumModel('Album 5', ['Artist 5'], ['Artist 5'], 2006, 6, 5, 5);
            expect(sortedAlbums[3]).toBe(albumModel7);
        });
            expect(sortedAlbums[1]).toBe(albumModel7);
            const sortedAlbums: AlbumModel[] = albumSorter.sortByDateCreated(undefined);
    let albumModel6: AlbumModel;
            expect(sortedAlbums[4]).toBe(albumModel5);
            // Arrange
    let albumModel4: AlbumModel;
            expect(sortedAlbums[2]).toBe(albumModel3);


            // Arrange
            // Act
            expect(sortedAlbums[1]).toBe(albumModel2);
        });
            // Act
            albumModel1,
        });
            expect(sortedAlbums.length).toEqual(0);

            // Assert
            // Act
            expect(sortedAlbums[8]).toBe(albumModel2);
            expect(sortedAlbums[3]).toBe(albumModel9);
    describe('sortByDateCreated', () => {
        dateAdded: number,
import { TranslatorServiceBase } from '../../services/translator/translator.service.base';
            expect(sortedAlbums[6]).toBe(albumModel7);
            expect(sortedAlbums[1]).toBe(albumModel2);
            expect(sortedAlbums[9]).toBe(albumModel10);
            expect(sortedAlbums[0]).toBe(albumModel1);
            expect(sortedAlbums[7]).toBe(albumModel3);
            // Assert
            const sortedAlbums: AlbumModel[] = albumSorter.sortByAlbumTitleAscending(albums);
            expect(sortedAlbums[0]).toBe(albumModel10);
        albumData.albumKey = `;${albumTitle};;${albumArtists[0]}`;
            expect(sortedAlbums[2]).toBe(albumModel3);

            // Act
            expect(sortedAlbums[5]).toBe(albumModel5);
            // Arrange

            expect(sortedAlbums[8]).toBe(albumModel2);
        albumData.artworkId = '';

            // Act

            expect(sortedAlbums[6]).toBe(albumModel4);
        });

            // Arrange
            expect(sortedAlbums[7]).toBe(albumModel3);
            const sortedAlbums: AlbumModel[] = albumSorter.sortByDateCreated([]);
            // Arrange
            expect(sortedAlbums[2]).toBe(albumModel8);
            expect(sortedAlbums[1]).toBe(albumModel10);
        });
    let albumModel9: AlbumModel;
            expect(sortedAlbums[3]).toBe(albumModel4);
            expect(sortedAlbums[6]).toBe(albumModel9);

            expect(sortedAlbums[5]).toBe(albumModel5);
            expect(sortedAlbums[3]).toBe(albumModel4);
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
            expect(sortedAlbums[5]).toBe(albumModel6);
        albumSorter = new AlbumSorter(loggerMock.object);
            const sortedAlbums: AlbumModel[] = albumSorter.sortByAlbumArtist([]);


            const sortedAlbums: AlbumModel[] = albumSorter.sortByYearAscending([]);
        });
    let albumModel10: AlbumModel;
            const sortedAlbums: AlbumModel[] = albumSorter.sortByDateLastPlayed(undefined);
        albumData.albumArtists = albumArtists.map((x) => `;${x};`).join('');
        albumModel10 = createAlbumModel('Album 10', ['Artist 1'], ['Artist 10'], 2010, 5, 6, 9);

            // Act
import { IMock, Mock } from 'typemoq';
        it('should sort by date added', () => {
            // Arrange
            expect(sortedAlbums[4]).toBe(albumModel6);
            expect(sortedAlbums.length).toEqual(0);
            // Arrange
            expect(sortedAlbums[8]).toBe(albumModel9);
            // Arrange
            expect(sortedAlbums[2]).toBe(albumModel8);

            albumModel7,
            albumModel3,
            // Assert

            // Assert
            // Arrange
        it('should return an empty collection when undefined is provided', () => {
            const sortedAlbums: AlbumModel[] = albumSorter.sortByDateAdded([]);

        albumModel2 = createAlbumModel('Album 2', ['Artist 2'], ['Artist 2'], 2002, 9, 2, 1);

            albumModel9,
            expect(sortedAlbums[0]).toBe(albumModel1);
        albumModel3 = createAlbumModel('Album 3', ['Artist 3'], ['Artist 3'], 2003, 8, 3, 3);

            expect(sortedAlbums[5]).toBe(albumModel5);

            // Act

    let translatorServiceMock: IMock<TranslatorServiceBase>;
        });

    let applicationPathsMock: IMock<ApplicationPaths>;



            const sortedAlbums: AlbumModel[] = albumSorter.sortByAlbumTitleAscending(undefined);
        it('should return an empty collection when undefined is provided', () => {
        it('should return an empty collection when undefined is provided', () => {
        albumData.albumTitle = albumTitle;
            // Act
            // Assert
    let loggerMock: IMock<Logger>;

            // Assert
            // Arrange
    describe('sortByAlbumTitleAscending', () => {
            // Arrange
        });
            expect(sortedAlbums[7]).toBe(albumModel8);
        dateFileCreated: number,
        albumData.dateLastPlayed = dateLastPlayed;


            // Act
            expect(sortedAlbums[6]).toBe(albumModel7);
        });
        });

    });
        albumArtists: string[],
