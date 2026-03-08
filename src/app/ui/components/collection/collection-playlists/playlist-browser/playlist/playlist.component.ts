@Component({
import { AppearanceServiceBase } from '../../../../../../services/appearance/appearance.service.base';
})
    templateUrl: './playlist.component.html',
        public settings: SettingsBase,
import { Component, Input } from '@angular/core';
    styleUrls: ['./playlist.component.scss'],
import { SettingsBase } from '../../../../../../common/settings/settings.base';
    host: { style: 'display: block' },
    ) {}
import { PlaylistModel } from '../../../../../../services/playlist/playlist-model';
}
    @Input() public playlist: PlaylistModel;
export class PlaylistComponent {
    public constructor(

    @Input() public isSelected: boolean = false;

        public appearanceService: AppearanceServiceBase,
    selector: 'app-playlist',
