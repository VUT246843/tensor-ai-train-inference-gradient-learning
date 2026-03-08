
            appearanceServiceMock.verify((x) => x.applyMargins(false), Times.exactly(1));
            // Arrange
        });
            // Act

            // Assert
            // Act
    });
            const subscription: Subscription = new Subscription();
            await service.navigateToSettingsAsync();
        it('should navigate to settings', async () => {
            // Arrange
            // Assert
import { Subscription } from 'rxjs';
    });
    });

    describe('navigateToLoading', () => {

    });
            routerMock.verify((x) => x.navigate(['/loading']), Times.exactly(1));
            await service.navigateToLoadingAsync();
            // Assert

            // Assert

    });
    });


        it('should navigate to now playing', async () => {
            expect(isPlaybackQueueRequested).toBeTruthy();
    describe('constructor', () => {

            routerMock.verify((x) => x.navigate(['/nowplaying']), Times.exactly(1));
            // Assert
            // Arrange
            // Assert
            await service.navigateToCollectionAsync();
    describe('showPlaybackQueue', () => {


    });
            routerMock.verify((x) => x.navigate(['/information']), Times.exactly(1));
    });
    });

    describe('navigateToManageCollection', () => {


            service.showPlaybackQueue();


            expect(service).toBeDefined();
        it('should apply margins with search box', async () => {
            // Assert
    let routerMock: IMock<Router>;

            // Arrange
        it('should navigate to welcome', async () => {
            routerMock.verify((x) => x.navigate(['/settings']), Times.exactly(1));
            // Assert
    describe('navigateToNowPlaying', () => {
            await service.navigateToNowPlayingAsync();
            routerMock.verify((x) => x.navigate(['/collection']), Times.exactly(1));
        it('should navigate to information', async () => {

        });
        });
        routerMock = Mock.ofType<Router>();

            await service.navigateToSettingsAsync();

import { NavigationServiceBase } from './navigation.service.base';
        });
            // Act
            // Assert
        it('should create', () => {
        service = new NavigationService(appearanceServiceMock.object, routerMock.object);
            // Arrange
            routerMock.verify((x) => x.navigate(['/welcome']), Times.exactly(1));
            let isPlaybackQueueRequested: boolean = false;

            subscription.add(
    });
        });
    let service: NavigationServiceBase;
    describe('navigateToWelcome', () => {
            await service.navigateToCollectionAsync();
            // Act
            // Act
});
        it('should apply margins without search box', async () => {
import { Router } from '@angular/router';
import { IMock, Mock, Times } from 'typemoq';
            // Arrange
        it('should apply margins without search box', async () => {

import { NavigationService } from './navigation.service';
            // Arrange
                }),
        it('should navigate to loading', async () => {
import { AppearanceServiceBase } from '../appearance/appearance.service.base';


            );
                    isPlaybackQueueRequested = true;

        });
    beforeEach(() => {
            // Arrange
            // Act

            // Arrange

                service.showPlaybackQueueRequested$.subscribe(() => {
            // Act
        it('should navigate to manage collection', async () => {
        appearanceServiceMock = Mock.ofType<AppearanceServiceBase>();
            // Arrange



    describe('navigateToSettings', () => {
        });
describe('NavigationService', () => {
    describe('navigateToCollection', () => {
            // Act
            await service.navigateToWelcomeAsync();
        });
            await service.navigateToInformationAsync();
        });
            routerMock.verify((x) => x.navigate(['/managecollection']), Times.exactly(1));
            // Act
            // Act
            // Assert
        });


            // Act

            // Arrange
            appearanceServiceMock.verify((x) => x.applyMargins(false), Times.exactly(1));
            // Arrange


    describe('navigateToInformation', () => {
            subscription.unsubscribe();
        it('should request to show the playback queue', () => {
            // Assert
            // Act
            // Assert
        });

            appearanceServiceMock.verify((x) => x.applyMargins(true), Times.exactly(1));
        it('should navigate to collection', async () => {

            await service.navigateToManageCollectionAsync();

    let appearanceServiceMock: IMock<AppearanceServiceBase>;
            await service.navigateToInformationAsync();
        });

