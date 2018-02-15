function fibsNoMemo(n) {

    if (n < 2) return n;

    return fibs(n - 1) + fibs(n - 2);

}

function fibsMemo(n) {

    let cache = {};

    function memoized(n) {

        if (n < 2) return n;
        if (cache[n]) return cache[n]; 

        cache[n] = memoized(n - 1) + memoized(n - 2);
        console.log(cache[n]);

        return cache[n];

    };

    return memoized(n);

}

//console.log( [ ...Array(99).keys() ].map((n,index) => `${index}: ${fibsMemo(n)}`) );
fibsMemo(100);
