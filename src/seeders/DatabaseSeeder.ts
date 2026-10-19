import type { EntityManager } from '@mikro-orm/core';
import { Seeder } from '@mikro-orm/seeder';
import { Author } from '../entities/author.entity';
import { Book } from '../entities/book.entity';

export class DatabaseSeeder extends Seeder {
    async run(em: EntityManager): Promise<void> {
        const forked = em.fork();

        const author = forked.create(Author, { name: 'Franz Kafka' });
        const otherAuthor = forked.create(Author, { name: 'William Shakespeare' });
        const book = forked.create(Book, {
            title: 'The Metamorphosis',
            description: 'A sample book description',
            authors: [author]
        });
        const franzBook2 = forked.create(Book, {
            title: 'A Hunger Artist',
            description: 'Another book by Franz Kafka',
            authors: [author]
        });
        const otherBook = forked.create(Book, {
            title: 'Hamlet',
            description: 'Another sample book description',
            authors: [otherAuthor]
        });

        await forked.persist([author, otherAuthor, book, franzBook2, otherBook]).flush();
    }
}
