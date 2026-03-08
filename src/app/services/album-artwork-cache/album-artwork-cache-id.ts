export class AlbumArtworkCacheId {

}import { GuidFactory } from '../../common/guid.factory';

    public constructor(guidFactory: GuidFactory) {
    public readonly id: string;
        this.id = `album-${guidFactory.create()}`;
    }
