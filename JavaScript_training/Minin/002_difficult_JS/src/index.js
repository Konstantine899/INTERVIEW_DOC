// Optimization

const IndexedArray = new Proxy(Array, {
  construct(target, [args]) {
    const index = {};

    args.forEach((item) => (index[item.id] = item));

    return new Proxy(new target(...args), {
      get(arr, prop) {
        switch (prop) {
          case 'push':
            return (item) => {
              index[item.id] = item;
              arr[prop].call(arr, item);
            };
          case 'findById':
            return (id) => index[id];
          default:
            return arr[prop];
        }
      },
    });
  },
});

const users = new IndexedArray([
  { id: 1, name: 'Konstantine', job: 'Fullstack', age: 25 },
  { id: 2, name: 'Elena', job: 'Student', age: 22 },
  { id: 3, name: 'Victor', job: 'Backend', age: 23 },
  { id: 4, name: 'Vasilisa', job: 'Teacher', age: 24 },
]);
