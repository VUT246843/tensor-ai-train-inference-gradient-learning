        it('should create', () => {
            tracksColumnsVisibility.showYear = true;
import { TracksColumnsService } from './tracks-columns.service';
            const tracksColumnsVisibility: TracksColumnsVisibility = service.getTracksColumnsVisibility();
            // Arrange
        test.todo('should write tests');


            service = createService();
    describe('setTracksColumnsOrder', () => {
    describe('getTracksColumnsOrder', () => {
            // Act
            service.setTracksColumnsVisibility(tracksColumnsVisibility);

            expect(tracksColumnsVisibility.showPlayCount).toBeFalsy();
            // Act
            );
            // Arrange
            );
            expect(receivedTracksColumnsVisibility).toBe(newTracksColumnsVisibility);
import { Subscription } from 'rxjs';
            expect(tracksColumnsVisibility.showDateAdded).toBeFalsy();
            tracksColumnsVisibility.showSkipCount = true;
});
            service.setTracksColumnsVisibility(newTracksColumnsVisibility);
            settingsStub.tracksPageVisibleColumns = 'rating;artists;duration;trackNumber';
            service = createService();
        subscription = new Subscription();
            tracksColumnsVisibility.showArtists = true;
            expect(service).toBeDefined();


    }


                'rating;artists;genres;duration;trackNumber;year;skipCount;dateLastPlayed;dateAdded',
    let service: TracksColumnsServiceBase;


            service = createService();
            let receivedTracksColumnsVisibility: TracksColumnsVisibility = new TracksColumnsVisibility();
            expect(settingsStub.tracksPageVisibleColumns).toEqual(
            subscription.add(
        return new TracksColumnsService(settingsStub);
            expect(tracksColumnsVisibility.showGenres).toBeFalsy();
            // Assert

            // Assert
            // Assert
            tracksColumnsVisibility.showPlayCount = false;



            // Assert
            expect(tracksColumnsVisibility.showSkipCount).toBeFalsy();
        test.todo('should write tests');
        });

            expect(tracksColumnsVisibility.showTrackNumber).toBeTruthy();
            // Act

            expect(tracksColumnsVisibility).toBeDefined();
            expect(tracksColumnsVisibility.showDuration).toBeTruthy();
        });
            expect(tracksColumnsVisibility.showArtists).toBeTruthy();

                service.tracksColumnsVisibilityChanged$.subscribe((tracksColumnsVisibility: TracksColumnsVisibility) => {
    let subscription: Subscription;
            tracksColumnsVisibility.showTrackNumber = true;
    });
            // Act
import { TracksColumnsServiceBase } from './tracks-columns.service.base';
            expect(tracksColumnsVisibility.showRating).toBeTruthy();
    });
            settingsStub.tracksPageVisibleColumns = 'rating;artists;duration;trackNumber';
            expect(tracksColumnsVisibility.showAlbum).toBeFalsy();
        settingsStub = { tracksPageVisibleColumns: '' };
    describe('getTracksColumnsVisibility', () => {

            tracksColumnsVisibility.showGenres = true;

    });
            // Assert
        it('should define playingNextTrack$', () => {
            tracksColumnsVisibility.showDateAdded = true;

            service = createService();
        });
        it('should get tracks columns visibility from settings', () => {
    let settingsStub: any;
            service = createService();
            const newTracksColumnsVisibility: TracksColumnsVisibility = new TracksColumnsVisibility();
    function createService(): TracksColumnsServiceBase {
describe('TracksColumnsService', () => {
            // Arrange



            tracksColumnsVisibility.showRating = true;
        });
            expect(service.tracksColumnsVisibilityChanged$).toBeDefined();
            tracksColumnsVisibility.showAlbum = false;
    });
            tracksColumnsVisibility.showDateLastPlayed = true;
            // Act
    });
            // Arrange
                    receivedTracksColumnsVisibility = tracksColumnsVisibility;

            expect(tracksColumnsVisibility.showYear).toBeFalsy();
            tracksColumnsVisibility.showDuration = true;
    describe('setTracksColumnsVisibility', () => {
    describe('constructor', () => {
            const tracksColumnsVisibility: TracksColumnsVisibility = new TracksColumnsVisibility();
            expect(tracksColumnsVisibility.showDateLastPlayed).toBeFalsy();
    });
    beforeEach(() => {

        it('should save tracks columns visibility to settings', () => {
        it('should indicate that tracks columns visibility has changed', () => {
        });
            // Arrange
import { TracksColumnsVisibility } from './tracks-columns-visibility';
                }),
