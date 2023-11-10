function instanceOF(L,R){
    while(L !== null){
        if(L.__proto__ === R.prototype){
            return true
        }
        else L = L.__proto__
    }
    return false
}

console.log(instanceOF([],Array));
console.log(instanceOF([],Object));