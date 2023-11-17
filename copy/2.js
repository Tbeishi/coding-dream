// let a = { name: '俊熙'}
// let b = Object.create(a)
// a.name = '军儿'

// console.log(b.name);

let a = { 
    name: '俊熙',
    like:{
        n:'coding'
    }
}


let  b = Object.assign({},a)
a.name = '军儿'
a.like.n = 'running'
console.log(b.like);

let arr = [1,2,3,{a:10}]
//let newArr = [].concat(arr)
//let newArr = [].slice(0)
//let newArr = [...arr]
arr[3].a = 100


