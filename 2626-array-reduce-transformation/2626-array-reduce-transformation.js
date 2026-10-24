/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;
    for(let i = 0;i < nums.length;i++){
        if(nums.length === 0){
            return val
        }
        else if(init === 0){
            val = fn(val, nums[i])
        }else{
            val = fn(val, nums[i])
        }
    }

    
    return val;
};