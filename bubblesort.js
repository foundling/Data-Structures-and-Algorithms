function bubblesort(list) {
    let swaps;
    let tmp;
    while (true) {
        swaps = 0;
        for (let i = 0; i < list.length - 1; ++i) {

            if (list[i] > list[i+1]) {
                tmp = list[i];
                list[i] = list[i+1];
                list[i+1] = tmp;
                ++swaps;
            } 

        }
        if (swaps === 0)
            break
    } 
    return list;
};
module.exports = bubblesort; 
