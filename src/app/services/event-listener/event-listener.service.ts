}
            const filePaths: string[] = [];
    }

        document.addEventListener('dragover', (e) => {
        ipcRenderer.on('arguments-received', (event, argv: string[] | undefined) => {
export class EventListenerService implements EventListenerServiceBase {

            e.preventDefault();
import { Observable, Subject } from 'rxjs';
            event.stopPropagation();

import { ipcRenderer } from 'electron';

            event.preventDefault();

            }
            this.argumentsReceived.next(argv);
    public filesDropped$: Observable<string[]> = this.filesDropped.asObservable();

            const files = Array.from(event.dataTransfer.files) as (File & { path: string })[];
        });
                filePaths.push(f.path);

            this.filesDropped.next(filePaths);

        document.addEventListener('drop', (event) => {
                return;
            for (const f of files) {
    private argumentsReceived: Subject<string[]> = new Subject();

    public argumentsReceived$: Observable<string[]> = this.argumentsReceived.asObservable();
    public listenToEvents(): void {

        });
            e.stopPropagation();
        });
import { EventListenerServiceBase } from './event-listener.service.base';
    private filesDropped: Subject<string[]> = new Subject();
            if (event.dataTransfer == undefined) {
            }
