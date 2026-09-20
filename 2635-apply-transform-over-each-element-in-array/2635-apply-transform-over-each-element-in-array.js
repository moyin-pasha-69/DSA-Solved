/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let  ansArray = [];
    for(let i=0;i<arr.length;i++){
        ansArray.push(fn(arr[i],i))
    }
    return ansArray;
};