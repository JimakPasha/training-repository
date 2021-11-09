class Human {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
  }

  sayHi() {
    return 'Hello everybody!';
  }
}

class Programmer extends Human {
  constructor(options) {
    super(options);
    this.technologies = options.technologies;
  }

  startCoding() {
    return `${this.name} is coding using ${this.technologies}`;
  }
}

class Sportsman extends Human {
  constructor(options) {
    super(options);
    this.medals = options.medals;
  }
}

class FootballPlayer extends Sportsman {
  constructor(options) {
    super(options);
    this.team = options.team;
  }

  run(speed) {
    return `${this.name} is running ${speed} kmph`;
  }
}

class HockeyPlayer extends Sportsman {
  constructor(options) {
    super(options);
    this.weight = options.weight;
  }

  pushOpponent(opponentName) {
    return `${this.name} pushed ${opponentName} and used ${this.weight}kgs`;
  }
}

const humanAlex = new Human({
  name: 'Alex',
  age: 35,
});

const coderDavid = new Programmer({
  name: 'David',
  age: 40,
  technologies: ['HTML', 'CSS', 'JS', 'React'],
});

const sportmanRick = new Sportsman({
  name: 'Rick',
  age: 29,
  medals: 7,
});

const fernandes = new FootballPlayer({
  name: 'Bruno',
  age: 27,
  medals: 4,
  team: 'MU',
});

const chara = new HockeyPlayer({
  name: 'Zdeno',
  age: 44,
  medals: 9,
  weight: 116,
});
