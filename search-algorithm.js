// LINEAR SEARCH
function linearSearch(arr, n) {
    for (let i = 0; i < arr.length; i++) { // O(n)
        if (arr[i] === n) {
            return (i + 1)
        }
    }

    return -1

    // O(n)
}

// test
// console.log(linearSearch(arr=[1,4,53,3,5], n=3))
// console.log(linearSearch(arr=[1,4,53,3,5], n=50))
// console.log(linearSearch(arr=[1,4,53,3,5], n=1))



// BINARY Search : sorted array
function binarySearch(sortedArray, target) {

    let leftIndex = 0;
    let rightIndex = sortedArray.length - 1;

    while (leftIndex <= rightIndex) { //0(log(n))
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (target === sortedArray[middleIndex]) {
            return middleIndex + 1
        }

        if (target < sortedArray[middleIndex]) {
            rightIndex = middleIndex - 1
        }
        else {
            leftIndex = middleIndex + 1
        }
    }

    return -1

    // 0(log(n))
}

// // test
// console.log(binarySearch(sortedArray = [1, 2, 3, 10,55, 60], target = 55 )) //5
// console.log(binarySearch(sortedArray = [1, 2, 9, 10,55, 60], target = 9 )) //3
// console.log(binarySearch(sortedArray = [1, 2, 9, 10,55, 60], target = 60 )) //6



// RECURSIVE BINARY SEARCH
function recursiveBinarySearch(sortedArray, target) {
    return recursiveBinarySearch2(sortedArray, target, leftIndex=0, rightIndex=sortedArray.length-1)

}

function recursiveBinarySearch2(sortedArray, target, leftIndex, rightIndex ) {
    // O(log(n))
    if(leftIndex > rightIndex){
        return -1
    }
    
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if(target === sortedArray[middleIndex]){
        return  middleIndex + 1
    }

    if (target < sortedArray[middleIndex]) {
        return recursiveBinarySearch2(sortedArray=sortedArray, target=target,leftIndex, rightIndex = middleIndex - 1)
    }
    else {
        return  recursiveBinarySearch2(sortedArray=sortedArray, target=target, leftIndex=middleIndex + 1, rightIndex)
    }

    // 0(log(n))
}

// // test
// console.log(recursiveBinarySearch(sortedArray = [1, 2, 3, 10, 55, 60], target = 55)) //5
// console.log(recursiveBinarySearch(sortedArray = [1, 2, 9, 10, 55, 60], target = 9)) //3
// console.log(recursiveBinarySearch(sortedArray = [1, 2, 9, 10, 55, 60], target = 60)) //6
// console.log(recursiveBinarySearch(sortedArray = [1, 2, 9, 10, 55, 60], target = 100)) //-1





