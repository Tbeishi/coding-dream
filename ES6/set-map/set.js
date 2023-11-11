let arr = [1, 1, 2, 3, 3]
let obj = {
    a: 1,
    b: 2,
    c: 3,
}

let set = new Set(arr)
set.add(5)
console.log(set);
console.log(set.size);

var arr2 = [1, 1, 2, 3,'1']
function unique(arr){
    let s = new Set(arr)
    let res = Array.from(s)
    return res
}

var unique2 = (arr) => [...new Set2(arr)]
console.log(unique2);

set.clear() //清除所有内容
set.delete(5) //删除元素5

set.forEach((item,index,set)=>{
    console.log(item,index,set);
})

console.log(set.has(5)); //false

for(let item of set){
    console.log(item);
}

for(let item of set.value()){
    console.log(item);
}