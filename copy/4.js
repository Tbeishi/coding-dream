let obj = {
    name:'啊纬',
    age:18,
    like:{
        type:'coding'
    },
    a:undefined,
    b:null,
    c:function () {},
    d:{
        n:100
    },
    e:Symbol('hello')
}
console.log(JSON.stringify(obj));
let newObj = JSON.parse(JSON.stringify(obj)) //拷贝不了undefined，函数体，Symbol
// obj.like.type = 'eating'
console.log(newObj);
