import { ISelectable } from '../../ui/interfaces/i-selectable';

    public isSelected: boolean = false;

        return StringUtils.isNullOrWhiteSpace(this.name);
    public constructor(
        public path: string,
    }
export class PlaylistFolderModel implements ISelectable {

    public get isDefault(): boolean {
}
    ) {}
        public isModifiable: boolean,
        public name: string,
import { StringUtils } from '../../common/utils/string-utils';
