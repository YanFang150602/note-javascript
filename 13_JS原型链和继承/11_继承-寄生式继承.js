var personobj = {
  run: function() {
    console.log("我正在跑步");
  }
}

var stuobj = Object.create(personobj)
stuobj.name = "小明"
stuobj.study = function() {
  console.log(this.name +"正在学习");
}

var stuobj2 = Object.create(personobj)
stuobj2.name = "小明2"
stuobj2.study = function() {
  console.log(this.name +"正在学习");
}

// 代码重复


// 工厂函数
function createStudent(person, name) {
  var stuobj2 = Object.create(personobj)
  stuobj2.name = name
  // 每次创建对象都会重新创建study方法，浪费内存
  stuobj2.study = function() {
    console.log(this.name +"正在学习");
  }
}

// 寄生式继承
var stu = createStudent(personobj, "小明")
var stu2 = createStudent(personobj, "小明2")