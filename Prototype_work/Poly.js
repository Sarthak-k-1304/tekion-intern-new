"use strict";

const Animal = function () {};
Animal.prototype.speak = function () {
  console.log("Animal speaks");
};

const Dog = function () {
  Animal.call(this);
};

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
  console.log("Dog barks");
};

const animal = new Animal();
const dog = new Dog();

animal.speak();
dog.speak(); // this is overriding

class Animal2 {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog2 extends Animal2 {
  // overriding
  speak() {
    console.log("Dog Barks");
  }
}
const animal2 = new Animal2();
const dog2 = new Dog2();
animal2.speak();
dog2.speak(); // overriden
