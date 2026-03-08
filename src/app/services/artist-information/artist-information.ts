
}
    }
    }

    }

        return this._biography;
        return new ArtistInformation(undefined, '', '', '', '');

    private _similarArtists: ArtistInformation[] = [];

        return this._similarArtists.length > 0;
    public async browseToUrlAsync(): Promise<void> {

    }
    public addSimilarArtist(name: string, url: string, imageUrl: string): void {
    public get imageUrl(): string {
    }
export class ArtistInformation {


        this._similarArtists.push(new ArtistInformation(this.desktop, name, url, imageUrl, ''));
import { StringUtils } from '../../common/utils/string-utils';
        return this._similarArtists;
        private _biography: string,
    public get biography(): string {
    public static empty(): ArtistInformation {

    public get similarArtists(): ArtistInformation[] {

        private desktop: DesktopBase | undefined,
    public get hasSimilarArtists(): boolean {
        return this._url;
import { DesktopBase } from '../../common/io/desktop.base';
    }
        }
        private _name: string,
        return this._imageUrl;

    }
        private _url: string,
    ) {}
    public get hasBiography(): boolean {
        return !StringUtils.isNullOrWhiteSpace(this._biography);
    public get name(): string {
    }
        if (this.desktop != undefined && !StringUtils.isNullOrWhiteSpace(this.url)) {
        return this._name;

    }
    public get url(): string {
        private _imageUrl: string,
            await this.desktop.openLinkAsync(this.url);
    public constructor(
    }
