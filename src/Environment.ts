import { resolve } from 'node:path'
import { Converters, Envapter } from 'envapt'
import { Envapt } from 'envapt/legacy'
import { z } from 'zod/v4'

const webhookUrl = z.url().startsWith('https://discord.com/api/webhooks')

Envapter.baseDir = resolve(import.meta.dirname, '..')

export class Environment extends Envapter {
    @Envapt('DISCORD_BOT_TOKEN', { converter: Converters.String, required: true })
    declare public readonly DISCORD_BOT_TOKEN: string

    @Envapt('UNKNOWN_EXCEPTION_WEBHOOK_URL', { schema: webhookUrl.optional() })
    declare public readonly UNKNOWN_EXCEPTION_WEBHOOK_URL: string | undefined

    @Envapt('HANDLED_EXCEPTION_WEBHOOK_URL', { schema: webhookUrl.optional() })
    declare public readonly HANDLED_EXCEPTION_WEBHOOK_URL: string | undefined

    @Envapt('ENV', { schema: z.enum(['development', 'production']), fallback: 'development' })
    declare public readonly ENV: 'development' | 'production'

    @Envapt('TEST_GUILD_IDS', { converter: Converters.array({ of: 'string' }), fallback: [] })
    declare public readonly TEST_GUILD_IDS: string[]
}
