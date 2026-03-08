import { WelcomeDonateComponent } from './ui/components/welcome/welcome-donate/welcome-donate.component';
        VolumeIconComponent,
import { GenreService } from './services/genre/genre.service';
import { BackButtonComponent } from './ui/components/back-button/back-button.component';
        FoldersPersister,
            provide: APP_INITIALIZER,
        MatSelectModule,
        CollectionAlbumsComponent,
import { AppComponent } from './app.component';
        MatProgressSpinnerModule,
import { TracksFilterPipe } from './ui/pipes/tracks-filter.pipe';
import { ArtistBrowserComponent } from './ui/components/collection/collection-artists/artist-browser/artist-browser.component';
        new Promise<any>((resolve: any) => {
        PlaylistRowsGetter,
        PlaylistFoldersPersister,
import { MatMenuModule } from '@angular/material/menu';
import { ExternalArtworkPathGetter } from './services/indexing/external-artwork-path-getter';
        ManageCollectionComponent,
import { SliderComponent } from './ui/components/slider/slider.component';
import { MatFormFieldModule } from '@angular/material/form-field';

        TrackFiller,
        BigIconButtonComponent,
import { PlaylistFoldersPersister } from './ui/components/collection/collection-playlists/playlist-folders-persister';
        GenresPersister,
        ScrollingModule,
        CoverPlayerVolumeControlComponent,
import { MatInputModule } from '@angular/material/input';
        HttpClientModule,
        PlaybackQueueComponent,
import { AudioVisualizerService } from './services/audio-visualizer/audio-visualizer.service';
import { HighlightsComponent } from './ui/components/highlights/highlights.component';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
        PathValidator,
import { TranslateServiceProxyBase } from './common/io/translate-service-proxy.base';
import { ThemeSwitcherComponent } from './ui/components/theme-switcher/theme-switcher.component';
        { provide: AlbumServiceBase, useClass: AlbumService },
import { LoveComponent } from './ui/components/love/love.component';
        SubfoldersFilterPipe,
import { GenreServiceBase } from './services/genre/genre.service.base';
        OnlineArtistImageGetter,
import { ArtistsTracksPersister } from './ui/components/collection/collection-artists/artists-tracks-persister';
        SettingsComponent,
        ThemeSwitcherComponent,
        { provide: PlaybackIndicationServiceBase, useClass: PlaybackIndicationService },
import { BigIconButtonComponent } from './ui/components/controls/big-icon-button/big-icon-button.component';
        PlaylistDecoder,
        ElectronService,
        { provide: QueuedTrackRepositoryBase, useClass: QueuedTrackRepository },
        MetadataPatcher,
import { CollectionPlaylistsComponent } from './ui/components/collection/collection-playlists/collection-playlists.component';
        InputDialogComponent,
                );
import { EditPlaylistDialogComponent } from './ui/components/dialogs/edit-playlist-dialog/edit-playlist-dialog.component';
import { NowPlayingLyricsComponent } from './ui/components/now-playing/now-playing-lyrics/now-playing-lyrics.component';
                provide: TranslateLoader,
import { AlbumsAlbumsPersister } from './ui/components/collection/collection-albums/albums-albums-persister';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { SubMenuComponent } from './ui/components/sub-menu/sub-menu.component';
        GenresAlbumsPersister,
import { FormatPlaybackTimePipe } from './ui/pipes/format-playback-time';
import { ArtistInformationServiceBase } from './services/artist-information/artist-information.service.base';
        { provide: PlaylistFolderServiceBase, useClass: PlaylistFolderService },
            deps: [SettingsBase],
import { DesktopBase } from './common/io/desktop.base';
        PlaybackControlsComponent,
import { AudioVisualizerServiceBase } from './services/audio-visualizer/audio-visualizer.service.base';
    providers: [
import { ArtistService } from './services/artist/artist.service';
                    // eslint-disable-next-line @typescript-eslint/no-empty-function
        PlaybackCoverArtComponent,
import { PlaylistServiceBase } from './services/playlist/playlist.service.base';
import { DatabaseFactory } from './data/database-factory';
import { PlaybackInformationComponent } from './ui/components/playback-information/playback-information.component';
        { provide: FileServiceBase, useClass: FileService },
        CollectionFoldersComponent,
        { provide: FileMetadataFactoryBase, useClass: FileMetadataFactory },
import { TrackComponent } from './ui/components/collection/track/track.component';
    hideDelay: 0,
        LrcLyricsGetter,
        DatabaseFactory,
import { NowPlayingNavigationService } from './services/now-playing-navigation/now-playing-navigation.service';
import { CollectionTracksComponent } from './ui/components/collection/collection-tracks/collection-tracks.component';
            locationInitialized.then(() => {
        TracksFilterPipe,
import { GenresAlbumsPersister } from './ui/components/collection/collection-genres/genres-albums-persister';
import { Application } from './common/io/application';
import { SemanticZoomService } from './services/semantic-zoom/semantic-zoom.service';
        SimilarArtistComponent,
        ManageAlbumsComponent,
import { CoverPlayerComponent } from './ui/components/mini-players/cover-player/cover-player.component';
import { AlbumServiceBase } from './services/album/album-service.base';
import { AppRoutingModule } from './app-routing.module';
        SwitchPlayerButtonComponent,
import { CollectionComponent } from './ui/components/collection/collection.component';
import { PlaylistFolderModelFactory } from './services/playlist-folder/playlist-folder-model-factory';
        AlbumsFilterPipe,
        EditPlaylistDialogComponent,
import { OnlineLyricsGetter } from './services/lyrics/online-lyrics-getter';
        AlbumComponent,
        { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: CustomTooltipDefaults },
import { ManageCollectionComponent } from './ui/components/manage-collection/manage-collection.component';
import { ErrorDialogComponent } from './ui/components/dialogs/error-dialog/error-dialog.component';
            const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(undefined));
        { provide: TranslatorServiceBase, useClass: TranslatorService },
import { InfoDialogComponent } from './ui/components/dialogs/info-dialog/info-dialog.component';
import { TrackFiller } from './services/indexing/track-filler';
import { PlaylistsTracksPersister } from './ui/components/collection/collection-playlists/playlists-tracks-persister';
import { ApplicationService } from './services/application/application.service';
import { AlbumRowsGetter } from './ui/components/collection/album-browser/album-rows-getter';
import { CollectionAlbumsComponent } from './ui/components/collection/collection-albums/collection-albums.component';
import { SemanticZoomButtonComponent } from './ui/components/collection/semantic-zoom/semantic-zoom-button/semantic-zoom-button.component';
import { PlaylistDecoder } from './services/playlist/playlist-decoder';
        ManageRefreshComponent,
        InformationComponent,
        await settings.initializeAsync();
        FormatPlaybackTimePipe,
            },
        GenreBrowserComponent,
import { FileAccessBase } from './common/io/file-access.base';
        EmbeddedLyricsGetter,
        TrackModelFactory,
        TextIconSecondaryButtonComponent,
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DatabaseMigrator } from './data/database-migrator';
import { WebviewDirective } from './ui/directives/webview.directive';
        CollectionComponent,
import { FolderRepository } from './data/repositories/folder-repository';
import { ImageProcessor } from './common/image-processor';
import { NavigationService } from './services/navigation/navigation.service';
        MetroPageContainerComponent,
    showDelay: 500,
import { CollectionServiceBase } from './services/collection/collection.service.base';
@NgModule({
            provide: ErrorHandler,
import { AppearanceSettingsComponent } from './ui/components/settings/appearance-settings/appearance-settings.component';
            provide: APP_INITIALIZER,
                    () => {},
import { SwitchPlayerButtonComponent } from './ui/components/switch-player-button/switch-player-button.component';
import { FanartApi } from './common/api/fanart/fanart.api';
        { provide: ArtistInformationServiceBase, useClass: ArtistInformationService },
import { CoverPlayerPlaybackQueueComponent } from './ui/components/mini-players/cover-player/cover-player-playback-queue/cover-player-playback-queue.component';
        AdvancedSettingsComponent,
        { provide: SemanticZoomServiceBase, useClass: SemanticZoomService },
import { TrayServiceBase } from './services/tray/tray.service.base';
import { PlaybackIndicationServiceBase } from './services/playback-indication/playback-indication.service.base';
        SearchBoxComponent,
import { FolderRepositoryBase } from './data/repositories/folder-repository.base';
        MatSidenavModule,
import { WelcomeComponent } from './ui/components/welcome/welcome.component';
import { NowPlayingNothingPlayingComponent } from './ui/components/now-playing/now-playing-nothing-playing/now-playing-nothing-playing.component';
        GuidFactory,
import { FileService } from './services/file/file.service';
import { ArtistInformationService } from './services/artist-information/artist-information.service';
        { provide: EventListenerServiceBase, useClass: EventListenerService },
        { provide: AlbumArtworkRepositoryBase, useClass: AlbumArtworkRepository },
import { MatDividerModule } from '@angular/material/divider';
import { DatabaseMigratorBase } from './data/database-migrator.base';
        PlaylistModelFactory,
import { SemanticZoomHeaderAdder } from './common/semantic-zoom-header-adder';
import { PlaylistComponent } from './ui/components/collection/collection-playlists/playlist-browser/playlist/playlist.component';
        NowPlayingLyricsComponent,
import { GenresPersister } from './ui/components/collection/collection-genres/genres-persister';
import { Shuffler } from './common/shuffler';
import { FolderTracksPersister } from './ui/components/collection/collection-folders/folder-tracks-persister';
import { NowPlayingArtistInfoComponent } from './ui/components/now-playing/now-playing-artist-info/now-playing-artist-info.component';
import { TrackBrowserComponent } from './ui/components/collection/track-browser/track-browser.component';
        TrackComponent,
        ArtistsFilterPipe,
import { Scheduler } from './common/scheduling/scheduler';
        ReactiveFormsModule,
        { provide: LyricsServiceBase, useClass: LyricsService },
import { CollectionFoldersComponent } from './ui/components/collection/collection-folders/collection-folders.component';
import { Desktop } from './common/io/desktop';
import { PlaybackControlsComponent } from './ui/components/playback-controls/playback-controls.component';
import { FormatTotalFileSizePipe } from './ui/pipes/format-total-file-size.pipe';
import { GenreComponent } from './ui/components/collection/collection-genres/genre/genre.component';
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
        {
import { DateProxy } from './common/io/date-proxy';
import { PlaylistsPersister } from './ui/components/collection/collection-playlists/playlists-persister';
import { AlbumArtworkRepository } from './data/repositories/album-artwork-repository';
                const languageToSet: string = 'en';
import { MatRippleModule } from '@angular/material/core';
import { AudioVisualizer } from './services/playback/audio-visualizer';
import { GenresTracksPersister } from './ui/components/collection/collection-genres/genres-tracks-persister';
        WelcomeNavigationButtonsComponent,
import { TrackFieldCreator } from './services/indexing/track-field-creator';
import { SemanticZoomServiceBase } from './services/semantic-zoom/semantic-zoom.service.base';
import { CollectionService } from './services/collection/collection.service';
import { MimeTypes } from './common/metadata/mime-types';
        Logger,
import { MatDialogModule } from '@angular/material/dialog';
        EmbeddedAlbumArtworkGetter,

            useClass: GlobalErrorHandler,
        AlbumsTracksPersister,
        { provide: TracksColumnsServiceBase, useClass: TracksColumnsService },
import { ComponentsComponent } from './ui/components/information/components/components.component';
import { ManageRefreshComponent } from './ui/components/manage-collection/manage-refresh/manage-refresh.component';
        TracksColumnsOrdering,
        AddFolderComponent,
import { ChartLyricsApi } from './common/api/lyrics/chart-lyrics.api';
import { EditColumnsDialogComponent } from './ui/components/dialogs/edit-columns-dialog/edit-columns-dialog.component';
        IntegrationTestRunner,
import { AlbumArtworkGetter } from './services/indexing/album-artwork-getter';
import { RatingComponent } from './ui/components/rating/rating.component';
import { DocumentProxy } from './common/io/document-proxy';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function settingsInitializerFactory(settings: SettingsBase) {
import { ManageAlbumsComponent } from './ui/components/manage-collection/manage-albums/manage-albums.component';
})
        },
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
        { provide: WelcomeServiceBase, useClass: WelcomeService },
import { OnlineSettingsComponent } from './ui/components/settings/online-settings/online-settings.component';
import { ElectronService } from './services/electron.service';
        ToggleSwitchComponent,
import { EmbeddedAlbumArtworkGetter } from './services/indexing/embedded-album-artwork-getter';
import { NowPlayingShowcaseComponent } from './ui/components/now-playing/now-playing-showcase/now-playing-showcase.component';
        AlbumArtworkGetter,
import { WelcomeServiceBase } from './services/welcome/welcome.service.base';
import { ItemSpaceCalculator } from './ui/components/collection/item-space-calculator';
        MimeTypes,
    bootstrap: [AppComponent],
import { ArtistInformationFactory } from './services/artist-information/artist-information-factory';
import { PlaybackQueueComponent } from './ui/components/playback-queue/playback-queue.component';
import { CollectionGenresComponent } from './ui/components/collection/collection-genres/collection-genres.component';
import { ArtistComponent } from './ui/components/collection/collection-artists/artist/artist.component';
        AlbumKeyGenerator,
        CollectionTracksTableHeaderComponent,
        CollectionPlaybackPaneComponent,
        LoveComponent,
        FormsModule,
        BackButtonComponent,
import { IpcProxyBase } from './common/io/ipc-proxy.base';
        ComponentsComponent,
import { TracksColumnsOrdering } from './services/track-columns/tracks-columns-ordering';
import { LogoFullComponent } from './ui/components/logo-full/logo-full.component';
}
        SubMenuComponent,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
import { DragDropModule } from '@angular/cdk/drag-drop';
        PlaylistBrowserComponent,
/** Custom options the configure the tooltip's default show/hide delays. */
        { provide: TrayServiceBase, useClass: TrayService },
import { WelcomeDoneComponent } from './ui/components/welcome/welcome-done/welcome-done.component';
import { OnlineAlbumArtworkGetter } from './services/indexing/online-album-artwork-getter';
import { TrackModelFactory } from './services/track/track-model-factory';
        NowPlayingNothingPlayingComponent,
        CoverPlayerComponent,
import { AddFolderComponent } from './ui/components/add-folder/add-folder.component';
        AlbumPlaceholderComponent,
        ImageToFilePathPipe,
import { DialogHeaderComponent } from './ui/components/dialogs/dialog-header/dialog-header.component';
        { provide: SettingsBase, useClass: Settings },
        { provide: FileAccessBase, useClass: FileAccess },
import 'reflect-metadata';
        { provide: NowPlayingNavigationServiceBase, useClass: NowPlayingNavigationService },
        WelcomeMusicComponent,
        LogViewer,
        OnlineSettingsComponent,
import { QueuedTrackRepositoryBase } from './data/repositories/queued-track-repository.base';
        IterableMenuComponent,
        ErrorDialogComponent,
        HammerModule,
import { AddToPlaylistMenu } from './ui/components/add-to-playlist-menu';
        FormatTrackNumberPipe,
import { SubfoldersFilterPipe } from './ui/pipes/subfolders-filter.pipe';
        PlaybackTimeComponent,
        MatBottomSheetModule,
import { IconButtonComponent } from './ui/components/controls/icon-button/icon-button.component';
        IconTextButtonComponent,
        DocumentProxy,
import { WelcomeGreetingComponent } from './ui/components/welcome/welcome-greeting/welcome-greeting.component';
        AlbumBrowserComponent,
        DateTime,
        WelcomeLanguageComponent,
        FanartApi,
import { PlaybackIndicationService } from './services/playback-indication/playback-indication.service';
import { PlaylistFolderServiceBase } from './services/playlist-folder/playlist-folder.service.base';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PathValidator } from './common/validation/path-validator';
import { SearchServiceBase } from './services/search/search.service.base';
        PlaybackProgressComponent,
        { provide: SchedulerBase, useClass: Scheduler },
