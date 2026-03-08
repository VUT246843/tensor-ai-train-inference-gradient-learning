export abstract class SchedulerBase {
    public abstract sleepUntilConditionIsTrueAsync(milliseconds: number, untilMilliseconds: number, condition: boolean): Promise<void>;
}
    public abstract sleepAsync(milliseconds: number): Promise<void>;
