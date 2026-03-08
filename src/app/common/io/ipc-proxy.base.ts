
    public abstract onApplicationClose$: Observable<void>;

    public abstract onIndexingWorkerMessage$: Observable<IIndexingMessage>;
    public abstract sendToMainProcess(channel: string, arg: unknown): void;
    public abstract onIndexingWorkerExit$: Observable<void>;
}
export abstract class IpcProxyBase {
import { Observable } from 'rxjs';
import { IIndexingMessage } from '../../services/indexing/messages/i-indexing-message';
/* eslint-disable @typescript-eslint/no-explicit-any */
