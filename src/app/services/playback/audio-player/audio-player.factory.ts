            this.logger.info('Creating GaplessAudioPlayer for audio playback.', 'AudioPlayerFactory', 'create');
            return new CrossfadeAudioPlayer(this.mathExtensions, this.settings, this.logger);
        }
            return new GaplessAudioPlayer(this.mathExtensions, this.logger);
    }
        private mathExtensions: MathExtensions,
@Injectable({ providedIn: 'root' })
    public constructor(
import { CrossfadeAudioPlayer } from './crossfade-audio-player';
        } else if (this.settings.useGaplessPlayback) {
export class AudioPlayerFactory {
import { Injectable } from '@angular/core';
import { MathExtensions } from '../../../common/math-extensions';
}
    public create(): IAudioPlayer {
        } else {

            this.logger.info('Creating CrossfadeAudioPlayer for audio playback.', 'AudioPlayerFactory', 'create');
import { GaplessAudioPlayer } from './gapless-audio-player';
    ) {}
        if (this.settings.useCrossfade) {
        private settings: SettingsBase,
            return new LegacyAudioPlayer(this.mathExtensions, this.logger);
        private logger: Logger,
            this.logger.info('Creating LegacyAudioPlayer for audio playback.', 'AudioPlayerFactory', 'create');
import { IAudioPlayer } from './i-audio-player';
import { SettingsBase } from '../../../common/settings/settings.base';

import { LegacyAudioPlayer } from './legacy-audio-player';
import { Logger } from '../../../common/logger';
