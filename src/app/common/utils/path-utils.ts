        return `file:///${playableAudioFilePath}`;

}
        let playableAudioFilePath: string = StringUtils.replaceAll(audioFilePath, '#', '%23');
import { StringUtils } from './string-utils';
    }

export class PathUtils {
        playableAudioFilePath = StringUtils.replaceAll(playableAudioFilePath, '?', '%3F');
    public static createPlayableAudioFilePath(audioFilePath: string): string {
        // HTMLAudioElement doesn't play paths which contain # and ?, so we escape them.
