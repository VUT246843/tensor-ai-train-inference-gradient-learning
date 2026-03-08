import { RouterModule, Routes } from '@angular/router';
        component: NowPlayingComponent,
import { CollectionComponent } from './ui/components/collection/collection.component';
        path: 'coverplayer',
    },
    },
    },
        path: 'highlights',
import { SettingsComponent } from './ui/components/settings/settings.component';
export class AppRoutingModule {}
import { NowPlayingComponent } from './ui/components/now-playing/now-playing.component';
    },
import { ManageCollectionComponent } from './ui/components/manage-collection/manage-collection.component';
        component: SettingsComponent,
        component: CoverPlayerComponent,
        path: 'information',
    },
    {
import { WelcomeComponent } from './ui/components/welcome/welcome.component';
    {
    {
        component: ManageCollectionComponent,
    },
    {
    {
})
    {
    },
        component: CollectionComponent,
    imports: [RouterModule.forRoot(routes, { useHash: true })],
        component: WelcomeComponent,
import { CoverPlayerComponent } from './ui/components/mini-players/cover-player/cover-player.component';
        component: InformationComponent,
        component: HighlightsComponent,
        path: 'settings',
        path: 'welcome',
    exports: [RouterModule],
import { HighlightsComponent } from './ui/components/highlights/highlights.component';
    {
        component: LoadingComponent,
        path: 'nowplaying',
import { NgModule } from '@angular/core';


        path: 'managecollection',
const routes: Routes = [
    {
    {
    },
import { InformationComponent } from './ui/components/information/information.component';
import { LoadingComponent } from './ui/components/loading/loading.component';
];
        path: 'loading',
        path: 'collection',
@NgModule({
    },