import { SearchService } from './services/search/search.service';
import { NowPlayingComponent } from './ui/components/now-playing/now-playing.component';
        DragDropModule,
    return async () => {
import { PlaylistFolderBrowserComponent } from './ui/components/collection/collection-playlists/playlist-folder-browser/playlist-folder-browser.component';
import { MathExtensions } from './common/math-extensions';
        FormatTicksToDateTimeStringPipe,
        MatInputModule,
        TrackFieldCreator,
        RatingComponent,
import { ApplicationServiceBase } from './services/application/application.service.base';
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
        VolumeControlComponent,
        { provide: TrackServiceBase, useClass: TrackService },
import { MatSortModule } from '@angular/material/sort';
        CollectionTracksComponent,
import { SearchBoxComponent } from './ui/components/search-box/search-box.component';
import { SimilarArtistComponent } from './ui/components/now-playing/now-playing-artist-info/similar-artist/similar-artist.component';
import { MetroPageContainerComponent } from './ui/components/metro-page-container/metro-page-container.component';
    ],
import { MetadataPatcher } from './common/metadata/metadata-patcher';
        TransparentButtonComponent,
import { PlaylistModelFactory } from './services/playlist/playlist-model-factory';
        TranslateModule.forRoot({
        MatSortModule,
        MatDividerModule,
import { PlaylistFileManager } from './services/playlist/playlist-file-manager';
        GenresTracksPersister,
import { SchedulerBase } from './common/scheduling/scheduler.base';
        CdkVirtualScrollViewportPatchDirective,
import { AdvancedSettingsComponent } from './ui/components/settings/advanced-settings/advanced-settings.component';
import { ArtistsFilterPipe } from './ui/pipes/artists-filter.pipe';
                deps: [HttpClient],
            useFactory: appInitializerFactory,
        },

import { SemanticZoomComponent } from './ui/components/collection/semantic-zoom/semantic-zoom.component';
        LoadingComponent,
import { TrackServiceBase } from './services/track/track.service.base';
        ArtistBrowserComponent,
import { PlaybackTimeComponent } from './ui/components/playback-time/playback-time.component';
        PlaylistFolderModelFactory,
        FolderNamePipe,
        FileMetadataFactory,
import { AlbumService } from './services/album/album-service';
        MatTooltipModule,

        DateProxy,
import { FormatTrackNumberPipe } from './ui/pipes/format-track-number.pipe';
import { WelcomeMusicComponent } from './ui/components/welcome/welcome-music/welcome-music.component';
        BrowserAnimationsModule,
        MathExtensions,
import { AlbumArtworkCacheService } from './services/album-artwork-cache/album-artwork-cache.service';
import { FileMetadataFactoryBase } from './common/metadata/file-metadata.factory.base';
        GenresFilterPipe,
        ItemSpaceCalculator,
import { BehaviorSettingsComponent } from './ui/components/settings/behavior-settings/behavior-settings.component';
import { FormatTotalDurationPipe } from './ui/pipes/format-total-duration.pipe';
import { AlbumKeyGenerator } from './data/album-key-generator';
import { EventListenerService } from './services/event-listener/event-listener.service';
import { ContextMenuOpener } from './ui/components/context-menu-opener';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LrcLyricsGetter } from './services/lyrics/lrc-lyrics-getter';
        WelcomeDonateComponent,
                useFactory: HttpLoaderFactory,
