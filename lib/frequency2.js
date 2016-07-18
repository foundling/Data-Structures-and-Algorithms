var array = ['abc','def','ghi','alpha','stuff','bearded', 'man'];

function unique2(array){ 
/*
    given an array of english words, calculate the most 
    common letter anywhere in the word. 
*/
   
    var i,
        j,
        k,
        s,
        freq_table = {},
        start = "a".charCodeAt(0),
        end = "z".charCodeAt(0) + 1,
        max = {
            letter: null,
            count: 0
        };

    // create counter dict
    for (start = start; start < end; start ++) {
        freq_table[String.fromCharCode(start)] = 0;
    }

    // reduce array to string of chars
    s = array.reduce(function(a,b) {
        return a+b;
    }, '');

    // count letters  
    Array.prototype.forEach.call(s,function(v,i,a) {
        freq_table[v.toLowerCase()] += 1;
    });

    // find reduce by comparing  and update max object
    for (k in freq_table) {
        if (freq_table[k] > max.count) {
            max.letter = k;
            max.count = freq_table[k];
        }
    }

    return max.letter;
}

//console.log(unique2(array));
