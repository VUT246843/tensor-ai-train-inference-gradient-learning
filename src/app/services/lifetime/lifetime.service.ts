        while (this.playlistService.isUpdatingPlaylistFile) {
import { PlaylistServiceBase } from '../playlist/playlist.service.base';
    }
    private async performClosingTasksAsync(): Promise<void> {
        private playbackService: PlaybackService,
    public initialize(): void {
            PromiseUtils.noAwait(this.performClosingTasksAsync());
            await new Promise((resolve) => setTimeout(resolve, 100));
    public get isPerformingClosingTasks(): boolean {
export class LifetimeService {

import { PromiseUtils } from '../../common/utils/promise-utils';
}
import { IpcProxyBase } from '../../common/io/ipc-proxy.base';
    public constructor(
    }


        this.playbackService.saveQueue();
import { Injectable } from '@angular/core';
    ) {}
        private playlistService: PlaylistServiceBase,
        }

        return this._isPerformingClosingTasks;
@Injectable({ providedIn: 'root' })
    private _isPerformingClosingTasks: boolean = false;
        });
    }


            // Wait for 100ms before checking again
        this.ipcProxy.sendToMainProcess('closing-tasks-performed', undefined);

        private ipcProxy: IpcProxyBase,
import { PlaybackService } from '../playback/playback.service';
        this.ipcProxy.onApplicationClose$.subscribe(() => {

        this._isPerformingClosingTasks = true;
