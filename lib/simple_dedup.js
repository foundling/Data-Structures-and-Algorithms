function dedup(array) {

    var seen = {},
        array_copy = [];

    array.forEach(function(value,index){
        if (!seen[value]) {
            seen[value] = true;
            array_copy.push(value);
        }
    });

    return array_copy; 
} 

module.exports = dedup;

var result = dedup([1,2,3,4,4,4,1]);
var result = dedup([]);
console.log(result);
