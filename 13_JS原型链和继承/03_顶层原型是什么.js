// 字面量对象，是new Object()的语法糖。
var obj = {
  name: "John",
  age: 30,
}

console.log(obj.__proto__); // [Object: null prototype] {}
console.log(obj.__proto__.__proto__) // null

var obj2 = new Object();
// Object的原型
console.log(obj2.__proto__); // [Object: null prototype] {}
console.log(obj2.__proto__.__proto__) // null