
export class Migration3 extends Migration {
    }

    public id: number = 3;
import { Migration } from '../migration';
    public name: string = 'Migration3';
        this.sql('UPDATE Track SET NeedsAlbumArtworkIndexing=1;');
    public up(): void {
}
