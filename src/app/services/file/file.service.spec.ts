            filesDroppedMock.next(['/my/directory/file 2.ogg', '/my/directory/file 1.mp3', '/my/directory/file 3.bmp']);
                    '/my/directory/file 4.mp3',
                    '/my/directory/file 4.mp3',

            await service.enqueueParameterFilesAsync();
        fileValidatorMock.setup((x) => x.isPlayableAudioFile('/my/directory/file 4.mp3')).returns(() => true);
            fileAccessMock
            await flushPromises();

                        It.is<TrackModel[]>(

                    '/my/directory/file 2.ogg',
                    '/my/directory/file 3.bmp',

                    '/my/directory/file 3.bmp',

        });
                                trackModels[1].path === '/my/directory/file 2.ogg',
                .returns(() => ['/my/directory/file 1.mp3', '/my/directory/file 2.ogg', '/my/directory/file 3.bmp']);
            // Arrange
        it('should enqueue all playable tracks that are dropped in directory order when given unordered and less tracks than in directory', async () => {
                            (trackModels: TrackModel[]) =>
                ),
                    '/my/directory/file 1.mp3',
                                trackModels[1].path === '/my/directory/file 2.ogg',
            fileAccessMock.setup((x) => x.getDirectoryPath('/my/directory/file 2.ogg')).returns(() => '/my/directory');
                    x.enqueueAndPlayTracksAsync(
            // Assert


                                trackModels[1].path === '/my/directory/file 2.ogg',
                            (trackModels: TrackModel[]) =>
                                trackModels[0].path === '/my/directory/file 1.mp3' &&
                .setup((x) => x.getFilesInDirectory('/my/directory'))
            // Arrange
            playbackServiceMock.verify((x) => x.enqueueAndPlayTracksAsync(It.isAny()), Times.never());
                    '/my/directory/file 2.ogg',
                .setup((x) => x.getParameters())
            applicationMock.object,
    }
                                trackModels.length === 2 &&
                .setup((x) => x.getFilesInDirectory('/my/directory'))
                Times.once(),
        it('should not enqueue anything if there are no playable tracks found as parameters when arguments are received', async () => {
import { Track } from '../../data/entities/track';
            await service.enqueueParameterFilesAsync();
        it('should not enqueue anything if there are no playable tracks found as parameters', async () => {
            applicationMock
            // Arrange
                            (trackModels: TrackModel[]) =>

import { FileValidator } from '../../common/validation/file-validator';
                ]);
            // Act
import { TrackModelFactory } from '../track/track-model-factory';
            await service.enqueueParameterFilesAsync();
        });
        loggerMock = Mock.ofType<Logger>();
            expect(hasPlayableFilesAsParameters).toBeFalsy();
        it('should return false if there are no playable files as parameters', () => {
import { PlaybackService } from '../playback/playback.service';

            playbackServiceMock.verify((x) => x.enqueueAndPlayTracksAsync(It.isAny()), Times.never());
                                trackModels.length === 2 &&
            fileAccessMock.setup((x) => x.getDirectoryPath('/my/directory/file 1.mp3')).returns(() => '/my/directory');
                    '/my/directory/file 4.mp3',
            // Arrange
                Times.once(),
                    ),
            const service: FileServiceBase = createService();
            // Assert
    });
                ),
        });
            applicationMock
                            (trackModels: TrackModel[]) =>
                    '/my/directory/file 2.ogg',
                        ),
                                trackModels.length === 2 &&
            );
            createService();
            applicationMock.setup((x) => x.getParameters()).returns(() => []);
