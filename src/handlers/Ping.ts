import { SlashHandler, SlashRoute } from '@seedcord/gateway';

@SlashRoute('ping')
export class Ping extends SlashHandler<'ping'> {
    public async execute(): Promise<void> {
        await this.reply('Pong!');
    }
}
