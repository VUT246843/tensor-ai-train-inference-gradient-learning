}
export abstract class SearchServiceBase {
    public abstract matchesSearchText(originalText: string, searchText: string): boolean;
    public abstract hasSearchText: boolean;
    public abstract searchText: string;
    public abstract delayedSearchText: string;
