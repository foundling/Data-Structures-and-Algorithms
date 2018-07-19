let prices =   [ 0, 1, 5, 8, 9, 10, 17, 17, 20, 24, 30 ];
let cutCosts = [ 0, 1, 3, 4, 6, 8,  8,  9,  11, 13, 14 ];
let results = [ ...Array(10) ].map(_ => -1);

function cutRod(prices, n) {

    if (n == 0)
        return 0;

    let q = -1;

    for (let i = 1; i <= n; i++) {
        // i is successive number of cuts up to n
        // we have a base case of $0 yielded by 0 cuts
        // this examines the max of the current price + each possibility
        // very costly, duplicated effort. 2^n running time.
        q = Math.max(q, prices[i] + cutRod(prices, n - i));
    }

    return q;

}

// top-down memoization
function cutRodMem(prices, results, n) {

    if (n == 0)
        return 0;

    if (results[n] >= 0)
        return results[n];

    let q = -1;

    for (let i = 1; i <= n; i++) {

        let netRev = prices[i] - cutCosts[i];
        q = Math.max(q, netRev + cutRodMem(prices, results, n - i));

    }
    results[n] = q;

    return q;

}

function cutRodBU(prices, n) {

    // create an array from 0 to n to store results
    // and add base case
    let results = [...Array(n + 1).keys()];
    let cuts = [...Array(n + 1).keys()];
    results[0] = 0;
    
    // for each number of cuts
    for (let j = 1; j <= n; j++) {

        let q = -1;

        // for each previous number of cuts
        for (i = 1; i <= j; ++i) {
            if (q < (prices[i] + results[j - i])) {
                q = prices[i] + results[j - i];
                cuts[j] = i;
            }
        }

        results[j] = q;

    }

    return { revenue: results[n], cuts: cuts };
}

function maxPoints(difficulty, time, n) {

    // create an array from 0 to n to store results
    // and add base case
    let results = [ ...Array(n + 1).keys() ];
    results[0] = 0;
    
    // for each question
    for (let j = 1; j <= n; j++) {

        let q = -1;

        // for each previous question
        for (i = 1; i <= j; ++i) {
            if (q < (prices[i] + results[j - i])) {
                q = prices[i] + results[j - i];
                cuts[j] = i;
            }
        }

        results[j] = q;

    }

    return { revenue: results[n], cuts: cuts };
}



//let answer = cutRod(prices, 3);
let answerMem = cutRodMem(prices, [...Array(3).keys()].map(_ => -1), 0);
/*
let n = 10;
let answerBU = cutRodBU(prices, n);

console.log('revenue: ', answerBU.revenue);
console.log('cuts: ');

while (n > 0) {
    console.log(answerBU.cuts[n]);
    n = n - answerBU.cuts[n];
}
*/

//console.log(answer);
console.log(answerMem);
//console.log(answerBU);
