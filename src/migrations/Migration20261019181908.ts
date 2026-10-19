import { Migration } from '@mikro-orm/migrations';

export class Migration20261019181908 extends Migration {

  override name = 'Migration20261019181908';

  override up(): void | Promise<void> {
    this.addSql(`create table "author" ("id" serial primary key, "name" varchar(255) not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now());`);

    this.addSql(`create table "book" ("id" serial primary key, "title" varchar(255) not null, "description" varchar(255) null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now());`);

    this.addSql(`create table "author_books" ("author_id" int not null, "book_id" int not null, primary key ("author_id", "book_id"));`);

    this.addSql(`create table "book_authors" ("book_id" int not null, "author_id" int not null, primary key ("book_id", "author_id"));`);

    this.addSql(`alter table "author_books" add constraint "author_books_author_id_foreign" foreign key ("author_id") references "author" ("id") on update cascade on delete cascade;`);
    this.addSql(`alter table "author_books" add constraint "author_books_book_id_foreign" foreign key ("book_id") references "book" ("id") on update cascade on delete cascade;`);

    this.addSql(`alter table "book_authors" add constraint "book_authors_book_id_foreign" foreign key ("book_id") references "book" ("id") on update cascade on delete cascade;`);
    this.addSql(`alter table "book_authors" add constraint "book_authors_author_id_foreign" foreign key ("author_id") references "author" ("id") on update cascade on delete cascade;`);
  }

}