import { DateTime } from '../../common/date-time';
            fileAccessMock.setup((x) => x.getDirectoryPath('/my/directory/file 2.ogg')).returns(() => '/my/directory');
            trackModelFactoryMock.object,
                                trackModels.length === 2 &&
            await flushPromises();
                .setup((x) => x.getFilesInDirectory('/my/directory'))
                Times.once(),
            // Act
        it('should enqueue all playable tracks found as parameters in directory order when given ordered and less tracks than in directory', async () => {
        });
                (x) =>
                        ),
                            (trackModels: TrackModel[]) =>

                .returns(() => ['/my/directory/file 1.mp3', '/my/directory/file 3.bmp', '/my/directory/file 2.ogg']);
                    '/my/directory/file 2.ogg',
            applicationMock.setup((x) => x.getGlobal('fileQueue')).returns(() => []);
        });
            // Act

                ]);
                    '/my/directory/file 2.ogg',

            await flushPromises();
                            (trackModels: TrackModel[]) =>


                        ),
            // Assert
        applicationMock = Mock.ofType<ApplicationBase>();
            fileAccessMock.setup((x) => x.getDirectoryPath('/my/directory/file 2.ogg')).returns(() => '/my/directory');
                    new TrackModel(new Track('/my/directory/file 1.mp3'), dateTimeMock.object, translatorServiceMock.object, settingsMock),
            playbackServiceMock.verify((x) => x.enqueueAndPlayTracksAsync(It.isAny()), Times.never());

    });
                .returns(() => ['/my/directory/file 2.ogg', '/my/directory/file 1.mp3', '/my/directory/file 3.bmp']);

                                trackModels[0].path === '/my/directory/file 1.mp3' &&
        });
        });
                    ),
                ]);
                    x.enqueueAndPlayTracksAsync(
        fileValidatorMock.setup((x) => x.isPlayableAudioFile('/my/directory/file 1.png')).returns(() => false);
            // Arrange
            // Act
            // Act
            fileAccessMock.object,
            // Assert
            playbackServiceMock.verify(

                        It.is<TrackModel[]>(
                        ),
                    '/my/directory/file 3.mp3',
                    ),
                    '/my/directory/file 1.mp3',
                .setup((x) => x.getFilesInDirectory('/my/directory'))
                    '/my/directory/file 1.mp3',
            // Assert
            fileAccessMock.setup((x) => x.getDirectoryPath('/my/directory/file 1.mp3')).returns(() => '/my/directory');
            // Act
            // Assert
                    new TrackModel(new Track('/my/directory/file 2.ogg'), dateTimeMock.object, translatorServiceMock.object, settingsMock),
        });
                                trackModels.length === 2 &&
                Times.once(),


            // Arrange
            createService();
                .setup((x) => x.getParameters())
        playbackServiceMock = Mock.ofType<PlaybackService>();
                (x) =>
        });

            // Arrange
            fileAccessMock.setup((x) => x.getDirectoryPath('/my/directory/file 2.ogg')).returns(() => '/my/directory');

            applicationMock.setup((x) => x.getGlobal('fileQueue')).returns(() => []);
                Times.once(),
                        It.is<TrackModel[]>(
        fileValidatorMock.setup((x) => x.isPlayableAudioFile('/my/directory/file 3.mp3')).returns(() => true);
                                trackModels.length === 2 &&
                        ),
