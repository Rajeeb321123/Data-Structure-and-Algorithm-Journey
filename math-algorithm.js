
// 1. FIBONACCI series
function fibonacci(n) {
    const fib = [0,1]
    if (n===1) { 
        return [0]
    }
    if(n===2){ 
        return fib
    }
    for (let i = 2; i < n ; i++ ) { // O(n)
        fib.push( fib[i-2] + fib[i-1] )
    }
    return fib

    //O(n)
}
// // test
// console.log(fibonacci(2)) //[0,1]
// console.log(fibonacci(3)) //[0,1,1]
// console.log(fibonacci(4)) //[0,1,1,2,]


// 2. Factorial of a Number
function factorial(n) {
    if (n===0) { 
        return 1
    }
    let fact = 1
    for (let i = n; i>1 ; i--) { // O(n)
        fact = fact * i
    }
    return fact
    
    // O(n)
}
// // test
// console.log(factorial(2)) //2
// console.log(factorial(3)) //6
// console.log(factorial(4)) //24


// 3. isPRIME NUMBER
function isPrime(n) {
    if (n < 2) { 
        return false
    }


    for ( let  i = 2; i <= Math.sqrt(n); i++) { //O(sqrt(n))
        if(n % i === 0){
            return false
        }
    }

    return true;

    // O(squrt(n))
}

// // test
// console.log(isPrime(2)) //true
// console.log(isPrime(11)) //true
// console.log(isPrime(24)) //false

// 4.  Power of two
function isPowerOfTwo (n) {
 
    if(n<1){
        return false
    }

    // 1. way
    // for (let i = 1; Math.pow(2,i) <= n; i++) { // it run log_2(n) times so O(log(n)) source chatgpt
    //     if (n === Math.pow(2,i)) {
    //         return true
    //     }
    // }
    // return false
    // O(log(n))

    // 2. way
    // while (n<1) { // O(log(n))
    //     if (n%2 !== 0) {
    //         return false
    //     }
    //     n = n/2
    // }

    // return false
    // O(log(n))

    // 3. way : O(1) : bitwise
    // in binary power of 2 number except 1 always end with 0 eg:  4 -> 10 8 -> 100
    return ((n & (n-1)) === 0)
    // O(1)

}
// // test
// console.log(isPowerOfTwo(0)) //true
// console.log(isPowerOfTwo(8)) //true
// console.log(isPowerOfTwo(5)) //false

// 5. RECURSION Fibonacci: nth number 
function nthRecursiveFibonacciNumber(n) {
    // base case
    if(n<2) {
        // temp.push(n)
        return n
    }
    return nthRecursiveFibonacciNumber(n-1)+ nthRecursiveFibonacciNumber(n-2) // O(2^n)
}
// // test
// console.log(nthRecursiveFibonacciNumber(3))
// console.log(nthRecursiveFibonacciNumber(7))

// 6. Recursive factorial of number
function recursiveFactorial (n) {
    // base case
    if(n===0) {
        return 1
    }

    return n * recursiveFactorial(n-1) // O(n)

    // 0(n)

}

// // test
// console.log(recursiveFactorial(4))
// console.log(recursiveFactorial(8))
// console.log(recursiveFactorial(1))





