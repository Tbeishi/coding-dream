// var a = 1
// function foo(){
//     console.log(this.a);
// }

// foo()

//词法作用域，出生地
function foo() {
    var a = 2
    this.bar()
}
function bar(){
    console.log(this.a); //undefined
}

foo()

function bar(){
    var b = 3
    console.log(this.b); //undefined
}
bar()


function foo() {

}