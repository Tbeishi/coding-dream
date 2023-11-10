var obj = {
    a:1
}

function foo(){
    console.log(this.a);
}

Function.prototype.mycall = function(context){
    if(!this instanceof Function){
        throw new TypeError("mycall is not a function")
    }
    let args = [...arguments].slice(1)

    context.fn = this;
    let res = context.fn(...args) //触发this隐式绑定规则
    delete context.fn
    return res
}

foo.mycall(obj)
console.log(obj)
