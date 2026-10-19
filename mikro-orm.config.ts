import { NullHighlighter } from '@mikro-orm/core';
import { Migrator } from '@mikro-orm/migrations';
import { defineConfig } from '@mikro-orm/pglite';
import { SeedManager } from '@mikro-orm/seeder';
import { SqlHighlighter } from '@mikro-orm/sql-highlighter';
import { Envapter } from 'envapt';

const { isDevelopment } = Envapter;

export default defineConfig({
    dbName: 'seedcord',
    debug: isDevelopment,
    entities: ['./dist/entities/**/*.entity.js'],
    entitiesTs: ['./src/entities/**/*.entity.ts'],
    extensions: [Migrator, SeedManager],
    highlighter: isDevelopment ? new SqlHighlighter() : new NullHighlighter(),
    migrations: {
        path: './dist/migrations',
        pathTs: './src/migrations'
    },
    seeder: {
        path: './dist/seeders',
        pathTs: './src/seeders'
    }
});
