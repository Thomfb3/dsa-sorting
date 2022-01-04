function selectionSort(arr) {
    let n = arr.length;

    for(let i=0; i < n; i++) {
        let minIdx = i;

        for(let j = i+1; j < n; j++)  {
            if(arr[j] < arr[minIdx]) {
                minIdx=j;
            };
        };
        if (minIdx != i) {
            let temp = arr[i];
            arr[i] = arr[minIdx];
            arr[minIdx] = temp;
        };
    };
    return arr;
}

module.exports = selectionSort;