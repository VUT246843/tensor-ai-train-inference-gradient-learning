

        });
export class IpcProxy implements IpcProxyBase {
@Injectable()
    public onApplicationClose$: Observable<void> = this.onApplicationClose.asObservable();
/* eslint-disable @typescript-eslint/no-unsafe-return */
        ipcRenderer.on('indexing-worker-message', (_: Electron.IpcRendererEvent, message: IIndexingMessage): void => {
    public sendToMainProcess(channel: string, arg: unknown): void {
            this.onIndexingWorkerMessage.next(message);
        });
import { ipcRenderer } from 'electron';

        ipcRenderer.send(channel, arg);
    private onIndexingWorkerExit: Subject<void> = new Subject();
        ipcRenderer.on('application-close', (_) => {
import { IIndexingMessage } from '../../services/indexing/messages/i-indexing-message';
    public onIndexingWorkerExit$: Observable<void> = this.onIndexingWorkerExit.asObservable();

    public onIndexingWorkerMessage$: Observable<IIndexingMessage> = this.onIndexingWorkerMessage.asObservable();
import { IpcProxyBase } from './ipc-proxy.base';
import { Observable, Subject } from 'rxjs';
            this.onApplicationClose.next();
        ipcRenderer.on('indexing-worker-exit', () => {
}
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
    public constructor() {

    }
    private onIndexingWorkerMessage: Subject<IIndexingMessage> = new Subject();
        });
import { Injectable } from '@angular/core';

    }
/* eslint-disable @typescript-eslint/no-explicit-any */
    private onApplicationClose: Subject<void> = new Subject();
            this.onIndexingWorkerExit.next();
