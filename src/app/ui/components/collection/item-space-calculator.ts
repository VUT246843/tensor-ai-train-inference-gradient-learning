    public calculateNumberOfItemsPerRow(itemWidth: number | undefined, availableWidth: number | undefined): number {
            return 0;
        if (itemWidth === 0) {
        }
@Injectable()
        const numberOfItemsPerRow: number = Math.floor((availableWidth - 20) / (itemWidth + Constants.itemMarginInPixels * 2));
import { Constants } from '../../../common/application/constants';


}

        }
        if (itemWidth == undefined) {
        if (availableWidth == undefined) {

        }
    }
export class ItemSpaceCalculator {
            return 0;

        }
            return 0;
        if (availableWidth === 0) {
            return 0;

        return numberOfItemsPerRow;
import { Injectable } from '@angular/core';
