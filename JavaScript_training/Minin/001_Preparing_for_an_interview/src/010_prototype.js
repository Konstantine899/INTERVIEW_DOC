// __proto__ ES6
// Object.getPrototypeOf() ES5

// function Cat(name, color) {
//   this.name = name;
//   this.color = color;
// }

// Cat.prototype.voice = function () {
//   console.log(`Cat ${this.name}`);
// };

// const cat = new Cat('Kot', 'white');
// console.log(Cat.prototype);
// console.log(cat);
// console.log(cat.__proto__ === Cat.prototype);
// console.log(cat.constructor);

// cat.voice();

// function Person() {}
// Person.prototype.legs = 2;
// Person.prototype.skin = 'white';

// const person = new Person();
// person.name = 'Константин';

// console.log('skin' in person); // т.е. спрашиваю есть ли в объекте person поле skin
// console.log(person.legs);
// console.log(person.hasOwnProperty('name'));
// console.log(person.hasOwnProperty('skin'));

// Object.create()

let proto = { year: 2019 };
const myYear = Object.create(proto);

console.log(myYear.year);
// proto.year = 2021;
proto = { year: 999 };
console.log(myYear.year);

// console.log(myYear.hasOwnProperty('year'));
// console.log(myYear.__proto__ === proto);
