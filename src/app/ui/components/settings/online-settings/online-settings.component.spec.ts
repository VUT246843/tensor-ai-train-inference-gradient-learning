        it('should get enableLastFmScrobbling from the settings', () => {
            expect(component.signInState).toEqual(SignInState.Error);
        });
            const component: OnlineSettingsComponent = createComponent();

        );
            const component: OnlineSettingsComponent = createComponent();
            expect(component.signInState).toEqual(SignInState.SignedIn);

        });
        it('should get downloadLyricsOnline from the settings', () => {
            // Arrange
            expect(settingsStub.enableLastFmScrobbling).toBeFalsy();

    function createComponent(): OnlineSettingsComponent {
    });

            // Assert
            scrobblingServiceMock.verify((x) => x.signInAsync(), Times.once());
            component.ngOnInit();

        });
            // Arrange
            scrobblingServiceMock.setup((x) => x.signInState).returns(() => SignInState.SignedIn);
            // Arrange
            const scrobblingServiceStub: any = { username: 'MyLastFmUsername', password: 'MyLastFmPassword' };
            // Arrange
            // Arrange
            discordServiceMock.object,


            expect(component.signInState).toEqual(SignInState.SignedOut);
            // Act
            notificationServiceMock.verify((x) => x.lastFmLoginFailedAsync(), Times.never());
            // Assert
            // Assert
        it('should define discordService', () => {

    describe('signInToLastFmAsync', () => {
            // Assert
            await flushPromises();
            // Assert
import { DiscordService } from '../../../../services/discord/discord.service';
            const component: OnlineSettingsComponent = createComponent();
            // Arrange
            scrobblingServiceMock.setup((x) => x.signInState).returns(() => SignInState.SignedIn);
    let scrobblingServiceMock_signInStateChanged: Subject<SignInState>;

    });


    }
            const scrobblingServiceStub: any = { username: 'MyLastFmUsername', password: 'MyLastFmPassword' };




        });
            // Assert

import { NotificationServiceBase } from '../../../../services/notification/notification.service.base';
            // Assert
        it('should tell the user when sign in failed', async () => {

            component.lastFmUserName = 'MyNewLastFmUsername';
            const enableLastFmScrobblingFromSettings: boolean = component.enableLastFmScrobbling;
            // Arrange
    });
    let scrobblingServiceMock_signInStateChanged$: Observable<SignInState>;
});
            // Act
    describe('constructor', () => {



        it('should get scrobblingService.password', () => {
            scrobblingServiceMock.setup((x) => x.signInState).returns(() => SignInState.SignedIn);
        );
            await flushPromises();
            // Act
            // Assert
            scrobblingServiceMock.verify((x) => x.signOut(), Times.once());
    });
            // Act
            // Act


    });
            const component: OnlineSettingsComponent = createComponent();
            scrobblingServiceMock.setup((x) => x.signInState).returns(() => SignInState.SignedIn);
            const component: OnlineSettingsComponent = createComponent();
            scrobblingServiceMock_signInStateChanged.next(SignInState.SignedOut);
        scrobblingServiceMock = Mock.ofType<ScrobblingService>();
            // Assert

            component.ngOnInit();
