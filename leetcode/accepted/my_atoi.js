function myAtoi(str) {

    str = str.trim();
    let sum = 0;
    let isNegative = str[0] === '-'; 
    let start = (str[0] === '-' || str[0] === '+') ? 1 : 0;
    let max_int = Math.pow(2,32)/2 - 1;
    let min_int = -1 * Math.pow(2,32)/2;


    for (let i = start; i < str.length; ++i) {
        if (str.charCodeAt(i) > 57 || str.charCodeAt(i) < 48)
            break;
        sum = 10 * sum + str.charCodeAt(i) - 48; 
    }

    sum = isNegative ? -1 * sum : sum;
    if (sum < min_int) return min_int;
    if (sum > max_int) return max_int;
    return sum;

}

let s = '2147483648';
let result = myAtoi(s);

console.log(result);
