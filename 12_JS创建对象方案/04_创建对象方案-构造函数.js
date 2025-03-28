// 构造函数约定驼峰式命名规则，首字母大写。
function Person(name, age) {
    console.log(1, this);
    this.name = name;
    this.age = age;
    console.log(2, this);
    // 默认返回this


    // 创建每个对象时，以下方法都会占用内存空间，浪费内存空间
    this.eating = function() {
        console.log(this.name, '在吃');
    }
    this.running = function()  {
        console.log(this.name, '在跑');
    }
}

var p1 = new Person('John', 25);
console.log(p1.__proto__.constructor); // [Function: Person]

console.log(p1.__proto__.constructor.__proto__.constructor); // [Function: Function]

console.log(p1.__proto__.constructor.__proto__.constructor.__proto__.constructor); // [Function: Function]
