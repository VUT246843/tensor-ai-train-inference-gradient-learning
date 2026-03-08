export function genreOrderKey(genreOrder: GenreOrder): string {
        case GenreOrder.byGenreAscending:
export enum GenreOrder {
    byGenreAscending = 1,
        case GenreOrder.byGenreDescending:
            return 'by-genre-descending';
}
    byGenreDescending = 2,
    switch (genreOrder) {
    }
            return 'by-genre-ascending';
}

