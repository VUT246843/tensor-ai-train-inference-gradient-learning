        return selectAlbumArtistsQueryPart;
        return selectAlbumDataQueryPart;
        let selectGenresQueryPart: string = `SELECT DISTINCT t.Genres as genres FROM Track t`;
                                                             t.NeedsIndexing AS needsIndexing,
            selectAlbumDataQueryPart += ' ' + this.folderJoins();
        if (onlyVisibleArtists) {
                                                             t.DateLastSynced AS dateLastSynced,


        let selectAlbumArtistsQueryPart: string = `SELECT DISTINCT t.AlbumArtists as artists FROM Track t`;
                                                             t.FileName AS fileName,
        let selectAlbumDataQueryPart: string = `SELECT t.AlbumTitle AS albumTitle,
                                                             t.Year AS year,
            selectAlbumArtistsQueryPart += ' ' + this.folderJoins();
    public static selectAlbumDataQueryPart(albumKeyIndex: string, onlyVisibleAlbumData: boolean): string {
        return selectTracksQueryPart;
                                                             t.AlbumKey AS albumKey,

                                                             t.BitRate AS bitRate,
        if (onlyVisibleAlbumData) {
        }
                                                             t.TrackNumber AS trackNumber,
                                                             t.Duration AS duration,
                                                             t.DateAdded AS dateAdded,
    public static selectAlbumArtistsQueryPart(onlyVisibleArtists: boolean): string {
        let selectTrackArtistsQueryPart: string = `SELECT DISTINCT t.Artists as artists FROM Track t`;
                                                             t.BeatsPerMinute AS beatsPerMinute
                                                             t.Artists AS artists,
        return `INNER JOIN FolderTrack ft ON ft.TrackID = t.TrackID
        let selectTracksQueryPart: string = `SELECT DISTINCT t.TrackID AS trackId,
                                                             t.HasLyrics AS hasLyrics,
                                                             t.TrackCount AS trackCount,
                                                             t.MimeType AS mimeType,
                                                             t.DateLastPlayed AS dateLastPlayed,
                                                             t.Conductor AS conductor,
                                                             t.PlayCount AS playCount,
                                                             t.NeedsAlbumArtworkIndexing AS needsAlbumArtworkIndexing,
                                                             t.IndexingFailureReason AS indexingFailureReason,
                                                             t.Genres AS genres,
                                                       SUM(t.PlayCount) AS playCount FROM Track t
export class QueryParts {
                WHERE f.ShowInCollection = 1 AND t.IndexingSuccess = 1 AND t.NeedsIndexing = 0`;
                                                             t.Love AS love,
                                                             t.SampleRate AS sampleRate,
    }
                                                             t.NewRating AS rating,
        return selectGenresQueryPart;
                                                       t.AlbumArtists AS albumArtists,

        if (onlyVisibleArtists) {
                                                       GROUP_CONCAT(distinct t.Genres) AS genres,
    }

                                                             t.DateFileCreated AS dateFileCreated,
    public static selectGenresQueryPart(onlyVisibleGenres: boolean): string {

            selectTrackArtistsQueryPart += ' ' + this.folderJoins();
        if (onlyVisibleGenres) {

        }
        return selectTrackArtistsQueryPart;
                                                       LEFT JOIN AlbumArtwork a ON t.AlbumKey${albumKeyIndex}=a.AlbumKey`;
            selectTracksQueryPart += ' ' + this.folderJoins();
                                                             t.FileSize AS fileSize,
                INNER JOIN Folder f ON ft.FolderID = f.FolderID

    }
    public static selectTracksQueryPart(onlyVisibleTracks: boolean): string {
    }
}
    }
                                                       a.ArtworkID as artworkId,
                                                             t.DiscCount AS discCount,
                                                             t.AlbumKey3 AS albumKey3,
                                                             t.DiscNumber AS discNumber,

    }
                                                             t.TrackTitle AS trackTitle,
        }
                                                             t.IndexingSuccess AS indexingSuccess,
                                                             FROM Track t`;

                                                             t.Composers AS composers,
        if (onlyVisibleTracks) {
                                                       MAX(t.DateFileCreated) AS dateFileCreated,
                                                             t.SkipCount AS skipCount,
                                                             t.Path AS path,
            selectGenresQueryPart += ' ' + this.folderJoins();
    public static selectTrackArtistsQueryPart(onlyVisibleArtists: boolean): string {
        }


                                                       MAX(t.DateAdded) AS dateAdded,
                                                       MAX(t.Year) AS year,
        }
                                                       MAX(t.Artists) AS artists,
                                                             t.DateFileModified AS dateFileModified,
                                                             t.AlbumKey2 AS albumKey2,
                                                             t.AlbumArtists AS albumArtists,


                                                       t.AlbumKey${albumKeyIndex} AS albumKey,
                                                       MAX(t.DateLastPlayed) AS dateLastPlayed,

    private static folderJoins(): string {
                                                             t.AlbumTitle AS albumTitle,
