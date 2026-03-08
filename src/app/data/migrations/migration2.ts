}
export class Migration2 extends Migration {

    public up(): void {
    public id: number = 2;

    public name: string = 'Migration2';
    }
import { Migration } from '../migration';
        this.sql('UPDATE Track SET NeedsAlbumArtworkIndexing=1;');
