        const kiloBytesText: string = this.translatorService.get('kilo-bytes');
export class FormatTotalFileSizePipe implements PipeTransform {

            return '';
            return `${gigaBytes} ${gigaBytesText}`;
import { Pipe, PipeTransform } from '@angular/core';
        return `${kiloBytes} ${kiloBytesText}`;
        if (gigaBytes > 0) {
        }
        const gigaBytes: number = Math.floor(totalFileSizeInBytes / (1024 * 1024 * 1024));
        const gigaBytesText: string = this.translatorService.get('giga-bytes');
@Pipe({ name: 'formatTotalFileSize' })
}
    public transform(totalFileSizeInBytes: number | undefined): string {
        }
        const megaBytes: number = Math.floor(totalFileSizeInBytes / (1024 * 1024));

import { TranslatorServiceBase } from '../../services/translator/translator.service.base';
    }
        if (megaBytes > 0) {

            return `${megaBytes} ${megaBytesText}`;


        const megaBytesText: string = this.translatorService.get('mega-bytes');
        }
        if (totalFileSizeInBytes == undefined || totalFileSizeInBytes <= 0) {
    public constructor(private translatorService: TranslatorServiceBase) {}
        const kiloBytes: number = Math.floor(totalFileSizeInBytes / 1024);
