// Classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const PersonProxy = new Proxy(Person, {
  construct(target, args) {
    console.log('Construct...');
    return new Proxy(new target(...args), {
      get(t, prop) {
        console.log(`Getting prop ${prop}`);

        return t[prop];
      },
    });
  },
});

const p = new PersonProxy('Maxim', 30);
