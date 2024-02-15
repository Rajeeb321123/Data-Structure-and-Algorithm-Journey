// Bubble SORT : worst sort algorithm

function bubbleSort(arr) {
    let swapped;
    // do while just to check the everyingthing is sorted or not at the end
    do { // 0(n)
        swapped = false;

        // sorting
        for (let i = 0; i < arr.length - 1; i++) { //0(n)
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true
            }
        }


    } while (swapped === true)
    return arr;

    // 0(n^2)
}

// // test
// console.log(bubbleSort(arr = [1, 3, 2, 4]));
// console.log(bubbleSort(arr = [1, 13, 2, 4]));
// console.log(bubbleSort(arr = [1, 3, 22, 4, 50, 34]));
// console.log(bubbleSort(arr = [1, 2, 3, 4]));


// INSERTION SORT
function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) { //0(n)
        let numberToInsert = arr[i];

        // 1. with for loop
        // for (j = i - 1; j >= 0; j--) {
        //     if (numberToInsert > arr[j]) {
        //         break;
        //     }
        //     arr[j + 1] = arr[j]

        // }
        // arr[j + 1] = numberToInsert

        // 2. while loop
        let j = i - 1
        while (j>= 0 && arr[j] > numberToInsert) { // 0(n)
            arr[j+1] = arr[j]
            j = j-1
        }
        arr[j+1] = numberToInsert;


    }
    return arr

    // 0(n^2)
}




// QUICK SORT : quite popular if all elements arenot sorted
function quickSort(array) {
    if(array.length < 2) {
        return array;
    };


    let leftArray=[]; // smaller number than pivot
    let rightArray=[]; // consist larger number than pivot

    let pivot = array[array.length-1];

    for (let i = 0; i < array.length - 1; i++ ) {
        if(array[i] < pivot){
            leftArray.push(array[i])
            
        }
        else{
            rightArray.push(array[i])
        }
    }

    return [...quickSort(leftArray),  pivot, ...quickSort(rightArray)]

    // worst case - 0(n^2) // for already sorted input array
    // avg case - 0(nlogn) 
    
}
// // test
// console.log(quickSort(arr = [1, 3, 2, 4,4]));
// console.log(quickSort(arr = [1, 13, 2, 4]));
// console.log(quickSort(arr = [1, 3, 22, 4, 50, 34]));
// console.log(quickSort(arr = [1, 2, 3, 4]));


// MERGE SORT
function mergeSort(array) {

    if (array.length < 2 ){
        return array;
    }

    const leftArray = []
    const rightArray = []
    const midIndex = Math.floor(array.length/2)
    for (let i = 0; i < array.length ; i++ ) { // O(n) : this is neglected because dominant part is O(nlog(n))
        // slice can be used instead of for loop but two slice will also result to O(n)
        if(i < midIndex ){
            leftArray.push(array[i]);
        }
        else{
            rightArray.push(array[i])
        }
    }

    // recursive = O(log(n))
    // making merge function and passing the left and righ arraya if we reach end up with one element in each left and right array
    return merge(mergeSort(leftArray), mergeSort(rightArray)) // merge has while loop so, O(n)

    // O(nlog(n))
}
function merge(leftArray, rightArray) {
    const sortedArray = [];
    while (leftArray.length && rightArray.length) { // O(n)
        if (leftArray[0] <= rightArray[0]){
            sortedArray.push(leftArray.shift())

        }
        else{
            sortedArray.push(rightArray.shift()) // shift change original array by poping first element and return the poped element

        }
    }

    return [...sortedArray, ...leftArray, ...rightArray]
}
// test
console.log(mergeSort(arr = [1, 3, 2, 4,4]));
console.log(mergeSort(arr = [1, 13, 2, 4]));
console.log(mergeSort(arr = [1, 3, 22, 4, 50, 34]));
console.log(mergeSort(arr = [1, 2, 3, 4]));




