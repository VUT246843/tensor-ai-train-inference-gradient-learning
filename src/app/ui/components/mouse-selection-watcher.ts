            // CTRL is pressed: add item to, or remove item from selection
        }
            if (selectFirstItem) {
        if (item.isSelected) {
        for (let i = 0; i < this.items.length; i++) {

        }
            return;
    public get selectedItems(): ISelectable[] {
            // SHIFT is pressed: select a range of items


    private lastSelectedItem: ISelectable;

            this.items.forEach((x) => (x.isSelected = false));
            }
                return;
    }
export class MouseSelectionWatcher {

        if (items == undefined) {
                this.items[i].isSelected = true;
        }
    }
    }


    private toggleItemSelection(item: ISelectable): void {
import { Injectable } from '@angular/core';
        let lastSelectedItemIndex: number = this.items.indexOf(item);


    public setSelectedItems(event: MouseEvent | undefined, item: ISelectable | undefined): void {
            if (i === currentItemIndex) {

    }
            return;
        }


        }
        if (this.lastSelectedItem != undefined) {
            this.lastSelectedItem = item;
            if (event.button !== 0 && this.selectedItems.length > 1) {
        return this.items.filter((x) => x.isSelected);

    private items: ISelectable[] = [];
        } else {
    private selectSingleItem(item: ISelectable): void {
            return;
        if (item == undefined) {
    }
                this.items[0].isSelected = true;
        for (let i = 0; i < this.items.length; i++) {

        }
            this.toggleItemSelection(item);
@Injectable()
            lowIndex = lastSelectedItemIndex;

        }
    }
        } else if (event != undefined && event.shiftKey) {
            this.items[i].isSelected = false;

        if (event == undefined) {
                this.lastSelectedItem = item;
        }
    public initialize(items: ISelectable[] | undefined, selectFirstItem: boolean = false): void {
        let lowIndex: number = currentItemIndex;
            this.selectSingleItem(item);
        this.items = items;

        if (currentItemIndex > lastSelectedItemIndex) {
        if (this.items.length > 0) {
        }
        if (event != undefined && event.ctrlKey) {
                this.lastSelectedItem = item;
    private selectItemsRange(item: ISelectable): void {

                this.items[i].isSelected = true;
import { ISelectable } from '../interfaces/i-selectable';
}
            lastSelectedItemIndex = this.items.indexOf(this.lastSelectedItem);
        }

        let highIndex: number = lastSelectedItemIndex;
            highIndex = currentItemIndex;
        item.isSelected = !item.isSelected;
            }
            }
            }
            if (lowIndex <= i && i <= highIndex) {
        const currentItemIndex: number = this.items.indexOf(item);
            this.selectItemsRange(item);
        const currentItemIndex: number = this.items.indexOf(item);

