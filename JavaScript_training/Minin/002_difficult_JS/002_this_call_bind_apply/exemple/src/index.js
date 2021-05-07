// function hello() {
//   console.log('Hello', this);
// }

// const person = {
//   name: 'Konstantine',
//   age: 32,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(document),
//   logInfo: function (job, phone) {
//     console.group(`${this.name} info:`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`Job is ${job}`);
//     console.log(`Phone is ${phone}`);
//     console.groupEnd();
//   },
// };

// const lena = {
//   name: 'Elena',
//   age: 23,
// };
// // person.logInfo.bind(lena, 'Frontend', '375-29-891-89-71')();
// // person.logInfo.call(lena, 'Frontend', '375-29-891-89-71');
// person.logInfo.apply(lena, ['Frontend', '375-29-891-89-71']);

//=======================================================
const array = [1, 2, 3, 4, 5];

Array.prototype.multBy = function (n) {
  return this.map(function (i) {
    return i * n;
  });
};

console.log(array.multBy(2));

// function multBy(arr, n) {
//   return arr.map(function (i) {
//     return i * n;
//   });
// }

// console.log(multBy(array, 5));
