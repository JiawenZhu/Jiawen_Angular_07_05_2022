// class Person {
//   #name;
//   #age;
//   constructor(name, age) {
//     this.#name = name;
//     this.#age = age;
//   }
//   get name() {
//     return this.#name;
//   }
//   get age() {
//     return this.#age;
//   }
//   run = () => {
//     return this.#name + " running";
//   };
// }

// class Employee extends Person {
//   #salary;
//   constructor(name, age, salary) {
//     super(name, age);
//     this.#salary = salary;
//   }
//   getPaid = (string) => {
//     if (string === "password") {
//       return this.name + " get paid by " + this.#salary;
//     } else return "please put password";
//   };
// }
// const bob = new Employee("bob", 30, 10000);
// console.log(bob.run());
// console.log([1, 2, 3]);

// Array.prototype.myReduce = function (...args) {
//   let [acc, index] = args.length < 2 ? [this[0], 1] : [args[1], 0];

//   for (let i = index; i < this.length; i++) {
//     acc = args[0](acc, this[i], i, this);
//   }
//   return acc;
// };
// const numbers = [175, 50, 25];
// const res = numbers.myReduce(myFunc);

// function myFunc(acc, cur) {
//   return acc - cur;
// }
// console.log(res);

// const obj = {
//   name: "name",
//   type: "type",
// };
// const target = (a, b) => console.log(a + b);
// const fn = limitedFunctions(5, target);
// fn(1, 2, 3, 4, 5);
// fn(1, 2);
// fn(3, 4);
// fn(1, 2);
// fn(2, 4);
// fn(1, 2);
// fn(1, 5);
// fn(1, 2);

// function limitedFunctions(num, target) {
//   var counter = 1;
//   return function (...args) {
//     if (counter === num) {
//       console.log("over limited");
//     } else {
//       target(...args);
//       counter++;
//     }
//   };
// }
const first = [
  { userid: 2, name: "Velen" },
  { userid: 56, name: "Illidan" },
  { userid: 23, name: "Muradin" },
  { userid: 12, name: "Sylvanas" },
  { userid: 44, name: "Cenarius" },
  { userid: 4, name: "Gul'Dan" },
  { userid: 19, role: "Hunter" },
  { userid: 22, role: "Hunter" },
  { userid: 25, role: "Hunter" },
];
const second = [
  { userid: 2, role: "Mage" },
  { userid: 4, role: "Worlock" },
  { userid: 56, role: "Demon Hunter" },
  { userid: 66, role: "Druid" },
  { userid: 87, role: "Shaman" },
  { userid: 12, role: "Hunter" },
  { userid: 13, role: "Hunter" },
  { userid: 14, role: "Hunter" },
  { userid: 15, role: "Hunter" },
  { userid: 16, role: "Hunter" },
  { userid: 17, role: "Hunter" },
];
// function solution(farr, sarr) {
//   const arr = [...farr, ...sarr];
//   const map = {};
//   // {
//   //   2: { userid: 2, name: 'Velen' },
//   // }
//   arr.forEach((ele) => {
//     map[ele.userid] = {
//       ...{ userid: null, name: null, role: null },
//       ...map[ele.userid],
//       ...ele,
//     };
//   });
//   return map;
// }
// console.log(solution(first, second));

console.log("----------------------------------------------------------------");
const solution2 = (first, second) => {
  const arr = [...first, ...second];
  const arrByRole = {};
  arr.forEach((ele) => {
    if (ele.role === "Hunter") {
      arrByRole[arr.role].push(ele);
    } else {
      arrByRole[arr.role] = [ele];
    }
  });
  return arrByRole;
};

console.log(solution2(first, second));

// const baseUrl = 'http://google.com'
// const url = new URL(baseUrl);
// url.setQueryParams.set('limit', 5);
Array.prototype.myMap = function (callback) {
  // Write your code here.
  const newArray = [];
  let counter = 0;
  for (let item of this) {
    newArray.push(callback(item, counter, this));
    counter++;
  }
  return newArray;
};
const myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(myArray.myMap((item, index) => index + 1));

const listeners = {};

listeners["name"] = new Set("h");

listeners["name"].add("name");

console.log(listeners);

let hi = setTimeout(() => {
  console.log("hi");
}, 1000);

clearTimeout(hi);

hi = setTimeout(() => {
  console.log("hi");
}, 3000);

console.log(hi);
