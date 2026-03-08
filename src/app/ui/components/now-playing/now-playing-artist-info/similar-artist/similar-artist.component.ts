import { SettingsBase } from '../../../../../common/settings/settings.base';


    public constructor(public settings: SettingsBase) {}
    public similarArtist: ArtistInformation = ArtistInformation.empty();
    encapsulation: ViewEncapsulation.None,
    selector: 'similar-artist',
    host: { style: 'display: block' },
}
    templateUrl: './similar-artist.component.html',
@Component({
    @Input()
import { Component, Input, ViewEncapsulation } from '@angular/core';
    styleUrls: ['./similar-artist.component.scss'],
})
import { ArtistInformation } from '../../../../../services/artist-information/artist-information';
export class SimilarArtistComponent {
