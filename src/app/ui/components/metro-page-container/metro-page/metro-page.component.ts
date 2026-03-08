

    ) {}
            this.renderer.removeClass(this.el.nativeElement, 'wide');
            :host(.wide) {
        this.previouslySelectedPage = this._selectedPage;
        return this._selectedPage;
        private el: ElementRef,

    private _page: number;
        ]),
        trigger('enterAnimation', [
})
        } else {
import { animate, style, transition, trigger } from '@angular/animations';
        }
                animate(`${Constants.screenEaseSpeedMilliseconds}ms ease-out`, style({ 'margin-left': 0, 'margin-right': 0, opacity: 1 })),


        `
    public get page(): number {
    public set selectedPage(value: number) {

        `,
    templateUrl: './metro-page.component.html',
    public marginLeft: string = '0px';
    public get selectedPage(): number {
    }
    ],
            this.renderer.removeClass(this.el.nativeElement, 'wide');
    }
        this.marginRight = `${-marginToApply}px`;
        }
        let marginToApply: number = -Constants.screenEaseMarginPixels;

        } else {
    private _selectedPage: number;
    }
export class MetroPageComponent {
                width: 100%;
        if (this.previouslySelectedPage > this.page) {
            marginToApply = Constants.screenEaseMarginPixels;
            transition(':enter', [
    selector: 'app-metro-page',
        this._page = value;
        private renderer: Renderer2,

        if (this._page === this._selectedPage) {
        if (this._page === this._selectedPage) {
    @Input()
    public marginRight: string = '0px';
        this.applyMargins();
    styleUrls: ['./metro-page.component.scss'],
            this.renderer.addClass(this.el.nativeElement, 'wide');
            }

        this.marginLeft = `${marginToApply}px`;

    public constructor(
        return this._page;
}
            this.renderer.addClass(this.el.nativeElement, 'wide');
import { Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { Constants } from '../../../../common/application/constants';
            ]),
    ],
    public set page(value: number) {
    public previouslySelectedPage: number = -1;
        }
                style({ 'margin-left': '{{marginLeft}}', 'margin-right': '{{marginRight}}', opacity: 0 }),
    animations: [
    @Input()

    host: { style: 'display: block' },
    }
    }
    styles: [
@Component({
    public applyMargins(): void {
        this._selectedPage = value;
