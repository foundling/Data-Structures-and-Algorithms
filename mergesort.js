function merge(a, start, mid, end) {

    let left = a.slice(start, mid + 1);
    let right = a.slice(mid + 1, end + 1);

    let l = 0; 
    let r = 0;
    let i = start;

    while (l < left.length && r < right.length)
        a[i++] = left[l] < right[r] ? left[l++] : right[r++];  

    while (l < left.length)
        a[i++] = left[l++];

    while (r < right.length)
        a[i++] = right[r++];

}

function mergeSort(a, start, end) {

    // base case, single element
    if (start >= end)
        return;

    // recursive case, keep dividing
    let mid = Math.floor(start + (end - start)/2);

    mergeSort(a, start, mid);
    mergeSort(a, mid + 1, end);

    // when those calls complete, merge results
    merge(a, start, mid, end);

    return a;

}
