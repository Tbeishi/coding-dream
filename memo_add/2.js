var count = 0;
var fibonacci = function(n){    // 暴击破解法
    count++
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}

function memorize(f){   // 记忆函数法
    if(typeof f !== 'function') return 
    var cache = {}  // 空间换时间   自由变量（不会被销毁，永远存在）
    return function (){
        var key = arguments.length + Array.prototype.join.call(arguments, ',')
        if(key in cache){
            return cache[key]
        }else{
            return cache[key] = f.apply(this, arguments)
        }
    }
}

const memoizeFibonacci = memorize(fibonacci)

console.time("fibonacci")
memoizeFibonacci(30)
console.log(count)
console.timeEnd("fibonacci")



