    public sql(statement: string): void {

    public abstract up(): void;
        this.statements.push(statement);
}
export abstract class Migration {
    }
    public name: string;
    public statements: string[] = [];
    public id: number;
