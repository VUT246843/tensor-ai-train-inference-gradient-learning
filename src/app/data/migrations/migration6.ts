    public name: string = 'Migration6';
export class Migration6 extends Migration {
    public id: number = 6;

    public up(): void {
}
    }
import { Migration } from '../migration';

        this.sql('UPDATE Track SET NeedsIndexing=1;');
