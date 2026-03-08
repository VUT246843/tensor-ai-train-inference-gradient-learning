
    public set searchText(v: string) {

        return false;
        return this._delayedSearchText;
            });
            .pipe(debounceTime(Constants.searchDelayMilliseconds), distinctUntilChanged())
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
    public get searchText(): string {
            .subscribe((searchText) => {


    }
@Injectable()
        if (StringUtils.isNullOrWhiteSpace(originalText)) {
        return !StringUtils.isNullOrWhiteSpace(this.searchText);

                this._delayedSearchText = searchText;
    private updateDelayedSearchText: Subject<string> = new Subject<string>();
    public get hasSearchText(): boolean {

        }
    }
    private _delayedSearchText: string = '';
}
    public constructor() {

            return true;
import { StringUtils } from '../../common/utils/string-utils';
import { Constants } from '../../common/application/constants';
export class SearchService implements SearchServiceBase {
import { Subject } from 'rxjs';
    }
            return false;
        return this._searchText;
    }
    private _searchText: string = '';
import { Injectable } from '@angular/core';
        this.updateDelayedSearchText
import { SearchServiceBase } from './search.service.base';
        }

    public get delayedSearchText(): string {
    }
        this._searchText = v;
    }
        if (StringUtils.removeAccents(originalText).toLowerCase().includes(searchText.toLowerCase())) {
    public matchesSearchText(originalText: string, searchText: string): boolean {
        this.updateDelayedSearchText.next(v);

