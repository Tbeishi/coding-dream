//永远不要相信用户的输入
function add(a, b){
    //...代表参数？
    if(arguments.length != 2) {
        throw new Error('参数错误！')
    }
    if(typeof a != 'number' || typeof b != 'number'){
        throw new Error('请输入整数！')
    }
    return a + b;
}
// js不严格,编译阶段

function memoize(fn){
    if(typeof fn != 'function'){
        throw new Error('请传入参数！')
    }
    var cache = {} //key:value O(1)复杂度 空间换时间
    return function(){
        //唯一性
        var key = arguments.length + Array.prototype.join.call(arguments, ",") 
        console.log(key);
        if(key in cache) {
           return cache[key]
        }else{
           return cache[key] = fn.apply(this, arguments)
        }
    }
}

module.exports = memoize

//记忆
// const memoizeadd = memoize(add)
// memoizeadd(1,2)
// memoizeadd(1,2)
// try{
//     console.log(add(1,2));
// }catch(err){
//     console.log(err);
// }

