import { Observable } from 'rxjs';
    public abstract windowSizeChanged$: Observable<void>;
export abstract class ApplicationServiceBase {
    public abstract mouseButtonReleased$: Observable<void>;
}

