/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let res = 0;
    let res1 = 0;
    for(let i = 0;i < gain.length;i++){
        res += gain[i]
        if(res > res1){
        res1 = res;
        }
    }
    if(res1 > 0){
        return res1
    }else{
        return 0
    }
};