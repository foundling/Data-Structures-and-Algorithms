function minCoins(coins, total) {

    let T = [...Array(coins.length).keys()]
                .map(_ => []);

    for (let i = 0; i < coins.length; i++) {
        for (let j = 0; j <= total; j++) {

            if (j == 0) {
                T[i][j] = 0;
                continue;
            }
            // because we are assured 1 is always denomination
            if (i == 0) {
                T[i][j] = j; 
            }

            else {
                if (j >= coins[i]) {
                    T[i][j] = Math.min(
                        T[i - 1][j], 
                        T[i][j - coins[i]] + 1
                    );
                } 
                else {
                    T[i][j] = T[i-1][j];
                }
            }
        }
    } 

    console.log(T[coins.length - 1][total]);


    return T;

}

let denoms = [1,2];
let total = 2;
/*
let denoms = [1,5,6,8];
let total = 11;
let denoms = [1];
let total = 5;
*/
console.log(`minimum coins required to make change for a total of ${total} cents with denominations { ${denoms.join(' ')} }`);
console.log(minCoins(denoms, total));
