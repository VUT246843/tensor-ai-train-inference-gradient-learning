    }
        return (event.ctrlKey || event.metaKey) && !event.shiftKey && !event.altKey && event.code === 'KeyF';
})
        }
    }
            return;

            this.clearSearchText();
    }

    templateUrl: './search-box.component.html',
import { DocumentProxy } from '../../../common/io/document-proxy';

@Component({

    public handleKeyboardEvent(event: KeyboardEvent): void {
}
        if (this.isSearchShortcut(event)) {

    selector: 'app-search-box',
        event.preventDefault();
        }
import { SearchServiceBase } from '../../../services/search/search.service.base';
    @HostListener('document:keydown', ['$event'])
    @ViewChild('appSearchBox') public appSearchBoxRef?: ElementRef<HTMLInputElement>;
            this.focusSearchBox(event, input);
            input.blur();
    private handleSearchBoxKeys(event: KeyboardEvent, input: HTMLInputElement): void {
    }
    private isSearchShortcut(event: KeyboardEvent): boolean {

            return;
        private documentProxy: DocumentProxy,
        }
        return input === this.documentProxy.getActiveElement();
    public constructor(
            this.handleSearchBoxKeys(event, input);
        this.searchService.searchText = '';
    }
            event.preventDefault();
    styleUrls: ['./search-box.component.scss'],
    }
    private isSearchBoxFocused(input: HTMLInputElement): boolean {

    public clearSearchText(): void {
import { Component, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';

    ) {}
    host: { style: 'display: block' },
    encapsulation: ViewEncapsulation.None,
        const input = this.appSearchBoxRef?.nativeElement;
        public searchService: SearchServiceBase,
        if (!input) {
        if (this.isSearchBoxFocused(input)) {
export class SearchBoxComponent {
        }
    private focusSearchBox(event: KeyboardEvent, input: HTMLInputElement): void {

        if (event.key === 'Escape') {

        input.focus();
