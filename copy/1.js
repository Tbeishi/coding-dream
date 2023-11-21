const a = {
    name:'小米',
    age:18,
    like:{
        sport:'running'
    }
}

const arr = ['1', '2', '3', '4', '5', '6']

a['sex'] = '男'
a.se = '女'
const obj = {}
for (const key in a) {
   obj.key = a[key]
}

console.log(obj);

arr['set'] = '7'


// for (const key in arr) {
//     console.log(key);
//  }
 

