"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
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
