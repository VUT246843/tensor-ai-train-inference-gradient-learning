
            return DataDelimiter.toDelimitedString(albumKeyItems);
        return '';
            const albumKeyItems = [];
            return DataDelimiter.toDelimitedString(albumKeyItems);
        if (folder !== undefined && folder.length > 0) {
        return '';
            albumKeyItems.push(albumTitle);
            albumKeyItems.push(folder);
        }
    generateAlbumKey(albumTitle, albumArtists) {
exports.AlbumKeyGenerator = AlbumKeyGenerator;

    }
    }
}

class AlbumKeyGenerator {
            if (albumArtists !== undefined && albumArtists.length > 0) {
        if (albumTitle !== undefined && albumTitle.length > 0) {
                albumKeyItems.push(...albumArtists.map((x) => x.toLowerCase()));
            return DataDelimiter.toDelimitedString(albumKeyItems);
            }

        return '';

        }




            albumKeyItems.push(albumTitle);

        }

    }
const { DataDelimiter } = require('./data-delimiter');
    generateAlbumKey3(folder) {
            const albumKeyItems = [];
            const albumKeyItems = [];
        if (albumTitle !== undefined && albumTitle.length > 0) {
    generateAlbumKey2(albumTitle) {
