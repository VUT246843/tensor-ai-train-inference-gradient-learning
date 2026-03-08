        return new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
        const track: Track = new Track(path);
    }



        return new TrackModel(track, dateTimeMock.object, translatorServiceMock.object, settingsMock);
import { Track } from '../data/entities/track';
        track.trackTitle = trackTitle;
        const translatorServiceMock: IMock<TranslatorServiceBase> = Mock.ofType<TranslatorServiceBase>();

        const settingsMock: any = new SettingsMock();
    public static createTrackModelWithAlbumKey(path: string, albumKey: string): TrackModel {
    }
import { TranslatorServiceBase } from '../services/translator/translator.service.base';
        const dateTimeMock: IMock<DateTime> = Mock.ofType<DateTime>();
        const desktopMock: IMock<DesktopBase> = Mock.ofType<DesktopBase>();
import { DesktopBase } from '../common/io/desktop.base';
export class MockCreator {


    public static createArtistInformation(name: string, url: string, imageUrl: string, biography: string): ArtistInformation {
import { SettingsMock } from './settings-mock';
import { ArtistInformation } from '../services/artist-information/artist-information';
        const track: Track = new Track(path);
import { IMock, Mock } from 'typemoq';

    }
        const translatorServiceMock: IMock<TranslatorServiceBase> = Mock.ofType<TranslatorServiceBase>();
        track.artists = artists;
}
    public static createTrackModel(path: string, trackTitle: string, artists: string): TrackModel {
        const settingsMock: any = new SettingsMock();
        const dateTimeMock: IMock<DateTime> = Mock.ofType<DateTime>();

import { TrackModel } from '../services/track/track-model';
        return new ArtistInformation(desktopMock.object, name, url, imageUrl, biography);
        track.albumKey = albumKey;
import { DateTime } from '../common/date-time';
