class Person {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  get name() {
    return this.#name;
  }
  get age() {
    return this.#age;
  }
  run = () => {
    console.log(this.#name + " running");
  };
}

class Employee extends Person {
  #salary;
  constructor(name, age, salary) {
    super(name, age);
    this.#salary = salary;
  }
  getPaid = (string) => {
    if (string === "password") {
      return this.name + " get paid by " + this.#salary;
    } else return "please put password";
  };
}
const bob = new Employee("bob", 30, 10000);
console.log(bob.getPaid(123));
