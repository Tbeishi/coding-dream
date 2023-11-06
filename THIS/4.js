function foo(m,n){
    console.log(this.a,m,n);
}

var obj = {
    a:2
}

foo.call(obj,100,200) 
foo.apply(obj,[100,200])
var bar = foo.bind(obj,100,200)
bar(300)