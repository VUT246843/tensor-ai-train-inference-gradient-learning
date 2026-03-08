import { Subject, fromEvent } from 'rxjs';
 * which triggers the viewport size check when the windows is resized.

import { Directive, Inject, OnDestroy, OnInit, Self } from '@angular/core';
        fromEvent(window, 'resize')
        this.destroy$.complete();
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
    }
    protected readonly destroy$: Subject<void> = new Subject<void>();
    public ngOnInit(): void {
            .pipe(debounceTime(10), takeUntil(this.destroy$))
        this.destroy$.next();
import { debounceTime, takeUntil } from 'rxjs/operators';
/**
@Directive({
            .subscribe(() => {
 */
 * A directive that is designed to work alongside CdkVirtualScrollViewport

    public ngOnDestroy(): void {
}

            });

    public constructor(@Self() @Inject(CdkVirtualScrollViewport) private readonly viewportComponent: CdkVirtualScrollViewport) {}
                this.viewportComponent.checkViewportSize();
})
    selector: 'cdk-virtual-scroll-viewport',
    }
 * See: https://github.com/angular/components/issues/10117
export class CdkVirtualScrollViewportPatchDirective implements OnInit, OnDestroy {
