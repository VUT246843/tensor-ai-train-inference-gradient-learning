        return false;
                return true;
    }
    }
    }
import { PromiseUtils } from '../../common/utils/promise-utils';
    public async enqueueParameterFilesAsync(): Promise<void> {
        this.logger.info(`Found parameters: ${parameters.join(', ')}`, 'FileService', 'hasPlayableFilesAsGivenParameters');
            if (this.fileValidator.isPlayableAudioFile(file)) {
            if (this.fileValidator.isPlayableAudioFile(parameter)) {
        const parameters: string[] = this.getAllParameters();
import { IpcProxyBase } from '../../common/io/ipc-proxy.base';



        private fileAccess: FileAccessBase,
        private application: ApplicationBase,
    private async enqueueGivenParameterFilesAsync(parameters: string[]): Promise<void> {
            if (trackModels.length > 0) {
            this.eventListenerService.filesDropped$.subscribe((filePaths: string[]) => {

            }),



        const parameters: string[] = this.getAllParameters();
                    const trackModel: TrackModel = await this.trackModelFactory.createFromFileAsync(file, albumKeyIndex);
        playableAudioFiles.sort((a, b) => {
            }
        const directory: string = this.fileAccess.getDirectoryPath(playableAudioFiles[0]);
import { ApplicationBase } from '../../common/io/application.base';
            for (const file of playableAudioFilesInDirectoryOrder) {
        try {
@Injectable()
        for (const file of files) {

    private getAllParameters(): string[] {
        for (const parameter of parameters) {
            return directoryFiles.indexOf(a) - directoryFiles.indexOf(b);
        await this.enqueueGivenParameterFilesAsync(parameters);
import { PlaybackService } from '../playback/playback.service';
                }
                }
    }
            }
        const fileQueue: string[] = this.application.getGlobal('fileQueue') as string[];
        this.ipcProxy.sendToMainProcess('clear-file-queue', undefined);
            const albumKeyIndex = this.settings.albumKeyIndex;
        this.logger.info(`Parameters: ${parameters.join(', ')}`, 'FileService', 'getAllParameters');
        this.logger.info(`Found parameters: ${parameters.join(', ')}`, 'FileService', 'enqueueGivenParameterFilesAsync');
        );

import { TrackModelFactory } from '../track/track-model-factory';



                if (this.fileValidator.isPlayableAudioFile(file)) {
                this.ipcProxy.sendToMainProcess('clear-file-queue', undefined);

        return playableAudioFiles;
import { Logger } from '../../common/logger';
import { FileServiceBase } from './file.service.base';
                    trackModels.push(trackModel);

            }),
        this.subscription.add(

                    PromiseUtils.noAwait(this.enqueueGivenParameterFilesAsync(argv));
        );
    }
    private subscription: Subscription = new Subscription();
        private eventListenerService: EventListenerServiceBase,
            }
    }
                PromiseUtils.noAwait(this.enqueueGivenParameterFilesAsync(filePaths));
            const playableAudioFilesInDirectoryOrder = this.getPlayableAudioFilesInDirectoryOrder(parameters);
        const playableAudioFiles: string[] = this.getPlayableAudioFiles(files);

    private getPlayableAudioFiles(files: string[]): string[] {


        return playableAudioFiles;
                if (this.hasPlayableFilesAsGivenParameters(argv)) {
import { EventListenerServiceBase } from '../event-listener/event-listener.service.base';
        this.logger.info(`File queue: ${fileQueue.join(', ')}`, 'FileService', 'getAllParameters');
            }
    ) {
        }
        return this.hasPlayableFilesAsGivenParameters(parameters);
        const parameters: string[] = this.application.getParameters();

            const trackModels: TrackModel[] = [];
import { Injectable } from '@angular/core';
        // Assume all files are in the same directory
import { SettingsBase } from '../../common/settings/settings.base';
export class FileService implements FileServiceBase {
    public constructor(
}
        return parameters;
            this.logger.error(e, 'Could not enqueue given parameter files', 'FileService', 'enqueueGivenParameterFilesAsync');
    public hasPlayableFilesAsParameters(): boolean {
    private hasPlayableFilesAsGivenParameters(parameters: string[]): boolean {
        private logger: Logger,
        private playbackService: PlaybackService,
        private fileValidator: FileValidator,
        this.subscription.add(
import { Subscription } from 'rxjs';

            this.eventListenerService.argumentsReceived$.subscribe((argv: string[]) => {
        // Sort the files to match the order in the directory
import { TrackModel } from '../track/track-model';
        const directoryFiles: string[] = this.fileAccess.getFilesInDirectory(directory);


        parameters.push(...fileQueue);
        private trackModelFactory: TrackModelFactory,
    }
        private settings: SettingsBase,
        private ipcProxy: IpcProxyBase,
        } catch (e: unknown) {

    private getPlayableAudioFilesInDirectoryOrder(files: string[]): string[] {
    }
        });
import { FileValidator } from '../../common/validation/file-validator';
                playableAudioFiles.push(file);
        }

import { FileAccessBase } from '../../common/io/file-access.base';
        const playableAudioFiles: string[] = [];
                await this.playbackService.enqueueAndPlayTracksAsync(trackModels);
        }
