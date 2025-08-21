"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai10_1 = require("./bai10");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai6_1 = require("./bai6");
const bai7_1 = require("./bai7");
const bai8_1 = require("./bai8");
// Bai 1
console.log('Bai 1:');
const person = new bai1_1.Person('John', 30);
person.display();
// Bai 2
console.log('Bai 2:');
const student = new bai2_1.Student('Alice', 20, 'A');
student.displayAll();
// Bai 3
console.log('Bai 3:');
const car3 = new bai3_1.Car('Toyota', 'Camry', 2020);
car3.showInfo();
// Bai 4
console.log('Bai 4:');
const rect = new bai4_1.Rectangle(5, 10);
console.log('Area:', rect.calculateArea());
console.log('Perimeter:', rect.calculatePerimeter());
// Bai 5
console.log('Bai 5:');
const account5 = new bai5_1.BankAccount(100);
account5.deposit(50);
account5.withdraw(20);
console.log('Balance:', account5.balance);
// Bai 6
console.log('Bai 6:');
const book = new bai6_1.Book('TypeScript Basics', 'Author', 2023);
console.log(book);
// Bai 7
console.log('Bai 7:');
const user = new bai7_1.User('Bob');
console.log('Name:', user.name);
user.name = 'Charlie';
console.log('New Name:', user.name);
// Bai 8
console.log('Bai 8:');
const products = [new bai8_1.Product('Item1', 50), new bai8_1.Product('Item2', 150), new bai8_1.Product('Item3', 200)];
const filtered = products.filter(p => p.price > 100);
console.log('Filtered Products:', filtered);
// Bai 9
console.log('Bai 9:');
class Dog {
    constructor() {
        this.name = 'Dog';
    }
    sound() { console.log('Woof!'); }
}
const dog = new Dog();
dog.sound();
// Bai 10
console.log('Bai 10:');
const account10 = new bai10_1.Account('123', 1000);
console.log('ID:', account10.id);
console.log('Created At:', account10.createdAt);
