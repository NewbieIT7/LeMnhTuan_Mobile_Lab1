// bai11.ts
export class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

export class Dog extends Animal {
  bark() {
    console.log('Woof!');
  }
}

export class Cat extends Animal {
  meow() {
    console.log('Meow!');
  }
}