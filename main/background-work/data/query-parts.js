                                                             t.FileName AS fileName,
                                                             t.AlbumTitle AS albumTitle,
        return `INNER JOIN FolderTrack ft ON ft.TrackID = t.TrackID
                                                       t.AlbumKey${albumKeyIndex} AS albumKey,

            selectTrackArtistsQueryPart += ' ' + this.#folderJoins();
        return selectAlbumDataQueryPart;
        let selectGenresQueryPart = `SELECT DISTINCT t.Genres as genres FROM Track t`;
                                                             t.Love AS love,
                                                             t.IndexingFailureReason AS indexingFailureReason,
exports.QueryParts = QueryParts;
                                                             t.Path AS path,
    }
    static selectTrackArtistsQueryPart(onlyVisibleArtists) {
        }
                                                             t.Rating AS rating,
                                                             t.IndexingSuccess AS indexingSuccess,
            selectAlbumArtistsQueryPart += ' ' + this.#folderJoins();
                                                             t.TrackNumber AS trackNumber,
                                                             t.DateFileCreated AS dateFileCreated,
                                                             t.MimeType AS mimeType,
                                                       MAX(t.Year) AS year,
                                                             t.AlbumKey AS albumKey,
                                                       MAX(t.DateAdded) AS dateAdded,

                                                             t.Year AS year,
    static selectTracksQueryPart(onlyVisibleTracks) {
                                                             t.DateFileModified AS dateFileModified,
                                                             t.HasLyrics AS hasLyrics,
                                                             t.NeedsIndexing AS needsIndexing,
    static #folderJoins() {
        let selectAlbumDataQueryPart = `SELECT t.AlbumTitle AS albumTitle,
        return selectAlbumArtistsQueryPart;
                WHERE f.ShowInCollection = 1 AND t.IndexingSuccess = 1 AND t.NeedsIndexing = 0`;
    }



        if (onlyVisibleGenres) {
}
                                                             t.SkipCount AS skipCount,
                                                       a.ArtworkID as artworkId,
                                                             t.FileSize AS fileSize,
    }

        return selectGenresQueryPart;
        }
    }
        if (onlyVisibleAlbumData) {

                                                             t.DateLastPlayed AS dateLastPlayed

                                                             t.BitRate AS bitRate,
                INNER JOIN Folder f ON ft.FolderID = f.FolderID
                                                             t.DiscNumber AS discNumber,

                                                             t.NeedsAlbumArtworkIndexing AS needsAlbumArtworkIndexing,
        }
                                                             t.PlayCount AS playCount,
        if (onlyVisibleArtists) {
    static selectGenresQueryPart(onlyVisibleGenres) {
    static selectAlbumDataQueryPart(albumKeyIndex, onlyVisibleAlbumData) {
        let selectTrackArtistsQueryPart = `SELECT DISTINCT t.Artists as artists FROM Track t`;
                                                             t.AlbumKey3 AS albumKey3,

                                                             t.AlbumArtists AS albumArtists,

class QueryParts {
                                                             t.DateAdded AS dateAdded,
                                                             t.DateLastSynced AS dateLastSynced,
                                                             t.AlbumKey2 AS albumKey2,
        }
                                                             FROM Track t`;
                                                             t.Artists AS artists,
        return selectTrackArtistsQueryPart;

                                                             t.TrackCount AS trackCount,
                                                             t.SampleRate AS sampleRate,
        let selectTracksQueryPart = `SELECT DISTINCT t.TrackID AS trackId,
        }
        if (onlyVisibleArtists) {
                                                       LEFT JOIN AlbumArtwork a ON t.AlbumKey${albumKeyIndex}=a.AlbumKey`;
                                                             t.TrackTitle AS trackTitle,
                                                       MAX(t.DateFileCreated) AS dateFileCreated,
            selectGenresQueryPart += ' ' + this.#folderJoins();
                                                       MAX(t.DateLastPlayed) AS dateLastPlayed FROM Track t

        if (onlyVisibleTracks) {
    }
                                                       t.AlbumArtists AS albumArtists,

                                                             t.Duration AS duration,
                                                       MAX(t.Artists) AS artists,
        return selectTracksQueryPart;
    }
    static selectAlbumArtistsQueryPart(onlyVisibleArtists) {
            selectTracksQueryPart += ' ' + this.#folderJoins();
                                                             t.DiscCount AS discCount,
        let selectAlbumArtistsQueryPart = `SELECT DISTINCT t.AlbumArtists as artists FROM Track t`;
            selectAlbumDataQueryPart += ' ' + this.#folderJoins();


                                                             t.Genres AS genres,
