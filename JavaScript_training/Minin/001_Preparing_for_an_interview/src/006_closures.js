// closures

// function sayHelloTo(name) {
//   const message = 'Hello ' + name;

//   return function () {
//     console.log(message);
//   };
// }

// const helloKonstantine = sayHelloTo('Konstantine');
// const helloEkaterina = sayHelloTo('Ekaterina');
// const helloIlya = sayHelloTo('Ilya');
// const helloNikita = sayHelloTo('Nikita');

// helloKonstantine();
// helloEkaterina();
// helloIlya();
// helloNikita();

// function createFrameworkManager() {
//   const fw = ['Angular', 'React'];

//   return {
//     print: function () {
//       console.log(fw.join(' '));
//     },
//     add: function (framework) {
//       fw.push(framework);
//     },
//   };
// }

// const manager = createFrameworkManager();
// manager.print();
// manager.add('VueJS');

// manager.print();

///////////////////////////////////////////////

const fib = [1, 2, 3, 5, 8, 13];

for (var i = 0; i < fib.length; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(`fib[${j}] = ${fib[j]}`);
    }, 1500);
  })(i);
}
