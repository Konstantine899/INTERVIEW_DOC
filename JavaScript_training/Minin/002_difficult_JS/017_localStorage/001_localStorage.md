# localStorage

Это не сложно. Однако с ним есть определенные моменты которые начинающим достаточно сложно понять.

Для начало необходимо понять что такое localStorage? Это локальное хранилище. Прелесть этого хранилища заключается то что там вы можете хранить любые данные и они будут доступны у вас после перезагрузки страницы. Т.е. это такая локальная и очень ипровизированна БД.

Теперь что касается API и как он работает.

```js
const myNumber = 42;
```

Для работы в localStorage мы просто обращаемся к глобальной переменной. В том случае если мы работаем в браузере.

> **Прошу обратить ваше внимание на то что если вы работаете в NodeJS то там localStorage нет.**

Только браузерный API.

Прописываем глобальный объект localStorage. Он кстати так же доступен в глобальном объекте window. Для того что бы что то получить из localStorage мы вызываем метод getItem

```js
const myNumber = 42;
console.log(localStorage.getItem('number'));
```

![](img/001.png)

null потому что я пытаюсь что-то получить. Но там же ничего нет.

Для того что бы что-то записать в localStorage я вызываю метод setItem.

setItem принимает в себя два значения:

1. Это ключ по которому нужно сохранить что-то
2. Второй аргумент это само значение.

И IDE подсказывает что это должно быть строкой.

```js
const myNumber = 42;
console.log(localStorage.getItem('number'));
localStorage.setItem('number', myNumber);
console.log(localStorage.getItem('number'));
```

![](img/002.png)

Это первый момент который важно понимать про localStorage это то что он умеет работать только со строками. Т.е. даже когда мы делаем getItem то мы все равно получаем строку.

Два раза получаю 42 потому что сначало я записываю, после получаю. Однако после перезагрузки страницы я два раза получаю.

И так смотрим в devTools.

![](img/003.png)

Вижу на каком порту работаю.

Здесь важно понимать что localStorage работает для текущего домена. Т.е. в данном случае доменом у меня является данный localhost

![](img/004.png)

Если я буду работать на другом сайте, то все что я записываю в localStorage у меня будет все асоциируется с текущим доменом. Если я работаю на другом домене то прошлые данные они будут недоступны.

Если мы посмотрим на поле то увидим Key number, Value 42.

Так же у localStorage есть определенные методы такие как удаление определенного ключа.

```js
const myNumber = 42;
localStorage.removeItem('number');
console.log(localStorage.getItem('number'));
localStorage.setItem('number', myNumber);
console.log(localStorage.getItem('number'));
```

![](img/005.png)

Так же есть метод clear() который полностью очищает хранилище.

```js
const myNumber = 42;
localStorage.removeItem('number');
console.log(localStorage.getItem('number'));
localStorage.setItem('number', myNumber);
console.log(localStorage.getItem('number'));
localStorage.clear();
```

В консоли я получаю данные, а вот в localStorage пусто.

![](img/006.png)

![](img/007.png)

В чем есть нюансы при работе с localStorage?

Создам объект с базовыми полями

```js
const object = {
  name: 'Max',
  age: 29,
};
```

И я хочу сохранить этот объект в localStorage. Допустимя я хочу все это сохранить в ключ person.

```js
const object = {
  name: 'Max',
  age: 29,
};

localStorage.setItem('person', object);
```

![](img/008.png)

Как записать объект в localStorage? Для этого нужно использовать другой глобальный объкт который называется JSON. У него есть два метода это parse и stringify

```js
const object = {
  name: 'Max',
  age: 29,
};

localStorage.setItem('person', JSON.stringify(object));
```

![](img/009.png)

На выходе мы получаем строку, но в этой строке в формате json содержатся данные нашего объекта.

![](img/010.png)

Теперь я хочу получить то что лежит в localStorage

```js
// const myNumber = 42;
// localStorage.removeItem('number');
// console.log(localStorage.getItem('number'));
// localStorage.setItem('number', myNumber);
// console.log(localStorage.getItem('number'));
// localStorage.clear();

const object = {
  name: 'Max',
  age: 29,
};

localStorage.setItem('person', JSON.stringify(object));

const row = localStorage.getItem('person');
```

И допустим мы хотим изменить имя человека.

```js
const object = {
  name: 'Max',
  age: 29,
};

localStorage.setItem('person', JSON.stringify(object));

const raw = localStorage.getItem('person');

raw.name = 'Konstantine';

console.log(raw);
```

![](img/011.png)

Как видим имя мы не поменяли. Если выведу age.

```js
const object = {
  name: 'Max',
  age: 29,
};

localStorage.setItem('person', JSON.stringify(object));

const raw = localStorage.getItem('person');

raw.name = 'Konstantine';

console.log(raw.age);
```

![](img/012.png)

Как видим у меня нет доступа к прошлым ключам. И это логично потому что если мы проверим type, то мы увидим строку.

```js
const object = {
  name: 'Max',
  age: 29,
};

localStorage.setItem('person', JSON.stringify(object));

const raw = localStorage.getItem('person');

raw.name = 'Konstantine';

console.log(typeof raw);
```

![](img/013.png)

Для того что бы нам получить объект вместо строки мы должны распарсить строку.

```js
const object = {
  name: 'Max',
  age: 29,
};

localStorage.setItem('person', JSON.stringify(object));

const raw = localStorage.getItem('person');

raw.name = 'Konstantine';

console.log(JSON.parse(raw));
```

![](img/014.png)

```js
const object = {
  name: 'Max',
  age: 29,
};

// localStorage.setItem('person', JSON.stringify(object));

const raw = localStorage.getItem('person');
const person = JSON.parse(raw);
person.name = 'Konstantine';

console.log(person);
```

![](img/015.png)

Это вся наука которая относится к localStorage при работе с объектами.

Закончил 11:34
