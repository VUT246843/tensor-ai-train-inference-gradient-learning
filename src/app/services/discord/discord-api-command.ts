import { PresenceArgs } from './presence-args';
export class DiscordApiCommand {
import { DiscordApiCommandType } from './discord-api-command-type';
    ) {}
        public args: PresenceArgs | undefined,
        public commandType: DiscordApiCommandType,
    public constructor(
}

