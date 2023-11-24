function fibonacci(n){
    const f = []
    f[1] = 1 ;
    f[2] = 1 ;
    for (var i = 3; i <= n; i++) {
        f[i] = f[i - 1] + f[ i - 2 ]
    }
    return f[n]
}


console.log(fibonacci(10));