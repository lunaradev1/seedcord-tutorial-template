import { resolve } from 'node:path';

import { Seedcord } from '@seedcord/gateway';
import { GatewayIntentBits } from 'discord.js';
import { Converters, Envapter } from 'envapt';

const { dirname } = import.meta;

Envapter.baseDir = resolve(import.meta.dirname, '..');

const testGuildIds = Envapter.isDevelopment
    ? Envapter.getUsing('TEST_GUILD_IDS', Converters.array({ of: 'string' }), [])
    : [];

export const seedcord = new Seedcord({
    bot: {
        clientOptions: {
            intents: [GatewayIntentBits.DirectMessages, GatewayIntentBits.Guilds]
        },
        interactions: {
            path: resolve(dirname, './handlers')
        },
        commands: {
            guilds: testGuildIds,
            path: resolve(dirname, './commands')
        },
        events: {
            path: resolve(dirname, './events')
        }
    },
    subscribers: {
        path: null
    },
    botColor: 'Blurple', // Feel free to change this.
    notifications: {
        // Replace with your actual Discord username.
        developerUsername: '<your username>'
    }
});

export default seedcord;
