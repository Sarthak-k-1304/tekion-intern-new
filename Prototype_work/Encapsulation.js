"use strict";

const Person = function (name, age) {
  this.name = name;
  age = age; // Private variable because of scope
  this.getAge = () => {
    console.log(`${this.name} age is ${age}`);
  }; // accesing age by this method;
};

const Sarthak = new Person("Sarthak", 22);
const Fareha = new Person("Fareha", 21);

Sarthak.getAge();
Fareha.getAge();
console.log(Sarthak.age); // undefine becuase of scope
console.log(Fareha.age); // undefined because of scope

// Now the problem here is of prototype i acheived the encapsulation but not able to put getAge in prototype of object rather
// i have to attach it with each object.

class Person2 {
  #age; // private variable
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }
  get age() {
    return this.#age;
  } // getter function
  set age(newAge) {
    this.#age = newAge;
  } // setter function
}
const Aniket = new Person2("Aniket", 23);
console.log(Aniket.age);
Aniket.age = 24;
console.log(Aniket.age);
