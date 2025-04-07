var name = 'window'
function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.eating = function() {
    console.log(this.name + '吃东西')
}

Person.prototype.running = function() {
    console.log(this.name + '正在跑步')
}

// 不能用箭头函数，否则this指向会有问题
Person.prototype.working = () => {
    console.log(this.name + '工作中')
    console.dir(this)
}

var p1 = new Person('yff', 34)
var p2 = new Person('stt', 34)

p1.running()
p2.running()
p2.working()
