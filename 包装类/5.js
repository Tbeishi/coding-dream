//包装类

var obj = {}
// console.log(obj.a);

var num = 123
num.abc = 'hello'
// console.log(num.abc);

var num = new Number(123)
num.abc = 'hello'
// console.log(num*2);//参与运算时会变成数字

var str = 'hello'
// console.log(str.length);

var num = 4  //var num = new Number(4)
num.length = 3 // => num.length = 3
              //     delete num.length

//num.length => new Number().length //隐式包装类
console.log(num.length);


//考点
//var arr = [1,2,3,4,5]
//arr.length = 2
//console.log(arr);

var str = 'abcd'
str.length = 2 // => new String('abcd').length = 2
               //    delete str.length

console.log(str.length); //new String('abcd').length


//面试题
var str = 'abc'
str += 1
var test = typeof(str) // = String
if(test.length == 6){
    test.sign = 'typeof的返回结果可能为string' // => new String('typeof的返回结果可能为string').sign
}
console.log(test.sign);// => new String(test).sign