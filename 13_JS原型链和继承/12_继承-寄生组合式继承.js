function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayName = function () {
  console.log(this.name);
}

function Student(name, age, no) {
  Person.call(this, name, age);
  this.no = no;
}

// Student.prototype = Object.create(Person.prototype);
// // Student.prototype.constructor = Student;
// Object.defineProperty(Student.prototype, "constructor", {
//   value: Student,
//   enumerable: false,
//   writable: true,
//   configurable: true
// });

function createObj(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

function inheritPrototype(subType, superType) {
  // subType.prototype = Object.create(superType.prototype);
  subType.prototype = createObj(superType.prototype);
  Object.defineProperty(subType.prototype, "constructor", {
    value: subType,
    enumerable: false,
    writable: true,
    configurable: true
  });
}
Student.prototype.study = function () {
  console.log(this.name +"正在学习");
}

var stu = new Student("小明");
console.log(stu);
stu.sayName();