import { FileValidator } from './common/validation/file-validator';
        OnlineLyricsGetter,
import { TextIconSecondaryButtonComponent } from './ui/components/controls/text-icon-secondary-button/text-icon-secondary-button.component';
import { GitHubApi } from './common/api/git-hub/git-hub.api';
import { ArtistsPersister } from './ui/components/collection/collection-artists/artists-persister';
import { LogViewer } from './common/io/log-viewer';
import { IterableMenuComponent } from './ui/components/common/iterable-menu.component';
import { WelcomeService } from './services/welcome/welcome.service';
import { EmbeddedLyricsGetter } from './services/lyrics/embedded-lyrics-getter';
        CollectionArtistsComponent,
import { AlbumComponent } from './ui/components/collection/album-browser/album/album.component';
        AboutComponent,
import { UpdateServiceBase } from './services/update/update.service.base';
import { TrackService } from './services/track/track.service';
        CachedAlbumArtworkGetter,
        PlaybackInformationComponent,
import { WelcomeNavigationButtonsComponent } from './ui/components/welcome/welcome-navigation-buttons/welcome-navigation-buttons';
import { PlaylistTrackBrowserComponent } from './ui/components/collection/collection-playlists/playlist-track-browser/playlist-track-browser.component';
import { OnlineArtistImageGetter } from './services/artist-information/online-artist-image-getter';
import { AccentButtonComponent } from './ui/components/controls/accent-button/accent-button.component';
        ManageMusicComponent,
        WindowControlsComponent,
            });
