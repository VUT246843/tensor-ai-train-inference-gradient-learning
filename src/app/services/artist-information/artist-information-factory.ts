


import { Injectable } from '@angular/core';
    public constructor(private desktop: DesktopBase) {}
}
    }
export class ArtistInformationFactory {
    public create(name: string, url: string, imageUrl: string, biography: string): ArtistInformation {
        return new ArtistInformation(this.desktop, name, url, imageUrl, biography);
    }
import { DesktopBase } from '../../common/io/desktop.base';
    public createEmpty(): ArtistInformation {
        return ArtistInformation.empty();
import { ArtistInformation } from './artist-information';
@Injectable()
