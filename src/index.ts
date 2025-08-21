import { Person } from "./bai1";
import { Student } from "./bai2";
import { Car } from "./bai3";
import { Rectangle } from "./bai4";
import { BankAccount } from "./bai5";

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