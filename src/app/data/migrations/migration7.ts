
    public up(): void {
export class Migration7 extends Migration {
        this.sql('UPDATE Track SET NeedsIndexing=1;');
    public id: number = 7;
    }
import { Migration } from '../migration';
}
    public name: string = 'Migration7';

