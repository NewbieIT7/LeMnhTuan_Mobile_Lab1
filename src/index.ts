import { Person } from "./bai1";
import { Account } from "./bai10";
import { Cat, Dog, } from "./bai11";
import { Bird, Fish } from "./bai12";
import { Circle, Square } from "./bai13";
import { Developer, Manager } from "./bai14";
import { Library } from "./bai15";
import { Box } from "./bai16";
import { Logger } from "./bai17";
import { MathUtil } from "./bai18";
import { Animal19, Cat19, Dog19 } from "./bai19";
import { Student } from "./bai2";
import { Bike, Car20 } from "./bai20";
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
class Dog1 implements Animal {
  name: string = 'Dog';
  sound() { console.log('Woof!'); }
}
const dog = new Dog1();
dog.sound();

// Bai 10
console.log('Bai 10:');
const account10 = new Account('123', 1000);
console.log('ID:', account10.id);
console.log('Created At:', account10.createdAt);

// Bai 11
console.log('Bai 11:');
const dog11 = new Dog('Buddy');
dog11.bark();
const cat11 = new Cat('Whiskers');
cat11.meow();

// Bai 12
console.log('Bai 12:');
const bird = new Bird();
bird.fly();
const fish = new Fish();
fish.swim();

// Bai 13
console.log('Bai 13:');
const square = new Square(4);
console.log('Square Area:', square.area());
const circle = new Circle(3);
console.log('Circle Area:', circle.area());

// Bai 14
console.log('Bai 14:');
const manager = new Manager('Eve');
manager.manageTeam();
const developer = new Developer('Frank');
developer.code();

// Bai 15
console.log('Bai 15:');
const library = new Library();
const book15 = new Book('Book1', 'Author1', 2020);
library.addBook(book15);
console.log('Books in Library:', library.books);

// Bai 16
console.log('Bai 16:');
const boxString = new Box<string>('Hello');
console.log('Box Value:', boxString.value);

// Bai 17
console.log('Bai 17:');
const logger = Logger.getInstance();
logger.log('Log message');

// Bai 18
console.log('Bai 18:');
console.log('Add:', MathUtil.add(5, 3));
console.log('Subtract:', MathUtil.subtract(5, 3));
console.log('Multiply:', MathUtil.multiply(5, 3));
console.log('Divide:', MathUtil.divide(5, 3));

// Bai 19
console.log('Bai 19: Demonstrate method overriding using polymorphism');
const animals: Animal19[] = [new Dog19('Buddy'), new Cat19('Whiskers')];
animals.forEach(animal => {
    animal.makeSound();
});

// Bai 20
console.log('Bai 20:');
const car20 = new Car20();
car20.start();
const bike = new Bike();
bike.start();


