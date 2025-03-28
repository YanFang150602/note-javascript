// [[prototype]] 每个对象中都有一个，这个可以称之为对象的原型（隐式原型），不会改它、不会用它，用它的原理

var obj = { name: 'test' }
var info = {}

// 1.原型的概念

// __proto__ 浏览器为对象提供的一个属性，不同浏览器可能效果不同，涉及浏览器兼容问题

console.log(obj.__proto__)
console.log(info.__proto__)


// 浏览器在创建对象时，会将__proto__绑定到对象上
var obj2 = { name: 'test', __proto__: {} }
var info2 = { __proto__: {}}

console.log(obj2.__proto__)
console.log(info2.__proto__)

// es5后提供方法Object.getPrototypeOf()去获取对象的原型
console.log(Object.getPrototypeOf(obj))

// 2.原型有什么用？
// 当从对象访问某个属性时，会触发[[get]]操作
// 1）从对象里查找，找到即返回
// 2）从对象里找不到，就沿着原型[[prototype]]去找（继承）
obj.__proto__.age = 18
console.log(obj.age) // obj里找不到，去obj的[[prototype]]里找
