            this.subfolders = await this.folderService.getSubfoldersAsync(this.openedFolder, subfolderToActivate);
            this.collectionService.collectionChanged$.subscribe(() => {

        public searchService: SearchServiceBase,
import { TrackModels } from '../../../../services/track/track-models';
    public async setOpenedSubfolderAsync(subfolderToActivate: SubfolderModel | undefined): Promise<void> {
import { IndexingService } from '../../../../services/indexing/indexing.service';
        await this.navigationService.navigateToManageCollectionAsync();

import { TrackOrder } from '../track-order';
    public getFolders(): void {

        try {
    }
    providers: [MouseSelectionWatcher],
        this.selectedSubfolder = subfolder;

import { CollectionServiceBase } from '../../../../services/collection/collection.service.base';
        } catch (e: unknown) {
            // subfolder remains visible. This function is a workaround for this problem.

        }

        private playbackIndicationService: PlaybackIndicationServiceBase,
        this.tracks = new TrackModels();
        private trackService: TrackServiceBase,
        const persistedOpenedFolder: FolderModel | undefined = this.foldersPersister.getOpenedFolder(this.folders);
import { ContextMenuOpener } from '../../context-menu-opener';
        private navigationService: NavigationServiceBase,

            }),
import { Constants } from '../../../../common/application/constants';
        );
    }
import { SearchServiceBase } from '../../../../services/search/search.service.base';
        private collectionService: CollectionServiceBase,
        this.folders = [];
    @ViewChild('subfolderContextMenuAnchor', { read: MatMenuTrigger, static: false })
    }

        );

import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

        await this.scheduler.sleepAsync(Constants.shortListLoadDelayMilliseconds);

        private scheduler: SchedulerBase,
        );
import { AddToPlaylistMenu } from '../../add-to-playlist-menu';
        this.foldersPersister.setOpenedFolder(folderToActivate);
            this.mouseSelectionWatcher.initialize(this.tracks.tracks, false);
    }
import { FolderServiceBase } from '../../../../services/folder/folder.service.base';
import { NavigationServiceBase } from '../../../../services/navigation/navigation.service.base';
            this.playbackService.playbackStopped$.subscribe(() => {

        private logger: Logger,
        await this.fillListsAsync();
        );
            this.logger.error(e, 'Could not set the opened subfolder', 'CollectionFoldersComponent', 'setOpenedSubfolderAsync');
        TrackOrder.none,

import { SubfolderModel } from '../../../../services/folder/subfolder-model';
    public openedFolder: FolderModel;

    public tracks: TrackModels = new TrackModels();
        this.subscription.add(
    public async setOpenedFolderAsync(folderToActivate: FolderModel): Promise<void> {
import { MouseSelectionWatcher } from '../../mouse-selection-watcher';
        public playbackService: PlaybackService,
        private hacks: Hacks,
        this.subfolders = [];
        TrackOrder.byDateCreatedAscending,
    public selectedSubfolder: SubfolderModel | undefined;

    }
    ];

import { PlaybackStarted } from '../../../../services/playback/playback-started';
    private subscription: Subscription = new Subscription();
    public async ngOnInit(): Promise<void> {

})

            await this.setOpenedFolderAsync(persistedOpenedFolder);


        this.subscription.add(
        this.subfolderBreadcrumbs = [];
                this.playbackIndicationService.clearPlayingSubfolder(this.subfolders);
    public setSelectedSubfolder(subfolder: SubfolderModel): void {
        private indexingService: IndexingService,
    public subfolderContextMenu: MatMenuTrigger;
        }
    public trackOrders: TrackOrder[] = [
    selector: 'app-collection-folders',
            this.subfolderBreadcrumbs = this.folderService.getSubfolderBreadcrumbs(this.openedFolder, openedSubfolderPath);
import { PlaybackService } from '../../../../services/playback/playback.service';
    }
    }
