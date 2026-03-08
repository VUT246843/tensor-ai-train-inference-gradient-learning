    }
}
    public windowSizeChanged$: Observable<void> = this.windowSizeChanged.asObservable();
        });
    private windowSizeChanged: Subject<void> = new Subject();
    public mouseButtonReleased$: Observable<void> = this.mouseButtonReleased.asObservable();

    public constructor() {
@Injectable()
        });

export class ApplicationService implements ApplicationServiceBase {
        fromEvent(window, 'resize').subscribe(() => {
import {ApplicationServiceBase} from "./application.service.base";

        fromEvent(document, 'mouseup').subscribe(() => {

    private mouseButtonReleased: Subject<void> = new Subject();
            this.mouseButtonReleased.next();
import { Injectable } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
            this.windowSizeChanged.next();
