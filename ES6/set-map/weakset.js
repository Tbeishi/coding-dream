// let obj = {name:'德玛西亚'}

// let ws = new WeakSet()
// ws.add(obj)
// // obj = null

// console.log(ws)

const weakset = new WeakSet()
const obj1 = { name: '小米' }
const obj2 = { name: '小露' }
weakset.add(obj1)  //添加对象1
weakset.add(obj2)  //添加对象2
console.log(weakset.has(obj1)); // true
weakset.delete(obj1) // 执行清理操作
console.log(weakset.has(obj1)); // false

const set = new Set()
set.add(obj1)  //添加对象1
set.add(obj2)  //添加对象2
console.log(set.has(obj1)); // true
weakset.delete(obj1) // 执行清理操作
console.log(set.has(obj1)); // true
