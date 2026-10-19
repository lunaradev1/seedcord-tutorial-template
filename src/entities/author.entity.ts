import { BaseEntity, defineEntity, p } from '@mikro-orm/core';
import { Book } from './book.entity';

const AuthorSchema = defineEntity({
    name: 'Author',
    extends: BaseEntity,
    properties: {
        id: p.integer().primary(),
        name: p.string(),
        createdAt: p
            .datetime()
            .onCreate(() => new Date())
            .defaultRaw('now()'),
        updatedAt: p
            .datetime()
            .onUpdate(() => new Date())
            .defaultRaw('now()'),
        books: () => p.manyToMany(Book)
    }
});

export class Author extends AuthorSchema.class {}

AuthorSchema.setClass(Author);
