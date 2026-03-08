
            return '';

import { FileAccessBase } from '../../common/io/file-access.base';
            return '';
    public constructor(private fileAccess: FileAccessBase) {}
@Pipe({ name: 'folderName' })
export class FolderNamePipe implements PipeTransform {

    }
        }
import { Pipe, PipeTransform } from '@angular/core';
import { FolderModel } from '../../services/folder/folder-model';
import { StringUtils } from '../../common/utils/string-utils';
        }
    public transform(folder: FolderModel | undefined): string {
        if (folder == undefined) {
        if (StringUtils.isNullOrWhiteSpace(folder.path)) {

}
        return this.fileAccess.getDirectoryOrFileName(folder.path);
