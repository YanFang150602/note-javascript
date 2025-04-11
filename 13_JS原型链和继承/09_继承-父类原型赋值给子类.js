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

Student.prototype = Person.prototype;

Student.prototype.study = function () {
  console.log(this.name +"正在学习");
}
var stu1 = new Student('yff', 20, 1234567890); // sayName函数继承不过来，因为用的是借用构造函数继承属性
var stu2 = new Student('lxx', 20, 1234567891); // sayName函数继承不过来，因为用的是借用构造函数继承属性

console.log(stu1);
console.log(stu2);
stu1.sayName();

// 子类特有的方法都绑定到父类的原型上，这样其他子类也可以使用了
var p = new Person('yff', 20);
p.study()