import { SignInState } from '../../../../services/scrobbling/sign-in-state';
        it('should set signInState from scrobblingService.signInState', () => {


            scrobblingServiceMock.object,
    });
            // Act
        settingsStub = { enableDiscordRichPresence: true, enableLastFmScrobbling: true, downloadLyricsOnline: true };
            // Act
        it('should set scrobblingService.username', () => {

    describe('lastFmPassword', () => {
            // Act

            // Assert
            expect(component.lastFmUserName).toEqual('MyLastFmUsername');
        });


            const component: OnlineSettingsComponent = createComponentFromScrobblingServiceStub(scrobblingServiceStub);
        scrobblingServiceMock_signInStateChanged = new Subject();

            // Arrange
            const downloadLyricsOnlineFromSettings: boolean = component.downloadLyricsOnline;
        });
            notificationServiceMock.object,
            scrobblingServiceStub,
            const component: OnlineSettingsComponent = createComponent();
            settingsStub,
        });
            component.lastFmPassword = 'MyNewLastFmPassword';
            await flushPromises();
            expect(enableLastFmScrobblingFromSettings).toBeTruthy();
            component.enableLastFmScrobbling = false;
        scrobblingServiceMock_signInStateChanged$ = scrobblingServiceMock_signInStateChanged.asObservable();
        });


            // Arrange
            expect(component.lastFmPassword).toEqual('MyLastFmPassword');

            const component: OnlineSettingsComponent = createComponent();
        it('should not tell the user that sign in failed when signed in', async () => {
            // Act
            scrobblingServiceMock.setup((x) => x.signInState).returns(() => SignInState.SignedIn);
            scrobblingServiceMock.verify((x) => x.signOut(), Times.never());
            const component: OnlineSettingsComponent = createComponentFromScrobblingServiceStub(scrobblingServiceStub);
    let settingsStub: any;
        scrobblingServiceMock.setup((x) => x.signInStateChanged$).returns(() => scrobblingServiceMock_signInStateChanged$);
            expect(component.lastFmUserName).toEqual('MyNewLastFmUsername');
            // Arrange
        });
            // Act

    let discordServiceMock: IMock<DiscordService>;
        it('should create', () => {


            // Arrange
            // Assert
            const component: OnlineSettingsComponent = createComponent();
        });
            // Act
        });
        it('should update SignInState when changed', async () => {
        });
            component.ngOnInit();
        it('should sign out when false', () => {

            // Arrange
            // Assert
import { OnlineSettingsComponent } from './online-settings.component';

        });

            const component: OnlineSettingsComponent = createComponentFromScrobblingServiceStub(scrobblingServiceStub);
            // Arrange

    describe('ngOnInit', () => {

        discordServiceMock = Mock.ofType<DiscordService>();

            expect(settingsStub.downloadLyricsOnline).toBeFalsy();
            const component: OnlineSettingsComponent = createComponent();
import { ScrobblingService } from '../../../../services/scrobbling/scrobbling.service';
            // Assert
            // Arrange
        it('should not sign out when true', () => {
    const flushPromises = () => new Promise(process.nextTick);
            // Act
            // Act
        it('should get scrobblingService.username', () => {
            discordServiceMock.object,
            // Act
        it('should save enableLastFmScrobbling to the settings', () => {


            const component: OnlineSettingsComponent = createComponent();
        it('should set scrobblingService.username', () => {
            expect(component).toBeDefined();
    function createComponentFromScrobblingServiceStub(scrobblingServiceStub: any): OnlineSettingsComponent {
        it('should have SignInState.SignedOut', () => {
    });

            expect(component.discordService).toBeDefined();
    describe('enableLastFmScrobbling', () => {

            // Act
            notificationServiceMock.verify((x) => x.lastFmLoginFailedAsync(), Times.never());


    }
import { IMock, Mock, Times } from 'typemoq';


            const component: OnlineSettingsComponent = createComponent();

describe('OnlineSettingsComponent', () => {
            scrobblingServiceMock_signInStateChanged.next(SignInState.Error);
            // Arrange
        it('should save downloadLyricsOnline to the settings', () => {
    let scrobblingServiceMock: IMock<ScrobblingService>;
            const component: OnlineSettingsComponent = createComponentFromScrobblingServiceStub(scrobblingServiceStub);

            // Arrange
            const component: OnlineSettingsComponent = createComponent();
            // Assert
            // Arrange
        updateServiceMock = Mock.ofType<UpdateServiceBase>();
    });

            const component: OnlineSettingsComponent = createComponent();
        it('should not tell the user that sign in failed when signed out', async () => {
            scrobblingServiceMock_signInStateChanged.next(SignInState.Error);
import { UpdateServiceBase } from '../../../../services/update/update.service.base';
            // Act


            notificationServiceMock.object,

    describe('lastFmUserName', () => {
            updateServiceMock.object,


        });

            const component: OnlineSettingsComponent = createComponent();
            // Assert
            component.enableLastFmScrobbling = true;
            // Assert
        return new OnlineSettingsComponent(
    beforeEach(() => {
            const scrobblingServiceStub: any = { username: 'MyLastFmUsername', password: 'MyLastFmPassword' };
            component.enableLastFmScrobbling = false;
        notificationServiceMock = Mock.ofType<NotificationServiceBase>();

            component.downloadLyricsOnline = false;

    let updateServiceMock: IMock<UpdateServiceBase>;
            // Act
        it('should sign in to Last.fm', async () => {
        });
        return new OnlineSettingsComponent(
            // Arrange
            // Act
            component.ngOnInit();
            notificationServiceMock.verify((x) => x.lastFmLoginFailedAsync(), Times.once());
    describe('downloadLyricsOnline', () => {

            const component: OnlineSettingsComponent = createComponent();
            await component.signInToLastFmAsync();
        });
            // Assert
import { Observable, Subject } from 'rxjs';
            expect(component.lastFmPassword).toEqual('MyNewLastFmPassword');
            settingsStub,
            // Act
            updateServiceMock.object,

            await flushPromises();
            scrobblingServiceMock_signInStateChanged.next(SignInState.SignedIn);
        });
            component.ngOnInit();
            // Arrange
    let notificationServiceMock: IMock<NotificationServiceBase>;

            const scrobblingServiceStub: any = { username: 'MyLastFmUsername', password: 'MyLastFmPassword' };
            expect(downloadLyricsOnlineFromSettings).toBeTruthy();
        });
            // Assert
            // Assert
        });
