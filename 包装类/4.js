//构造函数
// function girlfriend(name,age,sex){
//     this.name = name
//     this.age = age
//     this.sex = sex
// }

function girlfriend(name,age,sex){
    var that = {}
    that.name = name
    that.age = age
    that.sex = sex
    return that
}

const girlfriend1 = girlfriend('小米',18,'男')
const girlfriend2 = girlfriend('小米',20,'男')
console.log(girlfriend1);
console.log(girlfriend2);