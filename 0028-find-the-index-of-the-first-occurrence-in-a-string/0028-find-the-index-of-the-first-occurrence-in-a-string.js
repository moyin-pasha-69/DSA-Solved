/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {

    for(let i=0;i<=haystack.length-needle.length;i++){
        let j =0;
    for(j;j<needle.length;j++){
        if(haystack[i+j]!=needle[j]){
           break;
        }
    }
    if(j==needle.length) return i;
   }
   return -1;

};