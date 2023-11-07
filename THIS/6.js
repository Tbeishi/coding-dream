// var foo = ()=>{

// }

// console.log(new foo())

var b = 2
function foo(){
    var b = 1
    function bar(){
        baz()
    }
    function baz(){
        console.log(this.b);
    }
    bar()
}
foo()


var b = 2
function foo(){
    var b = 1
    console.log(this.b);
}
foo()

