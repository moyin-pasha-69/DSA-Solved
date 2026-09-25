/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    for(let i=0;i<s.length/2;i++){
       let j = s.length-1-i;
        [s[i],s[j]] = [s[j],s[i]]
    }
    return s;
};