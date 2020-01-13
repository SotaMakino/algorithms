// O(n^2)
const slowMaxV = (arr: number[]): number => {
    let max = -22220
    for (let j = 1; j < arr.length -1; j++){
        for (let i = 0; i < j - 1; i++){
            if (max < arr[j] - arr[i]) {
                max = arr[j] - arr[i]
            }
        }
    }
    console.log(max)
    return max;
}
slowMaxV([1,3,2,9, 0, 0, 0])

// O(n)
const maxV = (arr: number[]): number => {
    let minv = arr[0];
    let maxv = -200000
    for (let j = 1; j < arr.length - 1; j++) {
        if (maxv < arr[j] - minv) {
            maxv = arr[j] - minv
        }
        if (arr[j] < minv) {
            minv = arr[j]
        }
    }
    console.log(maxv)
    return maxv;
}
maxV([3,1,4,2,8,9, 1,2])

//O(n^2)
const insertionSort = (arr: number[]) => {
    for (let i = 0; i < arr.length; i++){
        let el = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > el) {
            arr[j + 1] = arr[j]
            arr[j] = el;
            j--;
        }
    }
    return arr
}
insertionSort([2,1,4,7,5,3,6])


const bubbleSort = (arr: number[]): number[] => {
    for (let i = 1; i < arr.length - 1; i++) {
        let el = arr[i]
        if ( arr[i] < arr[i-1]) {
            arr[i] = arr[i-1]
            arr[i -1] = el
        }
    }
    return arr
}
console.log(bubbleSort([2,1,5,3,4,6]))

// O(n^2)
// this is denger because swapping distant elements.
const selectionSort = (arr: number[]): number[] => {
    for (let i = 0; i < arr.length; i++){
        let minIndex = i;
        let el = arr[i];

        for (let j = i; j < arr.length; j++){
            if (arr[minIndex] > arr[j]) {
                minIndex = j
                console.log(minIndex)
            }
        }
        arr[i] = arr[minIndex];
        arr[minIndex] = el;
    }
    return arr;
}
console.log(selectionSort([3, 2, 4, 1]))

// note: 数値が同じデータの順序がソート後に変化しないことを意味する「安定性」が重要
