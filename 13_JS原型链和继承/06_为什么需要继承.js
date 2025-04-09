function Student(name, age, no) {
    this.name = name;
    this.age = age;
    this.no = no;
}

Student.prototype.study = function () {
    console.log(this.name + "正在学习");
}
Student.prototype.eat = function () {
    console.log(this.name + "正在吃饭");
}
Student.prototype.sleep = function () {
    console.log(this.name + "正在睡觉");
}

function Teacher(name, age, title) {
    this.name = name;
    this.age = age;
    this.title = title;
}
Teacher.prototype.teach = function () {
    console.log(this.name + "正在教学");
}
Teacher.prototype.eat = function () {
    console.log(this.name + "正在吃饭");
}
Teacher.prototype.sleep = function () {
    console.log(this.name + "正在睡觉");
}

// Student和Teacher有重复属性、重复行为
// 将公共的代码抽取到一个父类中，然后将Student和Teacher继承父类，这样子类就拥有了父类的属性和方法。