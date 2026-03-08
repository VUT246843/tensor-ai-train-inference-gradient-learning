        }
        }


        if (tracks == undefined) {

import { TrackModel } from '../track/track-model';
            if (track.path === playingTrack.path) {
        if (playingTrack == undefined) {
import { Injectable } from '@angular/core';
            }
                track.isPlaying = true;
            subfolder.isPlaying = false;
            return;
    }

        for (const subfolder of subfolders) {
        for (const track of tracks) {

                subfolder.isPlaying = true;
    public setPlayingSubfolder(subfolders: SubfolderModel[] | undefined, playingTrack: TrackModel | undefined): void {

        if (playingTrack == undefined) {
            return;
@Injectable()

    public clearPlayingSubfolder(subfolders: SubfolderModel[] | undefined): void {
        for (const subfolder of subfolders) {
            return;
export class PlaybackIndicationService implements PlaybackIndicationServiceBase {
            }
            track.isPlaying = false;
    public clearPlayingTrack(tracks: TrackModel[] | undefined): void {
import { PathValidator } from '../../common/validation/path-validator';

    public setPlayingTrack(tracks: TrackModel[] | undefined, playingTrack: TrackModel | undefined): void {

            return;
import { PlaybackIndicationServiceBase } from './playback-indication.service.base';
    public constructor(private pathValidator: PathValidator) {}
        if (subfolders == undefined) {
        }

        if (subfolders == undefined) {
        }
    }

        }
    }
        }

}
        }
            if (!subfolder.isGoToParent && this.pathValidator.isParentPath(subfolder.path, playingTrack.path)) {
            return;
            return;
        for (const track of tracks) {

import { SubfolderModel } from '../folder/subfolder-model';
        if (tracks == undefined) {
            subfolder.isPlaying = false;
        }
            track.isPlaying = false;
    }
        }
        }
