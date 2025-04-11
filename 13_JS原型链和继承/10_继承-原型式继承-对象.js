var obj = {
  name: 'why',
  age: 18,
  friends: ['kobe', 'james', 'curry']
}

function createObj(o) {
  var newObj = {}
  Object.setPrototypeOf(newObj, o)
  return newObj
}

var obj2 = createObj(obj)
console.log(obj2)
console.log(obj2.__proto__)


function createObj2(o) {
  function F() {}
  F.prototype = o
  var newobj = new F() // newobj.__proto__ = F.prototype = o
  return newobj
}

var obj3 = createObj2(obj)
console.log(obj3)
console.log(obj3.__proto__)

var obj4 = Object.create(obj)
console.log(obj4.__proto__)