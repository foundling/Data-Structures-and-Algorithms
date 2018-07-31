function dp_hotel(A) {

    let S = [0];

    // for each stop
    for (let j = 1; j < A.length; j++) {

        S[j] = Infinity;

        // compare penalty of driving to that stop 
        for (let i = 0; i < j; i++) {

            S[j] = Math.min(
                S[j], // current min
                S[i] + Math.pow(200 - (A[j] - A[i]), 2) // penalty at ith distance + penalty from ith distance to current distance
            );

        }

    }

    console.log(S);
    return S[S.length - 1];

}

let A = [0, 150, 200, 295, 375, 480, 620];

console.log('minimum penalty: ', dp_hotel(A));
