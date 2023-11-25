async function f1 () {
    console.log('f1 start')
    await f2() 
    console.log('f1 end') //微任务2
}
async function f2 () {
    console.log('f2')
}

console.log('script start')

setTimeout(() => {
    console.log('setTimeout1')
}, 1000) 

Promise.resolve().then(() => { //微任务1
    console.log('promise1')
    setTimeout(() => {
    console.log('setTimeout')
}, 500)
})

f1()

let promise2 = new Promise((resolve) => {
    resolve('promise2.then')
    console.log('promise2')
})

promise2.then((res) => { //微任务3
    console.log(res)
    Promise.resolve().then(() => {
        console.log('promise3')
    })
})
console.log('script end')

//script start
//f1 start
//f2
//promise2
//script end
//promise1
//f1 end
//promise2.then
//promise3
//setTimeout
//setTimeout1