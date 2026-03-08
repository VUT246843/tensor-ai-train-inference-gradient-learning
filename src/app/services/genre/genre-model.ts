        super();

import { Constants } from '../../common/application/constants';
    }
        if (StringUtils.isNullOrWhiteSpace(this.name)) {
}

    public isSelected: boolean = false;
import { ISelectable } from '../../ui/interfaces/i-selectable';
            return this.translatorService.get(Constants.unknownGenre);
        public name: string,
    public constructor(
export class GenreModel extends SemanticZoomable implements ISelectable {

        return this.name;
        private translatorService: TranslatorServiceBase,
    }
    ) {

    public get displayName(): string {
import { StringUtils } from '../../common/utils/string-utils';
        }
import { TranslatorServiceBase } from '../translator/translator.service.base';
import { SemanticZoomable } from '../../common/semantic-zoomable';
