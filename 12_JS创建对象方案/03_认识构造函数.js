function foo() {
  console.log('test')
}

// foo就是一个普通函数，调用它没有任何问题。
foo() // test


// 通过new关键字调用一个函数，那个这个函数就是构造函数。
/**
 * 一个函数被使用new操作符调用了，会执行以下几步：
 * 1. 创建一个空对象
 * 2. 将这个空对象的__proto__指向构造函数的prototype属性
 * 3. 将这个空对象赋值给this关键字
 * 4. 执行构造函数内部的代码
 * 5. 返回this对象
 * 
 */
const f = new foo() // test
const f2 = new foo   // test
console.log(f)
console.log(f2)