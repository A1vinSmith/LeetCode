/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    function compareFunction(a,b) {
        return a - b;
    }
    nums3 = nums1.concat(nums2)
    nums3.sort(compareFunction)
    var nums3Length = nums3.length
    var num4 = nums3Length % 2
    var num5 = nums3Length / 2
    var num6 = Math.floor(num5)
    if (num4 === 0) {
        return (nums3[num6] + nums3[num6 - 1]) / 2
    } else {
        return nums3[num6]
    }
};
