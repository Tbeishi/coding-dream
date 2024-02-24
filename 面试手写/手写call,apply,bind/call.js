const p = {
    name:'小米露',
    sex:'男'
}

Function.prototype.mycall = function(thisArg,...args){
    const key = Symbol('key')
    thisArg[key] = this
    const res = thisArg[key](...args)
    delete thisArg[key]
    return res
}

function test(Number1, Number2, Number3) {
    console.log(this);
    // console.log(...args);
    return Number1 + Number2 + Number3
}

const res = test.mycall(p,1,2,3)
console.log(res); //6