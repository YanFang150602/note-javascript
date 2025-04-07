var obj = {
  name: "John",
  age: 30,
}

obj.__proto__ = {};
obj.__proto__.__proto__ = {};
obj.__proto__.__proto__.__proto__ = {
  address: "Beijing"
};

console.log(obj.address)