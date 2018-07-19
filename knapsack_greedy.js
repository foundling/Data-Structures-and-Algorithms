function findOptimal(items, W) {

    let w = 0;
    let X = [...Array(items.length).keys()].map(_ => 0);
    let optimalBenefit = 0;

    items.sort(decreasingBenefit);

    for (let i = 0; w < W; i++) {

        let [ weight, value ] = items[i];
        let fractionalWeight;

        // do we take all or just part of the item?
        // X[i] is the fractional amount we take for this item
        if (w + weight > W)
           X[i] = W - w; 
        else 
           X[i] = weight; 

        // same as the if/else to figure out whether we take all or part
        // just more succinct
        //
        // X[i] = Math.min(weight, W - w); 

        // add fractional amt for this item to total
        w += X[i];
        fractionalWeight = X[i]/weight;  
        optimalBenefit += (fractionalWeight * value);

    }

    return { 
        items, 
        benefit: optimalBenefit, 
        amounts: X 
    };

}

/* sort comparator */
function decreasingBenefit(a, b) {

    let benefitA = a[1]/a[0];
    let benefitB = b[1]/b[0];

    // sort in decreasing order
    return benefitB - benefitA;

}

function formatResults( { items, amounts, benefit } ) {
    let total = `optimal benefit: ${benefit}`;
    let breakdown = items
                        .map(([weight,value], i) => `${amounts[i]/weight} of item with weight ${weight} and value ${value}.`)
                        .join('\n');
    return [total, breakdown].join('\n');
}

let maxWeight = 30;
let items = [
    [5, 50],
    [20, 140],
    [10, 60],
];


/*
let items = [
    [4,12],
    [8,32],
    [2,40],
    [6,30],
    [1,50]
];

let maxWeight = 10;
*/

results = formatResults(findOptimal(items, maxWeight));
console.log(results);
