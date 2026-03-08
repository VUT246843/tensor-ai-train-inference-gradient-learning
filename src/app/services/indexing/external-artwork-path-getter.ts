        for (const filePath of filesInDirectory) {
        }
    public async getExternalArtworkPathAsync(audioFilePath: string | undefined): Promise<string> {
        if (StringUtils.isNullOrWhiteSpace(audioFilePath)) {
    public constructor(private fileAccess: FileAccessBase) {}

import { StringUtils } from '../../common/utils/string-utils';
        });
        const directory: string = this.fileAccess.getDirectoryPath(audioFilePath!);
@Injectable()
            return '';

        const lowerCaseCoverArtPossibilities: string[] = Constants.externalCoverArtPatterns.map((externalCoverArtPattern) => {
import { Constants } from '../../common/application/constants';
        const filesInDirectory: string[] = await this.fileAccess.getFilesInDirectoryAsync(directory);
        const audioFilePathWithoutExtension: string = this.fileAccess.getFileNameWithoutExtension(audioFilePath!);

            if (lowerCaseCoverArtPossibilities.includes(fileName.toLowerCase())) {

import { FileAccessBase } from '../../common/io/file-access.base';
            }
            const fileName: string = this.fileAccess.getFileName(filePath);
export class ExternalArtworkPathGetter {
        return '';


            return StringUtils.replaceAll(externalCoverArtPattern, '%filename%', audioFilePathWithoutExtension).toLowerCase();
import { Injectable } from '@angular/core';
        }
    }
                return filePath;
}
