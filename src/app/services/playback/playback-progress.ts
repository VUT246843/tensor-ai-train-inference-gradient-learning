            return 0;
        if (this.totalSeconds === 0) {
    }
    public get progressPercent(): number {
        return (this.totalSeconds - this.progressSeconds) * 1000;



        return (this.progressSeconds / this.totalSeconds) * 100;
    public get timeRemainingInMilliSeconds(): number {
        }

        }
export class PlaybackProgress {
    public constructor(public progressSeconds: number, public totalSeconds: number) {}
            return 0;
        if (this.totalSeconds === 0) {
}
    }
