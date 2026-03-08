            const sortedPlaylists: PlaylistModel[] = playlistSorter.sortDescending([]);
            expect(sortedPlaylists[7]).toBe(playlistModel3);
            // Act

        playlistModel8 = new PlaylistModel('Playlist 8', 'Folder', 'Path 8', 'Image path 8');

            expect(sortedPlaylists[2]).toBe(playlistModel3);
    describe('sortAscending', () => {
            playlistModel3,
            playlistModel7,

    let playlistModel8: PlaylistModel;
        });
import { PlaylistSorter } from './playlist-sorter';
    });



        loggerMock = Mock.ofType<Logger>();
        it('should return an empty collection if empty is provided', () => {
            // Act
        });
            expect(sortedPlaylists[6]).toBe(playlistModel7);
            playlistModel6,

            expect(sortedPlaylists[0]).toBe(playlistModel10);
import { IMock, Mock } from 'typemoq';
            // Act
            // Assert
            const sortedPlaylists: PlaylistModel[] = playlistSorter.sortDescending(playlists);
describe('PlaylistSorter', () => {
        });
    });
        playlistModel3 = new PlaylistModel('Playlist 3', 'Folder', 'Path 3', 'Image path 3');
        });
﻿import { PlaylistModel } from '../../services/playlist/playlist-model';

    let playlistModel2: PlaylistModel;
            expect(sortedPlaylists[8]).toBe(playlistModel9);
            playlistModel9,

            // Assert
        playlistModel6 = new PlaylistModel('Playlist 6', 'Folder', 'Path 6', 'Image path 6');

            // Assert
            // Arrange
        playlistModel7 = new PlaylistModel('Playlist 7', 'Folder', 'Path 7', 'Image path 7');
    let playlistSorter: PlaylistSorter;
            // Arrange
            // Act

        });
            expect(sortedPlaylists[3]).toBe(playlistModel7);
    let loggerMock: IMock<Logger>;

        playlistModel4 = new PlaylistModel('Playlist 4', 'Folder', 'Path 4', 'Image path 4');
            expect(sortedPlaylists.length).toEqual(0);

            // Arrange
            // Act
            expect(sortedPlaylists[9]).toBe(playlistModel1);
            const sortedPlaylists: PlaylistModel[] = playlistSorter.sortAscending([]);
        playlistModel5 = new PlaylistModel('Playlist 5', 'Folder', 'Path 5', 'Image path 5');
            playlistModel5,
            expect(sortedPlaylists[4]).toBe(playlistModel5);
            expect(sortedPlaylists[3]).toBe(playlistModel4);
            const sortedPlaylists: PlaylistModel[] = playlistSorter.sortAscending(undefined);
            // Assert

            expect(sortedPlaylists[4]).toBe(playlistModel6);
        playlistModel10 = new PlaylistModel('Playlist 10', 'Folder', 'Path 10', 'Image path 10');
            // Arrange
    describe('sortDescending', () => {

        playlistModel9 = new PlaylistModel('Playlist 9', 'Folder', 'Path 9', 'Image path 9');


            expect(sortedPlaylists[1]).toBe(playlistModel9);
import { Logger } from '../logger';
        ];
            // Assert
            expect(sortedPlaylists[5]).toBe(playlistModel6);
            // Assert

    });
    let playlistModel4: PlaylistModel;

            expect(sortedPlaylists.length).toEqual(0);
        playlistModel2 = new PlaylistModel('Playlist 2', 'Folder', 'Path 2', 'Image path 2');
            expect(sortedPlaylists[5]).toBe(playlistModel5);

            // Arrange
            expect(sortedPlaylists[0]).toBe(playlistModel1);

        it('should return an empty collection if undefined is provided', () => {
    let playlistModel6: PlaylistModel;
    let playlistModel10: PlaylistModel;
            expect(sortedPlaylists[7]).toBe(playlistModel8);
            // Act
    let playlists: PlaylistModel[];
            playlistModel10,
            expect(sortedPlaylists[6]).toBe(playlistModel4);
            expect(sortedPlaylists.length).toEqual(0);
            expect(sortedPlaylists[9]).toBe(playlistModel10);
            playlistModel4,
        playlists = [
        it('should sort ascending', () => {

        playlistSorter = new PlaylistSorter(loggerMock.object);

        playlistModel1 = new PlaylistModel('Playlist 1', 'Folder', 'Path 1', 'Image path 1');
            // Arrange
    let playlistModel3: PlaylistModel;
        it('should return an empty collection if undefined is provided', () => {
            const sortedPlaylists: PlaylistModel[] = playlistSorter.sortAscending(playlists);
            playlistModel2,
    let playlistModel7: PlaylistModel;

            playlistModel8,
});
            expect(sortedPlaylists.length).toEqual(0);
            const sortedPlaylists: PlaylistModel[] = playlistSorter.sortDescending(undefined);
            expect(sortedPlaylists[2]).toBe(playlistModel8);
        it('should sort descending', () => {
    let playlistModel1: PlaylistModel;
        });

            expect(sortedPlaylists[8]).toBe(playlistModel2);
    beforeEach(() => {
        it('should return an empty collection if empty is provided', () => {
            expect(sortedPlaylists[1]).toBe(playlistModel2);
            playlistModel1,
    let playlistModel5: PlaylistModel;
    let playlistModel9: PlaylistModel;
