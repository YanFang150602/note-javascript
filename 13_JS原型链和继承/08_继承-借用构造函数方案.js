function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function () {
  console.log(this.name);
}

function Student(name, age, no) {
  // 借用Person的构造函数，继承属性
  Person.call(this, name, age);
  this.no = no;
}

Student.prototype.study = function () {
  console.log(this.name +"正在学习");
}
var stu1 = new Student('yff', 20, 1234567890); // sayName函数继承不过来，因为用的是借用构造函数继承属性
var stu2 = new Student('lxx', 20, 1234567891); // sayName函数继承不过来，因为用的是借用构造函数继承属性

console.log(stu1);
console.log(stu2);
console.log('-----------------------------------------')

Student.prototype = new Person();
Student.prototype.study = function () {
  console.log(this.name +"正在学习");
}

var stu21 = new Student('yff', 20, 1234567890);
var stu22 = new Student('lxx', 20, 1234567891);
console.log(stu21);
stu21.sayName()
console.log(stu22);

// 强调：借用构造函数继承的缺点：
// 1.第一个弊端：Person函数至少被调用了两次（一次是创建Student实例时，另一次是在继承Person属性时）
// 2.第二个弊端：stu原型对象上会多出一些属性，但是这些属性是没有存在的必要的，比如stu原型对象上会有一个constructor属性指向Person函数
console.log(stu21.__proto__.constructor); // [Function: Person]