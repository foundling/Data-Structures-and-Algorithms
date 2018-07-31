const lFold = Array.prototype.reduce.call.bind(Array.prototype.reduce);

function huffman_enc(s) {

    let table = sortFreqTable(freqTable(s));
    let bitsRequired = Math.ceil(Math.log2(table.length));

    return bitsRequired;

}

function huffman_dec(s) {
}

let buildFreqTable = (table, c) => {
    table[c] = (c in table) ? table[c] + 1 : 1; 
    return table;
}

let freqTable = s => lFold(s, buildFreqTable, {});
let sortFreqTable = (table) => {

    let ascending = (a,b) => {
        return a[1] - b[1];
    }

    let freqList = Object
        .keys(table)
        .reduce((arr, key) => {
            arr.push( [key, table[key]] ); 
            return arr;
        },[]);


    freqList.sort(ascending);

    return freqList;

}

console.log(huffman_enc('abracadabra'));
