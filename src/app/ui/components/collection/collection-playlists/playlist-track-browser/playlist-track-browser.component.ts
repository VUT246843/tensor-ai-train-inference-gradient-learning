                    'PlaylistTrackBrowserComponent',

    public async dropTrackAsync(event: CdkDragDrop<TrackModel[]>): Promise<void> {
import { DialogServiceBase } from '../../../../../services/dialog/dialog.service.base';

        public mouseSelectionWatcher: MouseSelectionWatcher,
        await this.playlistService.updatePlaylistOrderAsync(this.orderedTracks);

        this.orderTracks();

                );
    }
        }
import { ContextMenuOpener } from '../../../context-menu-opener';
            orderedTracks = this.tracks.tracks;
        private logger: Logger,

import { PlaybackService } from '../../../../../services/playback/playback.service';
        }
        return this._tracks;

@Component({
                this.dialogService.showErrorDialog(errorText);

        try {
import { MouseSelectionWatcher } from '../../../mouse-selection-watcher';
    }
                this.playbackIndicationService.setPlayingTrack(this.orderedTracks, playbackStarted.currentTrack);
        this._tracks = v;
    }
    private _tracks: TrackModels = new TrackModels();
        return this._tracksPersister;
            this.playbackService.playbackStopped$.subscribe(() => {
        const userHasConfirmed: boolean = await this.dialogService.showConfirmationDialogAsync(dialogTitle, dialogText);
        private desktop: DesktopBase,


        let orderedTracks: TrackModel[] = [];
        this.mouseSelectionWatcher.initialize(this.orderedTracks, false);

        if (tracks.length > 0) {
        this.subscription.add(
        this.orderedTracks = [...orderedTracks];

        this.subscription.unsubscribe();
    }
        private translatorService: TranslatorServiceBase,
                this.playbackIndicationService.clearPlayingTrack(this.orderedTracks);
    public ngOnInit(): void {
        this.mouseSelectionWatcher.initialize(this.orderedTracks, false);
            this.desktop.showFileInDirectory(tracks[0].path);
        this.playbackIndicationService.setPlayingTrack(this.orderedTracks, this.playbackService.currentTrack);
                const errorText: string = await this.translatorService.getAsync('remove-from-playlist-error');

        const dialogText: string = await this.translatorService.getAsync('confirm-remove-from-playlist-long');
        );

        this.orderedTracks = [...this.orderedTracks];
            }),
                    'Could not remove tracks from playlists',
    public ngOnDestroy(): void {


    }
        moveItemInArray(this.orderedTracks, event.previousIndex, event.currentIndex);
        this.orderTracks();
    public async onRemoveFromPlaylistAsync(): Promise<void> {

                await this.playlistService.removeTracksFromPlaylistsAsync(this.mouseSelectionWatcher.selectedItems as TrackModel[]);
        const dialogTitle: string = await this.translatorService.getAsync('confirm-remove-from-playlist');
    public set tracks(v: TrackModels) {
    public onPlaylistTrackContextMenu(event: MouseEvent, track: TrackModel): void {
    public constructor(
    public set tracksPersister(v: BaseTracksPersister) {

        // See: https://github.com/angular/components/issues/14873

        private dialogService: DialogServiceBase,
        this._tracksPersister = v;
import { PlaylistServiceBase } from '../../../../../services/playlist/playlist.service.base';
        );

    }

export class PlaylistTrackBrowserComponent implements OnInit, OnDestroy {
        public contextMenuOpener: ContextMenuOpener,
            this.logger.error(e, 'Could not order tracks', 'PlaylistTrackBrowserComponent', 'orderTracks');
import { MatMenuTrigger } from '@angular/material/menu';
    }
import { BaseTracksPersister } from '../../base-tracks-persister';
    host: { style: 'display: block' },
    selector: 'app-playlist-track-browser',
    providers: [MouseSelectionWatcher],
})
    }
    }
import { Subscription } from 'rxjs';
                this.logger.error(
    }
                    e,
    public get tracks(): TrackModels {
    @Input()
                    'onRemoveFromPlaylistAsync',
    public setSelectedTracks(event: MouseEvent, trackToSelect: TrackModel): void {
    public onShowInFolder(): void {

        // HACK: required so that the dragged item does not snap back to its original place
        this.mouseSelectionWatcher.setSelectedItems(event, trackToSelect);
        } catch (e: unknown) {
    styleUrls: ['./playlist-track-browser.component.scss'],
import { Logger } from '../../../../../common/logger';
    templateUrl: './playlist-track-browser.component.html',
    public get tracksPersister(): BaseTracksPersister {
        this.contextMenuOpener.open(this.playlistTrackContextMenu, event, track);
        public playlistService: PlaylistServiceBase,
import { PlaybackStarted } from '../../../../../services/playback/playback-started';
    ) {}
import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
    }

        }
    private _tracksPersister: BaseTracksPersister;
    public playlistTrackContextMenu: MatMenuTrigger;

    @ViewChild('playlistTrackContextMenuAnchor', { read: MatMenuTrigger, static: false })
            } catch (e: unknown) {

        this.subscription.add(
import { TrackModel } from '../../../../../services/track/track-model';
    }
    @Input()
            }),
    public orderedTracks: TrackModel[] = [];
}
        public playbackService: PlaybackService,
    private subscription: Subscription = new Subscription();
        if (userHasConfirmed) {
import { TrackModels } from '../../../../../services/track/track-models';
    }
        private playbackIndicationService: PlaybackIndicationServiceBase,
        await this.playbackService.addTracksToQueueAsync(this.mouseSelectionWatcher.selectedItems as TrackModel[]);
import { TranslatorServiceBase } from '../../../../../services/translator/translator.service.base';
    private orderTracks(): void {

            try {
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

    public async onAddToQueueAsync(): Promise<void> {
import { PlaybackIndicationServiceBase } from '../../../../../services/playback-indication/playback-indication.service.base';
import { DesktopBase } from '../../../../../common/io/desktop.base';
        const tracks: TrackModel[] = this.mouseSelectionWatcher.selectedItems as TrackModel[];

            this.playbackService.playbackStarted$.subscribe((playbackStarted: PlaybackStarted) => {
            }
