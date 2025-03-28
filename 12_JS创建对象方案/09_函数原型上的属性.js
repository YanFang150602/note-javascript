function foo() {

}

console.log(foo.prototype)
console.log(Object.getOwnPropertyDescriptors(foo.prototype))

// 可以配置constructor属性，但是不能删除
Object.defineProperty(foo.prototype, 'constructor', {
    writable: true,
    enumerable: true,
    configurable: true
})


// prototype ，ESM要求的，是js引擎要求添加的，不存在浏览器兼容性问题
console.log(foo.prototype.constructor) // [Function: foo]
console.log(foo.prototype.constructor.prototype === foo.prototype) // true
console.log(foo.prototype.constructor.prototype.constructor === foo.prototype.constructor) // true


foo.prototype.name = 'foo'
foo.prototype.age = 18

const f1 = new foo()
// 从原型对象上找到属性
console.log(f1.name, f1.age) // foo 18

foo.prototype.eating = function() {
  console.log(this.name + ' is eating')
}

f1.eating() // foo is eating

