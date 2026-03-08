
            const url = 'https://api.github.com/repos/foo/bar/releases';
        });
            expect(result).toBe('');
            const result = await gitHubApi.getLatestReleaseAsync('foo', 'bar', false);

            httpClientMock.setup((x) => x.get<any[]>(url)).returns(() => of([{ prerelease: true, tag_name: 'v2.0.0-preview' }]));
        });
            // Arrange
        });
            httpClientMock
            httpClientMock
    function createGitHubApi() {

            // Act
            // Act
            expect(result).toBe('3.0.0-preview');

        it('should return first non-prerelease when prereleases are excluded', async () => {


    describe('getLatestReleaseAsync', () => {
            const url = 'https://api.github.com/repos/foo/bar/releases';


                    of([
            const result = await gitHubApi.getLatestReleaseAsync('foo', 'bar', true);
import { GitHubApi } from './git-hub.api';

            // Arrange
            httpClientMock.verify((x) => x.get<any[]>(url), Times.once());

            const gitHubApi = createGitHubApi();
                .setup((x) => x.get<any[]>(url))
    let httpClientMock: IMock<HttpClient>;
                .setup((x) => x.get<any[]>(url))
                        { prerelease: false, tag_name: 'v1.0.0' },
            const url = 'https://api.github.com/repos/foo/bar/releases';

                        { prerelease: true, tag_name: 'v3.0.0-preview' },
                    ]),
            // Assert
                        { prerelease: true, tag_name: 'v3.0.0-preview' },
            httpClientMock.verify((x) => x.get<any[]>(url), Times.once());

            expect(result).toBe('');
            httpClientMock.setup((x) => x.get<any[]>(url)).returns(() => of([]));
            // Arrange


        it('should return first release when prereleases are included', async () => {

    beforeEach(() => {
            const gitHubApi = createGitHubApi();
        it('should return empty string when tag_name is missing', async () => {
        httpClientMock = Mock.ofType<HttpClient>();
            // Act
import { of, throwError } from 'rxjs';
            const result = await gitHubApi.getLatestReleaseAsync('foo', 'bar', true);
        });
            const url = 'https://api.github.com/repos/foo/bar/releases';

            // Act
        return new GitHubApi(httpClientMock.object);
            const gitHubApi = createGitHubApi();
                        { prerelease: false, tag_name: 'v2.0.0' },
            // Assert
            expect(result).toBe('');

            // Arrange
        it('should return empty string when response is empty', async () => {
                    of([
});
            httpClientMock.verify((x) => x.get<any[]>(url), Times.once());
describe('GitHubApi', () => {
            // Act
            const gitHubApi = createGitHubApi();
            const gitHubApi = createGitHubApi();
                .returns(() =>


                );
                        { prerelease: false, tag_name: 'v2.0.0' },
                    ]),
        it('should return empty string when only prereleases exist and prereleases are excluded', async () => {
            // Assert
            // Arrange
            const result = await gitHubApi.getLatestReleaseAsync('foo', 'bar', false);
            // Assert
            httpClientMock.verify((x) => x.get<any[]>(url), Times.once());

            // Assert
import { IMock, Mock, Times } from 'typemoq';

    }
            expect(result).toBe('2.0.0');
import { HttpClient } from '@angular/common/http';
            httpClientMock.verify((x) => x.get<any[]>(url), Times.once());
                );
        });
                .returns(() =>
            httpClientMock.setup((x) => x.get<any[]>(url)).returns(() => of([{ prerelease: false }]));

            const result = await gitHubApi.getLatestReleaseAsync('foo', 'bar', true);
    });
    });
            const url = 'https://api.github.com/repos/foo/bar/releases';

