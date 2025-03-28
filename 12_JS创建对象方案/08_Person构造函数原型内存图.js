// Person 函数对象，在堆内存中创建的
// 全局函数对象，被全局执行环境持有，不会被垃圾回收机制处理掉。
// Person函数对象：
// parentScope；
// prototype => Person函数的原型对象
// 函数执行体 => 创建对象 => 对象带有__proto__ => Person函数的原型对象



function Person() {

}

const p1 = new Person();
const p2 = new Person();

console.log(p1.__proto__ === p2.__proto__);
console.log(p1.__proto__ === Person.prototype);

console.log(Person.prototype.constructor === Person);
console.log(Person.prototype.constructor);

p2.__proto__.name = 'zhufeng';
console.log(p1.name); // zhufeng