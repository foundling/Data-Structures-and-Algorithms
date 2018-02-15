/* 

   from https://leetcode.com/problems/two-sum/description/

   given an array of integers, return indices of the two numbers such that they add up to a specific target.
   You may assume that each input would have exactly one solution, and you may not use the same element twice.

*/

function twoSum(array, target) {

    let hash = array.reduce(function(obj, val, index) {
        obj[val] = index; 
        return obj;
    }, {});
    
    for (let i = 0; i < array.length; ++i) {
        let val = array[i];
        let complement = target - val;
        if (hash[complement] !== i && hash[complement] != null)
            return [i, hash[complement]];
    }

}

//let result = twoSum([2,7,11,15],9);
let result = twoSum([3,2,4],6);
//let result = twoSum([3,3],6);
console.log(result);
