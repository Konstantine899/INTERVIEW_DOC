// Wrapper

const withDefaultValue = (target, defaultValue) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defaultValue),
  });
};

const position = withDefaultValue(
  {
    x: 24,
    y: 42,
  },
  0 // Значение по умолчанию
);

console.log(position);
