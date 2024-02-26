/**
 * @param {string[]} strs
 * @return {string}
 */
var check = function(item,num,flag){
    return item.slice(0,num+1) === flag ? true : false
}

var longestCommonPrefix = function(strs) {
    const length = Math.min(...strs.map(item=>item.length))
    let res = ""
    for(let j = 0; j < length; j++){
        const flag = strs[0].slice(0,j+1)
        if(strs.every(item=> check(item,j,flag))) res = flag
        else{
            break
        }
    }
    return res
};