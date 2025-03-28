function foo() {

}

// 函数也是一个对象，node里也实现了__proto__
// 1.函数作为对象来说，它也是有[[prototype]]
console.log(foo.__proto__) // {}
console.log(foo.__proto__.__proto__) // [Object: null prototype] {}

// 2.函数因为它是一个函数，所以它还会有个显示原型属性：prototype
console.log(foo.prototype) // {}
console.log(foo.prototype.prototype) // undefined
console.log(foo.prototype.__proto__) // [Object: null prototype] {}

console.log(foo.__proto__ === foo.prototype) // false

function Person() {
    // 使用new操作符时，会执行下面代码，改变隐式原型
    // this.__proto__ = Person.prototype
}

const p = new Person()
console.log(p.__proto__ === Person.prototype) // true
