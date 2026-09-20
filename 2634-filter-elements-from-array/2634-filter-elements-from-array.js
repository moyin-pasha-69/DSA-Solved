/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    const ansArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) ansArray.push(arr[i]);
    }
    return ansArray;
};