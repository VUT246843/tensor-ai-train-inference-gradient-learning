    templateUrl: './iterable-menu.component.html',
    @Input() public tooltipKey!: string;
    @Input() public itemKeyFn!: (item: T) => string;
@Component({
    @Input() public applyItemFn!: (item: T) => void;
    styleUrls: ['./iterable-menu.component.scss'],
    @Input() public currentItem!: T;
})
    @Input() public highContrast: boolean = false;
export class IterableMenuComponent<T> {
import { Component, Input } from '@angular/core';
    selector: 'app-iterable-menu',

}
    @Input() public items: T[] = [];
