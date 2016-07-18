// takes a array and returns a copy of the array with all the dupliates removed

function checkArrays(A,B) {

    var rv = true,
    i = 0;

    if (A.length === B.length) {
        while ( i < A.length ) {
            if (A.length[i] !== B.length[i]) {
                rv = false; 
            } 
        }
    }
    else {
        rv = false;
    }

    return rv;
} 


function checkObjects(A,B) {

    var rv = true,
        i;

    if (A !== B) {
        return false;
    }

    // cache first level, sorted
    var a_keys = Object.keys(A).sort();
    var b_keys = Object.keys(B).sort();

    // if keys are not equal in length, exit
    if (a_keys.length !== b_keys.length) {
        return false;
    }

    for(i=0; i < a_keys.length; i++) {
        if (a_keys[i] !== b_keys[i]) {
            return false;
        }
        else if (a_keys[i].prototype) {
            return CheckObjects(a_keys[i].prototype,b_keys[i].prototype);
        }
    }

}

module.exports = dedup;
