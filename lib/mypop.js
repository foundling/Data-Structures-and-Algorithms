function mypop() {
    // takes in nothing 
    // returns the value removed
    var rv;
    if (this.length === 0) {
        return;
    }
    
    rv = this[this.length - 1];
    this.length = this.length - 1;
    return rv;
}


Array.prototype.mypop = mypop;

module.exports = mypop;