import { FolderServiceBase } from './services/folder/folder.service.base';
import { FileAccess } from './common/io/file-access';
        SemanticZoomHeaderAdder,
        PlaylistFileManager,
        { provide: DesktopBase, useClass: Desktop },
import { TransparentButtonComponent } from './ui/components/controls/transparent-button/transparent-button.component';
import { PlaylistRowsGetter } from './ui/components/collection/collection-playlists/playlist-folder-browser/playlist-rows-getter';
        FormatTrackDurationPipe,
import { ToggleSwitchComponent } from './ui/components/controls/toggle-switch/toggle-switch.component';
import { LogoSmallComponent } from './ui/components/logo-small/logo-small.component';
        FileValidator,
import { ArtistServiceBase } from './services/artist/artist.service.base';
            deps: [TranslateService, Injector],
        AppRoutingModule,
        CollectionGenresComponent,
import { TranslatorServiceBase } from './services/translator/translator.service.base';
import { TranslatorService } from './services/translator/translator.service';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
        WelcomeDoneComponent,
import { TotalsComponent } from './ui/components/collection/totals/totals.component';
        ChartLyricsApi,
        DialogHeaderComponent,
        NativeElementProxy,
import { SettingsBase } from './common/settings/settings.base';
        MetroPageComponent,
        AudioVisualizer,
