"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai10_1 = require("./bai10");
const bai11_1 = require("./bai11");
const bai12_1 = require("./bai12");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
const bai15_1 = require("./bai15");
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
class Dog1 {
    constructor() {
        this.name = 'Dog';
    }
    sound() { console.log('Woof!'); }
}
const dog = new Dog1();
dog.sound();
// Bai 10
console.log('Bai 10:');
const account10 = new bai10_1.Account('123', 1000);
console.log('ID:', account10.id);
console.log('Created At:', account10.createdAt);
// Bai 11
console.log('Bai 11:');
const dog11 = new bai11_1.Dog('Buddy');
dog11.bark();
const cat11 = new bai11_1.Cat('Whiskers');
cat11.meow();
// Bai 12
console.log('Bai 12:');
const bird = new bai12_1.Bird();
bird.fly();
const fish = new bai12_1.Fish();
fish.swim();
// Bai 13
console.log('Bai 13:');
const square = new bai13_1.Square(4);
console.log('Square Area:', square.area());
const circle = new bai13_1.Circle(3);
console.log('Circle Area:', circle.area());
// Bai 14
console.log('Bai 14:');
const manager = new bai14_1.Manager('Eve');
manager.manageTeam();
const developer = new bai14_1.Developer('Frank');
developer.code();
// Bai 15
console.log('Bai 15:');
const library = new bai15_1.Library();
const book15 = new bai6_1.Book('Book1', 'Author1', 2020);
library.addBook(book15);
console.log('Books in Library:', library.books);
