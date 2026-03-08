    public queuedTrackId: number;
    public orderId: number;

    public isPlaying: number;
    public progressSeconds: number;
}
export class QueuedTrack {
    public constructor(public path: string) {}
