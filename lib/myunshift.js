var array = [1,2,3];
var array = [1,2,3,3];
var array = [1,2,2,3];
var array = [1,1,2,3];


var array = [1,2,3];

function myunshift() {
    var last;

    if (! arguments.length) return this.length;

    for (last = this.length - 1; last >= 0; last--) {
        this[last+1] = this[last]; 
    }
    
    return this.length;
}


Array.prototype.myunshift = myunshift;

console.log(array);
console.log(array.myunshift(0));
console.log(array);
console.log(array.myunshift(-1));
console.log(array);
module.exports = myunshift;
