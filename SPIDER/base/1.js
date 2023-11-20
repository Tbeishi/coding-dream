let player = process.argv[process.argv.length - 1];

//电脑生成一个
let arr = ['rock','scissars','paper']
let index = Math.floor(Math.random()*3)
let computer = arr[index]

//比较
if (computer === player){
    console.log('平局');
}else if(
    computer === 'paper' && player === 'scissars' ||
    computer === 'rock' && player === 'paper' ||
    computer === 'scissars' && player === 'rock'
){
    console.log('你赢了');
}
else{
    console.log('你输了');
}