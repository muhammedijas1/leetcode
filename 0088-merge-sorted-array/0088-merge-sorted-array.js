/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    

    const rmv = nums1.splice(m,n,...nums2)

    const sorted = nums1.sort((a,b)=>a-b)
    return sorted;



};