import { AZLyricsApi } from './common/api/lyrics/a-z-lyrics.api';
import { TracksColumnsService } from './services/track-columns/tracks-columns.service';
import { NowPlayingPlaybackPaneComponent } from './ui/components/now-playing/now-playing-playback-pane/now-playing-playback-pane.component';
        }),
    return () =>
        PlaylistsFilterPipe,
        NowPlayingArtistInfoComponent,
import { ArtistsAlbumsPersister } from './ui/components/collection/collection-artists/artists-albums-persister';
import { FileServiceBase } from './services/file/file.service.base';
        { provide: DatabaseMigratorBase, useClass: DatabaseMigrator },
        PlaylistTrackBrowserComponent,
    touchendHideDelay: 0,
        { provide: TranslateServiceProxyBase, useClass: TranslateServiceProxy },
import { MatSelectModule } from '@angular/material/select';
import { WelcomeOnlineComponent } from './ui/components/welcome/welcome-online/welcome-online.component';
        { provide: PlaylistServiceBase, useClass: PlaylistService },
import { FoldersPersister } from './ui/components/collection/collection-folders/folders-persister';
        PlaylistComponent,
        NotificationBarComponent,
export function appInitializerFactory(translate: TranslateService, injector: Injector): () => Promise<any> {
import { DialogService } from './services/dialog/dialog.service';
        ExternalArtworkPathGetter,
        AppearanceSettingsComponent,
}
import { LicenseDialogComponent } from './ui/components/dialogs/license-dialog/license-dialog.component';
        WelcomeComponent,
                    // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
        SubMenuItemComponent,
