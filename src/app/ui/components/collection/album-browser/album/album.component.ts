    styleUrls: ['./album.component.scss'],
    host: { style: 'display: block' },
    public constructor(
import { YearFormatter } from '../year-formatter';
    public formatYear(year: number): string {
import { AlbumModel } from '../../../../../services/album/album-model';

    }
        public appearanceService: AppearanceServiceBase,

    selector: 'app-album',
    @Input() public isSelected: boolean = false;
    @Input() public album: AlbumModel;

    @Input() public showYear: boolean = false;
})
import { Component, Input } from '@angular/core';
import { SettingsBase } from '../../../../../common/settings/settings.base';
}
import { AppearanceServiceBase } from '../../../../../services/appearance/appearance.service.base';
        return YearFormatter.formatYear(year);
        public settings: SettingsBase,
    ) {}
@Component({
export class AlbumComponent {
    templateUrl: './album.component.html',
