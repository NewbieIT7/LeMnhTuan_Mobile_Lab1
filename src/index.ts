import { Person } from "./bai1";
import { Account } from "./bai10";
import { Student } from "./bai2";
import { Car } from "./bai3";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";
import { Book } from "./bai6";
import { User } from "./bai7";
import { Product } from "./bai8";
import { Animal } from "./bai9";

// Bai 1
console.log('Bai 1:');
const person = new Person('John', 30);
person.display();

// Bai 2
console.log('Bai 2:');
const student = new Student('Alice', 20, 'A');
student.displayAll();

// Bai 3
console.log('Bai 3:');
const car3 = new Car('Toyota', 'Camry', 2020);
car3.showInfo();

// Bai 4
console.log('Bai 4:');
const rect = new Rectangle(5, 10);
console.log('Area:', rect.calculateArea());
console.log('Perimeter:', rect.calculatePerimeter());

// Bai 5
console.log('Bai 5:');
const account5 = new BankAccount(100);
account5.deposit(50);
account5.withdraw(20);
console.log('Balance:', account5.balance);

// Bai 6
console.log('Bai 6:');
const book = new Book('TypeScript Basics', 'Author', 2023);
console.log(book);

// Bai 7
console.log('Bai 7:');
const user = new User('Bob');
console.log('Name:', user.name);
user.name = 'Charlie';
console.log('New Name:', user.name);

// Bai 8
console.log('Bai 8:');
const products = [new Product('Item1', 50), new Product('Item2', 150), new Product('Item3', 200)];
const filtered = products.filter(p => p.price > 100);
console.log('Filtered Products:', filtered);

// Bai 9
console.log('Bai 9:');
class Dog implements Animal {
  name: string = 'Dog';
  sound() { console.log('Woof!'); }
}
const dog = new Dog();
dog.sound();

// Bai 10
console.log('Bai 10:');
const account10 = new Account('123', 1000);
console.log('ID:', account10.id);
console.log('Created At:', account10.createdAt);