var obj = {
  name: "John",
  age: 30,
}

console.log(obj.__proto__); // [Object: null prototype] {}
console.log(obj.__proto__.__proto__) // null

var obj2 = new Object();
console.log(obj2.__proto__); // [Object: null prototype] {}
console.log(obj2.__proto__.__proto__) // null