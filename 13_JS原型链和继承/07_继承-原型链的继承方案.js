function Person() {
    this.name = "John";
    this.age = 30;
    this.friends = []
}

Person.prototype.sayName = function () {
    console.log(this.name);
}

function Student() {
    this.no = "001";
}

// Student.prototype.study = function () {
//     console.log(this.name +"正在学习");
// }

// var stu = new Student();
// console.log(stu.name);
// console.log(stu.sayName());
var per = new Person();
Student.prototype = per
Student.prototype.study = function () {
    console.log(this.name +"正在学习");
}

var stu = new Student();
// console.log(stu.name);
// console.log(stu.sayName());

/**
 * 原型链实现继承的弊端：
 * 1. 打印stu时，某些属性是看不到的，原型对象上的属性、方法不可见
 * 2. 创建两个对象：
 *    获取引用，修改引用中的值，会相互影响
 *    直接修改对象上的属性，是给本对象添加了一个新属性
 * 3. 在前面实现类的过程中都没有传参
 */

console.log(stu); // Person { no: '001' }，看不到name和age

var stu2 = new Student();

// 获取引用，修改引用中的值，会相互影响
stu.friends.push("Tom");
console.log(stu2.friends); // ["Tom"]

// 直接修改对象上的属性，是给本对象添加了一个新属性
stu.name = "Tom";
console.log(stu2.name); // "John"

