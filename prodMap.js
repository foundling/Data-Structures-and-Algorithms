/*
 * given an array of positive numbers > 0, return an array of the same length
 * where the value at each index is the product of all of the numbers from 
 * the source array except for the corresponding value at that index.  
 *
 * e.g. [2,4,3,7] -> [84,42,56,24]
 */

function prodMap(A) {

    // runs n times
    const productOfA = A.reduce((prod, val) => prod * val, 1);

    // runs n times
    return A.map(v => productOfA/v);

    // O(n)

}

const result = prodMap([2,4,3,7]); 
console.log(result);
