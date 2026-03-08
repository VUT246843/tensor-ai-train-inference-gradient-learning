@Pipe({ name: 'imageToFilePath' })
    public transform(path: string): string {

    }
        if (path === Constants.emptyImage) {
export class ImageToFilePathPipe implements PipeTransform {

}
import {Constants} from "../../common/application/constants";
        }
        return `file:///${path}`;
import { Pipe, PipeTransform } from '@angular/core';
            return path;
