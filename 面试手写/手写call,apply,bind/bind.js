Function.prototype.mybind = function(thisArg, ...args1){
    return (...args2) => {
        //这里this指向调用者，也就是test函数
        return this.call(thisArg,...args1,...args2)
    }
}

const p = {
    name:'小米露',
    sex:'男'
}

function test(Number1, Number2, Number3, Number4) {
    console.log(this);
    console.log(Number1, Number2, Number3, Number4);
    return Number1 + Number2 + Number3 + Number4
}

const f = test.mybind(p,1,2)
const res = f(3,4)
console.log(res);