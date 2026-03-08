    public get sortableName(): string {
    }
export abstract class SemanticZoomable {
        if (Constants.alphabeticalHeaders.includes(firstCharacter)) {
            return firstCharacter;


import { StringUtils } from './utils/string-utils';
        }
    public get zoomHeader(): string {

import { Constants } from './application/constants';
        const firstCharacter: string = this.sortableName.charAt(0);
    public abstract displayName: string;

        return StringUtils.getSortableString(this.displayName, true);
    }
    public isZoomHeader: boolean = false;
}
        return '#';


