/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let rpt = nums[0];
    let count = 1;

    for(let i = 1;i < nums.length;i++){
        if(count === 0){
            rpt = nums[i]
            count = 1
        }
        else if(nums[i] === rpt){
            count++
        }else{
            count--
        }
            
        
        
    }
    return rpt;
    
};