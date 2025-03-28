function foo() {
    function bar() {
        
    }
    return bar
}

var fn = foo()
var fn2 = foo()

console.log(fn === fn2) // false
