function Person() {
    this.name = "John";
    this.age = 30;
}

var person1 = new Person();
console.log(person1.__proto__) // {}
console.log(Person.prototype.__proto__) // [Object: null prototype] {}

// 修改原型对象
Person.prototype = person1
var p2 = new Person()
console.log(p2.__proto__) // { name: 'John', age: 30 }
console.log(Person.prototype) // { name: 'John', age: 30 }

var obj = {
  name: 'John'
}

var obj2 = {
  name: 'John2'
}

// Object.prototype 顶层原型
console.log(obj.__proto__)
console.log(Object.prototype)
console.log(obj.__proto__ === Object.prototype)

// console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'constructor'))
// console.log(Object.getOwnPropertyDescriptors(Object.prototype))

// 修改原型链指向obj.__proto__ = obj2
console.log(obj.__proto__) // { name: 'John2' }
console.log(obj.__proto__ === Object.prototype) // false
