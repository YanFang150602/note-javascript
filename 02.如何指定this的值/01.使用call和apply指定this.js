function func(a, b) {
  console.log(this);
  console.log(a, b);
}

const person = {
  name: 'itheima'
}

// func函数里的this指向了person
func.call(person, 1, 2);
func.apply(person, [1, 3]);