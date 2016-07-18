var array = [1,2,3];

function mypush() {



    var i;

    if (! arguments.length) {
        return this.length;
    }

    for (i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    
    return this.length;
}

Array.prototype.mypush = mypush;
module.exports = mypush;
