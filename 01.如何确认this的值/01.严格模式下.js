'use strict'

function func() {
  console.log(this); // undefined
}
console.log(this); // {}
func()