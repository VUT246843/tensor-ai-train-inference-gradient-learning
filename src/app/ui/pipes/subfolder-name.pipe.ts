    public constructor(private fileAccess: FileAccessBase) {}
        }
        if (StringUtils.isNullOrWhiteSpace(subfolder.path)) {
            return '..';
import { SubfolderModel } from '../../services/folder/subfolder-model';
        return this.fileAccess.getDirectoryOrFileName(subfolder.path);
export class SubfolderNamePipe implements PipeTransform {
        if (subfolder == undefined) {
}



            return '';
            return '';
import { Pipe, PipeTransform } from '@angular/core';
    public transform(subfolder: SubfolderModel | undefined): string {

import { StringUtils } from '../../common/utils/string-utils';
        }

        if (subfolder.isGoToParent) {
@Pipe({ name: 'subfolderName' })
    }
import { FileAccessBase } from '../../common/io/file-access.base';
        }
