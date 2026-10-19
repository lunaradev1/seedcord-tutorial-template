import { resolve } from 'node:path';

import { Seedcord } from '@seedcord/gateway';
import { GatewayIntentBits } from 'discord.js';

const { dirname } = import.meta;

export const seedcord = new Seedcord({
    bot: {
        clientOptions: {
            intents: [GatewayIntentBits.DirectMessages, GatewayIntentBits.Guilds]
        },
        interactions: {
            path: resolve(dirname, './handlers')
        },
        commands: {
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
