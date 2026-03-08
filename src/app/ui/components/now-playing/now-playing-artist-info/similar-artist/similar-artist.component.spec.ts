    let settingsMock: IMock<SettingsBase>;


            expect(component).toBeDefined();
        });


        });
import { IMock, Mock } from 'typemoq';
import { SimilarArtistComponent } from './similar-artist.component';
    beforeEach(() => {
    });


            // Arrange
            // Act
});
            // Assert
        settingsMock = Mock.ofType<SettingsBase>();
        return new SimilarArtistComponent(settingsMock.object);
import { SettingsBase } from '../../../../../common/settings/settings.base';
        it('should create', () => {

            // Assert
            expect(component.similarArtist.name).toEqual('');
            const component: SimilarArtistComponent = createComponent();
            const component: SimilarArtistComponent = createComponent();
        it('should ensure empty similarArtist', () => {
    describe('constructor', () => {
            expect(component.similarArtist.url).toEqual('');
            // Act
    }
            // Arrange

            expect(component.similarArtist).toBeDefined();
            expect(component.similarArtist.imageUrl).toEqual('');
            expect(component.similarArtist.biography).toEqual('');
    });
    function createComponent(): SimilarArtistComponent {
describe('NowPlayingArtistInfoComponent', () => {

