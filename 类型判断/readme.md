# type
1.可以准确判断null之外的原始类型
2.可以判断function

# instanceof
1.只能判断引用类型
2.且是通过原型链查找来判断的

# Object.prototype.toString
1.
2.
3.将o作为ToObject(this) 的执行结果
4.让class成为o内部属性[[Class]]的值
5.返回由"[object" 和 class 和 "]" 三部分组成的字符串