import { NotificationService } from './services/notification/notification.service';
        LogoSmallComponent,
import { IndexingService } from './services/indexing/indexing.service';
import { AlbumPlaceholderComponent } from './ui/components/highlights/album-placeholder.component';
import { LyricsService } from './services/lyrics/lyrics.service';
        BehaviorSettingsComponent,
import { FileMetadataFactory } from './common/metadata/file-metadata.factory';
        AddToPlaylistMenu,
        ArtistComponent,
import { PlaybackIndicatorComponent } from './ui/components/playback-indicator/playback-indicator.component';
import { WelcomeLanguageComponent } from './ui/components/welcome/welcome-language/welcome-language.component';
                    () => {
import { SubMenuItemComponent } from './ui/components/sub-menu/sub-menu-item/sub-menu-item.component';
        FolderTracksPersister,
        ArtistsAlbumsPersister,
import { SettingsComponent } from './ui/components/settings/settings.component';
import { NavigationServiceBase } from './services/navigation/navigation.service.base';
        AlbumsAlbumsPersister,
import { GlobalErrorHandler } from './globalErrorHandler';
        { provide: AppearanceServiceBase, useClass: AppearanceService },
export class AppModule {}
        GenreComponent,
        BrowserModule,
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { WindowControlsComponent } from './ui/components/window-controls/window-controls.component';
import { AppearanceServiceBase } from './services/appearance/appearance.service.base';
        EditTracksDialogComponent,
        ArtistsPersister,
import { ApplicationBase } from './common/io/application.base';
        MatFormFieldModule,
        IndexingService,
import { ImageToFilePathPipe } from './ui/pipes/image-to-file-path.pipe';
            loader: {
import { MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions, MatTooltipModule } from '@angular/material/tooltip';
import { PlaylistFolderService } from './services/playlist-folder/playlist-folder.service';
import { ZeroToBlankPipe } from './ui/pipes/zero-to-blank.pipe';
import { AngularSplitModule } from 'angular-split';
import { TranslateServiceProxy } from './common/io/translate-service-proxy';
            useFactory: settingsInitializerFactory,
import { Settings } from './common/settings/settings';
import { Logger } from './common/logger';
                    },
        CoverPlayerPlaybackQueueComponent,
        AngularSplitModule,
        { provide: FolderServiceBase, useClass: FolderService },
        FormatTotalDurationPipe,
        AppComponent,
    imports: [
        NowPlayingPlaybackPaneComponent,
import { MatSidenavModule } from '@angular/material/sidenav';
import { CoverPlayerVolumeControlComponent } from './ui/components/mini-players/cover-player/cover-player-volume-control/cover-player-volume-control.component';
import { MetroPageComponent } from './ui/components/metro-page-container/metro-page/metro-page.component';
import { EditTracksDialogComponent } from './ui/components/dialogs/edit-tracks-dialog/edit-tracks-dialog.component';
import { ConfirmationDialogComponent } from './ui/components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { StepIndicatorComponent } from './ui/components/step-indicator/step-indicator.component';
import { TracksColumnsServiceBase } from './services/track-columns/tracks-columns.service.base';
        });
        DefaultThemesCreator,
        EditColumnsDialogComponent,
        TotalsComponent,
        OnlineAlbumArtworkGetter,
