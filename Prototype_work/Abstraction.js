"use strict";

const Animal = function (species) {
  this.species = species;
};
Animal.prototype.speak = function () {
  throw new Error("The speak method must be implemented by subclass.");
};

const Dog = function (name) {
  this.name = name;
  Animal.call(this, "Dog"); // Calls Animal Constructor and assign this to Dog;
};

const Cat = function (name) {
  this.name = name;
  Animal.call(this, "Cat");
};

Dog.prototype = Object.create(Animal.prototype); // attaching prototype of Animal with Dog
Cat.prototype = Object.create(Animal.prototype);

Dog.prototype.constructor = Dog;
Cat.prototype.constructor = Cat;
// Resetting the constructor as if we dont do it will point to the constructor of Animal not Dog

Dog.prototype.speak = function () {
  console.log(`${this.name} is a ${this.species} and it barks`);
};

Cat.prototype.speak = function () {
  console.log(`${this.name} is a ${this.species} and it meow`);
};

const tuffy = new Dog("Tuffy");
const ruby = new Cat("Ruby");
tuffy.speak();
ruby.speak();

class Animal2 {
  constructor(species) {
    this.species = species;
  }
  speak() {
    throw new Error("The speak method must be implemented by subclass.");
  }
} // base class

class Dog2 extends Animal2 {
  constructor(name) {
    super("Dog");
    this.name = name;
  }
  speak() {
    console.log(`${this.name} is a ${this.species} and it barks`);
  } // providing the implementation
}

class Cat2 extends Animal2 {
  constructor(name) {
    super("Cat");
    this.name = name;
  }
  speak() {
    console.log(`${this.name} is a ${this.species} and it meow`);
  }
}

const tuffy2 = new Dog2("Tuffy");
const ruby2 = new Dog2("Ruby");

tuffy2.speak();
ruby2.speak();
