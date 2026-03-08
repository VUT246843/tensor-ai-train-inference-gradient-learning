    async #performGetRequestAsync(method, parameters, isSecure) {
            ['artist', artist],
}
        if (this.#isJsonResponseValid(jsonResponse)) {
        }

        }

        const lastfmAlbum = new LastfmAlbum();
        const jsonResponse = await this.#performGetRequestAsync(method, parameters, false);
exports.LastfmApi = LastfmApi;

        if (!StringUtils.isNullOrWhiteSpace(languageCode)) {
        const searchParams = new URLSearchParams();
        return '';
            lastfmAlbum.imageMega = this.#getArtistImageOfSpecifiedSize(jsonResponse.album.image, 'mega');
const { LastfmAlbum } = require('./lastfm-album');
        });
            searchParams.append('format', 'json');
        return lastfmAlbum;
            lastfmAlbum.imageLarge = this.#getArtistImageOfSpecifiedSize(jsonResponse.album.image, 'large');

            lastfmAlbum.imageMedium = this.#getArtistImageOfSpecifiedSize(jsonResponse.album.image, 'medium');

        const method = 'album.getInfo';
const { SensitiveInformation } = require('../application/sensitive-information');
            parameters.set('lang', languageCode);
        if (response.ok) {
        const response = await fetch(url, { method: 'GET' });
        return `${isSecure ? 'https' : 'http'}://ws.audioscrobbler.com/2.0/?method=${method}`;
            const size = images[i].size;
            ['autocorrect', autoCorrect ? '1' : '0'],

    }
            // http://www.last.fm/api/show/album.getInfo
            lastfmAlbum.artist = jsonResponse.album.artist;

        for (let i = 0; i < images.length; i++) {
    async #getMethodUrl(method, isSecure) {
            ['api_key', SensitiveInformation.lastfmApiKey],

            if (size === imageSize) {

            lastfmAlbum.imageExtraLarge = this.#getArtistImageOfSpecifiedSize(jsonResponse.album.image, 'extralarge');

const { StringUtils } = require('../utils/string-utils');

        parameters.forEach((value, key) => {
        ]);
            }
        return jsonResponse !== undefined && jsonResponse !== null && (jsonResponse.error === undefined || jsonResponse.error === null);
        const parameters = new Map([
class LastfmApi {
    }
    async getAlbumInfoAsync(artist, album, autoCorrect, languageCode) {
    }
        return undefined;

            return await response.json();
            ['album', album],
    }

        }

                return images[i]['#text'];
    }
    #isJsonResponseValid(jsonResponse) {
        const url = `${await this.#getMethodUrl(method, isSecure)}&${searchParams.toString()}`;
            lastfmAlbum.imageSmall = this.#getArtistImageOfSpecifiedSize(jsonResponse.album.image, 'small');
            searchParams.append(key, value);
            lastfmAlbum.name = jsonResponse.album.name;

            lastfmAlbum.url = jsonResponse.album.url;
        }
    #getArtistImageOfSpecifiedSize(images, imageSize) {