import { Hacks } from '../../../../common/hacks';

    ) {}
        public folderService: FolderServiceBase,
            this.logger.error(e, 'Could not get folders', 'CollectionFoldersComponent', 'getFolders');
        const persistedOpenedSubfolder: SubfolderModel | undefined = this.foldersPersister.getOpenedSubfolder();
    public rightPaneSize: number = 100 - this.settings.foldersLeftPaneWidthPercent;
    public async onOpenSubfolderAsync(subfolder: SubfolderModel): Promise<void> {
        public tracksPersister: FolderTracksPersister,

            // HACK: when refreshing the subfolder list, the tooltip of the last hovered
        this.getFolders();
                this.playbackIndicationService.setPlayingSubfolder(this.subfolders, playbackStarted.currentTrack);
import { Subscription } from 'rxjs';


    public onSubfolderContextMenu(event: MouseEvent, subfolder: SubfolderModel): void {
    }
    private async fillListsAsync(): Promise<void> {
    public subfolders: SubfolderModel[] = [];
                PromiseUtils.noAwait(this.fillListsAsync());

            ? this.subfolders.filter((x) => x.isGoToParent)[0].path
        private desktop: DesktopBase,
import { DesktopBase } from '../../../../common/io/desktop.base';
}
import { FoldersPersister } from './folders-persister';
    }
        this.subscription.add(
        public mouseSelectionWatcher: MouseSelectionWatcher,
        this.contextMenuOpener.open(this.subfolderContextMenu, event, subfolder);
import { FolderModel } from '../../../../services/folder/folder-model';
        public addToPlaylistMenu: AddToPlaylistMenu,
    public async goToManageCollectionAsync(): Promise<void> {
        try {
export class CollectionFoldersComponent implements OnInit, OnDestroy {

        TrackOrder.byTrackTitleDescending,
import { SettingsBase } from '../../../../common/settings/settings.base';
import { PlaybackIndicationServiceBase } from '../../../../services/playback-indication/playback-indication.service.base';
            }),
            this.folders = this.folderService.getFolders();
    public constructor(
        await this.setOpenedSubfolderAsync(persistedOpenedSubfolder);
                PromiseUtils.noAwait(this.fillListsAsync());
            this.playbackIndicationService.setPlayingSubfolder(this.subfolders, this.playbackService.currentTrack);
            this.indexingService.indexingFinished$.subscribe(() => {

        public appearanceService: AppearanceServiceBase,
import { FolderTracksPersister } from './folder-tracks-persister';
            this.playbackIndicationService.setPlayingTrack(this.tracks.tracks, this.playbackService.currentTrack);
import { AppearanceServiceBase } from '../../../../services/appearance/appearance.service.base';
            this.tracks = await this.trackService.getTracksInSubfolderAsync(openedSubfolderPath);
        this.subscription.add(
        await this.scheduler.sleepAsync(Constants.longListLoadDelayMilliseconds);
    public folders: FolderModel[] = [];
            : this.openedFolder.path;
    }
    public leftPaneSize: number = this.settings.foldersLeftPaneWidthPercent;
            return;
            const openedSubfolderPath = this.getOpenedSubfolderPath();
        this.subscription.unsubscribe();
        this.clearLists();
        this.openedFolder = folderToActivate;
        private settings: SettingsBase,

    }
import { TrackServiceBase } from '../../../../services/track/track.service.base';
    }
import { SchedulerBase } from '../../../../common/scheduling/scheduler.base';
import { MatMenuTrigger } from '@angular/material/menu';

            this.foldersPersister.setOpenedSubfolder(new SubfolderModel(openedSubfolderPath, false));
    public splitDragEnd(event: IOutputData): void {
import { PromiseUtils } from '../../../../common/utils/promise-utils';
            this.playbackService.playbackStarted$.subscribe((playbackStarted: PlaybackStarted) => {
    encapsulation: ViewEncapsulation.None,

            }),

        return this.subfolders.length > 0 && this.subfolders.some((x) => x.isGoToParent)
            }),
@Component({
    }
        public contextMenuOpener: ContextMenuOpener,
        if (persistedOpenedFolder != undefined) {
        this.settings.foldersLeftPaneWidthPercent = <number>event.sizes[0];
        if (this.openedFolder == undefined) {
    public subfolderBreadcrumbs: SubfolderModel[] = [];
        } catch (e: unknown) {
    private clearLists(): void {
        }
        await this.desktop.openPathAsync(subfolder.path);
        TrackOrder.byDateCreatedDescending,
        }
import { Logger } from '../../../../common/logger';
    templateUrl: './collection-folders.component.html',
        private foldersPersister: FoldersPersister,
import { IOutputData } from 'angular-split';
    host: { style: 'display: block; width: 100%;' },
    public ngOnDestroy(): void {
            this.hacks.removeTooltips();

    private getOpenedSubfolderPath(): string {
        TrackOrder.byTrackTitleAscending,
    styleUrls: ['./collection-folders.component.scss'],
