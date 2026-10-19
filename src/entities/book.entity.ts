import { BaseEntity, defineEntity, p } from '@mikro-orm/core';
import { Author } from './author.entity';

const BookSchema = defineEntity({
    name: 'Book',
    extends: BaseEntity,
    properties: {
        id: p.integer().primary(),
        title: p.string(),
        description: p.string().nullable().default(null),
        createdAt: p
            .datetime()
            .onCreate(() => new Date())
            .defaultRaw('now()'),
        updatedAt: p
            .datetime()
            .onUpdate(() => new Date())
            .defaultRaw('now()'),
        authors: () => p.manyToMany(Author)
    }
});

export class Book extends BookSchema.class {}

BookSchema.setClass(Book);
