const food = {
  name: '西兰花炒蛋',
  eat() {
    console.log(this); //food
    setTimeout(function() {
      console.log(this); // 全局对象
    }, 10)
    setTimeout(() => console.log(this), 1000); // food
  }
}

food.eat();