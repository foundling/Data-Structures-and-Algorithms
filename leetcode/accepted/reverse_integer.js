function reverse(x) {

    let s = x.toString();
    let stopIndex = x < 0 ? 1 : 0;
    let reversed = '';
    let result;
    let max = Math.pow(2,32)/2 - 1;
    let min = -1 * Math.pow(2,32)/2;

    for (let end = s.length - 1, j = stopIndex; end >= stopIndex; --end) {
        reversed += s[end];
    }

    result = x < 0 ? '-' + reversed : reversed; 
    return (result > max || result < min ) ? 0 : parseInt(result);
}

//let n = -123;
let n = 123
let result = reverse(n);
console.log(result);
