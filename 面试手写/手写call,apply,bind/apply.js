Function.prototype.myapply = function(thisArg,args){
    const key = Symbol('key')
    thisArg[key] = this
    const res = thisArg[key](...args)
    delete thisArg[key]
    return res
}

const p = {
    name:'小米露',
    sex:'男'
}

function test(Number1, Number2) {
    console.log(this);
    console.log(Number1, Number2);
    // console.log(...args);
    return Number1 + Number2
}

const res = test.myapply(p,[2,3])
console.log(res);
