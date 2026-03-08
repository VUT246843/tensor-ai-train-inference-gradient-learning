        }
import { SearchServiceBase } from '../../services/search/search.service.base';
        for (const subfolder of subfolders) {
    public constructor(private searchService: SearchServiceBase) {}
        if (StringUtils.isNullOrWhiteSpace(textToContain)) {

import { StringUtils } from '../../common/utils/string-utils';
            return subfolders;
        return filteredSubfolders;
import { SubfolderModel } from '../../services/folder/subfolder-model';
        }
        const filteredSubfolders: SubfolderModel[] = [];
            }

@Pipe({ name: 'subfoldersFilter' })
    }
    public transform(subfolders: SubfolderModel[], textToContain: string | undefined): SubfolderModel[] {
import { Pipe, PipeTransform } from '@angular/core';
export class SubfoldersFilterPipe implements PipeTransform {
            if (this.searchService.matchesSearchText(subfolder.path, textToContain!)) {



}
                filteredSubfolders.push(subfolder);
