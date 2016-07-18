var array = [1,2,3];

function myshift() {
    var i,
        rv = this[0];

    if (this.length === 0) return;

    for (i = 0; i < this.length; i++) {
        this[i] = this[i+1]; 
    }
    
    this.length -= 1;
    return rv;
}

Array.prototype.myshift = myshift;

module.exports = myshift;
