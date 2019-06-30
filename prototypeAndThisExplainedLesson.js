// polyfill
Array.prototype.map = function(mapReturnObj) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    const newObj = mapReturnObj(item);
    newArray.push(newObj);
  }

  return newArray;
};

Array.prototype.count = function(equalsFn) {
  let count = 0;
  for (let i = 0; i < this.length; i++) {
    if (equalsFn(this[i])) {
      count = count + 1;
    }
  }
  return count;
};

Array.prototype.filter = function(filterFunction) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    const item = this[i];
    if (filterFunction(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};

// all strings need function called makeBackwardsWith3ExclamationPoints
// it returns the string, but backwards with 3 ! points at the end

String.prototype.makeBackwardsWith3ExclamationPoints = function() {
  const backwardString = this.split("")
    .reverse()
    .join("");
  return `${backwardString}!!!`;
};

const test = "asdfasdf";
console.log(test.makeBackwardsWith3ExclamationPoints());

// make a function called censorDarkLordsName
// when it is called on a string it replaces Voldemort with 'You know who'
String.prototype.censorDarkLordsName = function() {
  let str = this;
  let rep = str.replace("Voldemort", "You know who");
  return rep;
};

const tester2 = "Voldemort killed Dumbledore";
const tester = "Harry Potter attacked Voldemort";
console.log(tester.censorDarkLordsName());
console.log(tester2.censorDarkLordsName());

// Javascript is not object orienteed language
// Javascript it is a protypical language

// const person = {
//     name: 'Scott',
//     amountOfMoney: 10
// }

// function Person(name, amountOfMoney) {
//   this.name = name;
//   this.amountOfMoney = amountOfMoney;
//   this.sayHello = function() {
//     console.log(`my name is ${this.name} and I have $${this.amountOfMoney}`);
//   };
// }

// Person.prototype.sayHello = function() {
//   console.log(`my name is ${this.name} and I have $${this.amountOfMoney}`);
// };

// const personA = new Person("personA", 0);
// const personB = new Person("personB", 10);
// const personC = new Person("personC", 100000);

// Person.prototype.sayHello = function() {
//   console.log(`my name is ${this.name} and I have $${this.amountOfMoney}`);
// };

// personA.sayHello = function() {
//   console.log(`my name is ${this.name} and I have $${this.amountOfMoney}`);
// };

// personB.sayHello = function() {
//   console.log(`my name is ${this.name} and I have $${this.amountOfMoney}`);
// };

// personC.sayHello = function() {
//   console.log(`my name is ${this.name} and I have $${this.amountOfMoney}!!!!`);
// };

// personA.sayHello();
// personB.sayHello();
// personC.sayHello();

//console.log(personA.sayHello === personB.sayHello);
