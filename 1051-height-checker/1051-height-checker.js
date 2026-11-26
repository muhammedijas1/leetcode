/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let arr1 = [...heights]
    let arr2 = arr1.sort((a,b)=> a - b)
    let count = 0;
    for(let i = 0 ;i < heights.length;i++){
        if(heights[i] !== arr2[i]){
            count++     
        }
        
    }
    return count;
    

};