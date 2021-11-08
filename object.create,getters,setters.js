const person = Object.create(
  {
    calcAge() {
      console.log(new Date().getFullYear() - this.birthYear);
    }
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
        return new Date().getFullYear() - this.birthYear
      },
      set(value) {
        document.body.style.background = 'red';
      }
    }
  }
)

person.name = 'Max';

console.log(person.age);

person.calcAge();

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log('Key', key, person[key]);
  }
}

// hasOwnProperty - не пробегается про прототипу