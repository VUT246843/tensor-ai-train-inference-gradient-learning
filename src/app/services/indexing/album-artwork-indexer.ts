        await this.albumArtworkRemover.removeAlbumArtworkThatIsNotInTheDatabaseFromDiskAsync();

        await this.albumArtworkAdder.addAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();
export class AlbumArtworkIndexer {
import { AlbumArtworkAdder } from './album-artwork-adder';
            'AlbumArtworkIndexer',
            `+++ FINISHED INDEXING ALBUM ARTWORK (Time required: ${timer.elapsedMilliseconds} ms) +++`,


    public async indexAlbumArtworkAsync(): Promise<void> {
import { NotificationServiceBase } from '../notification/notification.service.base';
        this.logger.info('+++ STARTED INDEXING ALBUM ARTWORK +++', 'AlbumArtworkIndexer', 'indexAlbumArtworkAsync');
import { Logger } from '../../common/logger';
@Injectable({ providedIn: 'root' })
        private logger: Logger,

        timer.start();
        await this.albumArtworkRemover.removeAlbumArtworkForTracksThatNeedAlbumArtworkIndexingAsync();
import { AlbumArtworkRemover } from './album-artwork-remover';
        );


        await this.albumArtworkRemover.removeAlbumArtworkThatHasNoTrackAsync();
        this.notificationService.dismiss();
}
        timer.stop();

        this.logger.info(
    ) {}
        private notificationService: NotificationServiceBase,
import { Injectable } from '@angular/core';
        private albumArtworkRemover: AlbumArtworkRemover,
            'indexAlbumArtworkAsync',
import { Timer } from '../../common/scheduling/timer';
        private albumArtworkAdder: AlbumArtworkAdder,
        const timer: Timer = new Timer();
    }
    public constructor(
