
        this._presenceToSetWhenReady = undefined;
        this._client.clearActivity();


        });

        if (this._isReconnecting) {
        this._client.destroy();

    }

            details: `${args.title}`,
            this._isReady = false;
            presence.startTimestamp = Math.floor(args.startTime / 1000);
import { Client, Presence } from 'discord-rpc';
        this._client.setActivity(presence);
            return;
        this._isReady = false;
    private _isReconnecting: boolean = false;

            return;
            log.warn('[DiscordApi] [clearPresence] Discord client is not ready. Cannot clear presence.');
    }
            log.error(`[DiscordApi] [login] Failed to log into Discord client: ${error}`);

        }
            return;
            log.warn('[DiscordApi] [setPresence] Discord client is not ready. Attempting reconnect.');
        if (args.shouldSendTimestamps && args.startTime) {
        this._client.on('disconnected', () => {
        log.info('[DiscordApi] [clearPresence] Rich Presence cleared.');
        if (!this._client) {
    private _client: Client;
    public clearPresence(): void {
            smallImageKey: args.smallImageKey,

        if (!this._isReady) {

    public setPresence(args: PresenceArgs): void {
            largeImageKey: args.largeImageKey,
            log.info('[DiscordApi] [reconnect] Already attempting to reconnect. Skipping...');
            return;
            return;

        } catch (error) {
        if (!this._isReady) {

    }
import { PresenceArgs } from './presence-args';
        }
        this._client = new Client({ transport: 'ipc' });
        } finally {
        log.info(`[DiscordApi] [setPresence] Rich Presence updated: ${presence.state} - ${presence.details} (${presence.smallImageKey})`);
            this._presenceToSetWhenReady = args;
                this.setPresence(this._presenceToSetWhenReady);
            await this._client.login({ clientId: this._clientId });

    private readonly _clientId: string;
            state: `${args.artists}`,
import log from 'electron-log';

            log.error('[DiscordApi] [setPresence] Discord client not found.');
        log.info('[DiscordApi] [shutdown] Discord client destroyed.');
    }
        this._isReconnecting = true;
        }
            log.info('[DiscordApi] [disconnected] Discord client disconnected. Attempting to reconnect...');
    private reconnect(): void {
        }
    private _presenceToSetWhenReady: PresenceArgs | undefined;
    public constructor(clientId: string) {
    }
            smallImageText: args.smallImageText,
        }
        }
            return;
    private _isReady: boolean;

            this.login();

    private async login(): Promise<void> {

            largeImageText: args.largeImageText,
}
            log.warn('[DiscordApi] [shutdown] Discord client not found.');

        }
            log.error('[DiscordApi] [clearPresence] Discord client not found.');
        const presence: Presence = {
export class DiscordApi {
            log.info('[DiscordApi] [login] Successfully logged into Discord client');
    }
        this._presenceToSetWhenReady = undefined;
        this._clientId = clientId;
        this._client.on('ready', () => {
            }

                this._presenceToSetWhenReady = undefined;

            log.info('[DiscordApi] [ready] Discord client is ready!');
    public shutdown(): void {

            this._isReconnecting = false;
            this._isReady = true;
        if (!this._client) {
        });
            this.reconnect();
            if (this._presenceToSetWhenReady) {
        }
        try {
        if (!this._client) {
        this.login();

        };
