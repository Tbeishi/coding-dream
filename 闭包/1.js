var arr = []

for (var i = 0; i < 10; i++){
    (function(){
        arr[i]= function(j){
            console.log(j);
        }
    })(i)
}


for (var j = 0; j < arr.length; j++) {
    arr[j]()
}

