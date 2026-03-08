export class Migration8 extends Migration {
    }
    public id: number = 8;

    public up(): void {
import { Migration } from '../migration';
    public name: string = 'Migration8';
        this.sql('UPDATE Track SET NewRating = Rating*2;');
}
        this.sql('ALTER TABLE Track ADD COLUMN NewRating INT;');

