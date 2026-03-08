import { SemanticZoomable } from '../../common/semantic-zoomable';
            return this.translatorService.get(Constants.unknownArtist);
    public get displayName(): string {
}
    ) {

        if (StringUtils.isNullOrWhiteSpace(this.name)) {
    public isSelected: boolean = false;
        super();
    }
        public name: string,

    public constructor(
import { TranslatorServiceBase } from '../translator/translator.service.base';
    }
        return this.name;
import { StringUtils } from '../../common/utils/string-utils';

import { Constants } from '../../common/application/constants';
import { ISelectable } from '../../ui/interfaces/i-selectable';
export class ArtistModel extends SemanticZoomable implements ISelectable {

        }
        private translatorService: TranslatorServiceBase,
