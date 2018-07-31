function dp_prodsum(V) {

    /* base cases */
    if (V.length === 0)
        return 0;

    if (V.length === 1)
        return V[0];


    /* add zero to beginning so we can use 
     * same index for V and Opt */
    V.unshift(0);
    let Opt = [0, V[1]];

    for (let i = 2; i < V.length; i++) {

        /* add current value to previous optimal */
        let add = Opt[i-1] + V[i];

        /* take two optimal values previous and add product of current Value and previous value */
        let mult = Opt[i-2] + (V[i] * V[i-1]);

        /* take max of these two quantities */
        Opt[i] = Math.max(add,mult);

    }

    return Opt[Opt.length - 1];
}

let V = [1,4,3,2,3,4,2];

console.log('optimal sum: ', dp_prodsum(V));

