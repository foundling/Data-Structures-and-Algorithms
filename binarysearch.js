function binarysearch(target, list) {

    let li = 0;
    let ri = list.length - 1;
    let checkIndex;

    while(li <= ri) {

        checkIndex = Math.floor(li + (ri - li)/2);

        if (target === list[checkIndex])
            return checkIndex;
        else if (target > list[checkIndex])
            li = checkIndex + 1;
        else 
            ri = checkIndex - 1;
    }

    return null;
}

module.exports = binarysearch;
