
            // Act
        albumRowsGetter = new AlbumRowsGetter(itemSpaceCalculatorMock.object, albumSorterMock.object, shufflerMock.object);
            // Act
                // Arrange
        shufflerMock = Mock.ofType<Shuffler>();
            });

            // Arrange
                    for (const album of row.albums) {
                // Assert
        albums = [album1, album2, album3, album4, album5, album6];
                // Arrange
                // Assert
});
                const testAlbums = [album3, album1, album2];
                // Assert
import { ApplicationPaths } from '../../../../common/application/application-paths';
    describe('getAlbumRows', () => {
                    ),
                // Act
    const albumData2: AlbumData = new AlbumData();
    albumData2.dateAdded = 5;
import { Shuffler } from '../../../../common/shuffler';

            albumRowsGetter.getAlbumRows(280, albums, AlbumOrder.byDateAdded, false);
            });
    let album5: AlbumModel;
                    }
                }
import { AlbumSorter } from '../../../../common/sorting/album-sorter';
        it('should create', () => {
    const albumData5: AlbumData = new AlbumData();
            // Act

    albumData1.dateLastPlayed = 5;
            });
        });
                // Assert - each year should start a new row
                // Arrange
                Times.once(),
                const yearHeaders: string[] = [];
    albumData6.dateAdded = 3;
                // Arrange
                albumSorterMock.setup((x) => x.sortByAlbumTitleAscending(albums)).returns(() => albums);
                // Arrange
                const albumRows: AlbumRow[] = albumRowsGetter.getAlbumRows(280, testAlbums, AlbumOrder.byYearAscending, false);
                // Act
                // Assert
                    for (const album of row.albums) {
                let foundEmpty = false;

                    }
                );

            // Act

                    yearsInRows.push(yearsInThisRow);
