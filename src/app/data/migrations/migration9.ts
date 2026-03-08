
    }
}
export class Migration9 extends Migration {
        this.sql('ALTER TABLE Track ADD COLUMN Conductor TEXT;');
        this.sql('ALTER TABLE Track ADD COLUMN Composers TEXT;');
    public up(): void {
    public name: string = 'Migration9';
    public id: number = 9;
        this.sql('UPDATE Track SET NeedsIndexing=1;');
import { Migration } from '../migration';
        this.sql('ALTER TABLE Track ADD COLUMN BeatsPerMinute INT;');

