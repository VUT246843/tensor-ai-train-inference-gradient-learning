            await this.scheduler.sleepAsync(Constants.shortListLoadDelayMilliseconds);
        private playlistFolderService: PlaylistFolderServiceBase,
        } else {
        );
        this.subscription.add(
            }),
            this.playlistFolders,
        this.playlistFolders = await this.playlistFolderService.getPlaylistFoldersAsync();
        try {
        await this.getPlaylistsForPlaylistFoldersAsync(playlistFolders);
        await this.scheduler.sleepAsync(Constants.longListLoadDelayMilliseconds);
            this.logger.error(e, 'Could not fill lists', 'CollectionPlaylistsComponent', 'fillListsAsync');
            this.playlistFoldersPersister.selectedPlaylistFoldersChanged$.subscribe((playlistFolders: PlaylistFolderModel[]) => {

import { PlaylistFolderServiceBase } from '../../../../services/playlist-folder/playlist-folder.service.base';
import { PlaylistModel } from '../../../../services/playlist/playlist-model';
            this.tracks = new TrackModels();
import { SettingsBase } from '../../../../common/settings/settings.base';
import { Subscription } from 'rxjs';
            }),
    ) {}
            }),
        }
        const selectedPlaylistFolders: PlaylistFolderModel[] = this.playlistFoldersPersister.getSelectedPlaylistFolders(
        public playlistsPersister: PlaylistsPersister,

    private async getPlaylistsForPlaylistFoldersAsync(playlistFolders: PlaylistFolderModel[]): Promise<void> {
            await this.getTracksAsync();
    }
    public ngOnDestroy(): void {

            await this.getPlaylistFoldersAsync();
import { PromiseUtils } from '../../../../common/utils/promise-utils';

            this.tracks = await this.playlistService.getTracksAsync(selectedPlaylists);
    public leftPaneSize: number = this.settings.playlistsLeftPaneWidthPercent;
import { PlaylistFoldersPersister } from './playlist-folders-persister';
        public tracksPersister: PlaylistsTracksPersister,

        if (selectedPlaylists.length > 0) {
    private async getPlaylistsForPlaylistFoldersAndGetTracksAsync(playlistFolders: PlaylistFolderModel[]): Promise<void> {
    public tracks: TrackModels = new TrackModels();
        this.subscription.add(

            }),
    styleUrls: ['./collection-playlists.component.scss'],
    }
    public rightPaneSize: number = this.settings.playlistsRightPaneWidthPercent;
    }

        );
export class CollectionPlaylistsComponent implements OnInit, OnDestroy {
        );
    }
        this.clearLists();
    templateUrl: './collection-playlists.component.html',
    }
            await this.scheduler.sleepAsync(Constants.shortListLoadDelayMilliseconds);
        }
    public playlistFolders: PlaylistFolderModel[] = [];
        this.subscription.add(
        private logger: Logger,
        } catch (e: unknown) {
                PromiseUtils.noAwait(this.fillListsAsync());

import { TrackModels } from '../../../../services/track/track-models';
    }
            this.playlistService.playlistsChanged$.subscribe(() => {
    }
    }
        this.settings.playlistsRightPaneWidthPercent = <number>event.sizes[2];
    host: { style: 'display: block; width: 100%;' },
        await this.fillListsAsync();
        );
    private async fillListsAsync(): Promise<void> {
                PromiseUtils.noAwait(this.getPlaylistsForPlaylistFoldersAndGetTracksAsync(playlistFolders));
            this.playlistsPersister.selectedPlaylistsChanged$.subscribe(() => {
        );
    private async getPlaylistsAsync(): Promise<void> {
        this.playlists = await this.playlistService.getPlaylistsAsync(playlistFolders);

import { PlaylistsTracksPersister } from './playlists-tracks-persister';

        public searchService: SearchServiceBase,
    public constructor(

    public playlists: PlaylistModel[] = [];
import { Constants } from '../../../../common/application/constants';
import { Logger } from '../../../../common/logger';
import { PlaylistFolderModel } from '../../../../services/playlist-folder/playlist-folder-model';
            this.playlistFolderService.playlistFoldersChanged$.subscribe(() => {
        private playlistService: PlaylistServiceBase,
import { Component, OnDestroy, OnInit } from '@angular/core';
            this.playlistService.playlistTracksChanged$.subscribe(() => {
        this.playlists = await this.playlistService.getPlaylistsAsync(selectedPlaylistFolders);

    }
        await this.getTracksAsync();
                PromiseUtils.noAwait(this.getTracksAsync());
            }),
import { SchedulerBase } from '../../../../common/scheduling/scheduler.base';
})

                this.playlistsPersister.resetSelectedPlaylists();
@Component({

}
                PromiseUtils.noAwait(this.getTracksAsync());
    private clearLists(): void {
import { PlaylistsPersister } from './playlists-persister';

        public playlistFoldersPersister: PlaylistFoldersPersister,
    private async getPlaylistFoldersAsync(): Promise<void> {
        this.playlistFolders = [];
import { PlaylistServiceBase } from '../../../../services/playlist/playlist.service.base';
    public splitDragEnd(event: IOutputData): void {

            await this.scheduler.sleepAsync(Constants.shortListLoadDelayMilliseconds);
import { IOutputData } from 'angular-split';
    private subscription: Subscription = new Subscription();
    public centerPaneSize: number = 100 - this.settings.playlistsLeftPaneWidthPercent - this.settings.playlistsRightPaneWidthPercent;

            await this.getPlaylistsAsync();
        this.settings.playlistsLeftPaneWidthPercent = <number>event.sizes[0];
import { SearchServiceBase } from '../../../../services/search/search.service.base';
        this.playlists = [];
        private settings: SettingsBase,
        );
        this.tracks = new TrackModels();
        this.subscription.unsubscribe();
        this.subscription.add(
        private scheduler: SchedulerBase,

                PromiseUtils.noAwait(this.getPlaylistsAsync());

    }



        this.subscription.add(

    public async ngOnInit(): Promise<void> {
    private async getTracksAsync(): Promise<void> {
    selector: 'app-collection-playlists',
        const selectedPlaylists: PlaylistModel[] = this.playlistsPersister.getSelectedPlaylists(this.playlists);

