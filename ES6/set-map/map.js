// let obj ={
//     a:1,
//     b:2
// }

// const arr = []
// obj[arr] = 3
// console.log(obj); //{ a: 1, b: 2, '': 3 }


let map = new Map([
    ['name','老王']
]);

let obj = {a:1}
map.set(obj,'hello')
console.log(map);
console.log(map.get(obj));

map.forEach((value,key,map)=>{
    console.log(value,key,map);
})

console.log([...map]); //[ [ 'name', '老王' ], [ { a: 1 }, 'hello' ] ]