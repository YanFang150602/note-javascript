function Person() {
    this.name = "John";
    this.age = 30;
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
console.log(stu.name);
console.log(stu.sayName());