import { AlbumArtworkRepositoryBase } from './data/repositories/album-artwork-repository.base';
import { UpdateService } from './services/update/update.service';
        IconButtonComponent,
        PlaybackIndicatorComponent,

import { WelcomeAppearanceComponent } from './ui/components/welcome/welcome-appearance/welcome-appearance.component';
import { EventListenerServiceBase } from './services/event-listener/event-listener.service.base';
import { DefaultThemesCreator } from './services/appearance/default-themes-creator';
import { FolderNamePipe } from './ui/pipes/folder-name.pipe';
        { provide: SearchServiceBase, useClass: SearchService },
import { VolumeControlComponent } from './ui/components/volume-control/volume-control.component';
import { AlbumsTracksPersister } from './ui/components/collection/collection-albums/albums-tracks-persister';
        SliderComponent,
import { SubfolderNamePipe } from './ui/pipes/subfolder-name.pipe';
    };
import { TrayService } from './services/tray/tray.service';
import { LastfmApi } from './common/api/lastfm/lastfm.api';
import { VolumeIconComponent } from './ui/components/volume-icon/volume-icon.component';
        ZeroToBlankPipe,
        LogoFullComponent,
        { provide: IpcProxyBase, useClass: IpcProxy },
                translate.use(languageToSet).subscribe(
    ],
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
        AccentButtonComponent,
}
import { CollectionPlaybackPaneComponent } from './ui/components/collection/collection-playback-pane/collection-playback-pane.component';
import { PlaybackProgressComponent } from './ui/components/playback-progress/playback-progress.component';
        ArtistsTracksPersister,
import { IconTextButtonComponent } from './ui/components/controls/icon-text-button/icon-text-button.component';
        WebviewDirective,
        TextSanitizer,
        AZLyricsApi,
        ExternalAlbumArtworkGetter,
import { FormatTicksToDateTimeStringPipe } from './ui/pipes/format-ticks-to-date-time-string.pipe';
import { GenreBrowserComponent } from './ui/components/collection/collection-genres/genre-browser/genre-browser.component';
import { CollectionTracksTableHeaderComponent } from './ui/components/collection/collection-tracks/collection-tracks-table/collection-tracks-table-header/collection-tracks-table-header.component';
        NowPlayingComponent,
        SemanticZoomComponent,
import { NotificationBarComponent } from './ui/components/notification-bar/notification-bar.component';
    declarations: [
import { TextSanitizer } from './common/text-sanitizer';
import { PlaylistService } from './services/playlist/playlist.service';
                translate.setDefaultLang(languageToSet);
import { GuidFactory } from './common/guid.factory';
import { FolderService } from './services/folder/folder.service';
        { provide: CollectionServiceBase, useClass: CollectionService },
import { NotificationServiceBase } from './services/notification/notification.service.base';
        { provide: AlbumArtworkCacheServiceBase, useClass: AlbumArtworkCacheService },
        HighlightsComponent,
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NativeElementProxy } from './common/native-element-proxy';
import { MainMenuComponent } from './ui/components/main-menu/main-menu.component';
import { ExternalAlbumArtworkGetter } from './services/indexing/external-album-artwork-getter';
        LicenseDialogComponent,
        { provide: UpdateServiceBase, useClass: UpdateService },
