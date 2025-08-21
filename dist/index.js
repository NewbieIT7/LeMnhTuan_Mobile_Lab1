"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai10_1 = require("./bai10");
const bai11_1 = require("./bai11");
const bai12_1 = require("./bai12");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
const bai15_1 = require("./bai15");
const bai16_1 = require("./bai16");
const bai17_1 = require("./bai17");
const bai18_1 = require("./bai18");
const bai19_1 = require("./bai19");
const bai2_1 = require("./bai2");
const bai20_1 = require("./bai20");
const bai21_1 = require("./bai21");
const bai22_1 = require("./bai22");
const bai23_1 = require("./bai23");
const bai24_1 = require("./bai24");
const bai25_1 = require("./bai25");
const bai26_1 = require("./bai26");
const bai27_1 = require("./bai27");
const bai29_1 = require("./bai29");
const bai3_1 = require("./bai3");
const bai30_1 = require("./bai30");
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
// Bai 16
console.log('Bai 16:');
const boxString = new bai16_1.Box('Hello');
console.log('Box Value:', boxString.value);
// Bai 17
console.log('Bai 17:');
const logger = bai17_1.Logger.getInstance();
logger.log('Log message');
// Bai 18
console.log('Bai 18:');
console.log('Add:', bai18_1.MathUtil.add(5, 3));
console.log('Subtract:', bai18_1.MathUtil.subtract(5, 3));
console.log('Multiply:', bai18_1.MathUtil.multiply(5, 3));
console.log('Divide:', bai18_1.MathUtil.divide(5, 3));
// Bai 19
console.log('Bai 19: Demonstrate method overriding using polymorphism');
const animals = [new bai19_1.Dog19('Buddy'), new bai19_1.Cat19('Whiskers')];
animals.forEach(animal => {
    animal.makeSound();
});
// Bai 20
console.log('Bai 20:');
const car20 = new bai20_1.Car20();
car20.start();
const bike = new bai20_1.Bike();
bike.start();
// Bai 21
console.log('Bai 21:');
const repo = new bai21_1.Repository();
repo.add('Item1');
console.log('All Items:', repo.getAll());
// Bai 22
console.log('Bai 22:');
const stack = new bai22_1.Stack();
stack.push(1);
stack.push(2);
console.log('Peek:', stack.peek());
console.log('Pop:', stack.pop());
console.log('Is Empty:', stack.isEmpty());
// Bai 23
console.log('Bai 23:');
const cash = new bai23_1.CashPayment();
cash.pay(100);
const card = new bai23_1.CardPayment();
card.pay(200);
// Bai 24
console.log('Bai 24:');
const fan = new bai24_1.Fan();
fan.turnOn();
const ac = new bai24_1.AirConditioner();
ac.turnOn();
// Bai 25
console.log('Bai 25:');
bai25_1.Shape.describe();
// Bai 26
console.log('Bai 26:');
const order = new bai26_1.Order();
order.addProduct(new bai8_1.Product('Prod1', 50));
order.addProduct(new bai8_1.Product('Prod2', 100));
console.log('Total:', order.calculateTotal());
// Bai 27
console.log('Bai 27:');
const teacher = new bai27_1.Teacher('Mr. Smith', 40, 'Math');
teacher.introduce();
// Bai 28
console.log('Bai 28:');
const dog28 = new bai19_1.Dog19("Dog");
dog28.makeSound();
const cat28 = new bai19_1.Cat19("Cat");
cat28.makeSound();
// Bai 29
console.log('Bai 29:');
const car29 = new bai29_1.Car29();
car29.move();
const robot = new bai29_1.Robot();
robot.move();
// Bai 30
console.log('Bai 30:');
const school = new bai30_1.School();
const student30 = new bai2_1.Student('Student1', 15, 'B');
const teacher30 = new bai27_1.Teacher('Teacher1', 35, 'Science');
school.addStudent(student30);
school.addTeacher(teacher30);
school.displayInfo();
