function fib_dp_iter(n) {

    let a = [0,1];
    let i;

    if (n < i)
        return a[n];

    for (i = a.length; i < n; i++) {
        a[i] = a[i - 1] + a[i - 2];  
        console.log(i, a[i]);
    }

    return a[a.length - 1];
}

let answer = fib_dp_iter(100);
//console.log(answer);