import { CollectionArtistsComponent } from './ui/components/collection/collection-artists/collection-artists.component';
        { provide: NavigationServiceBase, useClass: NavigationService },
        CollectionPlaylistsComponent,
        NowPlayingShowcaseComponent,
    ],
        ContextMenuOpener,
};
        PlaylistFolderBrowserComponent,
import { CdkVirtualScrollViewportPatchDirective } from './ui/directives/cdk-virtual-scroll-viewport-patch-directive';
import { AlbumsFilterPipe } from './ui/pipes/albums-filter.pipe';
        MatDialogModule,
import { PlaylistsFilterPipe } from './ui/pipes/playlists-filter';
        MainMenuComponent,
        { provide: ArtistServiceBase, useClass: ArtistService },
import { CachedAlbumArtworkGetter } from './services/metadata/cached-album-artwork-getter';
                    (err) => {},
        LastfmApi,
        Shuffler,
import { AppearanceService } from './services/appearance/appearance.service';
        InfoDialogComponent,
import { InformationComponent } from './ui/components/information/information.component';
import { APP_INITIALIZER, ErrorHandler, Injector, NgModule } from '@angular/core';
import { LyricsServiceBase } from './services/lyrics/lyrics.service.base';
        TrackBrowserComponent,
import { AlbumBrowserComponent } from './ui/components/collection/album-browser/album-browser.component';
            multi: true,
import { IntegrationTestRunner } from './testing/integration-test-runner';
        { provide: AudioVisualizerServiceBase, useClass: AudioVisualizerService },
        SubfolderNamePipe,
        ConfirmationDialogComponent,
import { DateTime } from './common/date-time';
import { CollectionTracksTableComponent } from './ui/components/collection/collection-tracks/collection-tracks-table/collection-tracks-table.component';
        FormatTotalFileSizePipe,
        { provide: TrackRepositoryBase, useClass: TrackRepository },
import { PlaylistBrowserComponent } from './ui/components/collection/collection-playlists/playlist-browser/playlist-browser.component';
        PlaylistsTracksPersister,
        MatMenuModule,
        { provide: DialogServiceBase, useClass: DialogService },
        { provide: FolderRepositoryBase, useClass: FolderRepository },
        { provide: ApplicationBase, useClass: Application },
import { TrackRepositoryBase } from './data/repositories/track-repository.base';
import { AboutComponent } from './ui/components/information/about/about.component';
        { provide: NotificationServiceBase, useClass: NotificationService },
import { TrackRepository } from './data/repositories/track-repository';
import { AlbumArtworkCacheServiceBase } from './services/album-artwork-cache/album-artwork-cache.service.base';
import { InputDialogComponent } from './ui/components/dialogs/input-dialog/input-dialog.component';
        WelcomeAppearanceComponent,
import { QueuedTrackRepository } from './data/repositories/queued-track-repository';
        Hacks,
import { Hacks } from './common/hacks';
import { GenresFilterPipe } from './ui/pipes/genres-filter.pipe';
export const CustomTooltipDefaults: MatTooltipDefaultOptions = {
import { DialogServiceBase } from './services/dialog/dialog.service.base';
        WelcomeOnlineComponent,
        { provide: GenreServiceBase, useClass: GenreService },
        StepIndicatorComponent,
                        resolve(undefined);
        GitHubApi,
import { ManageMusicComponent } from './ui/components/manage-collection/manage-music/manage-music.component';
import { FormatTrackDurationPipe } from './ui/pipes/format-track-duration.pipe';
import { NowPlayingNavigationServiceBase } from './services/now-playing-navigation/now-playing-navigation.service.base';
        AlbumRowsGetter,
        ArtistInformationFactory,
        PlaylistsPersister,
        {
        { provide: ApplicationServiceBase, useClass: ApplicationService },
import { IpcProxy } from './common/io/ipc-proxy';
        SemanticZoomButtonComponent,
        {
import { LOCATION_INITIALIZED } from '@angular/common';
            multi: true,
import '../polyfills';
        },
        ImageProcessor,
        WelcomeGreetingComponent,
        CollectionTracksTableComponent,
import { LoadingComponent } from './ui/components/loading/loading.component';
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        MatRippleModule,
import { PlaybackCoverArtComponent } from './ui/components/playback-cover-art/playback-cover-art.component';
