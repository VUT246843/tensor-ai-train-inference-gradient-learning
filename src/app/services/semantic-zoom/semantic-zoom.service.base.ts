import { Observable } from 'rxjs';

    public abstract zoomOutRequested$: Observable<void>;
}
    public abstract zoomInRequested$: Observable<string>;
    public abstract requestZoomIn(text: string): void;

    public abstract requestZoomOut(): void;
export abstract class SemanticZoomServiceBase {
