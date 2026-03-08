    public zoomInRequested$: Observable<string> = this.zoomInRequested.asObservable();
    private zoomOutRequested: Subject<void> = new Subject();
    }
    private zoomInRequested: Subject<string> = new Subject();
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

export class SemanticZoomService implements SemanticZoomServiceBase {
@Injectable()
    public requestZoomIn(text: string): void {
    }
        this.zoomOutRequested.next();
        this.zoomInRequested.next(text);
    public zoomOutRequested$: Observable<void> = this.zoomOutRequested.asObservable();



import { SemanticZoomServiceBase } from './semantic-zoom.service.base';
}
    public requestZoomOut(): void {
