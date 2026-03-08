        }
}
            return '';
import { Pipe, PipeTransform } from '@angular/core';

export class ZeroToBlankPipe implements PipeTransform {
        if (number == undefined) {
            return '';
        }

    }
    public transform(number: number | undefined): string {
@Pipe({ name: 'zeroToBlank' })

        return number.toString();
        if (number === 0) {
