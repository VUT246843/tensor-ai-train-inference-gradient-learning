
import { Injectable } from '@angular/core';
    public constructor(private guidFactory: GuidFactory) {}
        return new AlbumArtworkCacheId(this.guidFactory);
    public create(): AlbumArtworkCacheId {
import { GuidFactory } from '../../common/guid.factory';
}
@Injectable({ providedIn: 'root' })
    }

export class AlbumArtworkCacheIdFactory {
import { AlbumArtworkCacheId } from './album-artwork-cache-id';
