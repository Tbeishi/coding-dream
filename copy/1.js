const arr = ['1', '2', '3', '4', '5', '6']
const a = {
    name:'小米',
    age:18,
    like:{
        sport:'running'
    }
}

for (const key in arr) {
   console.log(key);  //依次打印数组每一项下标0,1,2,3,4,5
}

for(const key in arr) {
    console.log(arr[key]); //依次打印数组每一项1,2,3,4,5,6
}

arr['like'] = 'writing' //给arr数组添加一个下标为like,值为writing
for (const key in arr) {
    console.log(key);  //依次打印数组每一项下标0,1,2,3,4,5,like
 }
for(const key in arr) {
    console.log(arr[key]); //依次打印数组每一项1,2,3,4,5,6，writing
}

// console.log(obj);

// arr['set'] = '7'


// for (const key in arr) {
//     console.log(key);
//  }
 

