class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        newList = []
        for i in range(len(nums)):
            if target - nums[i] in nums and nums.index(target - nums[i]) != i:
                newList.append(i)
                newList.append(nums.index(target - nums[i]))
                return newList
