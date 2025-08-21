// bai15.ts
import { Book } from './bai6';
import { User } from './bai7';

export class Library {
  books: Book[] = [];
  users: User[] = [];

  addBook(book: Book) {
    this.books.push(book);
  }
}