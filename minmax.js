function minMax(a, start, end) {

    // single element
    if (end - start === 0)
        return [ a[start], a[start] ];

    // two elements
    if (end - start === 1)
        return (a[start] < a[end]) ? [ a[start], a[end] ] : [ a[end], a[start] ];  

    // recursive case, keep dividing
    let mid = Math.floor(start + ((end - start)/2));

    let [ minl, maxl ] = minMax(a, start, mid);
    let [ minr, maxr ] = minMax(a, mid + 1, end);

    let min = minl < minr ? minl : minr;
    let max = maxl > maxr ? maxl : maxr;

    return [min, max];

}

//test cases 

let a = [6,1,0,9,8,2];
let b = [-2];
let c = [2,0];
let d = [0,10,100,1000,-10,24,45.8];
let r = minMax(a, 0, a.length - 1);

let run = a => console.log(minMax(a, 0, a.length - 1));

[a,b,c,d].forEach(run);
