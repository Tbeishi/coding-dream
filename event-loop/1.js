console.log('script start')
async function async1() {
await async2()
console.log('async1 end') //微任务1
}
async function async2() {
console.log('async2 end')
}
async1()
setTimeout(async function() { //宏任务
    console.log('setTimeout1')
    await async2()
    setTimeout(function() {
        console.log('setTimeout11');
        setTimeout(function() {
            console.log('setTimeout111');
        },100)
    },900)
}, 2000)
setTimeout(function() { //宏任务
console.log('setTimeout2')
setTimeout(function() {
    console.log('setTimeout22');
},1000)
}, 2000)
setTimeout(function() { //宏任务
    console.log('setTimeout3')
}, 1000)
new Promise(resolve => {
console.log('Promise')
resolve()
})
.then(function() { //
console.log('promise1')
})
.then(function() {
console.log('promise2')
})
console.log('script end')

//script start
//async2 end
//Promise
//script end
//async1 end
//promise1
//promise2
//setTimeout3
//setTimeout2
//setTimeout1
//setTimeout22
// setTimeout11
// setTimeout111