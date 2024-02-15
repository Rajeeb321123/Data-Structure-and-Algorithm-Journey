// CARTESIAN PRODUCTS
function cartesianProduct(arrayA, arrayB) {
    let temp = []
    for (let i = 0; i < arrayA.length; i++) {
        for (let j = 0; j < arrayB.length; j++) {
            temp.push([arrayA[i], arrayB[j]])
        }
    }
    return temp

    // imp: O(m X n) : m = number of elements of arrayA, n = number of elements of arrayB
}
// // Test
// console.log(cartesianProduct([1,2],[3,4,5])) // O(6)
// console.log(cartesianProduct([1,2,3],[3,4,5]))  // O(9)


// CLIMBING STAIRCASE
function climbingStaircase(n) {
    const noOfWays = [1, 2];
    for (let i = 2; i <= n; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
    }
    return noOfWays[n - 1]
    // O(n)
}
// // Test
// console.log(climbingStaircase(10))  // O(9)
// console.log(climbingStaircase(1))  // O(9)
// console.log(climbingStaircase(2))  // O(9)
// console.log(climbingStaircase(9))  // O(9)


// Tower of Hanoi
function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if (n === 1) {
        console.log(`Move disk1 from ${fromRod}, to ${toRod}`)
        return
    }
    towerOfHanoi(n - 1, fromRod, usingRod, toRod)
    console.log(`Move disk${n} from ${fromRod} to ${toRod}`)
    towerOfHanoi(n - 1, usingRod, toRod, fromRod)

    // O(2^n)
}

// TEST
console.log(towerOfHanoi(3, 'A', 'C', 'B'))