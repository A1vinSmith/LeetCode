/*
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

Note:

    All inputs will be in lowercase.
    The order of your output does not matter.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = (strs) => Object.values(strs.reduce((obj, str) => {
    var key = [...str].sort();
    obj[key] = obj[key] ? obj[key].concat([str]) : [str];
    return obj;
}, {}));