// function identity(context){
//     return context.name.toUpperCase()
// }

// function speek(){
//     var greeting = "Hello,I'm" + identity(context);
// }

// var me = {
//     name:'Tom',
// }

// var you = {
//     name:'Jerry'
// }
// speek(me)

function identity(){
    return this.name.toUpperCase()
}

function speek(){
    var greeting = "Hello,I'm" + identity.call(this);
    console.log(greeting);
}

var me = {
    name:'Tom',
}

var you = {
    name:'Jerry'
}
speek.call(me)