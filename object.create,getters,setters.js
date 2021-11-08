const person = Object.create(
  {
    calcAge() {
      console.log(new Date().getFullYear() - this.birthYear);
    },
  },
  {
    name: {
      value: 'Jack',
      enumerable: true,
      writable: true,
      configurable: true,
    },
    birthYear: {
      value: 1990,
      enumerable: false, // false default.
      writable: false, // false default. possibility change this props
      configurable: false, // false default. possibility delete key (delete person.name)
    },
    age: {
      get() {
        return new Date().getFullYear() - this.birthYear;
      },
      set(value) {
        document.body.style.background = 'red';
      },
    },
  }
);

person.name = 'Max';

console.log(person.age);

person.calcAge();

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log('Key', key, person[key]);
  }
}

// hasOwnProperty - не пробегается про прототипу

// ------------------------------------------------

// Object.getOwnPropertyDescriptor(obj, propertyName); - получаем полную инфу о свойстве

const user = {
  name: 'Jo',
  surName: 'Smith',
  age: 32,
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(descriptor);

// ------------------------------------------------

// Object.defineProperty определяем новые или изменяем существующие свойства
// Object.defineProperties несоклько свойств
// Object.defineProperties(obj, {
//   prop1: descriptor1,
//   prop2: descriptor2
//   // ...
// });

const man = {
  name: 'Leo',
  age: 30,
};

Object.defineProperty(man, 'name', {
  writable: false,
});

man.name = 'Pete';

console.log(man.name); // будет всё равно Leo, т.к. мы writable переназначили в false

// ------------------------------------------------

Object.freeze(obj); // Запрещает добавлять/удалять/изменять свойства. устанавливает configurable: false, writable: false для всех существующих свойств
