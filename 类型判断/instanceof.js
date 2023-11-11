//L 实例对象
//R 要判断的数据类型
function instanceOF(L,R){
    while(L !== null){
        // 用实例对象的__proto__属性和要判断的数据类型的prototype进行判断
        //相等返回true,不相等再用实例对象的__proto__的__proto__属性去判断
        //直到L.__proto__.__proto__...为null,就通过原型链根本找不到相等的了，返回false.
        if(L.__proto__ === R.prototype){  
            return true
        }
        else L = L.__proto__
    }
    return false
}

//验证我们手写的instanceOF是否正确
console.log(instanceOF([],Array)); //true
console.log(instanceOF([],Object));//true