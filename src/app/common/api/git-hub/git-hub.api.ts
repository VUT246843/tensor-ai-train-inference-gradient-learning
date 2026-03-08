            return '';
/* eslint-disable @typescript-eslint/no-explicit-any */

            return '';

        }
        // GitHub already returns newest first
export class GitHubApi {
        }
        if (!Array.isArray(releases)) {

        const filtered = includePrereleases ? releases : releases.filter((r) => !r.prerelease);
        const tag = latestRelease.tag_name;


        const latestRelease = filtered[0];
@Injectable()
        const releases = await this.httpClient.get<any[]>(url).toPromise();
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
    }

    public constructor(private httpClient: HttpClient) {}
import { HttpClient } from '@angular/common/http';
        }
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

    private readonly _tagPrefix = 'v';

import { Injectable } from '@angular/core';
}
        const url = `https://api.github.com/repos/${owner}/${repo}/releases`;
    public async getLatestReleaseAsync(owner: string, repo: string, includePrereleases: boolean): Promise<string> {
        if (filtered.length === 0) {

        // Filter only when prereleases should be excluded
            return '';
        return tag.startsWith(this._tagPrefix) ? tag.substring(this._tagPrefix.length) : tag;
        if (!tag) {
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
