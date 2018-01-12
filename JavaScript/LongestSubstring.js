/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let longestArray = [], longestLength = 0;
    for(i=0; i<s.length; i++) {
        currentValue = s[i]
        const currentValueIndex = longestArray.indexOf(currentValue)
        longestArray.push(currentValue);
        if (currentValueIndex !== -1) {
            longestArray = longestArray.slice(currentValueIndex+1)
        } else if (longestArray.length > longestLength) {
            longestLength = longestArray.length
        }
    }
    return longestLength
};
