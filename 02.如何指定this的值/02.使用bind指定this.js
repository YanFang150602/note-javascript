function func(a, b) {
  console.log(this);
  console.log(a, b);
}

const person = {
  name: 'itheima'
}

// bind返回了个新函数，新函数newFunc里的this指向了person
const newFunc = func.bind(person, 4);
newFunc(5);