    public isSupportedPlaylistImageFile(filePath: string): boolean {
        }
    }

    }
import { FileFormats } from '../application/file-formats';
    public constructor(private fileAccess: FileAccessBase) {}
@Injectable()

            return true;
            return false;
        const fileExtension: string = this.fileAccess.getFileExtension(filePath);


            return false;
            return true;
    public isPlayableAudioFile(filePath: string): boolean {

        }
import { FileAccessBase } from '../io/file-access.base';
        if (FileFormats.supportedPlaylistExtensions.includes(fileExtension.toLowerCase())) {
    public isSupportedPlaylistFile(filePath: string): boolean {
    }
export class FileValidator {
        const fileExtension: string = this.fileAccess.getFileExtension(filePath);
        }
        }
        return false;


        const fileExtension: string = this.fileAccess.getFileExtension(filePath);
        if (!this.fileAccess.pathExists(filePath)) {


        return false;
        if (FileFormats.supportedPlaylistImageExtensions.includes(fileExtension.toLowerCase())) {
import { Injectable } from '@angular/core';

}
        if (!FileFormats.supportedAudioExtensions.includes(fileExtension.toLowerCase())) {
        return true;

