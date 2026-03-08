@Injectable({providedIn: 'root'})
            ],
    }

                },
            album: album,


    public clearMetadata(): void {
        window.navigator.mediaSession.setActionHandler(action, () => undefined);
        window.navigator.mediaSession.metadata = null;
        window.navigator.mediaSession.metadata = new MediaMetadata({
}
                {
    }
    public setMetadata(title: string, artist: string, album: string, artwork: string): void {
        window.navigator.mediaSession.setActionHandler(action, handler);

            title: title,
export class MediaSessionProxy {
                    src: artwork,
            artist: artist,
        });
            artwork: [
    public setActionHandler(action: MediaSessionAction, handler: MediaSessionActionHandler): void {
    }
import { Injectable } from '@angular/core';
    public clearActionHandler(action: MediaSessionAction): void {
    }
