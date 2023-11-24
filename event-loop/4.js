console.log('start');
setTimeout(()=>{
    console.log('setTimeout');
},0)
new Promise((resolve, reject) => {
    console.log('Promise');
    resolve()
}).then(() => {
    console.log('then1');
}).then(() => {
    console.log('then2');
})
//start Promise then1 then2 setTimeout