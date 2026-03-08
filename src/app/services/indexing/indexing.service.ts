        if (this.foldersHaveChanged) {
            return;
                await this.notificationService.addedTracksAsync(
    }
        this.playbackService.updateQueueTracks(tracks);
    }
    private indexingFinished: Subject<void> = new Subject();
@Injectable()
                continue;
            await this.albumArtworkIndexer.indexAlbumArtworkAsync();
        }
            }
            if (!fileMetaData) {
    public indexCollectionAlways(): void {
    private async showNotification(message: IIndexingMessage): Promise<void> {
            await this.indexAlbumArtworkOnlyAsync(false);
    public indexingFinished$: Observable<void> = this.indexingFinished.asObservable();

        }

import { PromiseUtils } from '../../common/utils/promise-utils';
        };
        });
import { DesktopBase } from '../../common/io/desktop.base';

import { IFileMetadata } from '../../common/metadata/i-file-metadata';
                break;
                );

        }
        const tracks: Track[] | undefined = this.trackRepository.getTracksForPaths(fileMetaDatas.map((f) => f.path));
                'indexCollectionIfOptionsHaveChanged',
            PromiseUtils.noAwait(this.showNotification(message));
    public initializeSubscriptions(): void {
        }
                'IndexingService',
        this.isIndexingCollection = true;
    }
        switch (message.type) {
            }
            case 'dismiss': {

                break;
                await this.notificationService.refreshing();
        if (this.isIndexingCollection) {
    }
}
                await this.notificationService.updatingTracksAsync();

            case 'refreshing': {
            case 'updatingTracks': {
            const updatedTrack: Track = await this.trackFiller.addGivenFileMetadataToTrackAsync(track, fileMetaData, false);
        this.ipcProxy.sendToMainProcess('indexing-worker', this.createWorkerArgs(task));

            }
        // Update track metadata in the database

        } else if (this.albumGroupingHasChanged) {
        return {
        this.isIndexingCollection = false;
        this.foldersHaveChanged = false;
        this.indexCollection('always');

import { IIndexingMessage } from './messages/i-indexing-message';
        private folderService: FolderServiceBase,
            );
                break;
import { Injectable, OnDestroy } from '@angular/core';
            }

                this.notificationService.dismiss();

        // Refresh UI
import { TrackFiller } from './track-filler';
    }
import { PlaybackService } from '../playback/playback.service';
            default: {
        this.ipcProxy.onIndexingWorkerExit$.subscribe(async () => {
    private createWorkerArgs(task: string) {
        this.subscription.add(
    public indexCollectionIfOutdated(): void {
        this.logger.info('Indexing collection.', 'IndexingService', 'indexAlbumArtworkOnlyAsync');
            this.indexCollection('always');
            this.folderService.foldersChanged$.subscribe(() => {
    public async indexAfterTagChangeAsync(fileMetaDatas: IFileMetadata[]): Promise<void> {
        private albumArtworkIndexer: AlbumArtworkIndexer,
        private notificationService: NotificationServiceBase,
            this.logger.info('Already indexing.', 'IndexingService', 'indexAlbumArtworkOnlyAsync');
                const addingTracksMessage: AddingTracksMessage = <AddingTracksMessage>message;

            this.isIndexingCollection = false;

                break;
            return;


            return;

        this.albumGroupingHasChanged = true;
        private settings: SettingsBase,
        this.foldersHaveChanged = false;
                    addingTracksMessage.numberOfAddedTracks,
        // Trigger album artwork indexing
            this.logger.info('Folders have changed. Indexing collection.', 'IndexingService', 'indexCollectionIfOptionsHaveChanged');
            case 'addingTracks': {
            }),
export class IndexingService implements OnDestroy {
            }
        private trackFiller: TrackFiller,
import { NotificationServiceBase } from '../notification/notification.service.base';
            const fileMetaData: IFileMetadata | undefined = fileMetaDatas.find((f) => f.path === track.path);
    public ngOnDestroy(): void {
    public constructor(
        }

import { Logger } from '../../common/logger';
            case 'removingTracks': {
                    addingTracksMessage.percentageOfAddedTracks,
import { AlbumArtworkIndexer } from './album-artwork-indexer';

                this.foldersHaveChanged = true;
        this.isIndexingCollection = true;
import { Observable, Subject, Subscription } from 'rxjs';
        this.ipcProxy.onIndexingWorkerMessage$.subscribe((message: IIndexingMessage) => {
        for (const track of tracks) {
                'Album grouping has changed. Indexing album artwork.',
                await this.notificationService.removingTracksAsync();
        }


            }

    public async indexCollectionIfOptionsHaveChangedAsync(): Promise<void> {
                break;
    }
        await this.albumArtworkIndexer.indexAlbumArtworkAsync();


    }
        );
        if (!tracks) {
            }
        this.initializeSubscriptions();
    public isIndexingCollection: boolean = false;
            task: task,
    public async indexAlbumArtworkOnlyAsync(onlyWhenHasNoCover: boolean): Promise<void> {
        this.logger.info('Indexing collection.', 'IndexingService', 'indexCollection');
        this.indexingFinished.next();
    private indexCollection(task: string): void {
        this.indexingFinished.next();
            skipRemovedFilesDuringRefresh: this.settings.skipRemovedFilesDuringRefresh,
            }
            this.logger.info('Already indexing.', 'IndexingService', 'indexCollection');
        private playbackService: PlaybackService,
        private trackRepository: TrackRepositoryBase,
        await this.indexAlbumArtworkOnlyAsync(false);
    private subscription: Subscription = new Subscription();
    }
    }
    private foldersHaveChanged: boolean = false;
            this.indexingFinished.next();
    public onAlbumGroupingChanged(): void {

                break;
        if (this.isIndexingCollection) {
    private albumGroupingHasChanged: boolean = false;
    ) {
    }
        });

        this.subscription.unsubscribe();




                await this.notificationService.updatingAlbumArtworkAsync();

        private desktop: DesktopBase,
                break;
import { TrackRepositoryBase } from '../../data/repositories/track-repository.base';
            applicationDataDirectory: this.desktop.getApplicationDataDirectory(),


import { SettingsBase } from '../../common/settings/settings.base';
            this.trackRepository.updateTrack(updatedTrack);
import { IpcProxyBase } from '../../common/io/ipc-proxy.base';
            case 'updatingAlbumArtwork': {
            this.logger.info(
        private logger: Logger,
        private ipcProxy: IpcProxyBase,
    }
    }
import { FolderServiceBase } from '../folder/folder.service.base';

import { AddingTracksMessage } from './messages/adding-tracks-message';
import { Track } from '../../data/entities/track';
        this.indexCollection('outdated');
