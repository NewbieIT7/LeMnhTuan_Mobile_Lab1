// bai27.ts
import { Person } from './bai1';

export class Teacher extends Person {
  subject: string;

  constructor(name: string, age: number, subject: string) {
    super(name, age);
    this.subject = subject;
  }

  introduce() {
    console.log(`I am ${this.name}, teaching ${this.subject}`);
  }
}