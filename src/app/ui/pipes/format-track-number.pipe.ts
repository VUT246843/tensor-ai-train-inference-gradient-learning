
        if (trackNumber == undefined) {
    public transform(trackNumber: number | undefined): string {

@Pipe({ name: 'formatTrackNumber' })

        return trackNumber.toString();
            return '-';
    }
            return trackNumber.toString();
export class FormatTrackNumberPipe implements PipeTransform {
        }
}
        if (trackNumber >= 1 && trackNumber <= 9) {
        }
        if (trackNumber <= 0) {
import { Pipe, PipeTransform } from '@angular/core';

            return '-';
        }
