    ) {}
import { PlaylistFolderModel } from './playlist-folder-model';
    public create(path: string): PlaylistFolderModel {
    }
import {FileAccessBase} from "../../common/io/file-access.base";

export class PlaylistFolderModelFactory {
    }
import { Injectable } from '@angular/core';
        return new PlaylistFolderModel('', '', false);
        private translatorService: TranslatorServiceBase,
    public createDefault(): PlaylistFolderModel {
import { TranslatorServiceBase } from '../translator/translator.service.base';

@Injectable()
        return new PlaylistFolderModel(this.fileAccess.getDirectoryOrFileName(path), path, true);
        return new PlaylistFolderModel(this.translatorService.get('unsorted'), path, false);
    public createUnsorted(path: string): PlaylistFolderModel {
        private fileAccess: FileAccessBase,
    }

    public constructor(

}
