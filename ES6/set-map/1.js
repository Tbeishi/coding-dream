// 1. 使用 WeakSet 跟踪对象的存活状态
const weakset = new WeakSet()

const obj1 = { name: '小米' }
const obj2 = { name: '小露' }

weakset.add(obj1)  //添加对象1
weakset.add(obj2)  //添加对象2

console.log(weakset.has(obj1)); // true

weakset.delete(obj1) // 执行一些清理操作

console.log(weakset.has(obj1)); // false


const text = "I have have a dog. My dog's name name is Lucky.";  
const words = text.split(" ");  //将文本以空格作为分隔符，即将每个单词切割出来
const arrWords = [...new Set(words)];  //将 Set 转回数组
const res = arrWords.join(" ");  //重新将单词进行拼接成句子
console.log(res); // I have a dog. My dog's name is Lucky.  