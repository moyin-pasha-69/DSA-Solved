/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let countAnagrams = {};
    for(let word of strs){
        const str = word.split("").sort().join("");
        if(!countAnagrams[str]) countAnagrams[str] = []
        countAnagrams[str].push(word)
    }
    return Object.values(countAnagrams)
};