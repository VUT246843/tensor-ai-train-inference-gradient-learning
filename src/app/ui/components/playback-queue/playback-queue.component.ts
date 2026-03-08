
    encapsulation: ViewEncapsulation.None,
import { ContextMenuOpener } from '../context-menu-opener';
    public setSelectedTracks(event: MouseEvent, trackToSelect: TrackModel): void {
    }
        public contextMenuOpener: ContextMenuOpener,
            this.navigationService.refreshPlaybackQueueListRequested$.subscribe(() => {
        this.playbackService.removeFromQueue(this.mouseSelectionWatcher.selectedItems as TrackModel[]);
        );
        );
                this._shouldShowList = false;
})
        this.subscription.unsubscribe();
                // I'm honestly very sick if this. Angular updates and deprecates their versions so quickly, forcing us to upgrade.
@Component({


                }, 250);
    public onTrackContextMenu(event: MouseEvent, track: TrackModel): void {
        private navigationService: NavigationServiceBase,
        this.subscription.add(
}
    @ViewChild('trackContextMenuAnchor', { read: MatMenuTrigger, static: false })
    public showTitle: boolean = true;
        public mouseSelectionWatcher: MouseSelectionWatcher,
    selector: 'app-playback-queue',
    private subscription: Subscription = new Subscription();

import { PlaybackService } from '../../../services/playback/playback.service';
import { NavigationServiceBase } from '../../../services/navigation/navigation.service.base';
    host: { style: 'display: block' },

            }),
import { PlaybackIndicationServiceBase } from '../../../services/playback-indication/playback-indication.service.base';
        this.contextMenuOpener.open(this.trackContextMenu, event, track);

    }
    providers: [MouseSelectionWatcher],
    public ngOnInit(): void {
import { PlaybackStarted } from '../../../services/playback/playback-started';

    ) {}

        return this._shouldShowList;
    public trackContextMenu: MatMenuTrigger;
import { TrackModel } from '../../../services/track/track-model';
export class PlaybackQueueComponent implements OnInit, OnDestroy {
    }
        public playbackService: PlaybackService,
                // HACK: thanks to Angular for breaking cdk virtual scroll or the drawer (who knows, do they even know themselves?)
    }
    }
import { MatMenuTrigger } from '@angular/material/menu';
                // with the drawer open, fixes drawing of all items in the list. This hack is an automatic workaround.
                    this._shouldShowList = true;

    public onRemoveFromQueue(): void {
                // But with each upgrade, something major breaks. I'm wasting countless days/weeks on such issues.
                this.playbackIndicationService.setPlayingTrack(this.playbackService.playbackQueue.tracks, playbackStarted.currentTrack);
import { MouseSelectionWatcher } from '../mouse-selection-watcher';
                setTimeout(() => {
        this.subscription.add(
    }
import { Component, Input, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
    public ngOnDestroy(): void {
            }),
        this.mouseSelectionWatcher.setSelectedItems(event, trackToSelect);
            this.playbackService.playbackStarted$.subscribe((playbackStarted: PlaybackStarted) => {

    styleUrls: ['./playback-queue.component.scss'],
    private _shouldShowList: boolean = false;
        private playbackIndicationService: PlaybackIndicationServiceBase,
    @Input()
import { Subscription } from 'rxjs';

                this.mouseSelectionWatcher.initialize(this.playbackService.playbackQueue.tracks);

                // After Angular 14, the cdk virtual scroll does not render all items when opening the drawer. A resize of the window
    public constructor(
    templateUrl: './playback-queue.component.html',
    public get shouldShowList(): boolean {