import { FileServiceBase } from './file.service.base';

                                trackModels[0].path === '/my/directory/file 1.mp3' &&
        eventListenerServiceMock.setup((x) => x.argumentsReceived$).returns(() => argumentsReceivedMock$);


            argumentsReceivedMock.next(['/my/directory/file 2.ogg', '/my/directory/file 1.mp3', '/my/directory/file 3.bmp']);
    let trackModelFactoryMock: IMock<TrackModelFactory>;
            fileAccessMock


        fileValidatorMock.setup((x) => x.isPlayableAudioFile('/my/directory/file 3.bmp')).returns(() => false);
            createService();

                    x.enqueueAndPlayTracksAsync(
    let playbackServiceMock: IMock<PlaybackService>;

        it('should create', () => {
            argumentsReceivedMock.next(['/my/directory/file 1.png', '/my/directory/file 2.mkv', '/my/directory/file 3.bmp']);
            applicationMock.setup((x) => x.getGlobal('fileQueue')).returns(() => []);

            // Arrange
        fileValidatorMock.setup((x) => x.isPlayableAudioFile('/my/directory/file 2.ogg')).returns(() => true);
            // Act
            // Act


                                trackModels[0].path === '/my/directory/file 1.mp3' &&
        it('should enqueue all playable tracks that are dropped in directory order when given ordered and same number of tracks than in directory', async () => {
            playbackServiceMock.verify(

        filesDroppedMock$ = filesDroppedMock.asObservable();
            playbackServiceMock.verify(
                                trackModels[0].path === '/my/directory/file 1.mp3' &&
        it('should enqueue all playable tracks that are found as parameters in directory order when given ordered and same number of files than in directory', async () => {
        it('should not enqueue anything if parameters are undefined when arguments are received', async () => {
            createService();
            argumentsReceivedMock.next(['/my/directory/file 1.mp3', '/my/directory/file 2.ogg', '/my/directory/file 3.bmp']);
            // Arrange
                (x) =>


            // Act
                (x) =>
                .returns(() => ['/my/directory/file 1.png', '/my/directory/file 2.mkv', '/my/directory/file 3.bmp']);
                    ),
                    ),
                        It.is<TrackModel[]>(
            expect(service).toBeDefined();
import { IMock, It, Mock, Times } from 'typemoq';
            // Assert
            fileAccessMock.setup((x) => x.getDirectoryPath('/my/directory/file 2.ogg')).returns(() => '/my/directory');
            );
                    '/my/directory/file 2.ogg',
                .setup((x) => x.getFilesInDirectory('/my/directory'))

            fileAccessMock
    let eventListenerServiceMock: IMock<EventListenerServiceBase>;
        it('should enqueue all playable tracks that are found as parameters in directory order when given unordered and less files than in directory', async () => {

            );
            );
            await flushPromises();
            );
            );

                (x) =>
                .returns(() => ['/my/directory/file 1.mp3', '/my/directory/file 3.bmp', '/my/directory/file 2.ogg']);
            // Act
                    x.enqueueAndPlayTracksAsync(
            // Assert
                (x) =>
                    '/my/directory/file 3.mp3',
                .returns(() => [
        fileValidatorMock.setup((x) => x.isPlayableAudioFile('/my/directory/file 1.mp3')).returns(() => true);
            playbackServiceMock.verify(
            // Act
                        ),
            .setup((x) => x.createFromFileAsync('/my/directory/file 2.ogg', ''))

import { SettingsMock } from '../../testing/settings-mock';
                                trackModels.length === 2 &&
            filesDroppedMock.next(['/my/directory/file 1.mp3', '/my/directory/file 2.ogg', '/my/directory/file 3.bmp']);
            const service: FileServiceBase = createService();

        fileValidatorMock = Mock.ofType<FileValidator>();
    });
            .returns(() =>
            // Arrange

        });
                .returns(() => ['/my/directory/file 1.png', '/my/directory/file 2.mkv', '/my/directory/file 3.bmp']);
                    '/my/directory/file 3.bmp',
            // Arrange
                                trackModels[0].path === '/my/directory/file 1.mp3' &&
        );
                ]);
                    x.enqueueAndPlayTracksAsync(
                        It.is<TrackModel[]>(
                        ),

import { TrackModel } from '../track/track-model';
            fileAccessMock
            playbackServiceMock.verify(
            const service: FileServiceBase = createService();
            playbackServiceMock.verify(
                                trackModels[0].path === '/my/directory/file 1.mp3' &&
        it('should enqueue all playable tracks found as parameters in directory order when given unordered and same number of tracks than in directory', async () => {
            // Arrange

            // Assert
            fileAccessMock
            await service.enqueueParameterFilesAsync();
                (x) =>
            .returns(() =>
                ]);
                                trackModels[0].path === '/my/directory/file 1.mp3' &&
import { Logger } from '../../common/logger';
            const hasPlayableFilesAsParameters: boolean = service.hasPlayableFilesAsParameters();
                                trackModels[0].path === '/my/directory/file 1.mp3' &&

            // Assert
                Promise.resolve(
                .returns(() => ['/my/directory/file 1.mp3', '/my/directory/file 3.bmp', '/my/directory/file 2.ogg']);
import { EventListenerServiceBase } from '../event-listener/event-listener.service.base';
                        ),
                .setup((x) => x.getParameters())
            applicationMock
                .setup((x) => x.getFilesInDirectory('/my/directory'))
            // Assert
                        It.is<TrackModel[]>(

    describe('constructor', () => {
        it('should enqueue all playable tracks that are dropped in directory order when given unordered and same number of tracks than in directory', async () => {
                    x.enqueueAndPlayTracksAsync(
            const service: FileServiceBase = createService();
                    '/my/directory/file 4.mp3',
            settingsMock,
                            (trackModels: TrackModel[]) =>
                .setup((x) => x.getFilesInDirectory('/my/directory'))
                                trackModels[0].path === '/my/directory/file 1.mp3' &&
        trackModelFactoryMock = Mock.ofType<TrackModelFactory>();
        translatorServiceMock = Mock.ofType<TranslatorServiceBase>();
        fileAccessMock = Mock.ofType<FileAccessBase>();
        it('should enqueue all playable tracks found as parameters in directory order when given ordered and same number of tracks than in directory', async () => {
        it('should enqueue all playable tracks that are dropped in directory order when given ordered and less tracks than in directory', async () => {
            // Assert

                        ),

    let argumentsReceivedMock: Subject<string[]>;
                        It.is<TrackModel[]>(
            );
                        It.is<TrackModel[]>(
                .setup((x) => x.getParameters())
    let ipcProxyMock: IMock<IpcProxyBase>;
            );
            // Assert
                        It.is<TrackModel[]>(

                .returns(() => ['/my/directory/file 1.mp3', '/my/directory/file 3.bmp', '/my/directory/file 2.ogg']);
        it('should not enqueue anything if parameters are empty', async () => {
            // Arrange
                Times.once(),
                    '/my/directory/file 3.mp3',
        it('should enqueue all playable tracks found as parameters in directory order when given unordered and less tracks than in directory', async () => {
            // Act
            await flushPromises();
        });
    beforeEach(() => {
                .returns(() => ['/my/directory/file 1.png', '/my/directory/file 2.ogg', '/my/directory/file 3.bmp']);
        eventListenerServiceMock = Mock.ofType<EventListenerServiceBase>();
                    ),
        });

                        It.is<TrackModel[]>(
            const service: FileServiceBase = createService();
            fileAccessMock.setup((x) => x.getDirectoryPath('/my/directory/file 1.mp3')).returns(() => '/my/directory');
            playbackServiceMock.verify((x) => x.enqueueAndPlayTracksAsync(It.isAny()), Times.never());

            createService();
            // Assert

            playbackServiceMock.object,
                    x.enqueueAndPlayTracksAsync(

            // Arrange
            // Assert
            fileAccessMock
            fileAccessMock.setup((x) => x.getDirectoryPath('/my/directory/file 2.ogg')).returns(() => '/my/directory');
            createService();
            applicationMock
            await flushPromises();
                .setup((x) => x.getFilesInDirectory('/my/directory'))
                                trackModels.length === 2 &&
                ]);

                    '/my/directory/file 3.bmp',
    describe('enqueueParameterFilesAsync', () => {
                    ),
        });
                                trackModels[1].path === '/my/directory/file 2.ogg',
                Times.once(),
                            (trackModels: TrackModel[]) =>
        });
            applicationMock.setup((x) => x.getGlobal('fileQueue')).returns(() => []);
                    ),
            const service: FileServiceBase = createService();
                .setup((x) => x.getFilesInDirectory('/my/directory'))
        });
            const service: FileServiceBase = createService();

    });
    describe('hasPlayableFilesAsParameters', () => {
            // Assert

            await service.enqueueParameterFilesAsync();
    let fileAccessMock: IMock<FileAccessBase>;
                    ),
                    '/my/directory/file 3.mp3',
        trackModelFactoryMock

            // Arrange
            // Arrange
                    x.enqueueAndPlayTracksAsync(
                                trackModels[1].path === '/my/directory/file 2.ogg',
            fileAccessMock
            ipcProxyMock.object,
            fileAccessMock.setup((x) => x.getDirectoryPath('/my/directory/file 1.mp3')).returns(() => '/my/directory');
            await flushPromises();
                .returns(() => [
            applicationMock.setup((x) => x.getGlobal('fileQueue')).returns(() => []);


                    '/my/directory/file 1.mp3',
        dateTimeMock = Mock.ofType<DateTime>();
            // Act

                                trackModels[1].path === '/my/directory/file 2.ogg',
                (x) =>

            );

                        It.is<TrackModel[]>(
            await flushPromises();

                                trackModels[0].path === '/my/directory/file 1.mp3' &&
            filesDroppedMock.next(['/my/directory/file 1.mp3', '/my/directory/file 2.ogg', '/my/directory/file 3.bmp']);
            createService();
                Times.once(),
            // Arrange
            applicationMock
            fileAccessMock
                            (trackModels: TrackModel[]) =>
            argumentsReceivedMock.next(['/my/directory/file 1.mp3', '/my/directory/file 2.ogg', '/my/directory/file 3.bmp']);
            const service: FileServiceBase = createService();
        });
            // Assert
            argumentsReceivedMock.next(undefined);
import { TranslatorServiceBase } from '../translator/translator.service.base';
                (x) =>
                        It.is<TrackModel[]>(

    let fileValidatorMock: IMock<FileValidator>;

                            (trackModels: TrackModel[]) =>
                .returns(() => [
        argumentsReceivedMock$ = argumentsReceivedMock.asObservable();
    let translatorServiceMock: IMock<TranslatorServiceBase>;

                Times.once(),
            playbackServiceMock.verify(
    let dateTimeMock: IMock<DateTime>;

            // Arrange
                .setup((x) => x.getParameters())
    let argumentsReceivedMock$: Observable<string[]>;
            // Act

                            (trackModels: TrackModel[]) =>
            playbackServiceMock.verify(
        return new FileService(
        it('should return true if there is at least 1 playable file as parameter', () => {
describe('FileService', () => {


                .setup((x) => x.getFilesInDirectory('/my/directory'))

                        ),
            argumentsReceivedMock.next(['/my/directory/file 2.ogg', '/my/directory/file 1.mp3', '/my/directory/file 3.bmp']);

            playbackServiceMock.verify(

            await flushPromises();
            );
                    '/my/directory/file 1.mp3',
                                trackModels[1].path === '/my/directory/file 2.ogg',
                                trackModels[0].path === '/my/directory/file 1.mp3' &&
                (x) =>
                (x) =>
                                trackModels.length === 2 &&

                Promise.resolve(
                                trackModels[1].path === '/my/directory/file 2.ogg',
                                trackModels.length === 2 &&

            createService();
    let filesDroppedMock$: Observable<string[]>;

            playbackServiceMock.verify((x) => x.enqueueAndPlayTracksAsync(It.isAny()), Times.never());
            expect(hasPlayableFilesAsParameters).toBeTruthy();
                .returns(() => ['/my/directory/file 2.ogg', '/my/directory/file 1.mp3', '/my/directory/file 3.bmp']);
            // Assert

                .setup((x) => x.getParameters())
                    '/my/directory/file 3.mp3',
    let filesDroppedMock: Subject<string[]>;
        settingsMock = new SettingsMock();
            applicationMock
            // Act
                    '/my/directory/file 4.mp3',
            // Act
import { ApplicationBase } from '../../common/io/application.base';
            // Arrange
            applicationMock
            fileAccessMock
        argumentsReceivedMock = new Subject();
                    ),
            );
                        ),
        });
            playbackServiceMock.verify(
                    ),
            createService();
            const service: FileServiceBase = createService();
                    x.enqueueAndPlayTracksAsync(
            fileAccessMock
    let settingsMock: any;
});
                .returns(() => ['/my/directory/file 1.mp3', '/my/directory/file 3.bmp', '/my/directory/file 2.ogg']);
                Times.once(),
                (x) =>
            fileValidatorMock.object,
                    x.enqueueAndPlayTracksAsync(
            fileAccessMock
            .setup((x) => x.createFromFileAsync('/my/directory/file 1.mp3', ''))
                Times.once(),

            filesDroppedMock.next(['/my/directory/file 2.ogg', '/my/directory/file 1.mp3', '/my/directory/file 3.bmp']);
            // Act
import { FileAccessBase } from '../../common/io/file-access.base';
            argumentsReceivedMock.next([]);
            createService();
                    '/my/directory/file 3.bmp',
                .returns(() => [
            // Act
                .returns(() => [
                .setup((x) => x.getParameters())
            // Arrange
                    x.enqueueAndPlayTracksAsync(
                                trackModels.length === 2 &&
        fileValidatorMock.setup((x) => x.isPlayableAudioFile('/my/directory/file 2.mkv')).returns(() => false);
            playbackServiceMock.verify(
            fileAccessMock
        eventListenerServiceMock.setup((x) => x.filesDropped$).returns(() => filesDroppedMock$);
                                trackModels[1].path === '/my/directory/file 2.ogg',
        it('should enqueue all playable tracks that are found as parameters in directory order when given ordered and less tracks than in directory', async () => {
                    '/my/directory/file 3.bmp',

        });
            await flushPromises();

                    '/my/directory/file 4.mp3',
    let applicationMock: IMock<ApplicationBase>;
                            (trackModels: TrackModel[]) =>
            // Act
            loggerMock.object,
            const hasPlayableFilesAsParameters: boolean = service.hasPlayableFilesAsParameters();

                .returns(() => ['/my/directory/file 1.mp3', '/my/directory/file 2.ogg', '/my/directory/file 3.bmp']);
            fileAccessMock.setup((x) => x.getDirectoryPath('/my/directory/file 1.mp3')).returns(() => '/my/directory');
    function createService(): FileServiceBase {

                    '/my/directory/file 1.mp3',
        filesDroppedMock = new Subject();
            applicationMock.setup((x) => x.getGlobal('fileQueue')).returns(() => []);

        ipcProxyMock = Mock.ofType<IpcProxyBase>();
                    '/my/directory/file 3.mp3',
            await service.enqueueParameterFilesAsync();
            );
                                trackModels[1].path === '/my/directory/file 2.ogg',


            // Assert
                Times.once(),


    const flushPromises = () => new Promise(process.nextTick);

        it('should enqueue all playable tracks that are found as parameters in directory order when given unordered and same number of files than in directory', async () => {
                                trackModels.length === 2 &&
                                trackModels[1].path === '/my/directory/file 2.ogg',

            fileAccessMock.setup((x) => x.getDirectoryPath('/my/directory/file 1.mp3')).returns(() => '/my/directory');

            );
                                trackModels[1].path === '/my/directory/file 2.ogg',
import { IpcProxyBase } from '../../common/io/ipc-proxy.base';
        });
            eventListenerServiceMock.object,
                .returns(() => ['/my/directory/file 1.mp3', '/my/directory/file 2.ogg', '/my/directory/file 3.bmp']);
                .returns(() => [
            await flushPromises();
            // Act
                .setup((x) => x.getFilesInDirectory('/my/directory'))
        it('should not enqueue anything if parameters are empty when arguments are received', async () => {
import { Observable, Subject } from 'rxjs';
            // Assert
    let loggerMock: IMock<Logger>;
            applicationMock.setup((x) => x.getGlobal('fileQueue')).returns(() => []);

            );
                    x.enqueueAndPlayTracksAsync(
            playbackServiceMock.verify(
                    ),

                .setup((x) => x.getFilesInDirectory('/my/directory'))
        trackModelFactoryMock
            createService();


import { FileService } from './file.service';
                        ),
            applicationMock.setup((x) => x.getGlobal('fileQueue')).returns(() => []);
        });