describe('AlbumRowsGetter', () => {
            // Assert
    albumData1.dateAdded = 2;

                // Assert
        it('should sort by year ascending when provided AlbumOrder.byYearAscending', () => {
                let albumCount = 0;
                }
    const albumData1: AlbumData = new AlbumData();
                for (const row of albumRows) {
            albumSorterMock.setup((x) => x.sortByDateAdded(albums)).returns(() => albums);
                    for (const album of row.albums) {
                    const yearsInThisRow: number[] = [];
                        if (album.yearHeader && album.yearHeader.length > 0) {
                const yearsInRows: number[][] = [];
    albumData4.dateFileCreated = 4;
            const albumRows: AlbumRow[] = albumRowsGetter.getAlbumRows(280, [], AlbumOrder.byAlbumTitleAscending, false);
        it('should sort by year descending when provided AlbumOrder.byYearDescending', () => {
                    if (row.albums[0].yearHeader.length > 0) {
    albumData1.dateFileCreated = 3;
                for (const yearsInRow of yearsInRows) {



    describe('constructor', () => {

                            expect(album.showYear).toBe(true);
    let album3: AlbumModel;
                                albumModels[5].albumKey === albums[5].albumKey,
            albumSorterMock.setup((x) => x.sortByYearAscending(albums)).returns(() => albums);
                Times.once(),
    let albums: AlbumModel[];
                    albumsWithDifferentYears,
                        expect(album.showYear).toBe(false);
                    }
                // Act
                    280,
            });

                const albumsWithDifferentYears = [album3, album1, album2, album6, album4];
                    }
                                albumModels[3].albumKey === albums[3].albumKey &&

                }
            });



            // Arrange
                                albumModels[2].albumKey === albums[2].albumKey &&
        album2 = new AlbumModel(albumData2, translatorServiceMock.object, applicationPathsMock.object);
            albumSorterMock.verify((x) => x.sortByDateLastPlayed(albums), Times.once());
    albumData5.dateAdded = 6;
            shufflerMock.verify((x) => x.shuffle(albums), Times.once());
                        }

                        ),
                    x.sortByYearAscending(
                    }
import { ItemSpaceCalculator } from '../item-space-calculator';
                    280,
                for (const row of albumRows) {
        translatorServiceMock.setup((x) => x.get('unknown-title')).returns(() => 'Unknown title');
                        yearsInThisRow.push(album.year);
        it('should sort in random order when provided AlbumOrder.random', () => {
                }
                for (const row of albumRows) {
        it('should return album rows by date last played descending when provided AlbumOrder.byLastPlayed', () => {
                        }
    albumData4.year = 1980;
        album4 = new AlbumModel(albumData4, translatorServiceMock.object, applicationPathsMock.object);
                const firstAlbumOfEachYear: AlbumModel[] = [];
    let applicationPathsMock: IMock<ApplicationPaths>;
            albumRowsGetter.getAlbumRows(280, albums, AlbumOrder.byDateCreated, false);
                const albumRows: AlbumRow[] = albumRowsGetter.getAlbumRows(280, albums, AlbumOrder.byYearAscending, true);
        it('should sort by date file created descending when provided AlbumOrder.byDateCreated', () => {
                        albumCount++;
        album3 = new AlbumModel(albumData3, translatorServiceMock.object, applicationPathsMock.object);
import { AlbumModel } from '../../../../services/album/album-model';
                albumSorterMock.setup((x) => x.sortByYearAscending(albums)).returns(() => albums);
            it('should set yearHeader to formatted year for first album of each year group when sorting by year descending', () => {
                                albumModels[4].albumKey === albums[4].albumKey &&
import { AlbumRowsGetter } from './album-rows-getter';
import { TranslatorServiceBase } from '../../../../services/translator/translator.service.base';
                    AlbumOrder.byYearDescending,
                (x) =>
                // Arrange
                // Assert

    albumData5.year = 0;

    });
                const albumRows: AlbumRow[] = albumRowsGetter.getAlbumRows(

        album1 = new AlbumModel(albumData1, translatorServiceMock.object, applicationPathsMock.object);
            it('should not set yearHeader for any albums when useCompactYearView is true', () => {
                const testAlbums = [album1, album2, album3];
    let albumRowsGetter: AlbumRowsGetter;
        });
            albumSorterMock.setup((x) => x.sortByAlbumTitleDescending(albums)).returns(() => albums);
                    expect(album.yearHeader).toBeTruthy();

                    for (const album of row.albums) {
                            expect(album.showYear).toBe(true);
            // Arrange
            });
                                albumModels[1].albumKey === albums[1].albumKey &&
            });

                albumSorterMock.setup((x) => x.sortByYearAscending(albumsWithDifferentYears)).returns(() => albumsWithDifferentYears);
                // Act
                albumSorterMock.setup((x) => x.sortByYearAscending(albums)).returns(() => albums);
                // Act
            // Assert
            // Assert

    let album1: AlbumModel;

                // Assert
    const albumData4: AlbumData = new AlbumData();
    });
                                albumModels[5].albumKey === albums[5].albumKey,
                albumSorterMock.setup((x) => x.sortByYearDescending(testAlbums)).returns(() => testAlbums);
                }
                            (albumModels: AlbumModel[]) =>
                        }

                for (const row of albumRows) {
    let shufflerMock: IMock<Shuffler>;

                                albumModels[3].albumKey === albums[3].albumKey &&
                }
        });
import { AlbumRow } from './album-row';

                    for (const album of row.albums) {
                            (albumModels: AlbumModel[]) =>
                expect(firstAlbumOfEachYear.length).toBeGreaterThan(0);
                // Arrange
                const albumRows: AlbumRow[] = albumRowsGetter.getAlbumRows(
            albumSorterMock.setup((x) => x.sortByDateCreated(albums)).returns(() => albums);
    albumData2.albumTitle = 'Album title 2';
        });

    albumData1.albumTitle = 'Album title 1';
                }
                        if (album.yearHeader && album.yearHeader.length > 0) {



    albumData2.dateFileCreated = 5;
            albumSorterMock.verify((x) => x.sortByAlbumTitleDescending(albums), Times.once());
                for (const row of albumRows) {

                // Check that each row contains only one unique year
            // Assert
    albumData3.dateLastPlayed = 1;
            // Arrange

        });
        it('should sort by album title descending when provided AlbumOrder.byAlbumTitleDescending', () => {
                // Act
        translatorServiceMock.setup((x) => x.get('unknown-artist')).returns(() => 'Unknown artist');
        albumSorterMock = Mock.ofType<AlbumSorter>();



import { AlbumOrder } from '../album-order';
            // Act
    let album4: AlbumModel;
                    ),
        });
                for (const album of firstAlbumOfEachYear) {
            it('should set yearHeader to empty string for albums that are not first in their year group', () => {
                const albumRows: AlbumRow[] = albumRowsGetter.getAlbumRows(
        it('should sort by date added descending when provided AlbumOrder.byDateAdded', () => {

                    const uniqueYears = [...new Set(yearsInRow)];
                    }
                            yearHeaders.push(album.yearHeader);
            it('should break row when year changes in non-compact view with year sorting', () => {
                    }
            });
                        firstAlbumOfEachYear.push(row.albums[0]);
            it('should set showYear to false for all albums when useCompactYearView is true', () => {
                        albumCount++;
                for (const album of firstAlbumOfEachYear) {
                    expect(album.yearHeader).toBeTruthy();
            albumSorterMock.setup((x) => x.sortByYearDescending(albums)).returns(() => albums);
        });
        it('should sort by album title ascending when provided AlbumOrder.byAlbumTitleAscending', () => {

            it('should set showYear to false for all albums when not sorting by year', () => {
                }
            // Assert
                expect(foundHeader).toBe(true);
                }
                        It.is<AlbumModel[]>(

                        }
        applicationPathsMock = Mock.ofType<ApplicationPaths>();
                        expect(album.showYear).toBe(false);
    const albumData6: AlbumData = new AlbumData();
                // Act

                    AlbumOrder.byYearAscending,
                        if (row.albums[0].yearHeader.length > 0) {

                const testAlbums = [album1, album2, album3];
                    for (const album of row.albums) {
                for (const row of albumRows) {
                        } else if (album.year === 2020) {
            const albumRows: AlbumRow[] = albumRowsGetter.getAlbumRows(280, albums, AlbumOrder.random, false);
            it('should set yearHeader to formatted year for first album of each year group when sorting by year ascending', () => {

                albumSorterMock.setup((x) => x.sortByYearAscending(albumsWithDifferentYears)).returns(() => albumsWithDifferentYears);

            );
            // Act
    albumData3.albumTitle = 'Album title 3';
                );
                const albumsWithDifferentYears = [album4, album6, album1, album2, album3];
    let albumSorterMock: IMock<AlbumSorter>;
                const albumRows: AlbumRow[] = albumRowsGetter.getAlbumRows(280, testAlbums, AlbumOrder.byYearAscending, false);
import { AlbumData } from '../../../../data/entities/album-data';
                expect(yearHeaders.length).toBe(uniqueYearHeaders.length);
            });

                // Arrange
    albumData3.dateAdded = 1;
                expect(firstAlbumOfEachYear.length).toBeGreaterThan(0);

                const albumRows: AlbumRow[] = albumRowsGetter.getAlbumRows(280, albums, AlbumOrder.byAlbumTitleAscending, false);


                // Act

            albumRowsGetter.getAlbumRows(280, albums, AlbumOrder.byLastPlayed, false);
            // Assert
                            foundEmpty = true;
import { IMock, It, Mock, Times } from 'typemoq';
                        ),
                    albumsWithDifferentYears,

                        expect(album.yearHeader).toBe('');
    albumData6.dateLastPlayed = 6;
                albumSorterMock.setup((x) => x.sortByAlbumTitleAscending(albums)).returns(() => albums);
                    280,

    let album2: AlbumModel;

            albumSorterMock.verify(
                    expect(uniqueYears.length).toBe(1);
    albumData6.dateFileCreated = 1;
            albumRowsGetter.getAlbumRows(280, albums, AlbumOrder.byYearDescending, false);
                }
                // Act


                for (const row of albumRows) {
    let translatorServiceMock: IMock<TranslatorServiceBase>;
    albumData5.dateLastPlayed = 4;

                expect(albumCount).toBeGreaterThan(0);
    let itemSpaceCalculatorMock: IMock<ItemSpaceCalculator>;
    albumData1.year = 2020;
            // Assert
                albumSorterMock.setup((x) => x.sortByYearAscending(testAlbums)).returns(() => testAlbums);
            albumSorterMock.verify((x) => x.sortByDateAdded(albums), Times.once());
                albumSorterMock.setup((x) => x.sortByYearAscending(testAlbums)).returns(() => testAlbums);

        });
                    if (row.albums[0].yearHeader.length > 0) {

    albumData5.dateFileCreated = 2;

                const albumRows: AlbumRow[] = albumRowsGetter.getAlbumRows(280, albums, AlbumOrder.byYearAscending, true);
                    }
            // Arrange, Act, Assert
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
                        expect(album.yearHeader).toBe('');
                            foundHeader = true;
                // Act
            albumSorterMock.verify((x) => x.sortByAlbumTitleAscending(albums), Times.once());
    albumData5.albumTitle = 'Album title 5';
        });
                }
            // Assert
                for (const row of albumRows) {
                for (const row of albumRows) {
            albumRowsGetter.getAlbumRows(280, albums, AlbumOrder.byAlbumTitleAscending, false);
                }
                const albumRows: AlbumRow[] = albumRowsGetter.getAlbumRows(280, testAlbums, AlbumOrder.byYearAscending, false);
                    for (const album of row.albums) {
    beforeEach(() => {
                    x.sortByYearDescending(
                    for (const album of row.albums) {
                );
        it('should return empty album rows if albums is empty', () => {
                                albumModels[0].albumKey === albums[0].albumKey &&
                const albumsWithDifferentYears = [album4, album6, album1, album3];
            it('should set showYear to true for albums when sorting by year ascending and useCompactYearView is false', () => {

                        firstAlbumOfEachYear.push(row.albums[0]);

                        It.is<AlbumModel[]>(
    albumData2.year = 2020;
        });
                let albumCount = 0;
            albumRowsGetter.getAlbumRows(280, albums, AlbumOrder.byYearAscending, false);
                expect(albumCount).toBeGreaterThan(0);

                // Arrange
                    expect(album.yearHeader).not.toBe('');

                                albumModels[2].albumKey === albums[2].albumKey &&
                }
        shufflerMock.setup((x) => x.shuffle(albums)).returns(() => [album5, album3, album1, album6, album4, album2]);

            });


            it('should set showYear to true for albums when sorting by year descending and useCompactYearView is false', () => {


                const firstAlbumOfEachYear: AlbumModel[] = [];
        itemSpaceCalculatorMock = Mock.ofType<ItemSpaceCalculator>();
                    false,
                    AlbumOrder.byYearAscending,
        album5 = new AlbumModel(albumData5, translatorServiceMock.object, applicationPathsMock.object);
                    false,
                expect(foundEmpty).toBe(true);
                (x) =>


            expect(albumRowsGetter).toBeDefined();
    albumData2.dateLastPlayed = 3;
                for (const row of albumRows) {
        describe('year display logic', () => {
                                albumModels[0].albumKey === albums[0].albumKey &&
                // Act


            // Arrange
                const testAlbums = [album1, album2, album3];
                const uniqueYearHeaders = [...new Set(yearHeaders)];
                    }
            // Arrange
    albumData4.dateAdded = 4;
            albumSorterMock.setup((x) => x.sortByDateLastPlayed(albums)).returns(() => albums);
                let foundHeader = false;

    let album6: AlbumModel;
                // Arrange
            // Act
            albumSorterMock.setup((x) => x.sortByAlbumTitleAscending(albums)).returns(() => albums);
                    }
                albumSorterMock.setup((x) => x.sortByYearAscending(testAlbums)).returns(() => testAlbums);
                                albumModels[1].albumKey === albums[1].albumKey &&
                // Arrange


        });
                        if (row.albums[0].yearHeader.length > 0) {
        album6 = new AlbumModel(albumData6, translatorServiceMock.object, applicationPathsMock.object);
            it('should not set yearHeader for any albums when not sorting by year', () => {
    albumData3.dateFileCreated = 6;
                const albumRows: AlbumRow[] = albumRowsGetter.getAlbumRows(280, albums, AlbumOrder.byAlbumTitleAscending, false);
            albumSorterMock.verify((x) => x.sortByDateCreated(albums), Times.once());

            });
    });
    albumData3.year = 2021;
                albumSorterMock.setup((x) => x.sortByYearDescending(albumsWithDifferentYears)).returns(() => albumsWithDifferentYears);
                                albumModels[4].albumKey === albums[4].albumKey &&
                // Assert
            shufflerMock.setup((x) => x.shuffle(albums)).returns(() => albums);
            it('should not duplicate yearHeader for albums with the same year', () => {
        itemSpaceCalculatorMock.setup((x) => x.calculateNumberOfItemsPerRow(It.isAny(), It.isAny())).returns(() => 2);
                    albumsWithDifferentYears,

            albumRowsGetter.getAlbumRows(280, albums, AlbumOrder.byAlbumTitleDescending, false);
            );
                // Assert
                }

            // Arrange
            albumSorterMock.verify(

            // Assert
                    false,
                    expect(album.yearHeader).not.toBe('');
            expect(albumRows.length).toBe(0);
                // Assert
            // Arrange, Act

                for (const row of albumRows) {
    albumData6.year = 2001;
            // Act
                    }
            // Arrange
    const albumData3: AlbumData = new AlbumData();
                    for (const album of row.albums) {
    albumData4.dateLastPlayed = 2;
    albumData6.albumTitle = 'Album title 6';
                const albumRows: AlbumRow[] = albumRowsGetter.getAlbumRows(280, testAlbums, AlbumOrder.byYearDescending, false);

