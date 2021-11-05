class Universe {
  constructor() {
    if (Universe.exists) {
      return Universe.instance;
    }
    Universe.instance = this;
    Universe.exists = true;
    this.size = 100;
  }

  getSize() {
    return this.size;
  }

  setSize(size) {
    this.size = size;
  }
}

let a = new Universe();
let b = new Universe();

console.log(a === b);
console.log(a.getSize(), b.getSize());
a.setSize(200);
console.log(a.getSize(), b.getSize());
