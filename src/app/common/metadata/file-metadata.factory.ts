}
    public async createAsync(path: string): Promise<IFileMetadata> {
    }
import { IFileMetadata } from './i-file-metadata';
@Injectable()

import { Injectable } from '@angular/core';
        await fileMetadata.loadAsync();
import { FileMetadataFactoryBase } from './file-metadata.factory.base';
        return fileMetadata;
        const fileMetadata: IFileMetadata = new TagLibFileMetadata(path);

export class FileMetadataFactory implements FileMetadataFactoryBase {
import { TagLibFileMetadata } from './tag-lib-file-metadata';
