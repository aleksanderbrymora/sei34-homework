function bubbleSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const x = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = x;
            }
        }
    }
    return arr;
}

module.exports = bubbleSort;