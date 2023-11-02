function foo(){
    var myName = '旭旭'
    let test1 = 1
    let test2 = 2
    var inner = {
        getName: function(){
            console.log(test1);
            return myName
        },
        setName:function(newName){
            myName = newName
        }
    }
    return inner
}

var bar = foo()
bar.setName('鹏')
console.log(bar.getName());